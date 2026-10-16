import { groups, getPage } from '@/lib/portfolio';
import { Card } from '@/components/portfolio';
import { ResearchSection } from '@/components/research-section';

export default function Home() {
  const home = getPage('home')!;
  const featured = [
    'entrepreneurial-journey/sekela-sustainable-fashion',
    'hackathons/african-blockchain-championship',
    'projects/ietp',
  ];

  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow hero-kicker"><span className="dot" /> ETHIOPIAN ROOTS. AFRICAN POSSIBILITIES.</div>
          <h1>Software engineer.<br /><em>AI in focus.</em></h1>
          <div className="education-spotlight" aria-label="My education">
            <div className="graduation-highlight">
              <span className="journey-label">GRADUATED · JUNE 2026</span>
              <p><strong>Software Engineering graduate</strong><br />from <b>Addis Ababa Science and Technology University</b>.</p>
            </div>
            <div className="current-study-highlight">
              <img className="cmu-logo" src="/branding/cmu-logo.svg" alt="Carnegie Mellon University" width="407" height="37" />
              <span className="journey-label">CURRENTLY AT CMU-AFRICA · KIGALI, RWANDA</span>
              <p><strong>Master of Science in<br />Information Technology</strong></p>
              <p className="ai-focus">Concentrating on <b>Artificial Intelligence (AI)</b></p>
            </div>
          </div>
          <p className="hero-intro education-purpose">
            I'm Sifen Mekonnen Gebremariam. From Addis Ababa to Kigali, I carry one question into everything I build: how can this make someone's life better?
          </p>
          <div className="actions">
            <a className="button" href="/explore">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/about">The person behind it <span aria-hidden="true">→</span></a>
          </div>
          <p className="hero-note">Based in Kigali, Rwanda. Thinking beyond borders.</p>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img src={home.images[0]?.src} alt={home.images[0]?.alt || 'Sifen Mekonnen'} fetchPriority="high" />
            <div className="portrait-caption">
              <span>A NEW CHAPTER, THE SAME PURPOSE</span>
              <strong>Addis Ababa → Kigali</strong>
            </div>
          </div>
          <span className="orbit-label">LISTEN. LEARN. BUILD.</span>
        </div>
      </section>

      <div className="principle-strip">
        <div className="shell">
          <span>Technology that serves people</span>
          <span>Ideas shaped by home</span>
          <span>A future we build together</span>
        </div>
      </div>

      <ResearchSection />

      <section className="shell section">
        <div className="section-top">
          <div><div className="eyebrow">IDEAS IN PRACTICE</div><h2>Real questions.<br />Work with purpose.</h2></div>
          <a className="text-link" href="/explore">See all my work ↗</a>
        </div>
        <p className="explore-intro">From land records to sustainable fashion, my projects begin with people and the challenges they know best.</p>
        <div className="card-grid">{featured.map(slug => <Card key={slug} page={getPage(slug)!} />)}</div>
      </section>

      <section className="about-band">
        <div className="shell about-grid">
          <div>
            <div className="eyebrow">UNITY IN DIVERSITY</div>
            <h2>Different roots.<br />A shared possibility.</h2>
          </div>
          <div>
            <p>
              At CMU-Africa, I'm learning alongside people from more than two dozen African countries.
              We bring different languages, experiences, and ways of seeing the world.
              Working together is teaching me that our diversity can lead us to ideas none of us would find alone.
            </p>
            <p>Our stories are different. Our future is shared.</p>
            <a className="text-link" href="/about">Read my story →</a>
          </div>
        </div>
      </section>

      <section className="shell section">
        <div className="section-top">
          <div><div className="eyebrow">HOW I APPROACH THE WORK</div><h2>People first.<br />Possibility always.</h2></div>
        </div>
        <div className="values-grid">
          <div className="value-card"><span className="journey-label">01 / LISTEN</span><h3>Start with real lives.</h3><p>A useful solution begins with understanding the people who will use it, their needs, and their everyday realities.</p></div>
          <div className="value-card"><span className="journey-label">02 / LEARN</span><h3>Stay open to another view.</h3><p>Someone else's experience can reveal what I have missed. Good ideas get stronger when we make room for one another.</p></div>
          <div className="value-card"><span className="journey-label">03 / BUILD</span><h3>Make the idea useful.</h3><p>From software to AI, I want to build thoughtful tools, test them honestly, and keep improving what matters.</p></div>
        </div>
      </section>

      <section className="shell campus-moment">
        <figure className="campus-image">
          <img loading="lazy" src={home.images[2]?.src} alt={home.images[2]?.alt || 'Sifen at Carnegie Mellon University Africa'} />
          <figcaption className="campus-caption">Kigali, Rwanda · The next chapter</figcaption>
        </figure>
        <div className="campus-copy">
          <div className="eyebrow">FROM AASTU TO CMU-AFRICA</div>
          <h2>A bigger classroom.<br /><em>A deeper purpose.</em></h2>
          <p>In June 2026, I graduated in Software Engineering from Addis Ababa Science and Technology University. Today, I'm pursuing a Master of Science in Information Technology at Carnegie Mellon University Africa, focusing my learning on artificial intelligence.</p>
          <p>Here in Kigali, world-class study meets questions close to home. I'm learning from accomplished professors and fellow students who want to help shape Africa's technological future.</p>
          <a className="text-link" href="/about">More about my journey →</a>
        </div>
      </section>

      <section className="shell section">
        <div className="section-top"><div><div className="eyebrow">EXPLORE THE JOURNEY</div><h2>Many paths.<br />One sense of purpose.</h2></div></div>
        <div className="category-grid">
          {groups.map((group, index) => (
            <a href={'/' + group.slug} key={group.slug} className="category">
              <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{group.title}</h3><p>{group.description}</p></div>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
