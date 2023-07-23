import React from "react";
import { IBook } from "../../../types/globalTypes";
import RecentBookCard from "../../../components/RecentBookCard/RectntBookCard";
import { useGetBooksQuery } from "../../../redux/features/book/bookApi";

const RecentBook: React.FC = () => {
  const { data, isFetching } = useGetBooksQuery(undefined);
  const allBooks = data?.data;

  if (isFetching)
    return (
      <div className=" flex justify-center items-center h-screen ">
        Loading...
      </div>
    );

  return (
    <section>
      <div className="sectionTitle">
        <h2>Recent Books</h2>
      </div>

      <div className="container flex justify-center items-center">
        <div className="grid gap-4 md:grid-cols-3 justify-center items-center self-auto">
          {allBooks &&
            allBooks?.slice(0, 10)?.map((book: IBook) => {
              return <RecentBookCard key={book?._id} book={book} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default RecentBook;
