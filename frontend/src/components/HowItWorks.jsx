import { steps } from "../data/response.js";

const HowItWorks = () => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          How It Works
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {steps.map((step) => (
            <div key={step.id} className="relative h-full">
              {/* Arrow */}
              {step.id !== 4 && (
                <span className="hidden xl:block absolute -right-7 top-1/2 -translate-y-1/2 text-4xl text-gray-300 font-light">
                  →
                </span>
              )}

              {/* Card */}
              <div className="h-full flex flex-col rounded-3xl border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-5">
                {/* Image Box */}
                <div
                  className={`w-full h-52 rounded-2xl ${step.bg} flex items-center justify-center overflow-hidden`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Number */}
                <div
                  className={`mt-5 w-9 h-9 rounded-full ${step.color} text-white font-semibold flex items-center justify-center`}
                >
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-gray-900 min-h-[60px]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-7 flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
