import aboutImage from "../assets/images/about.png";
import { CheckCircle, Sparkles, UtensilsCrossed } from "lucide-react";

const About = () => {
  return (
    <section className=" w-screen h-auto lg:h-screen relative overflow-hidden py-15 lg:py-10 bg-gradient-to-br from-[#FFFDF6] via-[#F8FCF5] to-[#ECFDF5]">
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-green-200 rounded-full blur-[140px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-200 rounded-full blur-[120px] opacity-25"></div>

      <div className="relative max-w-8xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full lg:-mt-15">
              <img
                src={aboutImage}
                alt="About"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
              <Sparkles size={18} />
              ABOUT RECIPE AI
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-slate-900">
              Transform Your
              <span className="block text-green-600">
                Kitchen Into A Smart Chef
              </span>
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Recipe AI helps you discover delicious meals using the ingredients
              already available in your kitchen. Simply enter your ingredients,
              and receive AI-generated recipes, ingredient swaps, serving
              suggestions, and easy step-by-step cooking instructions in
              seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
