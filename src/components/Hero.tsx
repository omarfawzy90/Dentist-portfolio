export default function Hero() {
  return (
    <section className="min-h-screen bg-blue-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="flex flex-col gap-y-4 text-6xl">
              <h1 className="tracking-tight">
                Dr. Omar
                <span className="block font-normal text-slate-600">Fawzy</span>
              </h1>

              <div className="w-20 h-px bg-blue-400 mx-auto lg:mx-0"></div>

              <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                Creating beautiful smiles with gentle,
                <span className="text-blue-600"> compassionate care </span>
                for over 15 years
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
              <span>BDS, BUE</span>
              <span>•</span>
              <span>Cosmetic Dentistry</span>
              <span>•</span>
              <span>Implant Specialist</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-100 rounded-full transform scale-110 opacity-60"></div>

              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="\DrOmarFawzy.jpg"
                  alt="Dr Omar Fawzy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-slate-400 rounded-full opacity-15 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
