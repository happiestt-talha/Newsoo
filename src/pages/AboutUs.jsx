import React from 'react';
import { FaNewspaper, FaBullhorn, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '../components/FooterComp';

const AboutUs = () => {
    return (
        <section className="bg-gradient-to-r from-zinc-600 to-slate-600 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center">
                    <motion.h2
                        className="text-5xl font-extrabold mb-4 drop-shadow-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Newsoo
                    </motion.h2>
                    <motion.p
                        className="text-xl max-w-3xl mx-auto drop-shadow-md"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        At Newsoo, we bring you the pulse of the world with vibrant stories, deep insights, and a splash of creativity to keep you informed and inspired.
                    </motion.p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <motion.div
                        className="flex flex-col cursor-pointer items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-lg transform transition duration-500 hover:scale-105 hover:bg-opacity-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaBullhorn size={60} className="mb-6 text-yellow-400 drop-shadow" />
                        <h3 className="text-2xl font-bold drop-shadow">Our Mission</h3>
                        <p className="mt-4">
                            We aim to be the leading source of reliable news, empowering people with the truth.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col cursor-pointer items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-lg transform transition duration-500 hover:scale-105 hover:bg-opacity-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaNewspaper size={60} className="mb-6 text-blue-400 drop-shadow" />
                        <h3 className="text-2xl font-bold drop-shadow">Our Values</h3>
                        <p className="mt-4">
                            Integrity, transparency, and innovation guide everything we do at Newsoo.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col cursor-pointer items-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-lg transform transition duration-500 hover:scale-105 hover:bg-opacity-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaUsers size={60} className="mb-6 text-green-400 drop-shadow" />
                        <h3 className="text-2xl font-bold drop-shadow">Our Team</h3>
                        <p className="mt-4">
                            Our diverse team of journalists and technologists work tirelessly to bring you the latest and most accurate news.
                        </p>
                    </motion.div>
                </div>

                {/* Team Image Section */}
                <div className="mt-16 text-center">
                    <motion.img
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80"
                        alt="Newsoo Team"
                        className="mx-auto rounded-full shadow-2xl h-[300px] w-[300px] object-cover border-4 border-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <h4 className="mt-6 text-2xl font-semibold drop-shadow">
                        The Newsoo Team
                    </h4>
                    <p className="mt-2 max-w-xl mx-auto drop-shadow">
                        Our team is passionate about delivering the news that matters to you, with the utmost integrity and dedication.
                    </p>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default AboutUs;
