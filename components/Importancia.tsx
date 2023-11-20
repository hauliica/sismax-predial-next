import React from 'react';
import {RocketIcon} from "@radix-ui/react-icons";

const importanciaList = [
  {
    title: "Servicios públicos",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios públicos como alumbrado, recolección de basura, mantenimiento de calles, etc.",
    icon: <RocketIcon/>,
  },
  {
    title: "Servicios de emergencia",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de emergencia como bomberos, policía, ambulancias, etc.",
    icon: <RocketIcon/>,
  },
  {
    title: "Servicios de salud",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de salud como hospitales, clínicas, centros de salud, etc.",
    icon: <RocketIcon/>,
  },
  {
    title: "Servicios de educación",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de educación como escuelas, universidades, bibliotecas, etc.",
    icon: <RocketIcon/>,
  },
  {
    title: "Servicios de transporte",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de transporte como carreteras, puentes, transporte público, etc.",
    icon: <RocketIcon/>,
  },
  {
    title: "Servicios de recreación",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de recreación como parques, centros deportivos, etc.",
    icon: <RocketIcon/>,
  },
  {
    title: "Servicios de infraestructura",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de infraestructura como drenaje, agua potable, etc.",
    icon: <RocketIcon/>,
  }
];

const ImpactPoint: React.FC<{ title: string, description: string, icon: JSX.Element }> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const PayTaxesSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#ff9836]">Importance of Paying Property Taxes</h1>
          <p className="mt-2 text-lg text-gray-700">Understanding the impact of your contribution</p>
        </div>

        {/* Example Impact Point */}
        <ImpactPoint
          title="Education Funding"
          description="Your taxes help maintain and improve local schools."
          icon={<svg>...</svg>}
        />

        {/* More Impact Points... */}

        <div className="mt-10 text-center">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors">
            Pay Your Property Tax Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PayTaxesSection;
