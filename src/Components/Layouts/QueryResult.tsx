import React from "react";
import { MoonLoader } from "react-spinners";

type Props = {
  loading: boolean;
  data: unknown;
  error: any;
  children?: any;
};
export const QueryResult = ({ loading, data, error, children }: Props) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <MoonLoader color="#f6adad" size={100} />
      </div>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }

  return <h1>Something went wrong</h1>;
};
//
