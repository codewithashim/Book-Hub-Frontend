import { useGetBooksQuery } from "../../../redux/features/book/bookApi";
import { IBook } from "../../../types/globalTypes";
import BookCard from "../../../components/BookCard/BookCard";

const AllBooks = () => {
  const { data, isFetching } = useGetBooksQuery(undefined);
  const allBooks = data?.data;

  if (isFetching)
    return (
      <div className=" flex justify-center items-center h-screen ">
        Loading...
      </div>
    );

  return (
    <div>
      <div className="container flex justify-center items-center">
        <div className="grid gap-4 md:grid-cols-3 justify-center items-center self-auto">
          {allBooks.map((book: IBook) => {
            return <BookCard key={book?._id} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
