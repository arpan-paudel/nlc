import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const PracticeAreas = () => {
    return (
        <>
            <Helmet>
                <title>Practice Areas | National Law Chamber</title>
                <meta name="description" content="Explore our practice areas at National Law Chamber. Our team provides expert legal services tailored to your needs." />
            </Helmet>
            <div id="root" className="bg-gray-900 text-gray-200 py-8">
                <div className="container mx-auto px-4">
                    <div className="text-left md:ml-4">
                        <h1 className="text-4xl font-bold text-gray-200 mb-4">Practice Areas</h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Explore our practice areas at National Law Chamber. Our team provides expert legal services tailored to your needs.
                        </p>
                    </div>
                    <p className="text-center text-3xl pb-5 font-bold">
                        Legal Services
                    </p>
                    <p className="text-lg text-gray-300 mb-8">
                        Our legal services offer comprehensive support across diverse practice areas, ensuring effective solutions for your specific needs. From corporate affairs to personal disputes, our seasoned lawyers are adept at guiding you through legal complexities. We prioritize accessibility and communication, empowering you to make informed decisions. With results-oriented representation and a commitment to client satisfaction, we build lasting relationships based on trust and integrity. Whether you're a corporation or an individual, rely on our dedicated team for top-notch legal advocacy.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                                Corporate and Banking Law
                            </h2>
                            <p className="text-gray-300 mb-4">
                                When it comes to corporate banking, our legal experts offer valuable advice and support to businesses and financial institutions. We help you understand complex regulations and facilitate transactions, ensuring smooth operations in the competitive financial world.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Family Law</h2>
                            <p className="text-gray-300 mb-4">
                                Family matters can be emotionally challenging, but our family law attorneys are here to support you every step of the way. Whether it's divorce, child custody, or domestic violence, we provide empathetic assistance and work towards solutions that prioritize the well-being of you and your loved ones.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Civil Law</h2>
                            <p className="text-gray-300 mb-4">
                                Civil law deals with disputes between individuals or organizations, such as contracts and property issues. Our team provides compassionate guidance and representation, ensuring your rights are protected and helping you resolve conflicts with clarity and care.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Criminal Law</h2>
                            <p className="text-gray-300 mb-4">
                                If you're facing criminal charges, our dedicated team is here to defend your rights and interests. We provide strong legal representation and strategic counsel to help you navigate the complexities of the legal system and achieve the best possible outcome.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Constitutional Law</h2>
                            <p className="text-gray-300 mb-4">
                                Constitutional law deals with fundamental rights and freedoms. Our experts offer insightful analysis and advocacy in cases involving constitutional issues, ensuring that justice and equality are upheld.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Administrative Law</h2>
                            <p className="text-gray-300 mb-4">
                                Government regulations can be complex, but our administrative law attorneys are here to help. We provide guidance and representation in administrative proceedings, advocating for fair treatment and compliance with the law.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Aviation Law</h2>
                            <p className="text-gray-300 mb-4">
                                Aviation law covers legal aspects of air travel and aircraft operations. Our specialists offer comprehensive support to clients in the aviation industry, addressing regulatory compliance and transactional matters with expertise.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Labour Law</h2>
                            <p className="text-gray-300 mb-4">
                                Labour law governs employer-employee relationships. Our team offers advice and advocacy to protect the rights of both employers and employees, fostering fair and equitable workplaces.
                            </p>
                        </motion.div>
                    </div>
                    <p className="text-center text-3xl pt-8 pb-5 font-bold">
                        Notary Services
                    </p>
                    <p className="text-lg text-gray-300 mb-8">
                        Our notary services go beyond simply ensuring document validity, we prioritize your peace of mind. By meticulously certifying signatures and authenticating copies, we instill confidence in the legality and integrity of your paperwork. With each notarial act, we aim for efficiency and precision, minimizing risks and discrepancies. Our personalized attention ensures that every document receives thorough review and validation, tailored to your unique needs. Trust us to navigate the complexities of legal documentation, providing you with a reliable partner every step of the way.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                                Attestation
                            </h2>
                            <p className="text-gray-300 mb-4">
                                We verify the authenticity of documents for legal purposes. From academic certificates to personal identifications, our professionals ensure compliance with regulatory requirements and the reliability of your documentation.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Translation</h2>
                            <p className="text-gray-300 mb-4">
                                Our translation services cover Nepali to English and vice versa. We ensure accurate communication in legal matters, facilitating understanding across language barriers.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800 p-6 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Verification of legal documents</h2>
                            <p className="text-gray-300 mb-4">
                                We thoroughly scrutinize and authenticate legal documents to confirm their accuracy and legality. From title deeds to contracts, our verification process mitigates risks and ensures compliance with legal standards.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default PracticeAreas;
