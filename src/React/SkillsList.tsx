import { useState } from "react";
import { MdLightbulbOutline } from 'react-icons/md';
import { FaServer, FaCode } from 'react-icons/fa';
import { FiLayout } from 'react-icons/fi';

const CategoryIcons = {
  "Desarrollo de Aplicaciones Web Avanzadas": (
    <FaCode size="1.75rem" color="rgba(164, 118, 255, 0.7)" />
  ),
  "Diseño y Maquetación": (
    <FiLayout size="1.75rem" color="rgba(164, 118, 255, 0.7)" />
  ),
  "Servicios de Infraestructura Digital": (
    <FaServer size="1.75rem" color="rgba(164, 118, 255, 0.7)" />
  ),
  "Inteligencia artificial": (
    <MdLightbulbOutline size="1.75rem" color="rgba(164, 118, 255, 0.7)" />
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Desarrollo de Aplicaciones Web Avanzadas": [
      "Creación de sitios web dinámicos y personalizados, adaptados a tus necesidades.",
      "Soluciones de comercio electrónico con integración de pasarelas de pago (PayPal, Mercado Pago, Stripe).",
      "Desarrollo de sistemas de reservas para cabañas, departamentos y otros servicios.",
      "Integración de APIs de terceros (Google Maps, OpenWeather, etc.).",
      "Optimización de sitios web para SEO.",
      "Mantenimiento y actualización de sitios web existentes.",
      "Desarrollo de aplicaciones web progresivas (PWA).",        
    ],
    "Diseño y Maquetación": [
      "Diseño web profesional utilizando las últimas tecnologías y frameworks (Tailwind CSS, Astro, Next.js).",
      "Creación de interfaces de usuario (UI) y experiencias de usuario (UX) atractivas y funcionales.",
      "Maquetación de sitios web responsivos y accesibles para todos los dispositivos.",
    ],
    "Inteligencia artificial": [
      "En un mundo en constante evolución, la integración inteligente de tecnologías marca la diferencia.",
      "Con más de 20 años de experiencia en desarrollo de sistemas, hoy enfoco mi trabajo en crear soluciones que no solo optimizan procesos y aumentan la rentabilidad, sino que también promueven un crecimiento organizado y consciente.",
      "Incorporo Inteligencia Artificial en sistemas de gestión, e-commerce y plataformas de análisis de datos, ayudando a empresas a obtener información valiosa, mejorar su productividad y tomar decisiones estratégicas.",
      "Cada proyecto que desarrollo busca impactar positivamente en la vida de las personas y en el progreso real de las organizaciones."
    ],
    "Servicios de Infraestructura Digital": [
      "Gestión y administración de servidores cloud (AWS, DigitalOcean, Vercel, Netlify).",
      "Configuración de dominios, DNS y certificados SSL para máxima seguridad.",
      "Implementación de CDN y optimización de rendimiento para tiempos de carga ultrarrápidos.",
      "Monitoreo 24/7, copias de seguridad automáticas y planes de recuperación ante desastres.",
      "Escalabilidad automática según demanda y optimización de costos de infraestructura.",
      "Implementación de sistemas de CI/CD para despliegues automatizados y sin interrupciones."
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-0">
      <ul className="space-y-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[600px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[250px] md:max-w-none overflow-hidden flex-grow">
                    <span className="block truncate text-[var(--white)] text-lg leading-tight">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ml-2 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="pl-1 mt-1 flex-shrink-0">•</span>
                      <li className="pl-3 whitespace-pre-line leading-relaxed">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
