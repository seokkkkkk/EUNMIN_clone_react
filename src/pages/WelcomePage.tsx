import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();
    const welcomeTextRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleAnimationEnd = () => {
            navigate("/main");
        };

        const element = welcomeTextRef.current;
        element?.addEventListener("animationend", handleAnimationEnd);

        return () => {
            element?.removeEventListener("animationend", handleAnimationEnd);
        };
    }, [navigate]);

    return (
        <div className="grid place-items-center h-screen">
            <h1
                id="welcome-text"
                ref={welcomeTextRef}
                className="text-4xl animate-squash font-ns"
            >
                Value of Better Life
            </h1>
        </div>
    );
};

export default WelcomePage;
