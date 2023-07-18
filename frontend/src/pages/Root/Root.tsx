import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => (
  <div className="flex place-content-center">
    <div className="grow max-w-6xl grid gap-4 grid-cols-1 pt-6">
      <header className="flex items-center">
        <h1 className="text-3xl grow">Welcome to the GitHub Repo Listing app!</h1>
        <Link to="/about" className="text-1xl text-blue-600 visited:text-purple-600 ">About</Link>
      </header>
      <h4 className="text-md py-2">
        This application is for listing GitHub repositories of users or
        organizations!
      </h4>
      <Outlet />
    </div>
  </div>
);

export default Root;
