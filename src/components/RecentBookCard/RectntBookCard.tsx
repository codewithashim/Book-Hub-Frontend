import { FaBookOpen, FaCartPlus } from "react-icons/fa";
import { IRecentBookCardProps } from "../../types/globalTypes";
import { Link } from "react-router-dom";

const RectntBookCard = ({ book }: IRecentBookCardProps) => {
  const { image, title, description, genre, publicationYear, author, id } =
    book;

  return (
    <div className="card w-10/12 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} className="w-[430px] h-[500px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title} ({publicationYear})
        </h2>
        <p>{description.slice(0, 150)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{author}</div>
          <div className="badge badge-outline">{genre}</div>
        </div>

        <div className="card-actions">
          <div className="flex gap-3 my-2">
            <Link
              to={`/books-details/${id}`}
              className="btn btn-outline-primary"
            >
              <FaBookOpen />
              Details
            </Link>
            <button className="btn btn-outline-primary">
              <FaCartPlus />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectntBookCard;
