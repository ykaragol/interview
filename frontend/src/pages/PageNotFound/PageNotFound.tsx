import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <>
    <h4 className="text-md pt-2 text-rose-600">
      The page you are looking is not found.
    </h4>
    <Link to="/" className="text-md text-blue-600 visited:text-purple-600 ">
      Go to Query Screen
    </Link>
  </>
);

export default PageNotFound;
