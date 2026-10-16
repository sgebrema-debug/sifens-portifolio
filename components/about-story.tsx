import type { PortfolioPage } from '@/lib/portfolio';

export function AboutStory({ page }: { page: PortfolioPage }) {
  return (
    <>
      <div className="about-intro">
        <div className="about-lead">
          <div className="eyebrow">ETHIOPIA → RWANDA → A SHARED FUTURE</div>
          <h2>My roots travel<br />with me.</h2>
          <p>I'm Sifen. A software engineer, a curious student of AI, and someone who believes the best work starts with care for the people around us.</p>
          <a className="text-link" href="/explore">See what I'm building ↗</a>
        </div>
        {page.images[0] && (
          <figure className="campus-image">
            <img src={page.images[0].src} alt={page.images[0].alt} fetchPriority="high" />
            <figcaption className="campus-caption">Rooted in Africa. Open to the world.</figcaption>
          </figure>
        )}
      </div>

      <div className="about-milestones" aria-label="Education journey">
        <div className="milestone"><span className="journey-label">JUNE 2026 / ADDIS ABABA</span><h3>AASTU graduate</h3><p>Software Engineering</p></div>
        <div className="milestone"><span className="journey-label">NOW / KIGALI, RWANDA</span><h3>Carnegie Mellon University Africa</h3><p>MS Information Technology · AI focus</p></div>
      </div>

      <div className="article-body about-story">
        {page.blocks.map((block, index) => block.type.startsWith('h')
          ? <h2 key={index}>{block.text}</h2>
          : <p key={index}>{block.text}</p>)}
      </div>

      <blockquote className="about-quote">
        “Unity doesn't ask us to become the same.<br />It asks us to make room for one another.”
      </blockquote>
    </>
  );
}
