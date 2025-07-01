import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    carregarFavoritos();
  }, []);

  const carregarFavoritos = () => {
    const salvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(salvos);
  };

  const removerDosFavoritos = (id) => {
    const atualizados = favoritos.filter(f => f.imdbID !== id);
    localStorage.setItem("favoritos", JSON.stringify(atualizados));
    setFavoritos(atualizados);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Meus Favoritos</h1>
      {favoritos.length === 0 ? (
        <p className="text-gray-500">Nenhum filme favoritado ainda.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoritos.map(filme => (
            <MovieCard
              key={filme.imdbID}
              filme={filme}
              onRemover={() => removerDosFavoritos(filme.imdbID)}
              ehFavorito={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
