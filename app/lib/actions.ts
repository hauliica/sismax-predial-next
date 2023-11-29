"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma/client";
import { encryptJson, rsaEncryption } from "./banorte";

const CuentaFolioSchema = z.object({
  cuentaFolio: z
    .string()
    .min(12, "La Cuenta-Folio debe contener 12 digitos")
    .max(12, "La Cuenta-Folio debe contener 12 digitos"),
});

export async function verificaCuentaFolio(formData: FormData) {
  // Parse and validate
  const result = CuentaFolioSchema.safeParse({
    cuentaFolio: formData.get("cuentaFolio"),
  });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  const { cuentaFolio } = result.data;
  // Split the 12 digit string into two 6 digit strings `cuenta` and `folio`
  const [cuenta, folio] = [cuentaFolio.slice(0, 6), cuentaFolio.slice(6, 12)];
  console.log(cuenta, folio);

  // Check if exists
  const predio = await prisma.Padron.count({
    where: {
      AND: [
        {
          pcuenta: cuenta,
        },
        {
          pfolio: folio,
        },
      ],
    },
  });

  console.log(predio);

  if (!predio) {
    console.log("No se encontro el predio");
    return { error: "No se encontro el predio" };
  } else {
    console.log("Se encontro el predio");
    return redirect(`/predio/${cuentaFolio}`);
  }
}

export async function fetchPredio(cuentaFolio: string) {
  const [cuenta, folio] = [cuentaFolio.slice(0, 6), cuentaFolio.slice(6, 12)];

  const predio = await prisma.Padron.findFirst({
    where: {
      AND: [
        {
          pcuenta: cuenta,
        },
        {
          pfolio: folio,
        },
      ],
    },
  });

  if (!predio) {
    return { error: "No se encontro el predio" };
  }

  console.log(predio);
  return predio;
}

