import { openWhatsApp } from '../utils/whatsapp';
import { homePlans } from '../data/plans';

const PricingCards = () => (
  <section id="planes" className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Ofertas Hogar Marzo 2026</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Desliza para ver todos nuestros planes de Fibra Óptica y Entretenimiento.</p>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {homePlans.map((plan) => (
          <div 
            key={plan.id}
            className={`flex-none w-[300px] sm:w-[320px] snap-start relative p-6 rounded-[28px] border-2 transition-all flex flex-col h-[520px] ${
              plan.recommended 
                ? 'bg-white border-claro-red shadow-2xl z-10' 
                : 'bg-slate-50 border-slate-200 hover:shadow-lg'
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-claro-red text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-bl-xl">
                Más Elegido
              </div>
            )}
            
            <div className="mb-4">
              <span className="text-claro-red font-bold text-[10px] uppercase tracking-wider">{plan.highlight}</span>
              <h3 className={`font-bold mt-1 leading-tight ${plan.recommended ? 'text-2xl' : 'text-xl'}`}>{plan.name}</h3>
              <p className="text-slate-500 text-xs font-medium">{plan.subtitle}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-slate-500 text-sm">$</span>
                <span className={`font-extrabold text-slate-900 ${plan.recommended ? 'text-4xl' : 'text-3xl'}`}>
                  {plan.price}
                </span>
                <span className="text-slate-400 text-xs ml-1">/mes</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 flex-grow overflow-hidden">
              {plan.features.slice(0, 6).map((feature, idx) => (
                <li key={idx} className="flex items-start text-slate-600 text-xs font-medium">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 ${
                    plan.recommended ? 'bg-claro-red' : 'bg-green-100'
                  }`}>
                    <svg className={`w-2.5 h-2.5 ${plan.recommended ? 'text-white' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                    </svg>
                  </div>
                  <span className="truncate">{feature}</span>
                </li>
              ))}
            </ul>

            {plan.apps && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {plan.apps.slice(0, 4).map(app => (
                  <span key={app} className="bg-slate-200 px-2 py-0.5 rounded-full text-[9px] font-bold text-slate-700">{app}</span>
                ))}
              </div>
            )}

            <button
              onClick={() => openWhatsApp(plan.name)}
              className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                plan.recommended 
                  ? 'bg-claro-red text-white shadow-lg shadow-claro-red/30 hover:scale-[1.02]' 
                  : 'border-2 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white'
              }`}
            >
              Solicitar ahora
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center text-[10px] text-slate-500 italic max-w-3xl mx-auto leading-tight">
        * Toda la oferta incluye CLARO DRIVE. Por $6.300 adicionales cualquier Multiasistencia. 
        Oferta con Ultrawifi disponible por $10.900 mensuales adicionales. Aplica según cobertura y tecnología (HFC/FTTH).
      </div>
    </div>
  </section>
);

export default PricingCards;
