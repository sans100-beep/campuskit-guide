const affiliateLink = 'https://amzn.to/4zewrjd';

const categories = [
  { icon: '🎓', title: 'Student Essentials', text: 'Study gear, dorm basics and everyday tools that make campus life easier.' },
  { icon: '⚡', title: 'Electrical Engineering', text: 'Practical instruments and accessories for labs, projects and learning.' },
  { icon: '🔧', title: 'Engineering Accessories', text: 'Useful gear for building, measuring, organizing and working on projects.' },
  { icon: '💄', title: 'Beauty & Personal Care', text: 'Everyday personal-care picks selected for convenience and value.' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top"><span className="brand-mark">C</span> CampusKit<span className="brand-light">Guide</span></a>
        <div className="nav-links">
          <a href="#categories">Categories</a>
          <a href="#featured">Featured</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <div id="top" className="container">
        <header className="hero">
          <div className="eyebrow">Student-tested • Practical picks</div>
          <h1>Useful products.<br /><span>Less searching.</span></h1>
          <p className="hero-copy">CampusKit Guide helps students find practical products for college, engineering projects, study setups and everyday life — without endless scrolling.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#categories">Explore categories <span>↓</span></a>
            <a className="text-button" href="#featured">See our featured pick →</a>
          </div>
        </header>

        <section id="categories" className="section">
          <div className="section-heading"><div><div className="eyebrow">Browse by need</div><h2>Start with what you need.</h2></div><span className="section-note">More categories coming soon</span></div>
          <div className="categories">
            {categories.map((category, index) => (
              <a className="category-card" href="#featured" key={category.title}>
                <div className="category-top"><span className="category-icon">{category.icon}</span><span className="category-number">0{index + 1}</span></div>
                <h3>{category.title}</h3><p>{category.text}</p><span className="arrow">Explore →</span>
              </a>
            ))}
          </div>
        </section>

        <section id="featured" className="section">
          <div className="eyebrow">Featured pick</div>
          <div className="featured-product">
            <div className="product-visual"><div className="product-badge">ENGINEERING</div><div className="meter"><div className="meter-screen">AUTO<br /><strong>0.000</strong></div><div className="meter-dial"></div><div className="meter-label">KLEIN TOOLS</div></div></div>
            <div className="product-info">
              <span className="product-kicker">For electrical engineering students</span>
              <h2>Klein Tools MM450 Auto-Ranging Multimeter</h2>
              <p>A versatile multimeter option for labs, troubleshooting and student projects. A useful first instrument for an electrical engineering toolkit.</p>
              <div className="product-meta"><span>✓ Auto-ranging</span><span>✓ Digital display</span><span>✓ Project-friendly</span></div>
              <a className="primary-button" href={affiliateLink} target="_blank" rel="nofollow sponsored noopener">View on Amazon <span>↗</span></a>
            </div>
          </div>
        </section>

        <section id="about" className="why-section">
          <div><div className="eyebrow">Why CampusKit?</div><h2>We focus on useful, not just popular.</h2></div>
          <div className="why-grid"><div><strong>01</strong><h3>Practical</h3><p>Products are presented around real student and project needs.</p></div><div><strong>02</strong><h3>Simple</h3><p>Clear recommendations without overwhelming you with endless choices.</p></div><div><strong>03</strong><h3>Growing</h3><p>New categories and product guides will be added as CampusKit grows.</p></div></div>
        </section>

        <footer className="footer"><div><a className="brand" href="#top"><span className="brand-mark">C</span> CampusKit<span className="brand-light">Guide</span></a><p>Practical picks for campus life.</p></div><div className="footer-links"><a href="#categories">Categories</a><a href="#featured">Featured</a><a href="#about">About</a></div><p className="disclosure">As an Amazon Associate, CampusKit Guide earns from qualifying purchases.</p></footer>
      </div>
    </main>
  );
}
