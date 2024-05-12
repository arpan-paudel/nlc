import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Consultation = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [referenceFile, setReferenceFile] = useState(null);
    const [message, setMessage] = useState("");
    const [visitType, setVisitType] = useState("offline");
    const [platform, setPlatform] = useState("Zoom");
    const [disabled, setDisabled] = useState(false);
    const [preferredDate, setPreferredDate] = useState("");

    const handleFileChange = (e) => {
        setReferenceFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName === '') {
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
        if (preferredDate === '') {
            alert('Preferred Date is required');
            return;
        }
        if(referenceFile && referenceFile.size > 5 * 1024 * 1024) {
            alert('File size should be less than 5MB');
            return;
        }
        if (visitType === "offline" && preferredDate) {
            const selectedDateTime = new Date(preferredDate);
            const dayOfWeek = selectedDateTime.getDay();
            const hour = selectedDateTime.getHours();
            const minute = selectedDateTime.getMinutes();

            if (dayOfWeek === 0 || dayOfWeek === 6) {
                alert("Offline consultation is only available from Sunday to Friday.");
                return;
            }

            if (hour < 9 || (hour === 9 && minute < 30) || hour >= 17) {
                alert("Offline consultation is only available between 9:30 AM and 5:00 PM.");
                return;
            }
        }
        const isValidEmail = email => /^[a-zA-Z0-9._%+-]+@(gmail\.com|.+\.edu)$/.test(email);

        if (!isValidEmail(email)) {
            alert("Please enter a valid email (gmail.com).");
            return;
        }

        if (phoneNumber) {
            const isValidPhone = phone => /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
            if (!isValidPhone(phoneNumber)) {
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
        if (!validName(fullName)) {
            alert("Please enter a valid name.");
            return;
        }
        localStorage.setItem("name", fullName);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phoneNumber);

        sendDataToDiscord();
    };

    const sendDataToDiscord = async () => {
        setDisabled(true);
        const webhookUrl = "https://discord.com/api/webhooks/1238525789624864900/wy8m2RPRuz3u5nGh_scG3xVhgIxbWEz0YiCmG6OK4vnuk-JQTbMbPs4DBehMponmioMc";
        const formData = new FormData();
        formData.append("file", referenceFile); // Assuming referenceFile is the file object from the input

        let messageContent = `New message from ${fullName} (${email}, ${phoneNumber})\nConsultation Area: ${message}\nVisit Type: ${visitType}\nPreferred Date: ${preferredDate}`;

        if (visitType === "online") {
            messageContent += `\nPlatform: ${platform}`;
        }

        formData.append("content", messageContent);

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("Your message has been sent successfully. We will get back to you shortly via email or phone. Thank you!");
                setFullName("");
                setEmail("");
                setPhoneNumber("");
                setMessage("");
                setMessage("");
                setReferenceFile(null);
                setVisitType("offline");
                setPlatform("Zoom");
            } else {
                alert("An error occurred while sending your message. Please try again later.");
            }
        } catch (error) {
            alert("An error occurred while sending your message. Please try again later.");
        }
        setDisabled(false);
    };

    return (
        <>
            <Helmet>
                <title>Consultation | National Law Chamber</title>
                <meta name="description" content="Providing expert legal services in Nepal." />
            </Helmet>
            <div id="root" className="bg-gray-900 text-gray-200">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center md:text-left md:ml-4">
                        <h1 className="text-4xl font-bold text-gray-200 mb-4">Welcome to Our Consultation Services</h1>
                        <p className="text-lg text-gray-300 mb-8">
                            At National Law Chamber, we understand that every legal matter is unique and requires personalized attention. Our consultation services are designed to provide you with expert guidance and support tailored to your specific needs. Whether you're facing a complex legal issue or simply need clarification on a matter, our team of experienced professionals is here to help.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg mt-8 md:mt-0">
                        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Consultation Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-gray-300">Name<span className="text-red-500">*</span></label>
                                <input type="text"
                                    onChange={(e) => setFullName(e.target.value)}
                                    id="fullName"
                                    value={fullName}
                                    name="fullName"
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
                                <label htmlFor="phoneNumber" className="block text-gray-300">Phone Number</label>
                                <input type="tel"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Enter Your Phone Number"
                                    className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-300">Description<span className="text-red-500">*</span></label>
                                <textarea id="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    name="message"
                                    rows="4"
                                    placeholder="Enter Description"
                                    className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="referenceFile" className="block text-gray-300">Reference File</label>
                                <input type="file"
                                    onChange={handleFileChange}
                                    id="referenceFile"
                                    accept="image/*,application/pdf"
                                    name="referenceFile"
                                    className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="preferredDate" className="block text-gray-300">Preferred Date<span className="text-red-500">*</span></label>
                                <input type="datetime-local"
                                    onChange={(e) => setPreferredDate(e.target.value)}
                                    value={preferredDate}
                                    id="preferredDate"
                                    name="preferredDate"
                                    className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="visitType" className="block text-gray-300">Consultation Type<span className="text-red-500">*</span></label>
                                <select
                                    onChange={(e) => setVisitType(e.target.value)}
                                    value={visitType}
                                    id="visitType"
                                    name="visitType"
                                    className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500">
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                </select>
                            </div>
                            {visitType === "online" && (
                                <div className="mb-4">
                                    <label htmlFor="platform" className="block text-gray-300">Platform</label>
                                    <select
                                        onChange={(e) => setPlatform(e.target.value)}
                                        value={platform}
                                        id="platform"
                                        name="platform"
                                        className="w-full border border-gray-700 rounded-md py-2 px-4 bg-gray-900 text-gray-200 focus:outline-none focus:border-blue-500">
                                        <option value="Zoom">Zoom</option>
                                        <option value="Google Meet">Google Meet</option>
                                    </select>
                                </div>
                            )}
                            <button type="submit"
                                disabled={disabled}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Consultation;
