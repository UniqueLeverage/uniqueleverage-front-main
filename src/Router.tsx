import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Pricing, TermsOfService, PrivacyPolicy, CookiePolicy, Scheduler} from "./pages";
import routerPaths from "./routerPaths";
import {ScrollRestoration} from "./components";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollRestoration/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={routerPaths.home} element={<Home/>}/>
                <Route path={routerPaths.pricing} element={<Pricing/>}/>
                <Route path={routerPaths.terms} element={<TermsOfService/>}/>
                <Route path={routerPaths.privacy} element={<PrivacyPolicy/>}/>
                <Route path={routerPaths.cookie} element={<CookiePolicy/>}/>
                <Route path={routerPaths.scheduler} element={<Scheduler/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;