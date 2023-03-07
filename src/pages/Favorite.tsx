import { useSelector, useDispatch } from "react-redux";
import Layout from "components/Layout";
import Card from "components/Card";
import { MovieType } from "Utils/movie";
import { useTitle } from "Utils/Hooks/useTitle";
import "styles/Favorites.css";
import { RootState } from "Utils/Hooks/redux";

const Favorite = () => {
  const dispatch = useDispatch();
  useTitle("Filmku - Your Favorite Movie");
  const datas = useSelector((state: RootState) => state.data.favorites);

  function removeFavorite(data: MovieType) {
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert(`Delete ${data.title} from favorite list`);
  }

  return (
    <Layout>
      <div
        className="container-lg mx-auto w-full dark:bg-gray-600 grid grid-cols-4 gap-3 p-3"
        style={{ width: "100%", margin: "0", padding: "0" }}
      >
        {datas.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            image={data.poster_path}
            id={data.id}
            labelButton="REMOVE FROM FAVORITE"
            onClickFav={() => removeFavorite(data)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Favorite;
