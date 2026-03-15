import { openWhatsApp } from '../utils/whatsapp';

const MobilePlansSection = () => (
  <section id="movil" className="py-24 bg-slate-900 text-white relative">
    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-claro-red/20 rounded-full blur-[120px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Lleva lo mejor de <span className="text-claro-red">Claro Móvil</span>
        </h2>
        <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">Minutos ilimitados a todo destino, redes sociales sin consumir datos y navegación extrema.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Plan 1 */}
        <div className="dark-glass-effect p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
          <div>
            <h4 className="text-4xl font-black mb-1">65 <span className="text-xl">GB</span></h4>
            <p className="text-slate-400 text-sm font-medium mb-6">Minutos ilimitados y redes sin consumo.</p>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-6">$53.900</div>
            <button onClick={() => openWhatsApp("Postpago 65GB")} className="w-full py-3 bg-claro-red hover:bg-red-500 rounded-xl font-bold transition-colors">Lo quiero</button>
          </div>
        </div>

        {/* Plan 2 */}
        <div className="dark-glass-effect p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
          <div>
            <h4 className="text-4xl font-black mb-1">75 <span className="text-xl">GB</span></h4>
            <p className="text-slate-400 text-sm font-medium mb-6">+ Amazon Prime. Redes, minutos y LDI ilimitados.</p>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-6">$56.900</div>
            <button onClick={() => openWhatsApp("Postpago 75GB")} className="w-full py-3 bg-claro-red hover:bg-red-500 rounded-xl font-bold transition-colors">Lo quiero</button>
          </div>
        </div>

        {/* Plan 3 (Recomendado) */}
        <div className="bg-claro-red/10 border-2 border-claro-red p-6 rounded-3xl flex flex-col justify-between relative md:-translate-y-4 hover:-translate-y-6 transition-transform duration-300 shadow-2xl shadow-claro-red/20 overflow-hidden z-10">
          <div className="absolute top-0 right-0 bg-claro-red text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-bl-xl">
            Recomendado
          </div>
          <div className="pt-2">
            <h4 className="text-5xl font-black mb-1 text-white">100 <span className="text-xl">GB</span></h4>
            <p className="text-white/80 text-sm font-medium mb-6">+ Amazon Prime, Claro Video, Drive, Música. LDI ilimitado.</p>
          </div>
          <div>
            <div className="text-4xl font-black text-white mb-6">$65.900</div>
            <button onClick={() => openWhatsApp("Postpago 100GB")} className="w-full py-4 bg-white text-claro-red hover:bg-slate-100 rounded-xl font-black transition-colors uppercase tracking-wide">¡Lo quiero!</button>
          </div>
        </div>

        {/* Plan 4 */}
        <div className="dark-glass-effect p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
          <div>
            <h4 className="text-4xl font-black mb-1">130 <span className="text-xl">GB</span></h4>
            <p className="text-slate-400 text-sm font-medium mb-6">+ Amazon Prime. Todos los beneficios y más gigas.</p>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-6">$75.900</div>
            <button onClick={() => openWhatsApp("Postpago 130GB")} className="w-full py-3 bg-claro-red hover:bg-red-500 rounded-xl font-bold transition-colors">Lo quiero</button>
          </div>
        </div>

        {/* Plan 5 */}
        <div className="bg-gradient-to-b from-indigo-900/80 to-slate-900 border border-indigo-500/30 p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
          <div>
            <h4 className="text-4xl font-black mb-1 text-indigo-400">Libre</h4>
            <p className="text-indigo-200/70 text-sm font-medium mb-6">Datos Ilimitados + Netflix + Amazon Prime. El plan máximo.</p>
          </div>
          <div>
            <div className="text-3xl font-black text-white mb-6">$99.900</div>
            <button onClick={() => openWhatsApp("Postpago Libre")} className="w-full py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold transition-colors">Lo quiero</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MobilePlansSection;
