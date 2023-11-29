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
  mode: "AUT",
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
      const banData =
        "cWBHkJwyr8Xrx0s0lm9NfR7DvPoDG+TGcow1F5pImbbQxdQCh50Uhtm0FFyBgKn/Bqrv2+jmd3H+e7Wb7ZQz0lyY8hOaQ7wgXO0PXT2zO23Z+qKHmgCd0QRJPhKtru0y6lassQ/NZkoDiL2GdlLX/SBi8/yYq8MueSTOX9iw+pCK5MFZvBpKMV5kLXQFP3KTkfeP50LogBsI4xpQnFekl9uu2ePBzZQIHySiERyceX93Sv+93lMunaqPpHp6LoiDNr5+C53JgGFa59KqSGUAaUJSKZ3CYyfQ2UQ/rr6bhD+pzseHpilnnjoPxgmT7GT3MGEOAwzpbFjM5vHfu7hFkg==:::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";
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
