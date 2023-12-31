import logo from "../assets/bookhublogo.png";
import { signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { Link } from "react-router-dom";
import { FaCartPlus, FaRegBookmark } from "react-icons/fa";
import userIcon from "../assets/icons/user.png";
import Swal from "sweetalert2";
import { BiUserCheck } from "react-icons/bi";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handelLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
      Swal.fire({
        timerProgressBar: true,
        title: "Successfully Logout Done !",
        iconColor: "#ED1C24",
        toast: true,
        icon: "success",
      });
    });
  };

  const manuItems = (
    <>
      <li>
        <Link to="/all-books">All Books</Link>
      </li>
      <li>{user && <Link to="/add-book">Add Book</Link>}</li>
    </>
  );

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {manuItems}
            </ul>
          </div>
          <Link to="/" className="text-xl normal-case">
            <img src={logo} alt="Book Hub" className="logoImage" />
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{manuItems}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-4">
            <div className="dropdown dropdown-end">
              <div className="flex gap-4 mt-3">
                <Link to="/wishlist">
                  <FaCartPlus className="text-2xl" />
                </Link>

                <Link to="/reading-future">
                  <FaRegBookmark className="text-2xl" />
                </Link>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user ? (
                    <>
                      <div className="w-10 h-10 rounded-full bg-red-400 text-center userProfile">
                        <BiUserCheck className="text-2xl" />
                      </div>
                    </>
                  ) : (
                    <img src={userIcon} alt="User Icon" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-6 z-[99] p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                {!user && (
                  <>
                    <li>
                      <button>
                        <Link to="/login">Login</Link>
                      </button>
                      <button className="my-2 border-spacing-1">
                        <Link to="/signup">SignUp</Link>
                      </button>
                    </li>
                  </>
                )}

                {user && (
                  <>
                    <li>
                      <Link to="/curently-reading">Curently Reading</Link>
                    </li>
                    <li>
                      <Link to="/finished-reading">Finished Reading</Link>
                    </li>
                    <li>
                      <button onClick={handelLogout}>Logout</button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
