const professorProfile = 'https://www.africa.engineering.cmu.edu/about/contact/directory/bios/griffiths-sascha.html';

export function ResearchSection() {
  return (
    <section id="research" className="research-section" aria-labelledby="research-title">
      <div className="shell section">
        <div className="section-top">
          <div>
            <div className="eyebrow">RESEARCH & CURIOSITY</div>
            <h2 id="research-title">Research rooted<br /><em>in African realities.</em></h2>
          </div>
          <span className="research-status">Ongoing exploration · CMU-Africa</span>
        </div>

        <div className="research-layout">
          <div className="research-copy">
            <p className="research-lead">
              I'm especially interested in computer vision and machine learning when they help us answer practical questions in African communities. For me, research begins with curiosity—and a reason to care about the answer.
            </p>
            <ul className="research-interests" aria-label="Research interests">
              <li>Computer vision</li>
              <li>Machine learning</li>
              <li>Low-resource African languages</li>
              <li>Educational robotics</li>
            </ul>

            <div className="research-project">
              <span className="journey-label">CURRENT FOCUS / TAMASHEK, MALI</span>
              <h3>A language. A shared question.<br />A partnership across borders.</h3>
              <p>
                I'm currently working on low-resource African languages, with a particular focus on Tamashek in Mali. My research partner is <strong>Fadimata Diallo</strong>, a fellow CMU-Africa student from Mali whom I met here in Kigali. Together, we're working with Professor Sascha Griffiths to explore how language technology can better reflect the communities it serves.
              </p>
              <p>
                Our aim is to bring this work into educational robotics, exploring how robots could support learning in a language familiar to the learner. It is a direction we're working toward, with plenty still to learn, test, and understand.
              </p>
              <p className="research-purpose">The question I keep coming back to: how can we build technology that makes more people feel included?</p>
            </div>
            <a className="text-link" href="/contact">Let's talk research →</a>
          </div>

          <aside className="research-professor" aria-label="Faculty collaborator">
            <figure>
              <img src="/research/sascha-griffiths.webp" alt="Sascha Griffiths, Assistant Teaching Professor at CMU-Africa" width="358" height="444" loading="lazy" />
              <figcaption>Portrait: <a href={professorProfile} target="_blank" rel="noreferrer">CMU-Africa</a></figcaption>
            </figure>
            <div className="research-professor-copy">
              <span className="journey-label">WORKING WITH</span>
              <h3>Professor Sascha Griffiths</h3>
              <p className="research-professor-title">Assistant Teaching Professor, CMU-Africa</p>
              <p>His research focuses on human–robot interaction, cognitive systems, socially interactive agents, and human-centered AI.</p>
              <a className="text-link" href={professorProfile} target="_blank" rel="noreferrer">View official CMU profile ↗</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
