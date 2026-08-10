import Link from 'next/link';

const guides = [
  { slug: 'electrical-engineering-toolkit', category: 'Electrical Engineering', title: 'The Electrical Engineering Student Toolkit', text: 'What to buy first for labs, projects and everyday electrical work.' },
  { slug: 'how-to-choose-a-multimeter', category: 'Electrical Engineering', title: 'How to Choose Your First Multimeter', text: 'Understand TRMS, auto-ranging, CAT ratings, current limits and what actually matters.' },
  { slug: 'student-essentials', category: 'Student Life', title: 'The Student Essentials Buying Guide', text: 'Build a useful campus kit without spending money on things you will rarely use.' },
];

export default function GuidesPage() {
  return <main><nav className="nav container"><Link className="brand" href="/"><span className="brand-mark">C</span> CampusKit<span className="brand-light">Guide</span></Link><div className="nav-links"><Link href="/">Home</Link><Link href="/guides">Guides</Link></div></nav><div className="container"><header className="guide-hero"><div className="eyebrow">CampusKit Guides</div><h1>Know what to buy<br /><span>before you buy.</span></h1><p>Practical buying guides written for students. Learn the basics, understand what specifications mean, then choose the product that fits your needs.</p></header><section className="guide-list">{guides.map((g,i)=><Link className="guide-card" href={`/guides/${g.slug}`} key={g.slug}><span className="guide-index">0{i+1}</span><div><span className="guide-category">{g.category}</span><h2>{g.title}</h2><p className="guide-intro">{g.text}</p><span className="arrow">Read guide →</span></div></Link>)}</section></div></main>;
}
