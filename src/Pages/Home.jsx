import React,{useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import nlc from "../assets/nationalLawChamber.jpg";

const Home = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const textToType = 'Your Trusted Legal Partner';

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < textToType.length) {
                setText((prevText) => prevText + textToType.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);
        if(showCursor) {
            setTimeout(() => {
                setShowCursor(false);
            }, 2200);
        }
        return () => clearInterval(interval);
    }, [index, textToType, showCursor]);
    
    return (
        <>
            <Helmet>
                <title>Home | National Law Chamber</title>
                <meta name="description" content="Welcome to National Law Chamber - Your Trusted Legal Partner in Nepal. We provide expert legal services tailored to your needs." />
            </Helmet>
            <div id="root" className="bg-gray-900 text-gray-200 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:gap-20 items-center justify-center mb-6 md:ml-4">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-bold text-gray-200 mb-4 text-center md:text-left">Welcome to National Law Chamber</h1>
                            <p id="typing-text" className="text-lg text-gray-300 mb-8 text-center md:text-left">
                                {text}{showCursor ? "|" : ""}
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={nlc} alt="National Law Chamber" className="hidden md:block w-full h-auto rounded-lg" />
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Expert Legal and Notary Services</h2>
                            <p className="text-gray-300 mb-4">National Law Chamber offers a wide range of expert legal and notary services to individuals and businesses in Nepal. Our experienced attorneys provide comprehensive legal solutions tailored to your specific needs, including notary services for various legal documents.</p>
                            <Link to="/aboutus" className="text-blue-500 hover:underline">Learn More</Link>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Areas of Expertise</h2>
                            <p className="text-gray-300 mb-4">Explore our specialized legal services covering corporate law, civil litigation, family law, criminal defense, and more. Our team of experienced attorneys is equipped to handle a diverse range of legal matters with expertise and professionalism.</p>
                            <Link to="/practiceareas" className="text-blue-500 hover:underline">View Services</Link>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Client-Focused Approach</h2>
                            <p className="text-gray-300 mb-4">At National Law Chamber, we prioritize client satisfaction. Our team is dedicated to providing personalized attention and excellent service to every client in Nepal, ensuring their legal needs are met effectively and efficiently.</p>
                            <Link to="/contactus" className="text-blue-500 hover:underline">Contact Us</Link>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Online/Offline Consultation</h2>
                            <p className="text-gray-300 mb-4">Need legal advice? Schedule online or offline consultation with one of our experienced attorneys. Whether you're facing a legal issue or seeking guidance on a specific matter, we're here to help. Book your consultation now and take the first step towards resolving your legal concerns.</p>
                            <Link to="/consultation" className="text-blue-500 hover:underline">Schedule Consultation</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;
