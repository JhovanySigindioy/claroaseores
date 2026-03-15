import { openWhatsApp } from '../utils/whatsapp';
import { mobilePlans } from '../data/plans';

const MobilePlansSection = () => (
  <section id="movil" className="py-24 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-claro-red/20 rounded-full blur-[120px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Lleva lo mejor de <span className="text-claro-red">Claro Móvil</span>
        </h2>
        <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">Minutos ilimitados a todo destino, redes sociales sin consumir datos y navegación extrema.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {mobilePlans.map((plan) => (
          <div 
            key={plan.id}
            className={`p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
              plan.recommended 
                ? 'bg-claro-red/10 border-2 border-claro-red shadow-2xl shadow-claro-red/20 md:-translate-y-4 hover:-translate-y-6 z-10' 
                : 'dark-glass-effect hover:-translate-y-2'
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-claro-red text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-bl-xl">
                Popular
              </div>
            )}
            
            <div>
              <h4 className={`font-black mb-1 ${plan.recommended ? 'text-5xl' : 'text-4xl'}`}>
                {plan.name.split(' ')[0]} <span className="text-xl">{plan.name.split(' ')[1] || ''}</span>
              </h4>
              <p className={`text-sm font-medium mb-6 ${plan.recommended ? 'text-white/80' : 'text-slate-400'}`}>
                {plan.features.join('. ')}
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-black text-white mb-6">
                ${plan.price}
              </div>
              <button 
                onClick={() => openWhatsApp(`Plan Móvil ${plan.name}`)}
                className={`w-full py-3 rounded-xl font-bold transition-all uppercase tracking-wide ${
                  plan.recommended 
                    ? 'bg-white text-claro-red hover:bg-slate-100' 
                    : 'bg-claro-red hover:bg-red-500 text-white'
                }`}
              >
                Lo quiero
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MobilePlansSection;
