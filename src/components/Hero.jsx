import heroBgDesktop from "../assets/hero-bg-desktop.png";
import heroPatternDesktop from "../assets/hero-pattern-desktop.png";
import heroImgDesktop from "../assets/hero-img-desktop.png";
import heroBgMobile from "../assets/hero-bg-mobile.png";
import heroPatternMobile from "../assets/hero-pattern-mobile.png";
import heroImgMobile from "../assets/hero-img-mobile.png";

const Hero = () => {
    return (
        <div
            className={`min-h-screen bg-white bg-no-repeat bg-cover py-20`}
            style={{ backgroundImage: `url(${heroBgDesktop})` }}
        >
            <div className="container mx-auto hidden md:flex gap-[76px]">
                <div className="h-[686px]">
                    <img src={heroPatternDesktop} className="" alt="Brand pattern" />
                </div>

                <div className="flex flex-col flex-1">
                    <h2 className="font-montserrat text-[65px] leading-[75px] flex flex-col items-center tracking-[0.5px] text-[#0D4036]">
                        <span className="font-extrabold">
                            Gaining Knowledge
                        </span>
                        <span className="">Through Connection</span>
                    </h2>
                    <div
                        className={`relative h-[496.77px] bg-transparent bg-cover bg-center`}
                        style={{backgroundImage: `url(${heroImgDesktop})`}}
                    >
                        <div className="absolute w-[635.09px] h-[133.71px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#51D790] to-[#2CBC70] blur-[100px] rotate-[32.96deg]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
