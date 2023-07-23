import { FaBookOpen, FaBookmark, FaCartPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../../redux/features/book/bookApi";
// import { useAppDispatch } from "../../../redux/hook";

const BookDetails = () => {
  const { id } = useParams();
  const { data: books, isLoading } = useGetSingleBookQuery(id);
  // const dispatch = useAppDispatch();
  const bookData = books?.data;

  console.log(books?.data);

  // const handleAddChart = (product: IProduct) => {
  //   dispatch(addToCart(product));
  //   toast({
  //     description: "Product Added",
  //   });
  // };

  if (isLoading)
    return (
      <p className="flex items-center justify-center h-screen py-40 text-2xl">
        Loading...
      </p>
    );

  return (
    <section className="my-8">
      <div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Book Details
        </h2>
      </div>
      <div className="lg:w-[80%] md:w-[80%] w-[95%] col-span-5 md:px-[60px] md:py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mx-auto bg-[#F7F7F7] shadow-md rounded-lg  py-10 px-2">
        <div>
          <div className="cardButton my-4">
            <div className="flex justify-between items-center">
              <img
                src={bookData?.image}
                alt={bookData?.title}
                className="w-full h-[25rem] object-cover rounded-md"
              />
            </div>

            <div className="productAddToCart m-2 md:flex gap-5 items-center">
              <div>
                <button className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white">
                  <FaEdit />
                  Edit Book
                </button>
              </div>

              <div>
                <button className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white">
                  <FaTrash />
                  Delete Book
                </button>
              </div>
            </div>

            <div className="productAddToCart m-2 md:flex gap-5 items-center py-2">
              <div>
                <button className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white">
                  <FaCartPlus />
                  Add to Wishlist
                </button>
              </div>

              <div>
                <button className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white">
                  <FaBookmark />
                  Read in Future.
                </button>
              </div>

              <div>
                <button className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white">
                  <FaBookOpen />
                  Currently Reading
                </button>
              </div>

              <div>
                <button className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white">
                  <FaBookOpen />
                  Finished Reading
                </button>
              </div>
            </div>
          </div>

          <div>{bookData?.description}</div>

          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Book Title :
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {bookData?.title}
                        </td>
                      </tr>

                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Author :
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {bookData?.author}
                        </td>
                      </tr>

                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Genre :
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {bookData?.genre}
                        </td>
                      </tr>

                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          Publication Year :
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {bookData?.publicationYear}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
