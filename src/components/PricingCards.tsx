import { openWhatsApp } from '../utils/whatsapp';

const PricingCards = () => (
  <section id="planes" className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Elige el plan perfecto para ti</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Sin letras chiquitas. Solo la mejor conexión para tu hogar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Solo Internet */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group flex flex-col h-full">
          <div className="mb-6">
            <span className="text-claro-red font-bold text-sm uppercase">Internet Ultrarrápido</span>
            <h3 className="text-3xl font-bold mt-2">500 o 900 Megas</h3>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-slate-500 text-lg">$</span>
              <span className="text-5xl font-extrabold text-slate-900">79.900</span>
              <span className="text-slate-500 ml-1">/mes</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "500 o 900 Megas de Fibra",
              "Telefonía Fija Ilimitada",
              "Modem WiFi de alta potencia",
              "Soporte técnico 24/7"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center text-slate-600 font-medium">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mb-8">
            <span className="bg-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 uppercase">Prime Video Incluido</span>
          </div>
          <button
            onClick={() => openWhatsApp("Internet Hogar 500/900 Megas")}
            className="w-full mt-auto py-4 rounded-2xl font-bold border-2 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
            Solicitar ahora
          </button>
        </div>

        {/* Internet + TV (Popular) */}
        <div className="relative bg-white p-10 rounded-[32px] border-4 border-claro-red shadow-2xl md:scale-105 z-10 overflow-hidden flex flex-col h-full">
          <div className="absolute top-0 right-0 bg-claro-red text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-xl">
            Lo más elegido
          </div>
          <div className="mb-6">
            <span className="text-claro-red font-bold text-sm uppercase">Internet + TV</span>
            <h3 className="text-4xl font-extrabold mt-2 leading-tight">Intermedio Plus</h3>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-slate-500 text-lg">Desde $</span>
              <span className="text-6xl font-black text-slate-900">119.900</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Fibra 500 o 900 Megas",
              "TV Digital Intermedio Plus",
              "1 Deco HD + 1 Deco Digital",
              "Telefonía Fija Ilimitada Nacional",
              "1 Asistencia a elección",
              "McAfee Premium (3 equipos)"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start text-slate-900 font-medium">
                <div className="w-6 h-6 bg-claro-red rounded-full flex items-center justify-center mr-3 mt-0.5 shadow-lg shadow-claro-red/20 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600">Disfruta 2 Apps a elección:</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">Netflix</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">HBO Max</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">Prime Video</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">Disney+</span>
            <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-800">Win+ Fútbol</span>
          </div>
          <button
            onClick={() => openWhatsApp("Internet + TV Digital Intermedio Plus")}
            className="w-full mt-auto py-5 rounded-2xl font-black bg-claro-red text-white shadow-xl shadow-claro-red/30 hover:scale-[1.02] transition-all uppercase tracking-wider">
            ¡Lo quiero ya!
          </button>
        </div>

        {/* Solo TV */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-all group flex flex-col h-full">
          <div className="mb-6">
            <span className="text-claro-red font-bold text-sm uppercase">Solo Televisión</span>
            <h3 className="text-3xl font-bold mt-2 leading-tight">TV Digital<br />Plus</h3>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-slate-500 text-lg">$</span>
              <span className="text-5xl font-extrabold text-slate-900">104.900</span>
              <span className="text-slate-500 ml-1">/mes</span>
            </div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              "Televisión Digital Intermedio Plus",
              "1 Deco HD incluido",
              "Calidad increíble de imagen",
              "Tus canales y deportes favoritos"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center text-slate-600 font-medium">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mb-8">
            <span className="bg-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 uppercase">1 App a elección</span>
          </div>
          <button
            onClick={() => openWhatsApp("TV Digital Intermedio Plus")}
            className="w-full mt-auto py-4 rounded-2xl font-bold border-2 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
            Solicitar ahora
          </button>
        </div>

      </div>
    </div>
  </section>
);

export default PricingCards;
