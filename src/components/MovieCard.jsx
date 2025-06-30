import { Link } from 'react-router-dom';

export default function MovieCard({ filme }) {
  return (
    <div className="bg-white rounded shadow p-2 flex flex-col items-center text-center">
      <img
        src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/300x450"}
        alt={filme.Title}
        className="w-full h-72 object-cover rounded mb-2"
      />
      <h2 className="font-bold text-lg">{filme.Title}</h2>
      <p className="text-sm text-gray-600">{filme.Year}</p>
      <Link
        to={`/movie/${filme.imdbID}`}
        className="mt-2 text-blue-600 hover:underline text-sm"
      >
        Ver detalhes
      </Link>
    </div>
  );
}
