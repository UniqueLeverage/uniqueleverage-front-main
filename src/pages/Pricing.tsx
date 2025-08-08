import {Header, Footer} from "../components";
import {Disclosure} from "@headlessui/react";
import {FaCaretDown} from "react-icons/fa6";
import {Link} from "react-router-dom";

import bgimagecurve from "../assets/bgimagecurve.png";

import slashdarkred from "../assets/slashdarkred.svg";
const Pricing = () => {


    const faqData = [
        {
            question: "Can I change my plan later on?",
            answer:
                "Yes. You can change your plan at anytime. Add more user seats and increase ad daily ad spend.",
        },
        {
            question: "Does UniqueLeverage take a percentage of advertising budget?",
            answer:
                "No. We charge a flat rate that doesn't change.",
        },
        {
            question: "How do you access our inventory?",
            answer: "We simply connect with your current inventory management provider and request a feed with your permission.",
        },
        {
            question: "Are there any additional fees?",
            answer: "No. All UniqueLeverage plans are as advertised. No setup fees or hidden charges along the way!",
        }
    ];

    return (
        <div>
            <Header
                pageTitle="Pricing"
            />
            <div className="w-full h-[83px] md:hidden"/>
            <div style={{background: `url(${bgimagecurve}), rgb(244, 249, 252)`}}>
                <div className="container mx-auto px-4 text-center pb-44 pt-11">
                    <div className="font-[900] text-[34px] md:text-[60px] leading-[120%] mb-3">
                        Affordable Pricing<br/>
                        30 Day Free Trial.
                    </div>
                    <div className="md:text-xl text-grayTextColor">
                        We have a few options.<br/>
                        Read our FAQ's
                    </div>
                </div>
            </div>
            <div className="bg-bgGradient4">
                <div className="container mx-auto px-4 py-10 pt-8">
                    <div className="flex justify-center flex-wrap gap-8 -mt-[160px] md:gap-4 items-center">
                        <div className="bg-white w-full lg:w-1/3 shadow-containerShadow rounded-lg text-center h-full p-12 lg:order-2">
                            <div className="text-[34px] font-[900]">
                                Pro
                            </div>
                            <div className="relative w-fit mx-auto ">
                                Normally $396/mo
                                <div className="absolute start-0 top-1/2 w-full">
                                    <img src={slashdarkred} alt=""/>
                                </div>
                            </div>
                            <div className="font-bold text-[32px] my-1">
                                $198/mo
                            </div>
                            <div className="text-sm">
                                Billed Monthly
                            </div>
                            <Link to="https://buy.stripe.com/4gwdRxadf66kaCA28b?client_reference_id=pro"
                                  className="font-bold text-white text-lg md:text-xl bg-mainBlue hover:bg-mainBlueHover w-full px-4 py-2 border border-[#00000021] rounded-sm shadow-blueBtn mx-auto inline-block mt-4 mb-10">
                                Get Started
                            </Link>
                            <div className="text-start font-[900] text-md">
                                Up to 5 Users
                            </div>
                            <div className="text-start text-md">
                                Perfect for a small team!
                            </div>
                        </div>
                        <div className="bg-white w-full lg:w-1/3 shadow-containerShadow rounded-lg text-center h-full p-12 lg:order-1">
                            <div className="text-[34px] font-[900]">
                                Basic
                            </div>
                            <div className="relative w-fit mx-auto ">
                                Normally $198/mo
                                <div className="absolute start-0 top-1/2 w-full">
                                    <img src={slashdarkred} alt=""/>
                                </div>
                            </div>
                            <div className="font-bold text-[32px] my-1">
                                $99/mo
                            </div>
                            <div className="text-sm">
                                Billed Monthly
                            </div>
                            <Link to="https://buy.stripe.com/00g9BhadfdyM3a83ce?client_reference_id=basic"
                                  className="font-bold text-white text-lg md:text-xl bg-mainBlue hover:bg-mainBlueHover w-full px-4 py-2 border border-[#00000021] rounded-sm shadow-blueBtn mx-auto inline-block mt-4 mb-10">
                                Get Started
                            </Link>
                            <div className="text-start font-[900] text-md">
                                Up to 2 Users
                            </div>
                            <div className="text-start text-md">
                                Post all your inventory
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="font-[900] text-xl md:text-[40px] text-center">
                        Frequently Asked Questions
                    </div>
                    <div className="mt-5 md:mt-10">
                        {faqData.map((item, index) => (
                            <Disclosure key={index}>
                                {({open}) => (
                                    <div className={`${
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

export default Pricing;