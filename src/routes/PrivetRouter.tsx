/* eslint-disable react-hooks/rules-of-hooks */

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

const PrivetRouter = ({ children }: IProps) => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user && !isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivetRouter;
