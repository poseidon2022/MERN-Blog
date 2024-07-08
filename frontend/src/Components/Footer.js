import { FaFacebook, FaInstagram, FaRegCopyright, FaTelegram, FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom'
export default function FooterComp() {
    return (
        <div container className = "border border-t-8 border-teal-500 mt-10">
            <div className="flex flex-wrap flex-row mx-auto justify-between">
                <Link to = "/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white m-3">
                    <span className = "px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">Kidus's</span>
                    Blog
                </Link>
                <div className = "flex flex-wrap m-5 justify-center">
                    <div className = "m-3">
                        <h3 className = "text-gray-600 m-3">About</h3>
                        <p className = "text-gray-400 m-3">100 JS Projects</p>
                        <p className = "text-gray-400 m-3">Kidus's Blog</p>
                    </div>
                    <div className = "m-3">
                        <h3 className = "text-gray-600 m-3">Follow Us</h3>
                        <p className = "text-gray-400 m-3">GitHub</p>
                        <p className = "text-gray-400 m-3">Discord</p> 
                    </div>
                    <div className = "m-3">
                        <h3 className = "text-gray-600 m-3">Legal</h3>
                        <p className = "text-gray-400 m-3">Privacy Policy</p>
                        <p className = "text-gray-400 m-3">Terms & Conditions</p> 
                    </div>
                </div>
            </div>
            <div className = "border-t-2 w-full">
                <div className = "flex sm:flex-wrap justify-between">
                    <div className = "m-3">
                        <FaRegCopyright className="inline mr-1 text-gray-400"/>
                        <span className = "text-gray-400">2024 Kidus's Blog</span>
                    </div>
                    <div className = "flex row">
                        <FaFacebook className = "text-gray-600 size-7 m-2"></FaFacebook>
                        <FaInstagram className = "text-gray-600 size-7 m-2"></FaInstagram>
                        <FaTwitter className = "text-gray-600 size-7 m-2"></FaTwitter>
                        <FaTelegram className = "text-gray-600 size-7 m-2"></FaTelegram>
                    </div>
                </div>
            </div>
        </div>
    )
}