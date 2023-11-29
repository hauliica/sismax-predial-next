"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { PaymentData } from "@/types/Banorte";
import {
  CalendarIcon,
  CreditCardIcon,
  FileArchiveIcon,
  ReceiptIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import React, { startTransition, useState } from "react";
import numberToWords from "@/lib/NumberToWords";
import Script from "next/script";
import { encryptBanorte } from "@/app/lib/actions";

interface PredioPago {
  imptotal1:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode;
  concepto1:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode;
  fechapag: string;
}

const data = {
  merchantId: "7652823",
  name: "c765223",
  password: "A3b@5D#f6G!",
  mode: "PRD",
  controlNumber: "PADM99302J",
  terminalId: "76528231",
  amount: "1.0",
  merchantName: "MUNICIPIO DE ACUNA COA",
  merchantCity: "CIUDAD ACUNA",
  lang: "ES",
  customerRef1: "22042709695XXFA36H01",
  customerRef2: "",
  customerRef3: "",
  customerRef4: "",
  customerRef5: "",
  billToFirstName: "Saul Ariel Ochoa Chavez",
  billToLastName: "LOL",
  billToStreet: "Eugenia",
  billToStreetNumber: "197",
  billToStreetNumber2: "",
  billToStreet2Col: "Narvarte",
  billToStreet2Del: "Benito Juarez",
  billToCity: "ACUNA",
  billToState: "CO",
  billToCountry: "MX",
  billToPhoneNumber: "8771005275",
  billToPostalCode: "26260",
  billToEmail: "hauliiica@gmail.com",
  billToCustomerId: "",
  billToCustomerPassword: "",
  billToDateOfBirth: "",
  billToHostname: "",
  billToHttpBrowserEmail: "",
  billToIpAddress: "",
  comments: "Compra a MSI",
  shipToFirstName: "",
  shipToLastName: "",
  shipToStreetNumber: "",
  shipToStreetNumber2: "",
  shipToStreet2Col: "",
  shipToStreet2Del: "",
  shipToCity: "",
  shipToState: "",
  shipToCountry: "",
  shipToPostalCode: "",
  shipToPhoneNumber: "",
  merchantDefinedDataField3: "",
  merchantDefinedDataField4: "",
  merchantDefinedDataField5: "",
  merchantDefinedDataField8: "",
  merchantDefinedDataField6: "",
  merchantDefinedDataField7: "",
  merchantDefinedDataField9: "",
  merchantDefinedDataField10: "",
  merchantDefinedDataField11: "",
  merchantDefinedDataField12: "",
  merchantDefinedDataField13: "",
  merchantDefinedDataField14: "",
  merchantDefinedDataField15: "",
  merchantDefinedDataField16: "",
  merchantDefinedDataField17: "",
  merchantDefinedDataField18: "",
  merchantDefinedDataField19: "",
  merchantDefinedDataField20: "",
  merchantDefinedDataField21: "",
  merchantDefinedDataField22: "",
  merchantDefinedDataField23: "",
  merchantDefinedDataField24: "",
  merchantDefinedDataField25: "",
  merchantDefinedDataField26: "",
  merchantDefinedDataField27: "",
  merchantDefinedDataField28: "",
  merchantDefinedDataField29: "",
  merchantDefinedDataField30: "",
  merchantDefinedDataField31: "",
  merchantDefinedDataField32: "",
  merchantDefinedDataField33: "",
  merchantDefinedDataField34: "",
  merchantDefinedDataField35: "",
  merchantDefinedDataField36: "",
  merchantDefinedDataField37: "",
  merchantDefinedDataField38: "",
  merchantDefinedDataField39: "",
  merchantDefinedDataField40: "",
  merchantDefinedDataField41: "",
  merchantDefinedDataField42: "",
  merchantDefinedDataField43: "",
  merchantDefinedDataField44: "",
  merchantDefinedDataField45: "",
  merchantDefinedDataField46: "",
  merchantDefinedDataField47: "",
  merchantDefinedDataField48: "",
  merchantDefinedDataField49: "",
  merchantDefinedDataField50: "",
  merchantDefinedDataField51: "",
  merchantDefinedDataField52: "",
  merchantDefinedDataField53: "",
  merchantDefinedDataField54: "",
  merchantDefinedDataField55: "",
  merchantDefinedDataField56: "",
  merchantDefinedDataField57: "",
  merchantDefinedDataField58: "",
  merchantDefinedDataField59: "",
  merchantDefinedDataField60: "",
  merchantDefinedDataField61: "",
  merchantDefinedDataField62: "",
  merchantDefinedDataField63: "",
  merchantDefinedDataField64: "",
  merchantDefinedDataField65: "",
  merchantDefinedDataField66: "",
  merchantDefinedDataField67: "",
  merchantDefinedDataField68: "",
  merchantDefinedDataField69: "",
  merchantDefinedDataField70: "",
  merchantDefinedDataField71: "",
  merchantDefinedDataField72: "",
  merchantDefinedDataField73: "",
  merchantDefinedDataField74: "",
  merchantDefinedDataField75: "",
  merchantDefinedDataField76: "",
  merchantDefinedDataField77: "",
  merchantDefinedDataField78: "",
  merchantDefinedDataField79: "",
  merchantDefinedDataField80: "",
  merchantDefinedDataField81: "",
  merchantDefinedDataField82: "",
  merchantDefinedDataField83: "",
  merchantDefinedDataField84: "",
  merchantDefinedDataField85: "",
  merchantDefinedDataField86: "",
  merchantDefinedDataField87: "",
  merchantDefinedDataField88: "",
  merchantDefinedDataField89: "",
  merchantDefinedDataField90: "",
  merchantDefinedDataField91: "",
  merchantDefinedDataField92: "",
  merchantDefinedDataField93: "",
  merchantDefinedDataField94: "",
  merchantDefinedDataField95: "",
  merchantDefinedDataField96: "",
  merchantDefinedDataField97: "",
  merchantDefinedDataField98: "",
  merchantDefinedDataField99: "",
  merchantDefinedDataField100: "",
};

async function getEncryption() {
  try {
    const res = await encryptBanorte();

    return res;
  } catch (error) {
    console.error("Encryption error: ", error);
  }
}

export async function EstadoCuentaCard(props: { predio: PredioPago }) {
  async function empezarBanorte() {
    console.log("empezarBanorte");
    try {
      const banData = await getEncryption()
      console.log(banData);

      Payment.setEnv("pro");

      Payment.startPayment({
        Params: banData,
        onClosed: function (response) {
          console.log(response);
        },
        OnError: function (error) {
          console.log(error);
        },
        onSuccess: function (response) {
          console.log(response);
        },
        onCancel: function (response) {
          console.log(response);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="col-span-2 lg:col-span-4">
      <CardHeader className="p-5">
        <CardTitle>Estado de Cuenta</CardTitle>
        <CardDescription>
          Revisión detallada del total adeudado y opciones de pago disponibles.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-2 gap-1">
        <div id="adeudoBox" className="mx-2 flex flex-col justify-center">
          <h6 className="text-xs font-semibold uppercase text-gray-500">
            Total Adeudado
          </h6>
          <p className="text-3xl font-bold text-gray-800">
            $ {props.predio.imptotal1}
          </p>
          <p className="text-sm tracking-tighter capitalize text-gray-500">
            ({numberToWords(props.predio.imptotal1)})
          </p>
        </div>
        <div className="grid gap-y-4 grid-cols-2">
          {/* Fecha Limite de Pago*/}
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
            <CalendarIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                Fecha Limite de Pago
              </p>
              <p className="text-sm font-medium leading-none">01/01/2021</p>
            </div>
          </div>
          {/*Concepto de Pago*/}
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
            <FileArchiveIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Concepto de Pago</p>
              <p className="text-sm font-medium leading-none">
                {props.predio.concepto1}
              </p>
            </div>
          </div>
          {/*  Estatus de Pago*/}
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
            <ReceiptIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Estatus de Pago</p>
              <p className="text-sm font-medium leading-none">
                {props.predio.fechapag}
              </p>
            </div>
          </div>
          {/*  Medio de Pago*/}
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
            <CreditCardIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Medio de Pago</p>
              <p className="text-sm font-medium leading-none">
                {props.predio.fechapag}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-1 gap-4 md:grid-cols-3 p-5">
        {/*  Pagar con Tarjetade Credito*/}
        <Button
          onClick={empezarBanorte}
          variant="default"
          className="col-span-1"
        >
          Pagar con Tarjeta de Credito/Debito
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
  );
}
