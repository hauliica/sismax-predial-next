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
  Badge,
  BadgeIndianRupee,
  BookIcon,
  Building2,
  BuildingIcon,
  Edit2,
  HeartIcon,
  Mail,
  MapPin,
  RectangleVertical,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import React from "react";
import { Card, CardContent, CardFooter, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";

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

export default function Home() {
  return (
    <>
      <Hero />
      <CTASection />
      {/*<Hero />*/}
      <ImportanciaSection />
      <VentajasSection />

      {/*<CTASection /> */}
      <FAQSection />
    </>
  );
}

function ImportanciaSection() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container px-6 py-10 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-orange-500">
            La Importancia de Pagar Nuestro Predial
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">Un Compromiso con la Comunidad</p>
          <p className="mt-3 text-lg text-gray-500">
            Tu contribución a través de los impuestos de propiedad es vital para mantener y mejorar los servicios
            locales.
          </p>
        </div>

        {/*// <!-- Service Block Rows -->*/}
        <div className="space-y-8">
          {/*// <!-- Service Row 1 -->*/}
          <div className="flex flex-row items-center rounded-lg bg-white p-6 shadow-sm">
            <div className="flex-shrink-0">
              <BuildingIcon />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">Servicios públicos</h3>
              <p className="text-base text-gray-500">
                El impuesto predial se utiliza para financiar servicios públicos como alumbrado, recolección de basura y
                mantenimiento de calles.
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
    <div className="py-16 sm:py-8 overflow-x-hidden" id="ventajas">
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
    <section id="pago" className="flex w-full items-center justify-center overflow-x-hidden py-8">
      <div className="pointer-events-none relative inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 32 32"
          preserveAspectRatio="none"
          transform="scale(3)">
          <path
            d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 2c7.732 0 14 6.268 14 14S23.732 30 16 30C8.268 30 2 23.732 2 16S8.268 2 16 2z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
        <svg
          className="absolute left-1/4 top-1/4 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-45 transform"
          viewBox="0 0 100 100"
          fill="rgba(255,255,255,0.10)">
          <rect width="100" height="100" rx="5"></rect>
        </svg>
        <svg
          className="absolute bottom-1/4 right-1/4 h-40 w-40 translate-x-1/2 translate-y-1/2 rotate-[170deg] transform"
          viewBox="0 0 100 100"
          fill="rgba(255,255,255,0.05)">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg
          className="bottom-6/6 absolute right-1/3 h-40 w-40 translate-x-1/2 translate-y-1/2 rotate-[210deg] transform"
          viewBox="0 0 100 100"
          fill="rgba(255,255,255,0.03)">
          <rect width="100" height="100" rx="5"></rect>
        </svg>
        <div className="bg-noise absolute inset-0 opacity-[0.8]"></div>
      </div>
      <div className="relative mx-auto max-w-4xl space-y-6 rounded-none bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-4 py-16 text-center shadow-2xl sm:px-6 lg:rounded-lg lg:px-24">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
          ¡Comienza a pagar tu predio de manera rápida y segura!
        </h2>
        <p className="inline-block rounded-full bg-white bg-opacity-20 px-4 py-2 text-xs font-medium tracking-wide text-neutral-100 sm:text-sm">
          Simplifica tu vida y contribuye a tu comunidad.
        </p>
        {/* Form has been refactored for cleaner layout and better responsiveness */}
        <form action={verificaCuentaFolio} className="space-y-4">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="text"
              name="cuentaFolio"
              placeholder="Introduce tu cuenta-folio"
              aria-label="Cuenta-Folio"
              className="w-full flex-grow rounded-lg bg-white bg-opacity-80 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-90 sm:w-auto"
              required
            />
            <button
              type="submit"
              className="w-full flex-none rounded-lg bg-neutral-100 px-6 py-3 font-semibold text-amber-500 transition-colors hover:bg-gray-100 sm:w-auto">
              ¡Paga Ya!
            </button>
          </div>
          <p className="text-xs text-white">
            ¿No conoces tu Cuenta-Folio?
            <Link className="ml-1 text-amber-300 underline hover:text-amber-400" href="/solicita" passHref>
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
            Aquí encontrarás algumas respuestas a preguntas comunes sobre el Pago en Línea del Impuesto Predial.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Qué es el impuesto predial y por qué debo pagarlo?</AccordionTrigger>
              <AccordionContent>
                El impuesto predial es un gravamen que se aplica sobre la propiedad de bienes inmuebles. Los fondos
                recaudados son utilizados para financiar diversos servicios y obras públicas en el municipio. El pago
                puntual de este impuesto es crucial para el desarrollo y mantenimiento de la localidad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo puedo pagar mi impuesto predial en línea?</AccordionTrigger>
              <AccordionContent>
                Para pagar en línea, ingresa tu Cuenta-Folio en el campo correspondiente <Link href="#pago">Aqui</Link>.
                Luego, sigue los pasos para completar el pago mediante nuestra segura pasarela de pagos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Qué es la Cuenta-Folio y dónde lo encuentro?</AccordionTrigger>
              <AccordionContent>
                La Cuenta-Folio es un número único asignado a tu propiedad que sirve para identificarla en el sistema.
                Puedes encontrar este número en tus recibos anteriores de impuesto predial o en la oficina del
                municipio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Qué hago si no tengo un Cuenta-Folio?</AccordionTrigger>
              <AccordionContent>
                Si no tienes tu Cuenta-Folio, puedes solicitarlo llenando un formulario en nuestra página de{" "}
                <Link href="/solicita">Solicitud de Cuenta-Folio</Link> Una vez enviado el formulario, recibirás tu
                Cuenta-Folio a través del método que elijas: Email o SMS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>¿Es seguro pagar en línea?</AccordionTrigger>
              <AccordionContent>
                Sí, la seguridad es una de nuestras principales preocupaciones. Utilizamos encriptación SSL/TLS para
                asegurar que tus datos y transacciones estén protegidos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>¿Puedo pagar en efectivo o en una tienda física?</AccordionTrigger>
              <AccordionContent>
                Sí, ofrecemos la opción de imprimir un formato con un código de barras que podrás utilizar para pagar en
                tiendas OXXO.
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

function CitizenCard() {
  return (
    <Card className="w-full max-w-sm rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg dark:bg-black">
      <CardContent className="flex items-center space-x-4">
        <Avatar src="https://i.pravatar.cc/150?u=citizen" color="primary" bordered size="lg" className="shrink-0" />
        <div>
          <h5 className="text-lg font-semibold dark:text-white">John Doe</h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">Age: 30</p>
          <p className="flex items-center text-sm text-blue-500 dark:text-blue-300">
            <MapPin className="mr-1 h-4 w-4" />
            Springfield
          </p>
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col p-0">
        <Button size="sm" color="primary" className="mb-2 w-full justify-center" icon={<Mail className="h-4 w-4" />}>
          Contact
        </Button>
        <Button size="sm" color="secondary" className="w-full justify-center" icon={<Edit2 className="h-4 w-4" />}>
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

function CitCard() {
  return (
    <div className="card w-72 rounded-lg bg-white p-5 font-serif shadow-md">
      <div className="name mb-1 text-2xl font-bold">John Doe</div>
      <div className="email mb-3">john.doe@example.com</div>
      <div className="details mb-3 flex items-center">
        <div className="text text-sm">New York City</div>
      </div>
      <div className="details mb-3 flex items-center">
        <div className="text text-sm">+1 123-456-7890</div>
      </div>
      <div className="details flex items-center">
        <div className="text text-sm">January 1, 1980</div>
      </div>
    </div>
  );
}

function PropertyCard() {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded bg-white shadow-lg dark:bg-black">
      <img className="h-48 w-full object-cover" src="https://via.placeholder.com/400x300" alt="Property" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold dark:text-white">Charming Villa</div>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
        </p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-400">
          3 Beds
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-400">
          2 Baths
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-400">
          1200 sqft
        </span>
      </div>
      <div className="px-6 pb-2 pt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-400">
          $1.2M
        </span>
        <span className="mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-400">
          New York, NY
        </span>
      </div>
      <div className="flex items-center justify-between px-6 pb-2 pt-4">
        <button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Contact Agent
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-red-500">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 15.364L12 8.485l6.879 6.879M12 21V9"
          />
        </svg>
      </div>
    </div>
  );
}

function PropCard() {
  return (
    <TooltipProvider>
      <Card className="my-6 max-w-md rounded-lg bg-white shadow-lg dark:bg-black">
        <CardHeader className="flex items-center justify-between border-b p-5 dark:border-gray-700">
          <CardTitle className="text-xl font-semibold dark:text-white">Property Information</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </TooltipTrigger>
            <TooltipContent className="p-2 text-sm">
              <p>Click to see full details</p>
            </TooltipContent>
          </Tooltip>
        </CardHeader>
        <CardContent className="p-5">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-200">Address:</span>
              <span className="ml-2 font-bold text-gray-900 dark:text-gray-300">123 Main St, City</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-200">UniqueID:</span>
              <Badge className="text-xs">XKJSD1234L</Badge>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-200">Value:</span>
              <span className="ml-2 flex items-center font-bold text-gray-900 dark:text-gray-300">
                <BadgeIndianRupee className="mr-1 h-4 w-4" />
                500,000
              </span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-200">Lot Area:</span>
              <span className="ml-2 flex items-center font-bold text-gray-900 dark:text-gray-300">
                <RectangleVertical className="mr-1 h-4 w-4" />
                320m²
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-200">Use of property:</span>
              <span className="ml-2 font-bold text-gray-900 dark:text-gray-300">
                <Badge variant="secondary">
                  <Building2 className="mr-1 h-4 w-4" />
                  Residential
                </Badge>
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center border-t p-5 dark:border-gray-700">
          <Button variant="outline" className="ml-auto">
            Pay Tax
          </Button>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}
