import logo from "../assets/bookhublogo.png";
import { signOut } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { Link } from "react-router-dom";
import { FaCartPlus, FaRegBookmark } from "react-icons/fa";
import userIcon from "../assets/icons/user.png";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handelLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  const manuItems = (
    <>
      <li>
        <Link to="/">Item 1</Link>
      </li>
      <li>
        <Link to="/">Item 2</Link>
      </li>
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

                <Link to="/bookmark">
                  <FaRegBookmark className="text-2xl" />
                </Link>
              </div>

              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userIcon} alt="User Icon" />
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
                    </li>
                  </>
                )}

                {user && (
                  <>
                    <li>
                      <button>
                        <Link to="/profile">Profile</Link>
                      </button>
                    </li>
                    <li>
                      <Link to="/dashbord">Dashboard</Link>
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
