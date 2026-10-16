import { groups, pages } from '@/lib/portfolio';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (slug) {
    const page = pages.find(page => page.slug === slug.toLowerCase());
    return Response.json(page ?? { error: 'Page not found' }, {
      status: page ? 200 : 404,
    });
  }

  const query = (searchParams.get('q') ?? '').trim().toLowerCase().slice(0, 200);
  const category = searchParams.get('category') || 'all';

  if (category !== 'all' && !groups.some(group => group.slug === category)) {
    return Response.json({ error: 'Unknown category' }, { status: 400 });
  }

  const entries = pages.filter(page => {
    const isEntry = page.slug.includes('/') || groups.some(group =>
      group.slug === page.slug &&
      !pages.some(child => child.slug.startsWith(`${page.slug}/`))
    );
    const matchesCategory = category === 'all' || page.slug === category ||
      page.slug.startsWith(`${category}/`);
    const searchableText = [page.title, ...page.blocks.map(block => block.text)]
      .join(' ').toLowerCase();

    return isEntry && matchesCategory && (!query || searchableText.includes(query));
  });

  return Response.json({ pages: entries, total: entries.length }, {
    headers: { 'Cache-Control': 'public, max-age=60' },
  });
}
