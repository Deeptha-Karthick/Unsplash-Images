import { useSearchTextContext } from "../context/SearchWord";
import { useQuery } from "@tanstack/react-query";
import { getImagesQuery } from "../apis/Request";

const Gallary = () => {
  const { searchText, updateSearchText } = useSearchTextContext();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["images", searchText], //so new results are fetched and cached foreach individual searchword
    queryFn: ({ signal }) => getImagesQuery({ searchText, signal }),
  });
  console.log("data", data);

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};

export default Gallary;
