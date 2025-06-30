import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState(null);

  const API_KEY = "548c461a"; // 

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setFilme(data);
          setErro(null);
        } else {
          setErro(data.Error);
        }
      })
      .catch(() => setErro("Erro ao carregar dados do filme."));
  }, [id]);

  if (erro) return <p className="text-red-500">{erro}</p>;
  if (!filme) return <p className="text-gray-500">Carregando...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Voltar para Home
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={filme.Poster !== "N/A" ? filme.Poster : "https://via.placeholder.com/300x450"}
          alt={filme.Title}
          className="w-full md:w-1/3 rounded shadow"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{filme.Title}</h1>
          <p><strong>Gênero:</strong> {filme.Genre}</p>
          <p><strong>Diretor:</strong> {filme.Director}</p>
          <p><strong>Atores:</strong> {filme.Actors}</p>
          <p><strong>Lançamento:</strong> {filme.Released}</p>
          <p><strong>Duração:</strong> {filme.Runtime}</p>
          <p><strong>Nota:</strong> {filme.imdbRating}</p>
          <p className="mt-4"><strong>Sinopse:</strong> {filme.Plot}</p>
        </div>
      </div>
    </div>
  );
}
