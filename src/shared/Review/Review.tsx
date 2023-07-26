import { useForm } from "react-hook-form";
import { IReview } from "../../types/globalTypes";
import {
  usePostReviewMutation,
} from "../../redux/features/book/bookApi";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Review = ({ bookData }: any) => {
  const { register, handleSubmit } = useForm<IReview>();
  const [postReview] = usePostReviewMutation();
  const { id } = useParams();

  const onSubmit = async (eventData: IReview) => {
    const { comment } = eventData;

    const result = await postReview({
      bookId: id,
      data: {
        comment: comment,
      },
    });
    console.log(result);

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
      });
    } else {
      Swal.fire({
        position: "center",
        timerProgressBar: true,
        title: "Successfully Post Review !",
        iconColor: "#ED1C24",
        toast: true,
        icon: "success",
        showClass: {
          popup: "animate__animated animate__fadeInRight",
        },
      });
    }
  };

  return (
    <section>
      <div className="flex mx-auto items-center justify-center shadow-lg mb-4 max-w-lg">
        <form
          className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
              Add a new Review
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                placeholder="Type Your Review Here!"
                defaultValue={""}
                {...register("comment")}
              />
            </div>
            <div className="w-full md:w-full flex items-start  px-3">
              <div className="-mr-1">
                <button className="common_btn mb-5" type="submit">
                  Post Review
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div>
        <div className="mt-10">
          {bookData?.reviews?.map((comment: IReview, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-3 mb-5 border p-4 rounded shadow-md"
            >
              <div className="flex gap-2  items-center">
                <img
                  src="https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg"
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
                <h2>Ashim .</h2>
              </div>
              <div>
                <p>{comment?.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
