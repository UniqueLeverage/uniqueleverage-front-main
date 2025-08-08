import { useEffect } from "react";

const Scheduler = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div
                className="calendly-inline-widget w-screen h-screen"
                data-url="https://calendly.com/uniqueleverage/scheduler"
            ></div>
        </div>
    );
};

export default Scheduler;
