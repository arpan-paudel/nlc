import React, { useState } from "react";
import { Helmet } from "react-helmet";


const ContactUs = () => {
    const [disabled, setDisabled] = useState(false);
    function isOfficeTime() {
        const currentDate = new Date();
        const currentDay = currentDate.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
        const currentHour = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();

        // Check if it's Sunday to Friday and between 9:30 AM and 5:00 PM
        if (currentDay >= 0 && currentDay <= 5 && currentHour >= 9 && currentHour < 17 && (currentHour !== 9 || currentMinutes >= 30)) {
            return true;
        } else {
            return false;
        }
    }
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem("name");
        return savedName ? savedName : "";
    });
    const [email, setEmail] = useState(() => {
        const savedEmail = localStorage.getItem("email");
        return savedEmail ? savedEmail : "";
    });
    const [phone, setPhone] = useState(() => {
        const savedPhone = localStorage.getItem("phone");
        return savedPhone ? savedPhone : "";
    });
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            alert('Name is required');
            return;
        }
        if (email === '') {
            alert('Email is required');
            return;
        }
        if (message === '') {
            alert('Message is required');
            return;
        }
        const isValidEmail = email => /^[a-zA-Z0-9._%+-]+@(gmail\.com|.+\.edu)$/.test(email);

        if (!isValidEmail(email)) {
            alert("Please enter a valid email (gmail.com).");
            return;
        }

        if (phone) {
            const isValidPhone = phone => /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
            if (!isValidPhone(phone)) {
                alert("Please enter a valid phone number.");
                return;
            }
        }
        const validMessage = message => /^[A-Za-z0-9\s.,!?'"()]+$/.test(message);
        if (!validMessage(message)) {
            alert("Your message contains some forbidden characters. Please remove them and try again.");
            return;
        }
        const validName = name => /^[A-Za-zÀ-ÖØ-öø-ÿ\s.'-]+$/.test(name);
        if (!validName(name)) {
            alert("Please enter a valid name.");
            return;
        }
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);


        sendDataToDiscord();
    }


    const sendDataToDiscord = async () => {
        setDisabled(true);
        const webhookUrl = "https://discord.com/api/webhooks/1234501671472730195/zwkz5ysMKv2NQLYIPHyfOpmT4sg5OV_isOhSHsQTr29uNatIyzm9Ou8tlY5B4VOnHeBR"
        const data = {
            content: `New message from ${name} (${email}, ${phone})\n${message}`
        };
        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert("Your message has been sent successfully.");
                setMessage("");
            } else {
                alert("An error occurred while sending your message. Please try again later.");
            }
        }
        catch (error) {
            alert("An error occurred while sending your message. Please try again later.");
        }
        setDisabled(false);
    }
    return (
        <>
            <Helmet>
                <title>Contact Us | National Law Chamber</title>
                <meta name="description" content="Contact National Law Chamber for expert legal services in Nepal." />
            </Helmet>
            <div id="root" className="bg-gray-900 text-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center md:text-left md:ml-4">
                        <h1 className="text-4xl font-bold text-gray-200 mb-4">Contact Us</h1>
                        <p className="text-lg text-gray-300 mb-8">
                            We're here to help you with your legal needs. Contact National Law Chamber for expert legal services in Nepal.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Office Location</h2>
                            <p className="text-gray-300">National Law Chamber<br />Anamnagar, Kathmandu<br />Nepal</p>
                            <p className="text-gray-300">Office Status: {isOfficeTime() ? <span className="text-green-500">Open</span> : <span className="text-red-500">Closed</span>} (Sunday to Friday, 9:30 AM to 5:00 PM)</p>
                            <span className="text-gray-500 text-sm hover:text-gray-300">Office time may vary, Please contact before visit.</span>
                            <div className="my-3">
                                <iframe
                                    title="National Law Chamber Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.683558657673!2d85.32554437425361!3d27.69617362598631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000ff700f5%3A0xe936e5457145f732!2sNational%20Law%20Chamber!5e0!3m2!1sen!2snp!4v1714380633536!5m2!1sen!2snp"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="my-7">
                                <h2 className="text-2xl font-semibold text-gray-200 mb-2">Contact Information</h2>
                                <p className="text-gray-300">Phone: +977-9841299088<br />Email: mukundanlc@gmail.com</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg mt-8 md:mt-0">
                            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Send Us a Message</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-300">Name<span className="text-red-500">*</span></label>
                                    <input type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        id="name"
                                        value={name}
                                        name="name"
                                        placeholder="Enter Your Name"
                                        className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-300">Email<span className="text-red-500">*</span></label>
                                    <input type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-300">Phone Number</label>
                                    <input type="tel"
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-300">Message<span className="text-red-500">*</span></label>
                                    <textarea id="message"
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        name="message"
                                        rows="4"
                                        placeholder="Enter Your Message"
                                        className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500"></textarea>
                                </div>
                                <button type="submit"
                                    onClick={handleSubmit}
                                    disabled={disabled}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
