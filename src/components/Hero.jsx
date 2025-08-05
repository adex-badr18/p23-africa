import heroBgDesktop from "../assets/hero-bg-desktop.png";
import heroPatternDesktop from "../assets/hero-pattern-desktop.png";
import heroImgDesktop from "../assets/hero-img-desktop.png";
import heroBgMobile from "../assets/hero-bg-mobile.png";
import heroPatternMobile from "../assets/hero-pattern-mobile.png";
import heroImgMobile from "../assets/hero-img-mobile.png";
import gradient from "../assets/hero-gradient.png";

const Hero = () => {
    return (
        <section
            className={`min-h-screen w-full overflow-hidden font-walsheim bg-white bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url(${heroBgDesktop})` }}
        >
            {/* Desktop */}
            <div className="container mx-auto hidden md:flex py-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 lg:gap-8">
                    {/* Graphics Pattern */}
                    <div className="hidden md:flex justify-center items-center">
                        <img
                            src={heroPatternDesktop}
                            className="w-full max-w-md h-auto object-contain"
                            alt="Decorative graphic pattern"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="relative flex flex-col items-start text-left">
                        {/* <div
                            className="absolute top-40 right-20 lg:right-60 w-[500px] h-[500px] lg:w-[600px] lg:h-[500px] bg-green-900 rounded-full blur-xl"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(204,237,96,0.2) 0%, rgba(204,237,96,0) 60%)",
                            }}
                        ></div> */}

                        <h1 className="font-montserrat text-4xl lg:text-5xl leading-tig flex flex-col tracking-[0.5px] text-[#0D4036]">
                            <span className="font-extrabold">
                                Gaining Knowledge
                            </span>
                            <span className="">Through Connection</span>
                        </h1>

                        <div className="mt-12 w-full relative">
                            <img
                                src={gradient}
                                alt="Gradient design"
                                className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 z-10"
                            />
                            <img
                                src={heroImgDesktop}
                                alt="Testimonials from professionals"
                                className="w-full max-w-3xl h-auto object-contain z-30"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="container mx-auto md:hidden py-8 px-5">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="font-montserrat text-3xl flex flex-col tracking-[0.5px] text-[#0D4036]">
                        <span className="font-extrabold">
                            Gaining Knowledge
                        </span>
                        <span className="">Through Connection</span>
                    </h1>

                    {/* Right Column */}
                    <div className="relative flex flex-col items-start text-left">
                        <div className="mt-12 w-full relative">
                            <img
                                src={heroImgMobile}
                                alt="Testimonials from professionals"
                                className="w-full max-w-3xl h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Graphics Pattern */}
                    <div className="md:hidden">
                        <img
                            src={heroPatternMobile}
                            className="w-full max-w-md h-auto object-contain"
                            alt="Decorative graphic pattern"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
