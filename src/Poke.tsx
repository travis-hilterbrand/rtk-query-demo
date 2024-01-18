import {
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
} from "./services/pokemon";

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

const PokemonLazyView = () => {
  const [trigger, result] = useLazyGetPokemonByNameQuery();
  const { data, error, isLoading, isUninitialized } = result;
  const onTrigger = async () => {
    await trigger("bulbasaur")
      .unwrap()
      .catch((error) => {
        console.error("error!", error);
      });
  };
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
      {isUninitialized && (
        <div>
          <button onClick={onTrigger}>Trigger</button>
        </div>
      )}
    </div>
  );
};

export const Poke = () => {
  return (
    <div>
      <PokemonLazyView />
      <PokemonView />
      <PokemonView />
    </div>
  );
};
