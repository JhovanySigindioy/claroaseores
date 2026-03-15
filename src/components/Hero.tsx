const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-claro-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left hidden md:block">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-claro-red/10 text-claro-red text-sm font-bold mb-6 border border-claro-red/20 uppercase tracking-widest">
              Ofertas Exclusivas
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Navega a la velocidad de la <span className="text-claro-red">luz</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Conecta tu hogar con la Fibra Óptica más estable del país. Planes diseñados para streaming, gaming pro y teletrabajo sin interrupciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('planes')}
                className="px-8 py-4 bg-claro-red text-white font-bold rounded-2xl shadow-2xl shadow-claro-red/40 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
              >
                Ver Planes Fibra
              </button>
              <button 
                onClick={() => scrollToSection('movil')}
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-xl border border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center cursor-pointer"
              >
                Planes Móviles
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none relative md:mt-0">
            <div className="relative z-10 animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-claro-red to-orange-500 rounded-3xl rotate-3 scale-105 opacity-10"></div>
              <img alt="Claro Lifestyle" className="rounded-3xl shadow-2xl object-cover relative z-10 w-full" src="/img/claro_hogar.jpeg" />
              
              {/* Mobile buttons overlaid on/below image for mobile only */}
              <div className="md:hidden flex flex-col gap-3 mt-6 relative z-50">
                <button 
                  onClick={() => scrollToSection('planes')}
                  className="w-full py-4 bg-claro-red text-white font-black rounded-2xl shadow-2xl shadow-claro-red/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center uppercase tracking-wide cursor-pointer"
                >
                  Ver Planes Hogar
                </button>
                <button 
                  onClick={() => scrollToSection('movil')}
                  className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl shadow-xl hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center uppercase tracking-wide cursor-pointer"
                >
                  Ver Planes Móviles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
