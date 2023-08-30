import { useRouteError } from "react-router-dom";

export default ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Page Not Found!!</h2>
      <h3>
        Status: {err.status} {err.statusText}
      </h3>
    </div>
  );
};
