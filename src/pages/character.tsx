import {useState, useEffect, JSX} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {TCharacter} from "../types.ts";

const Character = (): JSX.Element => {
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <button onClick={() => navigate('/')}>Back to Character</button>
    </div>
  );
};

export default Character;
