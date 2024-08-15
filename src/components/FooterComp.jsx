import React from 'react';
import { FaFacebookF,  FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-zinc-600 to-slate-600 text-white py-8 border-t-2 border-gray-800">
            <div className="container mx-auto px-6 text-center">
                {/* Footer Links */}
                <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link to="/" className="text-lg font-semibold hover:text-gray-300 mx-3">
                        Home
                    </Link>
                    <Link to="/about-us" className="text-lg font-semibold hover:text-gray-300 mx-3">
                        About
                    </Link>
                    <Link to="/" className="text-lg font-semibold hover:text-gray-300 mx-3">
                        Services
                    </Link>
                    <Link to="/about-us" className="text-lg font-semibold hover:text-gray-300 mx-3">
                        Contact
                    </Link>
                </motion.div>

                {/* Social Media Icons */}
                <motion.div 
                    className="mb-6 flex justify-center space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <a href="https://facebook.com/happiest_talha" aria-label="Facebook">
                        <FaFacebookF size={24} className="hover:text-gray-300" />
                    </a>
                    <a href="https://github.com/happiestt-talha" aria-label="Twitter">
                        <FaGithub size={24} className="hover:text-gray-300" />
                    </a>
                    <a href="https://instagram.com/happiest_talha" aria-label="Instagram">
                        <FaInstagram size={24} className="hover:text-gray-300" />
                    </a>
                    <a href="https://linkedin.com/mt4alha" aria-label="LinkedIn">
                        <FaLinkedinIn size={24} className="hover:text-gray-300" />
                    </a>
                </motion.div>

                {/* Footer Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Newsoo. All rights reserved.
                    </p>
                    <p className="text-sm mt-2">
                        Designed with <span className="text-red-500">&hearts;</span> by M Talha Manzoor
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
