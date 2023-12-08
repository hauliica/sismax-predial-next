import { clsx, type ClassValue } from "clsx";
import { randomBytes } from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Genera un valor alfanumerico seguro de cierta longitud
 * @param length Longitud del valor a generar. Dedault: 30
 * @returns string Valor alfanumérico generado
 */
export function generateControlNumber(length: number = 30): string {
    if (length > 30 || length <= 0) {
        throw new Error('Longitud no soportada.');
    }

    // Codificado Base62 (0-9, a-z, A-Z)
    const base62Charset = '0123456789abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRTUVWXYZ';
    let result = '';

    while (result.length < length) {
        const bytes = randomBytes(length - result.length);
        bytes.forEach(b => {
            // Convertidor 0-255 a 0-61
            const charIndex = b % 62;
            if (result.length < length) {
                result += base62Charset[charIndex];
            }
        });
    }

    return result;
}