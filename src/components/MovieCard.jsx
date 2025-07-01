import { Link, useLocation } from 'react-router-dom';

export default function MovieCard({ filme, ehFavorito = false, onRemover }) {
  const location = useLocation();

  const favoritar = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const jaExiste = favoritos.some(f => f.imdbID === filme.imdbID);
    if (!jaExiste) {
      favoritos.push(filme);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("Filme favoritado!");
    } else {
      alert("Esse filme já está nos favoritos.");
    }
  };

  return (
    <div className="bg-white rounded shadow p-2 flex flex-col items-center text-center">
      <img
        src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/300x450"}
        alt={filme.Title}
        className="w-full h-72 object-cover rounded mb-2"
      />
      <h2 className="font-bold text-lg">{filme.Title}</h2>
      <p className="text-sm text-gray-600">{filme.Year}</p>
      <div className="flex flex-col gap-1 mt-2 text-sm">
        <Link to={`/movie/${filme.imdbID}`} className="text-blue-600 hover:underline">
          Ver detalhes
        </Link>

        {!ehFavorito ? (
          <button onClick={favoritar} className="text-yellow-500 hover:underline">
            ⭐ Favoritar
          </button>
        ) : (
          <button onClick={onRemover} className="text-red-500 hover:underline">
            ❌ Remover
          </button>
        )}
      </div>
    </div>
  );
}
