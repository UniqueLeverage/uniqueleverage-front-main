import {Link} from "react-router-dom";
import logoLandscape from "../../assets/logo_landscape.png";
import {IoIosArrowDown} from "react-icons/io";
import fbMarketplaceIcon from "../../assets/fbmarketplace_icon.svg";
import craigslist_icon from "../../assets/craigslist_icon.svg";
import micro_icon from "../../assets/micro_icon.svg";
import realtime_icon from "../../assets/realtime_icon.svg";
import advanced_icon from "../../assets/advanced_icon.svg";
import vin_icon from "../../assets/vin_icon.svg";
import integrations_icon from "../../assets/integrations_icon.svg";
import inventory_icon from "../../assets/inventory_icon.svg";
import routerPaths from "../../routerPaths.tsx";
import {useState} from "react";

interface HeaderProps {
    pageTitle: string
}

const Header = ({pageTitle}: HeaderProps) => {
    const [openedMobileNav, setOpenedMobileNav] = useState(false);

    return (
        <header className={`bg-mainBackground md:py-6 fixed z-10 md:relative w-full md:shadow-none`}>
            <div className="flex items-center justify-between container mx-auto px-4 py-6 md:py-0 relative z-40 bg-mainBackground">
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logoLandscape} alt="" height="40" className="w-[200px] md:w-[225px]"/>
                    </Link>
                </div>
                <div className="md:hidden pb-2">
                    <div
                        className="relative w-7 h-5 flex flex-col justify-between items-center cursor-pointer"
                        onClick={() => setOpenedMobileNav(!openedMobileNav)}
                    >
                        <span
                            className={`h-[3px] w-full bg-blueTextDark rounded-md transition-transform duration-300 ${
                                openedMobileNav ? 'rotate-45 translate-y-[7px]' : ''
                            }`}
                        ></span>
                        <span
                            className={`h-[3px] w-full bg-blueTextDark rounded-md transition-opacity duration-300 ${
                                openedMobileNav ? 'opacity-0' : ''
                            }`}
                        ></span>
                        <span
                            className={`h-[3px] w-full bg-blueTextDark rounded-md transition-transform duration-300 ${
                                openedMobileNav ? '-rotate-45 -translate-y-[10px]' : ''
                            }`}
                        ></span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-x-5 lg:gap-x-7">
                    <div className="font-bold cursor-default flex items-center hover:text-mainBlue group">
                        What's Included <IoIosArrowDown className="ml-1.5 group-hover:rotate-180 duration-300"/>
                        <div
                            className="absolute w-fit bg-white end-0 top-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-md border border-[#ebecef] p-8 z-10">
                            <div className="grid lg:grid-cols-4 gap-5">
                                <div className="flex items-start">
                                    <div className="pt-1 w-[25px] h-[25px] me-3">
                                        <img src={fbMarketplaceIcon} alt="" className="max-w-[25px]"/>
                                    </div>
                                    <div>
                                        <div className="text-blueTextDark mb-1">
                                            Facebook Marketplace
                                        </div>
                                        <div className="font-light text-sm text-grayTextColor">
                                            Auto-magically post and update vehicles to any personal profile
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="pt-1 w-[25px] h-[25px] me-3">
                                        <img src={craigslist_icon} alt="" className="max-w-[25px]"/>
                                    </div>
                                    <div>
                                        <div className="text-blueTextDark mb-1">
                                            Craigslist (COMING SOON!)
                                        </div>
                                        <div className="font-light text-sm text-grayTextColor">
                                            Automation. $5 pass thru per post, no mark up.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="pt-1 w-[25px] h-[25px] me-3">
                                        <img src={micro_icon} alt="" className="max-w-[25px]"/>
                                    </div>
                                    <div>
                                        <div className="text-blueTextDark mb-1">
                                            Micro-Campaigns
                                        </div>
                                        <div className="font-light text-sm text-grayTextColor">
                                            Small ads for seasonal offers, holiday specials, and more...
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="pt-1 w-[25px] h-[25px] me-3">
                                        <img src={realtime_icon} alt="" className="max-w-[25px]"/>
                                    </div>
                                    <div>
                                        <div className="text-blueTextDark mb-1">
                                            Real-Time Inventory
                                        </div>
                                        <div className="font-light text-sm text-grayTextColor">
                                            Always display the correct data on any platform.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="pt-1 w-[25px] h-[25px] me-3">
                                        <img src={advanced_icon} alt="" className="max-w-[25px]"/>
                                    </div>
                                    <div>
                                        <div className="text-blueTextDark mb-1">
                                            Advanced Targeting
                                        </div>
                                        <div className="font-light text-sm text-grayTextColor">
                                            AutoTrader, Cars.com, etc.. Follow shoppers on Facebook and Instagram!
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="pt-1 w-[25px] h-[25px] me-3">
                                        <img src={vin_icon} alt="" className="max-w-[25px]"/>
                                    </div>
                                    <div>
                                        <div className="text-blueTextDark mb-1">
                                            VIN Specific Leads
                                        </div>
                                        <div className="font-light text-sm text-grayTextColor">
                                            Collect all the data from each lead for better follow up
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="pt-1 w-[25px] h-[25px] me-3">
                                        <img src={integrations_icon} alt="" className="max-w-[25px]"/>
                                    </div>
                                    <div>
                                        <div className="text-blueTextDark mb-1">
                                            Integrations
                                        </div>
                                        <div className="font-light text-sm text-grayTextColor">
                                            Sync lead flow directly to any CRM or email
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="pt-1 w-[25px] h-[25px] me-3">
                                        <img src={inventory_icon} alt="" className="max-w-[25px]"/>
                                    </div>
                                    <div>
                                        <div className="text-blueTextDark mb-1">
                                            Inventory Manager
                                        </div>
                                        <div className="font-light text-sm text-grayTextColor">
                                            Take full control of your inventory data today, send to any 3rd party
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={routerPaths.pricing} className="font-bold hover:text-mainBlue">
                            Pricing
                        </Link>
                    </div>
                    <div>
                        {pageTitle === 'Pricing' ? (
                            <Link to={routerPaths.scheduler}
                                  className="font-bold text-white bg-mainBlue hover:bg-mainBlueHover px-[30px] py-2.5 rounded-sm shadow-blueBtn inline-block">
                                Talk to Sales
                            </Link>
                        ) : (
                            <Link to={routerPaths.pricing}
                                  className="font-bold text-white bg-mainBlue hover:bg-mainBlueHover px-[40px] py-2.5 rounded-sm shadow-blueBtn inline-block">
                                TRY IT FREE
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className={`absolute top-0 left-0 w-full bg-mainBackground shadow p-6 transform transition-transform duration-500 ease-in-out ${
                    openedMobileNav ? 'translate-y-[65px]' : '-translate-y-full'
                } md:hidden`}
            >
                <Link to={routerPaths.pricing}
                      className="font-bold bg-white py-3 rounded-lg block text-center">
                    Pricing
                </Link>
                {pageTitle === 'Pricing' ? (
                    <Link to={routerPaths.scheduler}
                          className="font-bold text-white bg-mainBlue py-3 rounded-lg block text-center mt-6">
                        Talk to Sales
                    </Link>
                ) : (
                    <Link to={routerPaths.pricing}
                          className="font-bold text-white bg-mainBlue py-3 rounded-lg block text-center mt-6">
                        TRY IT FREE
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;