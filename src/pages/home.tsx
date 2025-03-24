import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type TCharacter = {
  created: string,
  gender: string,
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
  type: string,
}

const Home = () => {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const result = await response.json();
      setCharacters(result.results);
    }

    fetchCharacters().catch((error) => console.log(error));
  }, []);

  return (
    <div className='container'>
      <h1>Rick and Morty Characters</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters?.map((character: TCharacter) => (
          <li
            onClick={() => navigate(`/character/${character.id}`)}
            style={{ border: 'red 1px solid', margin: '16px' }}
            key={character.id}
          >
            <img height={300} width={270} src={character.image} alt={character.name} />
            <div>
              <h2>{character.name}</h2>
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
