import { FaTrash } from "react-icons/fa";
import {
  useDeleteWishlistMutation,
  useGetWishlistByUserEmailQuery,
  useGetWishlistQuery,
} from "../../../redux/features/book/bookApi";
import { useAppSelector } from "../../../redux/hook";
import Swal from "sweetalert2";
import { IWishlist } from "../../../types/globalTypes";

const Wiselist = () => {
  const { user } = useAppSelector((state) => state.user);
  const email = user;

  const {
    data: wishList,
    isLoading,
    refetch,
  } = useGetWishlistByUserEmailQuery(email, {
    refetchOnMountOrArgChange: true,
  });
  const wishListData = wishList?.data;
  const [deleteWishlist] = useDeleteWishlistMutation();

  const handelDelete = async (wishListId: string) => {
    console.log(wishListId, "++id");

    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmed.isConfirmed) {
      try {
        const result = await deleteWishlist(wishListId);

        if (!result) {
          Swal.fire({
            position: "center",
            timerProgressBar: true,
            title: "Something went wrong!",
            iconColor: "#ED1C24",
            toast: true,
            icon: "error",
            showClass: {
              popup: "animate__animated animate__fadeInRight",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutRight",
            },
            showConfirmButton: false,
            timer: 3500,
          });
        } else {
          Swal.fire({
            position: "center",
            timerProgressBar: true,
            title: "Successfully Delete Book !",
            iconColor: "#ED1C24",
            toast: true,
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeInRight",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutRight",
            },
            showConfirmButton: false,
            timer: 3500,
          });
          refetch();
        }
      } catch (error) {
        console.error(
          "An unexpected error occurred while deleting the book:",
          error
        );
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <div className="card w-10/12 mx-auto bg-base-100 shadow-xl">
        <div>
          {wishListData &&
            wishListData.map((wish: IWishlist) => {
              return (
                <div
                  className="card-body border  p-4 m-4 rounde"
                  key={wish?._id}
                >
                  <h2 className="card-title">{wish?.bookTitle}</h2>
                  <p>{wish?.bookAuthor}</p>
                  <div className="card-actions">
                    <div className="flex gap-3 my-2">
                      <div>
                        <button
                          className="border  px-4 py-4 flex justify-center items-center gap-4 hover:border-red-500 color-b bg-red-500 p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-white"
                          onClick={() => handelDelete(wish?._id)}
                        >
                          <FaTrash />
                          Delete Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Wiselist;
