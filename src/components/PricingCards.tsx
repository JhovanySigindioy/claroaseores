import { openWhatsApp } from '../utils/whatsapp';
import { homePlans } from '../data/plans';

const PricingCards = () => (
  <section id="planes" className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Ofertas Hogar Marzo 2026</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">La mejor tecnología en Fibra Óptica y Entretenimiento para tu casa.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {homePlans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative p-8 rounded-[32px] border-2 transition-all flex flex-col h-full ${
              plan.recommended 
                ? 'bg-white border-claro-red shadow-2xl md:scale-105 z-10' 
                : 'bg-slate-50 border-slate-200 hover:shadow-xl'
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-claro-red text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-xl">
                Más Elegido
              </div>
            )}
            
            <div className="mb-6">
              <span className="text-claro-red font-bold text-sm uppercase">{plan.highlight}</span>
              <h3 className={`font-bold mt-2 ${plan.recommended ? 'text-4xl' : 'text-3xl'}`}>{plan.name}</h3>
              <p className="text-slate-500 font-medium">{plan.subtitle}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline">
                {plan.price.includes("Desde") ? "" : <span className="text-slate-500 text-lg">$</span>}
                <span className={`font-black text-slate-900 ${plan.recommended ? 'text-6xl' : 'text-5xl'}`}>
                  {plan.price}
                </span>
                {!plan.price.includes("Desde") && <span className="text-slate-500 ml-1">/mes</span>}
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-slate-600 font-medium">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${
                    plan.recommended ? 'bg-claro-red' : 'bg-green-100'
                  }`}>
                    <svg className={`w-3 h-3 ${plan.recommended ? 'text-white' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {plan.apps && (
              <div className="flex flex-wrap gap-2 mb-8">
                {plan.apps.map(app => (
                  <span key={app} className="bg-slate-200 px-2 py-1 rounded text-[10px] font-bold text-slate-700">{app}</span>
                ))}
              </div>
            )}

            <button
              onClick={() => openWhatsApp(plan.name)}
              className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.recommended 
                  ? 'bg-claro-red text-white shadow-xl shadow-claro-red/30 hover:scale-[1.02]' 
                  : 'border-2 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white'
              }`}
            >
              Solicitar ahora
            </button>
          </div>
        ))}
      </div>
      
      {/* Promo text from PDF */}
      <div className="mt-16 p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center text-sm text-slate-500 italic">
        * Toda la oferta incluye CLARO DRIVE. Por $6.300 adicionales puedes tomar Multiasistencias. 
        Oferta con Ultrawifi disponible por $10.900 mensuales adicionales.
      </div>
    </div>
  </section>
);

export default PricingCards;
