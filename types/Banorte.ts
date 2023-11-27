export enum mode {
    AUT = "AUT",
    PRD = "PRD"
}

export interface PaymentData {
  merchantId: number; // Max Length 7, Numeric, Required
  name: string; // Max Length 20, Alphanumeric, Required
  password: string; // Max Length 20, Alphanumeric, Required
  mode: "PRD" | "AUT"; // Max Length 30, Alphanumeric, Required
  controlNumber: string; // Max Length 30, Alphanumeric, Required
  terminalId: string; // Max Length 15, Alphanumeric, Required
  amount: number; // Numeric with 2 decimal places, Required
  customerRef1?: string; // Max Length 30, Alphanumeric, Optional
  customerRef2?: string; // Max Length 16, Alphanumeric, Optional
  customerRef3?: string; // Max Length 30, Alphanumeric, Optional
  customerRef4?: string; // Max Length 30, Alphanumeric, Optional
  customerRef5?: string; // Max Length 30, Alphanumeric, Optional
  merchantName: string; // Max Length 25, Character, Required
  merchantCity: string; // Max Length 40, Character, Required
  lang?: "ES" | "EN"; // Length 2, Alphanumeric, Optional
}

interface BanorteResponse {
  CONTROL_NUMBER?: string; // Unique control reference for the transaction
  REFERENCE?: string; // Additional reference information
  CUST_REQ_DATE?: string; // Customer request date
  AUTH_REQ_DATE?: string; // Authorization request date
  AUTH_RSP_DATE?: string; // Authorization response date
  CUST_RSP_DATE?: string; // Customer response date
  PAYW_RESULT?: string; // Result from Payworks
  AUTH_RESULT?: string; // Authorization result
  PAYW_CODE?: string; // Payworks code
  AUTH_CODETEXT?: string; // Authorization code text
  ISSUING_BANK?: string; // Issuing bank
  CARD_BRAND?: string; // Card brand (e.g., Visa, MasterCard)
  CARD_TYPE?: string; // Type of card (e.g., credit, debit)
  MERCHANT_ID?: string; // Merchant ID assigned by Banorte
}