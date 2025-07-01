import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <Link to="/" className="text-2xl font-bold">🎬 MovieApp</Link>
        <div className="flex gap-4 text-sm sm:text-base">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/favoritos" className="hover:underline">Favoritos ⭐</Link>
        </div>
      </div>
    </nav>
  );
}
