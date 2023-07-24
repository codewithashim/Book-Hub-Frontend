import { useForm } from "react-hook-form";
import { IBook } from "../../../types/globalTypes";
import { useState } from "react";
import { useAppSelector } from "../../../redux/hook";
import {
  useCreateBookMutation,
  useGetBooksQuery,
} from "../../../redux/features/book/bookApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddBook = () => {
  const { register, handleSubmit } = useForm<IBook>();
  const { user } = useAppSelector((state: { user: any }) => state.user);
  const navigate = useNavigate();
  const [createBook, { isLoading }] = useCreateBookMutation();
  const getBooksQuery = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
  };

  const onSubmit = async (eventData: IBook) => {
    if (!imageFile) {
      return;
    }
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "Codewithashim");
    formData.append("public_id", `BookHub/Books/${imageFile.name}`);

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/codewithashim/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    const imageUrl = data?.secure_url;
    console.log("Upload successful:", imageUrl);

    const { title, description, author, genre, publicationYear } = eventData;

    const bookData = {
      title,
      description,
      author,
      email: user,
      genre,
      publicationYear,
      image: imageUrl,
    };
    const result = await createBook({ data: bookData });
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
        title: "Successfully Book Added !",
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
      navigate("/all-books");
      await getBooksQuery.refetch();
    }
  };

  return (
    <section>
      <div className="l md:w-[80%] w-[90%] col-span-5 px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px] mt-9 mx-auto bg-[#F7F7F7] shadow-md rounded-lg">
        <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
          Add New Book
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
                {...register("publicationYear")}
              />
            </div>

            <div>
              <div className="w-full h-full">
                <div className="rounded-lg shadow-xl bg-gray-50">
                  <div className="p-4">
                    <label className="inline-block mb-2 text-gray-500">
                      Upload Product Image
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file{" "}
                            <span className="text-red-500">
                              {" "}
                              (Max Uploading Size 300kb)*
                            </span>
                          </p>
                        </div>
                        <input
                          type="file"
                          className="px-4 pb-4"
                          name="imeage"
                          onChange={handleFileInputChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="common_btn mb-5" type="submit">
                {isLoading ? (
                  <>
                    <span className="flex justify-center items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                      ></svg>
                      Loading...
                    </span>
                  </>
                ) : (
                  <>
                    <span className="flex justify-center items-center">
                      <svg className="h-5 w-5 " viewBox="0 0 24 24"></svg>
                      Add Book
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
