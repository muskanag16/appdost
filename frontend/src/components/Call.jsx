export default function CallToAction() {
  return (
    <div className="bg-black py-24 w-full flex justify-center">
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900
                      rounded-3xl p-16 shadow-2xl hover:shadow-3xl transition-shadow duration-500
                      w-full max-w-[1400px] text-center text-white">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-white/80 mb-10 text-xl md:text-2xl">
          Contact us today to discuss your project requirements
        </p>
        <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold px-12 py-4 rounded-full
                           text-xl md:text-2xl transition-colors duration-300">
          Start Your Project
        </button>
      </div>
    </div>
  );
}



