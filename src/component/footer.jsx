import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState(() => {
        const savedEmail = localStorage.getItem("email");
        return savedEmail ? savedEmail : "";
    });
    const handleSubscribe = () => {
        localStorage.setItem("email", email);
        setEmail("");
    }
    return (
        <footer className="bg-gray-800 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <div className="mb-6 text-center md:text-left md:mb-0 md:mr-8">
                        <h1 className="text-white text-2xl mb-2">National Law Chamber</h1>
                        <p className="text-gray-400">Your Trusted Legal Partner</p>
                    </div>
                    <div className="mb-6 md:mb-0 md:mr-8">
                        <h2 className="text-white mb-2">Stay Connected with National Law Chamber</h2>
                        <div className="flex flex-col md:flex-row">
                            <input
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Your email"
                                className="w-full md:w-auto bg-gray-700 rounded md:rounded-l-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 md:mb-0 md:mr-2"
                                autoComplete="email" // Add this line
                            />

                            <button className="bg-blue-500 text-white rounded  md:rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={handleSubscribe}>
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-white mb-2 inline-block">Contact Information</h2>
                        <span className="text-blue-500 text-xs inline-block ml-1"><Link to={"/contactus"}><FaExternalLinkAlt /></Link></span>
                        <p className="text-gray-400">
                            Address: Anamnagar, Kathmandu
                            <br />
                            Phone: +977-9841299088
                            <br />
                            Email: mukundanlc@gmail.com
                        </p>
                    </div>


                </div>
            </div>
        </footer>
    );
}

export default Footer;
