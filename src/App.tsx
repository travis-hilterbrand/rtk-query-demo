import "./App.css";

import { useGetPokemonByNameQuery } from "./services/pokemon";

const PokemonView = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PokemonView />
    </div>
  );
}

export default App;
