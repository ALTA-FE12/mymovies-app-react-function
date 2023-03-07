import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { LoadingAnimation } from "components/Loading";
import Carousel from "components/Carousel";
import Layout from "components/Layout";
import { MovieType, VideosType } from "Utils/movie";
import { useTitle } from "Utils/Hooks/useTitle";
import Footer from "components/Footer";

const DetailMovie = () => {
  const { id_movie } = useParams();

  const [data, setData] = useState<MovieType>({});
  const [videos, setVideos] = useState<VideosType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useTitle(`${data.title}- Filmku`);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=videos`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setVideos(data.videos?.results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <Carousel
        datas={videos.slice(0, 5)}
        content={(data) => (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${data.key}`}
            title={data.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          {/*Fragment*/}
          <div
            className="card lg:card-side dark:bg-gray-600 bg-white shadow-xl"
            style={{ padding: "2rem" }}
          >
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                style={{ borderRadius: "25px" }}
              />
            </figure>
            <div className="card-body dark:text-white">
              <p>Title: {data.title}</p>

              <p>Runtime: {data.runtime}</p>
              <p>
                Genre:{" "}
                {data.genres
                  ?.map((genre) => {
                    return genre.name;
                  })
                  .join(", ")}
              </p>
              <p>Release Date : {data.release_date}</p>
              <p>Tagline : {data.tagline}</p>
              <p className="text-justify">Overview: {data.overview}</p>
              <p>Vote : {data.vote_average}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </Layout>
  );
};

export default DetailMovie;
