import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

const Character = () => {
  const [character, setCharacter] = useState<TCharacter>()
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
      const character: TCharacter = await response.json();

      setCharacter(character);
    };

    fetchCharacter().catch((error) => console.error(error));
  }, []);

  if (!character) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <button onClick={() => navigate('/')}>Back to Character</button>
    </div>
  );
};

export default Character;
