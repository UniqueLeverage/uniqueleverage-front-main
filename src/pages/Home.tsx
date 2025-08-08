import {Header, Footer, HomeVideoHolderOne, HomeVideoHolderTwo} from "../components";
import routerPaths from "../routerPaths.tsx";
import {Link} from "react-router-dom";
import {FaCaretDown, FaCircleCheck} from "react-icons/fa6";
import {
    FaAngleDoubleRight,
    FaChevronRight,
    FaLongArrowAltRight,
    FaRegPlayCircle,
    FaStar
} from "react-icons/fa";

import bgimagecurve from "../assets/bgimagecurve.png";

import allowpermission_icon from "../assets/allowpermission_icon.svg";
import plugplay_icon from "../assets/plugplay_icon.svg";
import autoposter_icon from "../assets/autoposter_icon.svg";

import dealerlogo1 from "../assets/dealerlogo1.png";
import dealerlogo2 from "../assets/dealerlogo2.png";
import dealerlogo3 from "../assets/dealerlogo3.png";

import trustpilotreview from "../assets/trustpilotreview.avif";

import aboutPhoto from "../assets/aboutphoto.png";

import biglogoicon from "../assets/biglogoicon.png";

import aboutPhoto1 from "../assets/aboutphoto1.png";

import frazerlogo from "../assets/frazerlogo.png";
import homenetlogo from "../assets/homenetlogo.png";
import dealercenterlogo from "../assets/dealercenterlogo.png";
import carsforsalelogo from "../assets/carsforsalelogo.png";
import {Disclosure} from "@headlessui/react";

const faqData = [
    {
        question: "Do I have to pay for updates?",
        answer:
            "No! We give constant updates to our software, add new features and you get it all for FREE! Because UniqueLeverage is on the cloud, when we make an update or add new features, it's all yours!",
    },
    {
        question: "How long are your contracts?",
        answer:
            "There are NO long term contracts or commitments. You can use UniqueLeverage month to month, and cancel at any time you'd like!",
    },
    {
        question: "If I have questions, is there someone I can talk to?",
        answer: "Yes! We have a first class support team who can answer your questions 24 hours a day, 7 days a week! Just email our support help@uniqueleverage.com or call us directly (313) 217-2212",
    },
    {
        question: "If I cancel my UniqueLeverage account, will I lose my data?",
        answer: "As with most \"software-as-a-service\" platforms, when you cancel your account, your data will become inaccessible.",
    },
    {
        question: "Can I connect my DMS?",
        answer: "Yes, we partner and connect with some of the largest companies in the automotive space! Our systems connect with your current providers!",
    },
    {
        question: "Do I have to install anything?",
        answer: "Yes, our Auto-Poster tool requires a Windows computer. Just login and we'll take care of the rest!",
    },
    {
        question: "If I don't like UniqueLeverage, how do I cancel?",
        answer: "Simply call or send an email, click on your account and request to cancel the account.",
    },
];

