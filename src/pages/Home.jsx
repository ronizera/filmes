import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [busca, setBusca] = useState("batman");
  const [erro, setErro] = useState(null);

  const API_KEY = "548c461a"; // <-- substitua aqui

  const buscarFilmes = async (termo) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${termo}&apikey=${API_KEY}`);
      const data = await res.json();

      if (data.Response === "True") {
        setFilmes(data.Search);
        setErro(null);
      } else {
        setErro(data.Error);
        setFilmes([]);
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    buscarFilmes(busca);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Catálogo de Filmes</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          buscarFilmes(busca);
        }}
        className="mb-6 flex gap-2"
      >
        <input
          type="text"
          placeholder="Buscar filme..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buscar
        </button>
      </form>

      {erro && <p className="text-red-500">{erro}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filmes.map((filme) => (
          <MovieCard key={filme.imdbID} filme={filme} />
        ))}
      </div>
    </div>
  );
}
