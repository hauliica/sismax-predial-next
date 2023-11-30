import { HeroImage } from "@/assets/HeroImage";
import { VentajasSVG } from "@/assets/VentajasIllustration";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import {
  DoubleArrowUpIcon,
  LockClosedIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { verificaCuentaFolio } from "@/app/lib/actions";
import {
  AlertTriangleIcon,
  BookIcon,
  BuildingIcon,
  HeartIcon,
} from "lucide-react";

const defaultFeatures = [
  {
    name: "Paga en línea rápido y seguro",
    description:
      "Paga tu impuesto predial de manera rápida y segura desde la comodidad de tu hogar. Evita largas filas y tiempos de espera.",
    icon: <DoubleArrowUpIcon />,
  },
  {
    name: "Certificados SSL",
    description:
      "Tus transacciones en línea están protegidas con certificados SSL avanzados para garantizar la seguridad de tus datos.",
    icon: <LockClosedIcon />,
  },
  {
    name: "Respaldo de bases de datos",
    description:
      "Tus datos y registros están respaldados de manera segura para garantizar la integridad de la información.",
    icon: <RocketIcon />,
  },
];

const importanciaList = [
  {
    title: "Servicios públicos",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios públicos como alumbrado, recolección de basura, mantenimiento de calles, etc.",
    icon: <RocketIcon />,
  },
  {
    title: "Servicios de emergencia",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de emergencia como bomberos, policía, ambulancias, etc.",
    icon: <RocketIcon />,
  },
  {
    title: "Servicios de salud",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de salud como hospitales, clínicas, centros de salud, etc.",
    icon: <RocketIcon />,
  },
  {
    title: "Servicios de educación",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de educación como escuelas, universidades, bibliotecas, etc.",
    icon: <RocketIcon />,
  },
  {
    title: "Servicios de transporte",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de transporte como carreteras, puentes, transporte público, etc.",
    icon: <RocketIcon />,
  },
  {
    title: "Servicios de recreación",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de recreación como parques, centros deportivos, etc.",
    icon: <RocketIcon />,
  },
  {
    title: "Servicios de infraestructura",
    description:
      "Los impuestos de propiedad se utilizan para financiar servicios de infraestructura como drenaje, agua potable, etc.",
    icon: <RocketIcon />,
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImportanciaSection />
      <VentajasSection />
      <CTASection />
      <FAQSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-0% via-30% bg-white/70 bg-blend-overlay  from-orange-100  via-orange-200 to-gray-50">
      <div className="absolute inset-0 pointer-events-none overflow-y-visible">
        <svg
          className="absolute bottom-0 left-0 transform scale-125"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            fill="white"
            fillOpacity="0.1"
            points="0,100 100,0 100,100"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 gap-8">
          {/* Textual Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="mt-12">
              <p className="text-sm tracking-tight text-orange-600 font-semibold mb-6">
                Estamos orgullosos de presentar
              </p>
              <h1 className="text-5xl lg:text-5xl scroll-m-20 leading-10 uppercase pr-12 bg-blend-overlay font-black tracking-tight text-gray-900/95">
                Un nuevo método para{" "}
                <span className="text-orange-600">pagar</span> <br></br> tu
                predial
              </h1>
            </div>
            <p className="text-md leading-7 text-gray-600">
              Te presentamos un sistema simple y eficiente que te permitirá
              pagar tu impuesto predial en línea, sin tener que salir de casa.
              Aprovecha esta nueva modalidad y evita filas y tiempos de espera.
            </p>
            <Link className="mt-4" href="#pago">
              <Button size="lg">¡PAGA AHORA!</Button>
            </Link>
          </div>

          {/* Illustrative Content */}
          <div className="flex justify-center lg:justify-end">
            <HeroImage className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportanciaSection() {
  return (
    <div className="w-full ">
      <div className="container px-6 lg:px-8 py-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold text-orange-500 tracking-wide uppercase">
            La Importancia de Pagar Nuestro Predial
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">
            Un Compromiso con la Comunidad
          </p>
          <p className="mt-3 text-lg text-gray-500">
            Tu contribución a través de los impuestos de propiedad es vital para
            mantener y mejorar los servicios locales.
          </p>
        </div>

        {/*// <!-- Service Block Rows -->*/}
        <div className="space-y-8">
          {/*// <!-- Service Row 1 -->*/}
          <div className="flex flex-row items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <BuildingIcon />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                Servicios públicos
              </h3>
              <p className="text-base text-gray-500">
                El impuesto predial se utiliza para financiar servicios públicos
                como alumbrado, recolección de basura y mantenimiento de calles.
              </p>
            </div>
          </div>
          {/*// <!-- Additional Service Rows -->*/}
          <ServiceBlock
            title="Servicios de emergencia"
            description="Los impuestos de propiedad se utilizan para financiar servicios de
              emergencia como bomberos, policía, ambulancias, etc."
            icon={<AlertTriangleIcon />}
            index={0}
          />
          <ServiceBlock
            title="Servicios de salud"
            description="Los impuestos de propiedad se utilizan para financiar servicios de
              salud como hospitales, clínicas, centros de salud, etc."
            icon={<HeartIcon />}
            index={1}
          />
          <ServiceBlock
            title="Servicios de educación"
            description="Los impuestos de propiedad se utilizan para financiar servicios de
              educación como escuelas, universidades, bibliotecas, etc."
            icon={<BookIcon />}
            index={2}
          />
        </div>
      </div>
    </div>
  );
}

function VentajasSection() {
  return (
    <div className="py-16 sm:py-8" id="ventajas">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-8">
            <div className="lg:max-w-lg">
              <h2 className="text-xs font-semibold text-orange-500 tracking-wide uppercase">
                Ventajas de Pagar en Línea
              </h2>
              <p className="mt-2 text-3xl font-bold text-gray-800 lg:text-4xl">
                Una forma más conveniente
              </p>
              <p className="mt-3 text-base tracking-tight text-gray-500">
                Pagar tus impuestos de propiedad en línea en la Ciudad de Acuña
                tiene ventajas significativas para ti y tu comunidad.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {defaultFeatures.map((feature, index) => (
                  <div key={index} className="relative pl-9">
                    <dt className="inline font-semibold mr-1 text-neutral-800">
                      <span className="absolute left-1 top-1 h-5 w-5 text-[#ff9836]">
                        {feature.icon}
                      </span>
                      {feature.name}
                    </dt>
                    <dd className="inline text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <VentajasSVG className="w-[48rem] max-w-none sm:w-full md:-ml-4 lg:-ml-0" />
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section
      id="pago"
      className=" w-full py-8 relative overflow-visible flex justify-center items-center"
    >
      <div
        className="absolute z-10 inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 32 32"
          preserveAspectRatio="none"
          transform="scale(3)"
        >
          <path
            d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 2c7.732 0 14 6.268 14 14S23.732 30 16 30C8.268 30 2 23.732 2 16S8.268 2 16 2z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
        <svg
          className="absolute top-1/4 left-1/4 w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
          viewBox="0 0 100 100"
          fill="rgba(255,255,255,0.10)"
        >
          <rect width="100" height="100" rx="5"></rect>
        </svg>
        <svg
          className="absolute bottom-1/4 right-1/4 w-40 h-40 transform translate-x-1/2 translate-y-1/2 rotate-[170deg]"
          viewBox="0 0 100 100"
          fill="rgba(255,255,255,0.05)"
        >
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg
          className="absolute bottom-6/6 right-1/3 w-40 h-40 transform translate-x-1/2 translate-y-1/2 rotate-[210deg]"
          viewBox="0 0 100 100"
          fill="rgba(255,255,255,0.03)"
        >
          <rect width="100" height="100" rx="5"></rect>
        </svg>
        <div className="absolute inset-0 bg-noise opacity-[0.8]"></div>
      </div>
      <div className="relative py-16 px-4 lg:px-24 shadow-neutral-700/90 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-none lg:rounded-xl  shadow-2xl max-w-4xl mx-auto text-center space-y-3">
        <h2 className="text-4xl px:4 lg:px-12 mb-2 -mt-8 drop-shadow-lg shadow-black font-extrabold text-white tracking-tight transform transition-all duration-300 ease-in-out group-hover:scale-105">
          ¡Comienza a pagar tu predio de manera rápida y segura!
        </h2>
        <div className="py-1 px-4 inline-block bg-white bg-opacity-[15%] rounded-full">
          <p className="text-neutral-100 text-sm text-opacity-80 font-medium tracking-wide">
            Simplifica tu vida y contribuye a tu comunidad.
          </p>
        </div>
        <form action={verificaCuentaFolio} className="group relative">
          <div className="flex items-center mt-16 justify-center">
            <input
              type="text"
              name="cuentaFolio"
              placeholder="Introduce tu cuenta-folio"
              aria-label="Cuenta-Folio"
              className="w-4/5 lg:w-3/4 rounded-none lg:rounded-l-lg px-4 py-3 bg-white text-gray-800 placeholder-gray-400 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-90 focus:ring-ring focus:ring-offset-orange-300"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-r-lg bg-neutral-100 px-6 py-3 font-semibold text-amber-500 transition-colors duration-300 ease-in-out hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 animate-pulse hidden lg:visible"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19.5l7.5-7.5m0 0l1.378 1.378a3.75 3.75 0 11-5.305 5.305L12 19.5m7.5-7.5H4.5m15 0v-.75a3.75 3.75 0 00-3.75-3.75h-.75"
                />
              </svg>
              ¡Paga Ya!
            </button>
          </div>
          <p className="mt-4 text-xs text-white opacity-[0.8] transition-opacity duration-[400ms] ease-in-out group-hover:opacity-[1]">
            ¿No conoces tu Cuenta-Folio?
            <Link
              href="/solicita"
              className="ml-1 underline text-amber-300 contrast-200"
            >
              Solicitalo Aqui
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12" id="preguntas">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Aquí encontrarás algumas respuestas a preguntas comunes sobre el
            Pago en Línea del Impuesto Predial.
          </p>
        </div>
        <div className="w-full mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Qué es el impuesto predial y por qué debo pagarlo?
              </AccordionTrigger>
              <AccordionContent>
                El impuesto predial es un gravamen que se aplica sobre la
                propiedad de bienes inmuebles. Los fondos recaudados son
                utilizados para financiar diversos servicios y obras públicas en
                el municipio. El pago puntual de este impuesto es crucial para
                el desarrollo y mantenimiento de la localidad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Cómo puedo pagar mi impuesto predial en línea?
              </AccordionTrigger>
              <AccordionContent>
                Para pagar en línea, ingresa tu Cuenta-Folio en el campo
                correspondiente <Link href="#pago">Aqui</Link>. Luego, sigue los
                pasos para completar el pago mediante nuestra segura pasarela de
                pagos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Qué es la Cuenta-Folio y dónde lo encuentro?
              </AccordionTrigger>
              <AccordionContent>
                La Cuenta-Folio es un número único asignado a tu propiedad que
                sirve para identificarla en el sistema. Puedes encontrar este
                número en tus recibos anteriores de impuesto predial o en la
                oficina del municipio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                ¿Qué hago si no tengo un Cuenta-Folio?
              </AccordionTrigger>
              <AccordionContent>
                Si no tienes tu Cuenta-Folio, puedes solicitarlo llenando un
                formulario en nuestra página de{" "}
                <Link href="/solicita">Solicitud de Cuenta-Folio</Link> Una vez
                enviado el formulario, recibirás tu Cuenta-Folio a través del
                método que elijas: Email o SMS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>¿Es seguro pagar en línea?</AccordionTrigger>
              <AccordionContent>
                Sí, la seguridad es una de nuestras principales preocupaciones.
                Utilizamos encriptación SSL/TLS para asegurar que tus datos y
                transacciones estén protegidos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                ¿Puedo pagar en efectivo o en una tienda física?
              </AccordionTrigger>
              <AccordionContent>
                Sí, ofrecemos la opción de imprimir un formato con un código de
                barras que podrás utilizar para pagar en tiendas OXXO.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

interface ServiceBlockProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ServiceBlock({ title, description, icon, index }: ServiceBlockProps) {
  const rowStyle = index % 2 === 0 ? "flex-row-reverse text-right" : "flex-row";

  return (
    <div
      className={`flex items-center p-6 bg-white rounded-lg shadow-sm ${rowStyle}`}
    >
      <div className="flex-shrink-0">
        <span className="h-5 w-5 text-orange-500">{icon}</span>
      </div>
      <div className="mx-4 order flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
}
