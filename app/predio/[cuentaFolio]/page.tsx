import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  BuildingIcon,
  DollarSignIcon,
  FingerprintIcon,
  HomeIcon,
  KeyIcon,
  MailIcon,
  PhoneIcon,
  PrinterIcon,
  ScaleIcon,
  UserIcon,
} from "lucide-react";
import Script from "next/script";
import { IdCardIcon } from "@radix-ui/react-icons";
import { fetchPredio } from "@/app/lib/actions";
import { EstadoCuentaCard } from "@/app/predio/[cuentaFolio]/EstadeCuentaCard";

export default async function Page({
  params,
}: {
  params: { cuentaFolio: string };
}) {
  const predio = await fetchPredio(params.cuentaFolio);
  console.log(params);

  return (
    <section className="bg-gray-100 p-4">
      <div className="mx-auto container">
        <div>
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Dashboard
          </h1>
        </div>
        <div className="grid gap-4 bg-gray-100 p-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Perfil del Contribuyente */}
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="">Perfil del Contribuyente</CardTitle>
              <CardDescription>
                Información detallada del contribuyente registrada en el
                sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-2 lg:gap-y-4 gap-1">
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <UserIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Nombre de Contribuyente
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {predio.propietario}
                  </p>
                </div>
              </div>
              {/* Domicilio */}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <HomeIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Domicilio</p>
                  <p className="text-sm font-medium leading-none">
                    {predio.dfcalle} #{predio.dfnum}, {predio.dfcolonia},{" "}
                    {predio.dfcd}
                  </p>
                </div>
              </div>
              {/* CURP */}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <FingerprintIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">CURP</p>
                  <p className="text-sm font-medium leading-none">
                    {predio.pcurp}
                  </p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <IdCardIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">RFC</p>
                  <p className="text-sm font-medium leading-none">
                    {predio.prfc}
                  </p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <MailIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Correo Electrónico
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {predio.dfcorreo ?? "Sin Correo"}
                  </p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <PhoneIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="text-sm font-medium leading-none">
                    {predio.dftel}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Detalles del Predio */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Detalles del Predio</CardTitle>
              <CardDescription>
                Resumen informativo sobre las características y detalles
                catastrales del predio.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-1 lg:grid-cols-2 grid-cols-1">
              {/*  Domicilio del Predio*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <HomeIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Domicilio del Predio
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {predio.dpcalle} #{predio.dpnum}, {predio.dpcolonia},{" "}
                    {predio.dpcd}
                  </p>
                </div>
              </div>
              {/*  Clave Catastral*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <ScaleIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Clave Catastral
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {predio.clavecatastral}
                  </p>
                </div>
              </div>
              {/*  Valor Catastral*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <DollarSignIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Valor Catastral
                  </p>
                  <p className="text-sm font-medium leading-none">
                    $ {predio.vcat}
                  </p>
                </div>
              </div>
              {/*  Superificie de Terreno*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <BuildingIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Superificie de Terreno
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {predio.terreno} m²
                  </p>
                </div>
              </div>
              {/*  Superficie de Construccion*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <PrinterIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Superficie de Construccion
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {predio.const} m²
                  </p>
                </div>
              </div>
              {/*  Uso del Predio*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <KeyIcon className="mt-px h-5 w-5" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Uso del Predio
                  </p>
                  <p className="text-sm font-medium leading-none">
                    {predio.uso}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Estado de Cuenta */}
          <EstadoCuentaCard predio={predio} />
        </div>
      </div>
      <Script strategy="afterInteractive" src="https://multicobros.banorte.com/orquestador/resources/js/jquery-3.3.1.js" />
      <Script strategy="afterInteractive" src="https://multicobros.banorte.com/orquestador/lightbox/checkoutV2.js" />
    </section>
  );
};

