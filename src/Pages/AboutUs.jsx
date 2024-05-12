import React from "react";
import { Helmet } from "react-helmet";
import MukundaImage from "../assets/mukunda.jpg";
import BimalaImage from "../assets/bimala.jpg";

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About Us | National Law Chamber</title>
                <meta name="description" content="Providing expert legal services in Nepal." />
            </Helmet>
            <div id="root" className="bg-gray-900 text-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-left md:ml-4">
                        <h1 className="text-4xl font-bold text-gray-200 mb-4">About Us</h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Welcome to National Law Chamber, your trusted partner in legal excellence. With a rich legacy spanning three decades, we have been at the forefront of delivering unparalleled legal services and expertise. Since our inception, we have remained steadfast in our commitment to providing exceptional representation and counsel to our clients, earning us a reputation for excellence and integrity in the legal community.
                            <br />
                            At National Law Chamber, we understand the complexities and challenges our clients face in navigating the legal landscape. That's why our team of experienced attorneys is dedicated to providing comprehensive and tailored solutions to meet the diverse needs of our clients. From corporate transactions to personal legal matters, we offer a wide range of practice areas to address every aspect of our clients' legal needs.
                            <br />
                            What sets us apart is our unwavering dedication to client satisfaction and our relentless pursuit of justice on behalf of our clients. We prioritize open communication, transparency, and personalized attention, ensuring that our clients are always informed and empowered throughout the legal process.
                            <br />
                            As we look to the future, we remain committed to upholding the values of excellence, integrity, and professionalism that have guided us for the past three decades. With a forward-thinking approach and a deep understanding of the ever-evolving legal landscape, we are poised to continue delivering exceptional legal services and achieving outstanding results for our clients.
                        </p>
                    </div>
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img src={MukundaImage} alt="Mukunda Prasad Paudel" className="rounded-full w-36 h-26 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">Advocate Mukunda Prasad Paudel</h3>
                            <p className="text-gray-300 mb-2">Education: LL.M, Tribhuvan University</p>
                            <p className="text-gray-300 mb-2">Phone: +977-9841299088</p>
                            <p className="text-gray-300 mb-4">Email: mukundanlc@gmail.com</p>
                            <p className="text-gray-300">
                                Advocate Mukunda Prasad Paudel, the esteemed managing partner of National Law Chamber (NLC), is a seasoned legal professional with a wealth of experience and expertise spanning decades. Renowned for his unwavering commitment to excellence and integrity, Advocate Paudel leads NLC with a visionary approach, ensuring the delivery of top-notch legal services to clients across diverse practice areas.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <img src={BimalaImage} alt="Bimala Kumari Sharma" className="rounded-full w-36 h-36 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">Advocate Bimala Kumari Sharma</h3>
                            <p className="text-gray-300 mb-2">Education: LL.B, B.Ed. Tribhuvan University</p>
                            <p className="text-gray-300 mb-2">Phone: +977-9841838689</p>
                            <p className="text-gray-300 mb-4">Email: bimalanlc@gmail.com</p>
                            <p className="text-gray-300">
                                Advocate Bimala Kumari Sharma is the partner of the National Law Chamber (NLC) team, bringing invaluable expertise and dedication to her role. With a wealth of experience in various legal domains, she plays a vital role in providing comprehensive legal support and guidance to clients. Bimala Kumari Sharma's commitment to excellence and her strong advocacy skills make her an indispensable asset to the NLC family.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
