import React from "react";
import { Helmet } from "react-helmet"; 
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <Helmet>
                <title>About Us | National Law Chamber</title>
                <meta name="description" content="Providing expert legal services." />
            </Helmet>
            <div className="flex flex-col justify-center items-center h-screen p-3 text-center bg-gray-900 text-gray-200 ">
                <h1 className="text-4xl font-bold text-mb-4">404 Page Not Found</h1>
                <p className="text-lg text-gray-600">Sorry, the page you are looking for could not be found.</p>
                <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`">Go back to Home</Link>
            </div>
        </>
    );
}

export default PageNotFound;
