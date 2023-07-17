import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hook";
import { auth } from "./lib/firebase";
import { setIsLoading, setUser } from "./redux/features/user/userSlice";
import { useEffect, useState } from "react";
import PreLoader from "./components/Preloader/PreLoader";

function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user?.email));
        dispatch(setIsLoading(false));
      } else {
        dispatch(setIsLoading(false));
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  return (
    <main>
      {loader && <PreLoader />}
      <MainLayout />
    </main>
  );
}

export default App;