const Home = () => {
    return (
        <div>
            <Header
                pageTitle="Home"
            />
            <div className="w-full h-[83px] md:hidden"/>
            <div style={{background: `url(${bgimagecurve}), rgb(244, 249, 252)`}}>
                <div className="container mx-auto px-4 text-center md:pb-44 pt-11">
                    <div className="text-xl md:text-4xl font-handWriting font-bold">
                        Automatic Vehicle Posting for Dealers
                    </div>
                    <div className="font-[900] font-inter text-[33px] md:text-5xl lg:text-[85px] mt-2 leading-[110%]">
                        Meet UniqueLeverage.
                    </div>
                    <div
                        className="font-semibold text-[17px] md:text-xl lg:text-[32px] mt-4 md:mt-2 mb-6 lg:leading-[140%]">
                        Getting People To Your Vehicles And Turning Them Into<br
                        className="hidden md:inline"/> Potential Customers<br className="md:hidden"/> Is What We
                        Do
                        Best
                    </div>
                    <div className="mb-2 hidden md:block">
                        <Link to={routerPaths.pricing}
                              className="font-bold text-white text-lg md:text-xl bg-mainBlue hover:bg-mainBlueHover px-8 py-4 border border-[#00000021] rounded-sm shadow-blueBtn w-fit mx-auto flex items-center mb-2">
                            Start Your Free Trial
                            <FaAngleDoubleRight className="ml-2"/>
                        </Link>
                        <div className="text-grayTextColor text-sm">
                            No Contracts • Cancel Anytime
                        </div>
                    </div>
                    <div
                        className="hidden md:flex items-start md:items-center justify-center gap-x-7 mt-8 md:text-[19px] font-medium pl-4 md:pl-0">
                        <div className="flex items-center md:items-start mb-3 md:mb-0">
                            <FaCircleCheck className="text-mainBlue md:text-2xl md:mt-1 mr-2 md:mr-1.5"/>
                            Zero Computer Skills Needed
                        </div>
                        <div className="flex items-center md:items-start mb-3 md:mb-0">
                            <FaCircleCheck className="text-mainBlue md:text-2xl md:mt-1 mr-2 md:mr-1.5"/>
                            Perfect For Any Size Team
                        </div>
                        <div className="flex items-center md:items-start">
                            <FaCircleCheck className="text-mainBlue md:text-2xl md:mt-1 mr-2 md:mr-1.5"/>
                            Market, Sell, And Deliver Like A Pro
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 relative md:-mt-[160px] md:pt-8">
                    <div
                        className="w-full bg-mainBlue flex items-start justify-center py-1 md:py-2.5 text-white font-semibold text-[13.6px] md:text-base text-center px-2">
                        <FaRegPlayCircle className="-mr-4 sm:mr-0 md:mr-1.5 mt-[3px]"/>
                        Connecting With Your Systems For Optimized Results
                    </div>
                    <div className="shadow-containerShadow bg-white md:rounded-b-lg p-5">
                        <HomeVideoHolderOne/>
                        <div className="hidden md:grid grid-cols-3 py-7">
                            <div className="text-center">
                                <div className="mb-3">
                                    <img src={allowpermission_icon} alt="" width="50" className="mx-auto"/>
                                </div>
                                <div className="leading-5 font-bold">
                                    Allow<br/>
                                    Permission
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="mb-3">
                                    <img src={plugplay_icon} alt="" width="50" className="mx-auto"/>
                                </div>
                                <div className="leading-5 font-bold">
                                    Plug & Play<br/>
                                    Software
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="mb-3">
                                    <img src={autoposter_icon} alt="" width="50" className="mx-auto"/>
                                </div>
                                <div className="leading-5 font-bold">
                                    Inventory<br/>
                                    Auto-Poster
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 mt-5 md:hidden">
                        <Link to={routerPaths.pricing}
                              className="font-bold text-white text-lg md:text-xl bg-mainBlue hover:bg-mainBlueHover px-8 py-4 border border-[#00000021] rounded-sm shadow-blueBtn w-fit mx-auto flex items-center mb-2">
                            Start Your Free Trial
                            <FaAngleDoubleRight className="ml-2"/>
                        </Link>
                        <div className="text-grayTextColor text-xs text-center">
                            No Contracts • Cancel Anytime
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-32 md:pt-40 -mt-32 pb-5 bg-bgGradient1">
                <div className="container mx-auto pt-10 px-4 text-center">
                    <div className="flex items-center justify-center gap-x-2 text-2xl md:text-3xl text-mainBlue mb-3 md:mb-4">
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </div>
                    <div className="text-[22px] md:text-[40px] font-[900] leading-[120%] tracking-[1px] mb-5">
                        World Class Dealerships<br/>Love Using UniqueLeverage
                    </div>
                    <div className="text-xl md:text-4xl font-handWriting font-bold">
                        See For Yourself…
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 pb-10 pt-28">
                        <div className="bg-white shadow-containerShadow rounded-lg pb-16 mb-20 md:mb-0">
                            <div className="mb-4 -mt-16">
                                <img src={dealerlogo1} alt="" width="150" className="mx-auto rounded-md"/>
                            </div>
                            <div className="font-bold text-lg">
                                2022 S Robertson Blvd,<br/>
                                Los Angeles, California
                            </div>
                        </div>
                        <div className="bg-white shadow-containerShadow rounded-lg pb-16 mb-20 md:mb-0">
                            <div className="mb-4 -mt-16">
                                <img src={dealerlogo2} alt="" width="150" className="mx-auto rounded-md"/>
                            </div>
                            <div className="font-bold text-lg">
                                540 US-1 • Edison,<br/>
                                New Jersey
                            </div>
                        </div>
                        <div className="bg-white shadow-containerShadow rounded-lg pb-16">
                            <div className="mb-4 -mt-16">
                                <img src={dealerlogo3} alt="" width="150" className="mx-auto rounded-md"/>
                            </div>
                            <div className="font-bold text-lg">
                                23971 N. Telegraph Rd.<br/>
                                Brownstown, Michigan
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <Link to={routerPaths.pricing}
                              className="font-bold text-white text-lg md:text-xl bg-mainBlue hover:bg-mainBlueHover px-8 py-4 border border-[#00000021] rounded-sm shadow-blueBtn w-fit mx-auto flex items-center mb-2">
                            Start Your Free Trial
                            <FaAngleDoubleRight className="ml-2"/>
                        </Link>
                        <div className="text-grayTextColor text-sm">
                            No Contracts • Cancel Anytime
                        </div>
                    </div>
                    <div className="pt-14 pb-5 md:pb-10 text-center">
                        <div className="mb-3">
                            <img src={trustpilotreview} alt="" className="mx-auto w-2/3 md:w-fit"/>
                        </div>
                        <div className="text-xs md:text-sm leading-6 font-bold">
                            UniqueLeverage Is Rated Excellent<br/>
                            (4.7 out of 5 based on 1,835 reviews)
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-5 md:pb-10 pt-5 bg-[#f4f9fc]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 items-center py-5">
                        <div className="md:pr-3 lg:pr-10">
                            <div
                                className="font-[900] text-2xl md:text-3xl lg:text-[40px] leading-[120%] mb-5 text-center md:text-left">
                                Why Unique Leverage?
                            </div>
                            <div className="text-[17px] md:text-lg mb-3">
                                <span className="font-bold">Let’s face it</span> — popular listing providers and local
                                classified ads like
                                Marketplace or Craigslist is where customers find dealerships.
                            </div>
                            <div className="text-[17px] md:text-lg text-grayTextColor">
                                <span className="font-bold block mb-1 text-blueTextDark">That’s where we come in.</span>
                                Our software is like a “digital bridge” that connects vehicles from your website to
                                other platforms with the click of a button!
                            </div>
                        </div>
                        <div className="md:pl-5 mt-6 md:mt-0">
                            <img src={aboutPhoto} alt="" className="max-w-full"/>
                        </div>
                    </div>
                    <div className="text-center py-5 mt-5 md:mt-10 mb-5">
                        <div className="text-3xl md:text-5xl font-[900] leading-[120%]">
                            FACEBOOK<br/>VIN LEAD ADS
                        </div>
                        <div className="mt-5 px-2 md:px-0 md:text-xl">
                            Sync your on-the-ground inventory Facebook and Instagram ads <br
                            className="hidden md:inline"/>delivered<br className="md:hidden"/> to In-Market
                            Shoppers in real-time.
                        </div>
                        <div className="mt-10">
                            <HomeVideoHolderTwo/>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl md:text-4xl font-handWriting font-bold">
                            Do You Want To See Real Campaigns?
                        </div>
                        <div className="leading-[120%] font-[900] text-[22px] md:text-[32px] mt-4 mb-6">
                            Real Time Inventory<br/>
                            Pricing & Reporting!
                        </div>
                        <div className="mb-2">
                            <Link to={routerPaths.pricing}
                                  className="font-bold text-white text-lg md:text-xl bg-mainBlue hover:bg-mainBlueHover px-8 py-4 border border-[#00000021] rounded-sm shadow-blueBtn w-fit mx-auto flex items-center mb-2">
                                Start Your Free Trial
                                <FaAngleDoubleRight className="ml-2"/>
                            </Link>
                            <div className="text-grayTextColor text-sm">
                                No Contracts • Cancel Anytime
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-10 pt-5 bg-bgGradient2">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 items-center py-5">
                        <div className="mb-6 md:mb-0">
                            <div className="font-[900] text-3xl mb-5 leading-[120%] text-center md:hidden">
                                Automation<br/>
                                For Salespeople
                            </div>
                            <img src={biglogoicon} alt="" className="w-[330px] md:w-fit max-w-full mx-auto"/>
                        </div>
                        <div className="px-2 md:px-0 md:pl-3 lg:pl-10">
                            <div className="font-[900] text-[40px] mb-3 leading-[120%] hidden md:block">
                                Automation<br/>
                                For Salespeople
                            </div>
                            <div className="text-[17px] md:text-lg mb-3">
                                <span className="underline">We are pioneers</span> in the automotive industry and the
                                first ever platform designed to <span className="font-bold">post
                                vehicles directly on the Facebook Marketplace for sales people.</span>
                            </div>
                            <div className="text-[17px] md:text-lg mb-3">
                                When we think about purchasing a vehicle in todays market and economy, chances are <span
                                className="font-bold">— you'll check out Craigslist & Facebook Marketplace for the best deals!</span>
                            </div>
                            <div className="text-[17px] md:text-lg text-grayTextColor">
                                And guess what? ANY dealership can afford this, anually. (Because yes, it really does
                                work!)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-6 pt-5 bg-mainBackground">
                <div className="container mx-auto px-4">
                    <div
                        className="grid lg:grid-cols-2 items-center px-6 lg:px-16 py-10 bg-white shadow-containerShadow rounded-lg">
                        <div className="lg:pl-10 lg:order-2 mb-10 lg:mb-0">
                            <div className="font-bold text-mainBlue text-[20px]">
                                UniqueLeverage Is…
                            </div>
                            <div className="font-[900] text-[25px] lg:text-[40px] mb-5 leading-[120%]">
                                Dynamic
                            </div>
                            <div className="text-[17px] text-grayTextColor">
                                Posting vehicles for sale is great. But real-time data is critical if you want real
                                business growth.
                            </div>
                            <div className="font-bold mt-5 mb-3 text-lg">
                                With UniqueLeverage, you can...
                            </div>
                            <div>
                                <div className="flex items-start text-grayTextColor mb-3">
                                    <FaChevronRight className="text-mainBlue mr-3 pt-1 text-sm md:text-xl"/> Dominate your local
                                    market with
                                    micro ad campaigns
                                </div>
                                <div className="flex items-start text-grayTextColor mb-3">
                                    <FaChevronRight className="text-mainBlue mr-3 pt-1 text-sm md:text-xl"/> Generate leads for
                                    multiple sales
                                    people individaully
                                </div>
                                <div className="flex items-start text-grayTextColor mb-3">
                                    <FaChevronRight className="text-mainBlue mr-3 pt-1 text-sm md:text-xl"/> Talk to more people
                                    looking to
                                    purchase a vehicle (...for pennies on the dollar!)
                                </div>
                            </div>
                        </div>
                        <div className="lg:order-1">
                            <img src={aboutPhoto1} alt="" className="max-w-full mx-auto"/>
                            <div className="mt-6 mb-2 text-center">
                                <Link to={routerPaths.pricing}
                                      className="font-bold text-white text-lg md:text-xl bg-mainBlue hover:bg-mainBlueHover px-8 py-4 border border-[#00000021] rounded-sm shadow-blueBtn w-fit mx-auto flex items-center mb-2">
                                    Start Your Free Trial
                                    <FaAngleDoubleRight className="ml-2"/>
                                </Link>
                                <div className="text-grayTextColor text-sm">
                                    No Contracts • Cancel Anytime
                                </div>
                                <div className="relative w-fit mx-auto group">
                                    <Link to={routerPaths.pricing}
                                          className="flex justify-center items-center mt-5 font-semibold text-mainBlue relative">
                                        Learn More About Pricing <FaLongArrowAltRight/>
                                    </Link>
                                    <div
                                        className="absolute start-0 h-[1px] w-full bg-black bottom-1 group-hover:bg-mainBlue"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 bg-bgGradient3">
                <div className="container mx-auto px-4">
                    <div className="font-bold text-center md:text-lg mb-5 md:mb-2">
                        Trusted By Top Brands
                    </div>
                    <div className="grid md:grid-cols-4 justify-center items-center">
                        <div className="">
                            <img src={frazerlogo} alt="frazer" className="mx-auto mb-4 md:mb-0 w-[50%] md:w-[70%]"/>
                        </div>
                        <div className="">
                            <img src={homenetlogo} alt="homenet" className="mx-auto mb-4 md:mb-0 w-[50%] md:w-[70%]"/>
                        </div>
                        <div className="">
                            <img src={dealercenterlogo} alt="dealercenter"
                                 className="mx-auto mb-4 md:mb-0 w-[50%] md:w-[70%]"/>
                        </div>
                        <div className="">
                            <img src={carsforsalelogo} alt="carsforsale"
                                 className="mx-auto mb-4 md:mb-0 w-[50%] md:w-[70%]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="font-[900] text-xl md:text-[40px] text-center">
                        Frequently Asked Questions
                    </div>
                    <div className="mt-5 md:mt-10">
                        {faqData.map((item, index) => (
                            <Disclosure key={index}>
                                {({open}) => (
                                    <div className={`bg-white ${
                                        open ? "border-b border-b-blue-50" : "hover:bg-[#f4f9fc]"
                                    } duration-300 rounded-sm`}>
                                        <Disclosure.Button
                                            className={`flex justify-between items-center w-full px-4 py-5 text-left text-md md:text-xl font-bold ${
                                                open ? "bg-[#f4f9fc]" : ""
                                            }`}>
                                            <span className="pr-6">{item.question}</span>
                                            <FaCaretDown
                                                className={`duration-300 ${
                                                    open ? "rotate-180" : "rotate-0"
                                                }`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel
                                            className="px-7 pt-4 pb-8 text-grayTextColor text-md md:text-base">
                                            {item.answer}
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;