export async function encryptBanorte() {
  const data = {
    "merchantId": "7652823",
    "name": "a7652823",
    "password": "#O2oLz1%",
    "mode": "PRD",
    "controlNumber": "PADM99302J",
    "terminalId": "76528231",
    "amount": "1.00",
    "merchantName": "MUNICIPIO DE ACUNA COA",
    "merchantCity": "CIUDAD ACUNA",
    "lang": "ES",
    "customerRef1": "90556104254",
    "customerRef2": "",
    "customerRef3": "",
    "customerRef4": "",
    "customerRef5": "",
    "billToFirstName": "Saul",
    "billToLastName": "Ochoa",
    "billToStreet": "Alvaro Obregon",
    "billToStreetNumber": "1255",
    "billToStreetNumber2": "",
    "billToStreet2Col": "Yunuen",
    "billToStreet2Del": "Acuna",
    "billToCity": "ACUNA",
    "billToState": "CO",
    "billToCountry": "MX",
    "billToPhoneNumber": "8771005275",
    "billToPostalCode": "26260",
    "billToEmail": "hauliiica@gmail.com",
    "billToCustomerId": "",
    "billToCustomerPassword": "",
    "billToDateOfBirth": "",
    "billToHostname": "",
    "billToHttpBrowserEmail": "",
    "billToIpAddress": "",
    "comments": "Compra a MSI",
    "shipToFirstName": "",
    "shipToLastName": "",
    "shipToStreetNumber": "",
    "shipToStreetNumber2": "",
    "shipToStreet2Col": "",
    "shipToStreet2Del": "",
    "shipToCity": "",
    "shipToState": "",
    "shipToCountry": "",
    "shipToPostalCode": "",
    "shipToPhoneNumber": "",
    "merchantDefinedDataField3": "",
    "merchantDefinedDataField4": "",
    "merchantDefinedDataField5": "",
    "merchantDefinedDataField8": "",
    "merchantDefinedDataField6": "",
    "merchantDefinedDataField7": "",
    "merchantDefinedDataField9": "",
    "merchantDefinedDataField10": "",
    "merchantDefinedDataField11": "",
    "merchantDefinedDataField12": "",
    "merchantDefinedDataField13": "",
    "merchantDefinedDataField14": "",
    "merchantDefinedDataField15": "",
    "merchantDefinedDataField16": "",
    "merchantDefinedDataField17": "",
    "merchantDefinedDataField18": "",
    "merchantDefinedDataField19": "",
    "merchantDefinedDataField20": "",
    "merchantDefinedDataField21": "",
    "merchantDefinedDataField22": "",
    "merchantDefinedDataField23": "",
    "merchantDefinedDataField24": "",
    "merchantDefinedDataField25": "",
    "merchantDefinedDataField26": "",
    "merchantDefinedDataField27": "",
    "merchantDefinedDataField28": "",
    "merchantDefinedDataField29": "",
    "merchantDefinedDataField30": "",
    "merchantDefinedDataField31": "",
    "merchantDefinedDataField32": "",
    "merchantDefinedDataField33": "",
    "merchantDefinedDataField34": "",
    "merchantDefinedDataField35": "",
    "merchantDefinedDataField36": "",
    "merchantDefinedDataField37": "",
    "merchantDefinedDataField38": "",
    "merchantDefinedDataField39": "",
    "merchantDefinedDataField40": "",
    "merchantDefinedDataField41": "",
    "merchantDefinedDataField42": "",
    "merchantDefinedDataField43": "",
    "merchantDefinedDataField44": "",
    "merchantDefinedDataField45": "",
    "merchantDefinedDataField46": "",
    "merchantDefinedDataField47": "",
    "merchantDefinedDataField48": "",
    "merchantDefinedDataField49": "",
    "merchantDefinedDataField50": "",
    "merchantDefinedDataField51": "",
    "merchantDefinedDataField52": "",
    "merchantDefinedDataField53": "",
    "merchantDefinedDataField54": "",
    "merchantDefinedDataField55": "",
    "merchantDefinedDataField56": "",
    "merchantDefinedDataField57": "",
    "merchantDefinedDataField58": "",
    "merchantDefinedDataField59": "",
    "merchantDefinedDataField60": "",
    "merchantDefinedDataField61": "",
    "merchantDefinedDataField62": "",
    "merchantDefinedDataField63": "",
    "merchantDefinedDataField64": "",
    "merchantDefinedDataField65": "",
    "merchantDefinedDataField66": "",
    "merchantDefinedDataField67": "",
    "merchantDefinedDataField68": "",
    "merchantDefinedDataField69": "",
    "merchantDefinedDataField70": "",
    "merchantDefinedDataField71": "",
    "merchantDefinedDataField72": "",
    "merchantDefinedDataField73": "",
    "merchantDefinedDataField74": "",
    "merchantDefinedDataField75": "",
    "merchantDefinedDataField76": "",
    "merchantDefinedDataField77": "",
    "merchantDefinedDataField78": "",
    "merchantDefinedDataField79": "",
    "merchantDefinedDataField80": "",
    "merchantDefinedDataField81": "",
    "merchantDefinedDataField82": "",
    "merchantDefinedDataField83": "",
    "merchantDefinedDataField84": "",
    "merchantDefinedDataField85": "",
    "merchantDefinedDataField86": "",
    "merchantDefinedDataField87": "",
    "merchantDefinedDataField88": "",
    "merchantDefinedDataField89": "",
    "merchantDefinedDataField90": "",
    "merchantDefinedDataField91": "",
    "merchantDefinedDataField92": "",
    "merchantDefinedDataField93": "",
    "merchantDefinedDataField94": "",
    "merchantDefinedDataField95": "",
    "merchantDefinedDataField96": "",
    "merchantDefinedDataField97": "",
    "merchantDefinedDataField98": "",
    "merchantDefinedDataField99": "",
    "merchantDefinedDataField100": ""
  };

  // Convert a JSON object to a string. Making sure it contains the opening and closing {} and quotes around the kes and values
  const jsonData = JSON.stringify(data);

  const dataEncrypted = encryptJson(jsonData);
  // Compose the string to be encrypted from the retuned values
  const dataEncryptedStr = `${dataEncrypted.Vi}::${dataEncrypted.Salt}::${dataEncrypted.Passphrase}`;
  // Perform RSA encryption
  const encryptedPassphrase = rsaEncryption(dataEncryptedStr);

  console.log(`${dataEncrypted.Vi}::${dataEncrypted.Salt}::${dataEncrypted.Passphrase}`);

  // Compose final string to be sent to Banorte compose of the encrypted passPhrase and encrptedData
  const finalString = `${encryptedPassphrase}:::${dataEncrypted.Cypherdata}`;

  return finalString;

}
