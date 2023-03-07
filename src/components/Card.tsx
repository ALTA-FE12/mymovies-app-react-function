import { useNavigate } from "react-router-dom";
import { FC } from "react";

import "../styles/Card.css";
import Button from "./Button";

interface CardProps {
  title?: string;
  image?: string;
  id?: number;
  labelButton?: string;
  onClickFav?: () => void;
}

const Card: FC<CardProps> = ({ id, image, title, labelButton, onClickFav }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="card lg:card-compact dark:bg-gray-600 bg-white shadow-xl">
      <figure onClick={() => onClickDetail()}>
        <img
          className="mx-auto img-card"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
      </figure>
      <div className="card-body items-center justify-between">
        <h2
          className="card-title text-center dark:text-white"
          onClick={() => onClickDetail()}
        >
          {title}
        </h2>

        <div className="card-actions w-full justify-center ">
          <Button label={labelButton} onClick={onClickFav} className="fav" />
        </div>
      </div>
    </div>
  );
};

export default Card;
