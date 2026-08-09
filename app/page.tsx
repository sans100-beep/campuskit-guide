const affiliateLink = 'https://amzn.to/4zewrjd';

const categories = [
  ['🎓','Student Essentials','Useful gear for college life, study and everyday productivity.'],
  ['⚡','Electrical Engineering','Tools and equipment selected for electrical engineering students.'],
  ['🔧','Engineering Accessories','Practical accessories for labs, projects and technical work.'],
  ['💄','Beauty & Personal Care','Everyday personal-care products worth considering.'],
];

export default function Home() {
  return <main><div className="container">
    <header className="hero"><div className="eyebrow">CampusKit Guide</div><h1>Better picks for campus life.</h1><p>Discover practical products for students, engineering projects, everyday study and more. We research useful products so you can spend less time searching.</p></header>
    <section className="categories">{categories.map(([icon,title,description]) => <div className="card" key={title}><div>{icon}</div><h2>{title}</h2><p>{description}</p></div>)}</section>
    <section><div className="eyebrow">Featured pick</div><div className="product"><div><h2>Klein Tools MM450 Auto-Ranging Multimeter</h2><p>A practical multimeter option for electrical engineering students, labs and projects.</p></div><a className="button" href={affiliateLink} target="_blank" rel="nofollow sponsored noopener">View on Amazon →</a></div></section>
    <footer style={{padding:'50px 0 20px',color:'#777',fontSize:13}}>As an Amazon Associate, CampusKit Guide may earn from qualifying purchases.</footer>
  </div></main>;
}
