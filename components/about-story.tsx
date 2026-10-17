import type { PortfolioPage } from '@/lib/portfolio';

export function AboutStory({ page }: { page: PortfolioPage }) {
  const graduationPhoto = page.images.find(image => image.alt.toLowerCase().includes('graduation') && !image.alt.toLowerCase().includes('certificate'));
  const graduationCertificate = page.images.find(image => image.alt.toLowerCase().includes('graduation certificate'));

  return (
    <>
      <div className="about-intro">
        <div className="about-lead">
          <div className="eyebrow">ETHIOPIA → RWANDA → A SHARED FUTURE</div>
          <h2>My roots travel<br />with me.</h2>
          <p>I'm Sifen. A software engineer, a curious student of AI, and someone who believes the best work starts with care for the people around us.</p>
          <a className="text-link" href="/explore">See what I'm building ↗</a>
          <a className="text-link about-research-link" href="/#research">Explore my research interests →</a>
        </div>
        {page.images[0] && (
          <figure className="campus-image">
            <img src={page.images[0].src} alt={page.images[0].alt} fetchPriority="high" />
            <figcaption className="campus-caption">Rooted in Africa. Open to the world.</figcaption>
          </figure>
        )}
      </div>

      <div className="about-milestones" aria-label="Education journey">
        <div className="milestone graduation-milestone">
          <span className="journey-label">JUNE 2026 / ADDIS ABABA</span>
          <h3>AASTU graduate</h3>
          <p>Software Engineering · Addis Ababa Science and Technology University</p>
          {graduationPhoto && (
            <figure className="graduation-photo">
              <a href={graduationPhoto.src} target="_blank" rel="noreferrer" aria-label="View Sifen's AASTU graduation portrait at full size">
                <img src={graduationPhoto.src} alt={graduationPhoto.alt} width="1280" height="1771" loading="lazy" />
              </a>
              <figcaption>AASTU · Class of June 2026</figcaption>
            </figure>
          )}
          {graduationCertificate && (
            <div className="graduation-document">
              <span className="journey-label">ACADEMIC DOCUMENT</span>
              <h4>Temporary graduation certificate</h4>
              <p>Issued by AASTU to certify completion of my Bachelor of Science degree in Software Engineering.</p>
              <a className="certificate-preview" href={graduationCertificate.src} target="_blank" rel="noreferrer" aria-label="View the AASTU temporary graduation certificate at full size">
                <img src={graduationCertificate.src} alt={graduationCertificate.alt} width="1113" height="960" loading="lazy" />
              </a>
              <div className="certificate-actions">
                <a className="text-link" href={graduationCertificate.src} target="_blank" rel="noreferrer">View certificate ↗</a>
                <a className="text-link" href={graduationCertificate.src} download="Sifen-Mekonnen-AASTU-Graduation-Certificate.jpg">Download certificate ↓</a>
              </div>
            </div>
          )}
        </div>
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
