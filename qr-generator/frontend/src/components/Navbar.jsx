export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">Code My QR</div>
        <ul className="nav-links">
          {['Home','Features','Demo','About'].map(a => (
            <li key={a}><a href={`#${a.toLowerCase()}`}>{a}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}