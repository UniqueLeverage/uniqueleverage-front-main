import { useEffect } from "react";

const PIXEL_ID = "444873424895475";

declare global {
    interface Window {
        fbq?: (...args: any[]) => void;
    }
}

export function useFacebookPixel() {
    useEffect(() => {
        if (typeof window.fbq !== "undefined") return; // Prevent double-loading

        (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
            if (f.fbq) return;
            n = f.fbq = function () {
                (n!.callMethod ? n.callMethod.apply(n, arguments) : n!.queue.push(arguments));
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = true;
            n.version = "2.0";
            n.queue = [];
            t = b.createElement(e);
            t.async = true;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

        window.fbq!("init", PIXEL_ID);
        window.fbq!("track", "PageView");
    }, []);
}