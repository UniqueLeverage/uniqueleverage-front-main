import logolandscape from "../../assets/logo_landscape.png";
import zoomlogo from "../../assets/zoomlogo.png";
import {Link} from "react-router-dom";
import {FaApple, FaLongArrowAltRight, FaWindows} from "react-icons/fa";
import routerPaths from "../../routerPaths.tsx";

const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-white border-t border-gray-100">
            <div className="container mx-auto">
                <div className="mb-6 md:mb-10">
                    <img src={logolandscape} alt="" className="mx-auto lg:m-0 h-12"/>
                </div>
                <div className="lg:flex items-start text-md">
                    <div className="lg:w-[75%] grid md:grid-cols-3 text-center lg:text-left">
                        <div className="mb-6 md:mb-0">
                            <div className="font-semibold mb-2 md:mb-4">
                                NAVIGATION
                            </div>
                            <div className="font-light">
                                <Link to={routerPaths.login}
                                      className="text-grayTextColor block mb-1 md:mb-2">
                                    Account Log-in
                                </Link>
                                <a href="https://uniqueleverage.com/affiliates"
                                      className="text-grayTextColor block mb-1 md:mb-2">
                                    Become a Partner
                                </a>
                                <Link to={routerPaths.scheduler}
                                      className="text-grayTextColor block mb-1 md:mb-2">
                                    Get a Demo
                                </Link>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <div className="font-semibold mb-2 md:mb-4">
                                HOW WE CAN HELP YOU
                            </div>
                            <div className="font-light">
                                <Link to={routerPaths.pricing} className="text-grayTextColor block mb-1 md:mb-2">
                                    Marketing Formula
                                </Link>
                                <Link to={routerPaths.pricing} className="text-grayTextColor block mb-1 md:mb-2">
                                    Software for Dealers
                                </Link>
                                <Link to={routerPaths.pricing} className="text-grayTextColor block">
                                    Consulting
                                </Link>
                            </div>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <div className="font-semibold mb-2 md:mb-4">
                                TALK TO US
                            </div>
                            <div className="font-light">
                                <a href="tel:+13132172212" className="text-grayTextColor block">
                                    +1 (313) 217-2212
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[25%] md:mt-6 lg:mt-0">
                        <a href="https://uniqueleverage.com/zoom"
                              className="flex items-center justify-center w-fit mx-auto lg:mx-0 p-3 bg-gray-100/75 rounded-xl">
                            <img src={zoomlogo} alt="" className="mr-3"/>
                            <div className="font-light">
                                <div>
                                    Zoom Meeting
                                </div>
                                <div className="flex items-center text-xs">
                                    Join The Zoom Meeting <FaLongArrowAltRight className="ml-1"/>
                                </div>
                            </div>
                        </a>
                        <div className="font-extralight mt-6 text-sm mb-3 text-center lg:text-left">
                            Get the app
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-x-4 px-2">
                            <Link to={routerPaths.register}
                                  className="border border-gray-200/75 flex items-center rounded-3xl px-4 py-2">
                                <FaWindows className="mr-1.5"/> Windows
                            </Link>
                            <Link to={routerPaths.register}
                                  className="border border-gray-200/75 flex items-center rounded-3xl px-4 py-2">
                                <FaApple className="mr-1.5"/> macOs
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="border-t border-gray-50 mt-6 pt-6 flex flex-col lg:flex-row items-center justify-between font-light text-md text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-x-8 lg:order-2">
                        <Link to={routerPaths.terms} className="inline-block mb-1 md:mb-0">
                            Terms of Service
                        </Link>
                        <Link to={routerPaths.privacy} className="inline-block mb-1 md:mb-0">
                            Privacy Policy
                        </Link>
                        <Link to={routerPaths.cookie} className="inline-block mb-1 md:mb-0">
                            Cookies
                        </Link>
                    </div>
                    <div className="lg:order-1 mt-2 lg:mt-0">
                        &copy; All Rights Reserved 2017-2025 UniqueLeverage LLC.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;