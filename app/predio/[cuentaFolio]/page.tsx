import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card";
import {Button} from "@/components/ui/Button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/Avatar";
import {
  BuildingIcon, CalendarIcon,
  CreditCardIcon, DollarSignIcon,
  FileArchiveIcon, FingerprintIcon,
  HomeIcon, KeyIcon,
  MailIcon,
  PhoneIcon,
  PrinterIcon,
  ReceiptIcon, ScaleIcon,
  UserIcon
} from "lucide-react";
import {IdCardIcon} from "@radix-ui/react-icons";

const TaxpayerPage = () => {
  return (
    <section className="bg-gray-100 p-4">
      <div className="mx-auto max-w-6xl">
        <div>
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Dashboard</h1>
        </div>
        <div className="grid gap-4 bg-gray-100 p-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Perfil del Contribuyente */}
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Perfil del Contribuyente</CardTitle>
              <CardDescription>Información detallada del contribuyente registrada en el sistema.</CardDescription>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-2 lg:gap-y-4 gap-1">
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <UserIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Nombre de Contribuyente</p>
                  <p className="text-sm text-muted-foreground">Juan Pérez López</p>
                </div>
              </div>
              {/* Domicilio */}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <HomeIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Domicilio</p>
                  <p className="text-sm text-muted-foreground">Calle 1, Colonia 1, Ciudad 1, Estado 1</p>
                </div>
              </div>
              {/* CURP */}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <FingerprintIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">CURP</p>
                  <p className="text-sm text-muted-foreground">PELJ010101</p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <IdCardIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">RFC</p>
                  <p className="text-sm text-muted-foreground">PELJ010101</p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <MailIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Correo Electrónico</p>
                  <p className="text-sm text-muted-foreground">example@gmail.com</p>
                </div>
              </div>
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <PhoneIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Teléfono</p>
                  <p className="text-sm text-muted-foreground">1234567890</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Detalles del Predio */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Detalles del Predio</CardTitle>
              <CardDescription>Resumen informativo sobre las características y detalles catastrales del
                predio.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-1">
              {/*  Domicilio del Predio*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <HomeIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Domicilio del Predio</p>
                  <p className="text-sm text-muted-foreground">Calle 1, Colonia 1, Ciudad 1, Estado 1</p>
                </div>
              </div>
              {/*  Clave Catastral*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <ScaleIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Clave Catastral</p>
                  <p className="text-sm text-muted-foreground">1234567890</p>
                </div>
              </div>
              {/*  Valor Catastral*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <DollarSignIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Valor Catastral</p>
                  <p className="text-sm text-muted-foreground">$1234567890</p>
                </div>
              </div>
              {/*  Superificie de Terreno*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <BuildingIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Superificie de Terreno</p>
                  <p className="text-sm text-muted-foreground">1234567890 m²</p>
                </div>
              </div>
              {/*  Superficie de Construccion*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <PrinterIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Superficie de Construccion</p>
                  <p className="text-sm text-muted-foreground">1234567890 m²</p>
                </div>
              </div>
              {/*  Uso del Predio*/}
              <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                <KeyIcon className="mt-px h-5 w-5"/>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Uso del Predio</p>
                  <p className="text-sm text-muted-foreground">Habitacional</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Estado de Cuenta */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader className="p-5">
              <CardTitle>Estado de Cuenta</CardTitle>
              <CardDescription>Revisión detallada del total adeudado y opciones
                de pago disponibles.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-2 gap-1">
              <div id="adeudoBox" className="mx-2 flex flex-col justify-center">
                <h6 className="text-xs font-semibold uppercase text-gray-500">Total Adeudado</h6>
                <p className="text-3xl font-bold text-gray-800">$12,345.67</p>
                <p className="text-sm text-gray-500">(Doce mil trescientos cuarenta y cinco 67/100 M.N.)</p>
              </div>
              <div className="grid gap-y-4 grid-cols-2">
                {/* Fecha Limite de Pago*/}
                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                  <CalendarIcon className="mt-px h-5 w-5"/>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Fecha Limite de Pago</p>
                    <p className="text-sm text-muted-foreground">01/01/2021</p>
                  </div>
                </div>
                {/*Concepto de Pago*/}
                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                  <FileArchiveIcon className="mt-px h-5 w-5"/>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Concepto de Pago</p>
                    <p className="text-sm text-muted-foreground">Predial</p>
                  </div>
                </div>
                {/*  Estatus de Pago*/}
                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                  <ReceiptIcon className="mt-px h-5 w-5"/>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Estatus de Pago</p>
                    <p className="text-sm text-muted-foreground">No Pagado</p>
                  </div>
                </div>
                {/*  Medio de Pago*/}
                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                  <CreditCardIcon className="mt-px h-5 w-5"/>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Medio de Pago</p>
                    <p className="text-sm text-muted-foreground">No Pagado</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="grid grid-cols-1 gap-4 md:grid-cols-3 p-5">
                {/*  Pagar con Tarjetade Credito*/}
                <Button variant="default" className="col-span-1">
                  Pagar con Tarjetade Credito
                </Button>
                {/*  Imprimir Formato de Pago OXXO*/}
                <Button variant="outline" className="col-span-1">
                  Imprimir Formato de Pago OXXO
                </Button>
                {/*  Imprimir Recibo de Pago*/}
                <Button variant="outline" className="col-span-1">
                  Imprimir Recibo de Pago
                </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TaxpayerPage;
