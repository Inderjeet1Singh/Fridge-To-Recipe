import heroImage from "../assets/images/heroImage1.png";
import { Link } from "react-router-dom";
import Button from "./Button";
const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Turn Your Fridge Into
            </h1>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-green-600 mt-2">
              Delicious Recipes
            </h1>

            <p className="mt-6 text-gray-500 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Tell our AI what ingredients you have, and instantly receive
              personalized recipes with step-by-step cooking instructions.
            </p>

            <Button />
          </div>

          {/* Right Side HeroImage */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="AI Recipe Generator"
              className="
                w-full
                max-w-xs
                sm:max-w-md
                md:max-w-lg
                lg:max-w-xl
                xl:max-w-2xl
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
