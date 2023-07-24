import { useForm } from "react-hook-form";
import { IBook } from "../../../types/globalTypes";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../../redux/features/book/bookApi";
import Swal from "sweetalert2";

const EditeBook = () => {
  const { register, handleSubmit } = useForm<IBook>();
  const { id } = useParams();
  const { data: books } = useGetSingleBookQuery(id);
  const bookData = books?.data;
  const navigate = useNavigate();
  const getBooksQuery = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [updateBook] = useUpdateBookMutation();

  const onSubmit = async (eventData: IBook) => {
    const { title, description, author, genre, publicationYear } = eventData;
    console.log(title, description, author, genre, publicationYear);
    try {
      const data = {
        title: title,
        description: description,
        author: author,
        genre: genre,
        publicationYear: publicationYear,
      };

      const updatedBook = await updateBook({ id: id, data: data });

      if (!updatedBook) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonColor: "#0077b6",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Book Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
          confirmButtonColor: "#0077b6",
        });
        navigate("/all-books");
        getBooksQuery.refetch();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#0077b6",
      });
    }
  };

  return (
    <section>
      <div className="l md:w-[80%] w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mt-9 mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
        <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
          Update Book Details
        </h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 grid-cols-1 justify-between pt-4">
            <div>
              <label
                className="text-gray-700
              text-sm font-bold mb-2 ml-1"
                htmlFor="title"
              >
                Book Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Book title"
                className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={bookData?.title}
                {...register("title")}
              />
            </div>
            <div>
              <label
                className="text-gray-700
              text-sm font-bold mb-2 ml-1"
                htmlFor="title"
              >
                Book Description
              </label>
              <textarea
                id="description"
                placeholder="Book description"
                className="text-[15px] font-[500] shadow rounded-lg h-32 w-full pl-2.5 pt-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={bookData?.description}
                {...register("description")}
              ></textarea>
            </div>
            <div>
              <label
                className="text-gray-700
              text-sm font-bold mb-2 ml-1"
                htmlFor="author"
              >
                Book Author
              </label>
              <input
                type="text"
                id="author"
                placeholder="Book Author"
                className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={bookData?.author}
                {...register("author")}
              />
            </div>
            <div>
              <label
                className="text-gray-700
              text-sm font-bold mb-2 ml-1"
                htmlFor="genre"
              >
                Book Genre
              </label>
              <input
                type="text"
                id="genre"
                placeholder="Book Genre"
                className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={bookData?.genre}
                {...register("genre")}
              />
            </div>
            <div>
              <label
                className="text-gray-700
              text-sm font-bold mb-2 ml-1"
                htmlFor="publicationYear"
              >
                Book Publication Year
              </label>
              <input
                type="text"
                id="publicationYear"
                placeholder="Book Publication Year"
                className="text-[15px] font-[500] shadow rounded-lg  h-[50px]  w-full p-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={bookData?.publicationYear}
                {...register("publicationYear")}
              />
            </div>
            <div>
              <button className="common_btn mb-5" type="submit">
                Update Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditeBook;
