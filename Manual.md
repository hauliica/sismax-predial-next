MANUAL DE INTEGRACIÓN

VENTANA DE COMERCIO ELECTRÓNICO CIFRADA

11 / Agosto / 2022

Version 1.4

VENTANA DE COMERCIO ELECTRÓNICO CIFRADA

MANUAL DE INTEGRACION

Versiones
---------

| **Versión** | **Descripción de última modificación**                                                          | **Fecha**             |
|-------------|-------------------------------------------------------------------------------------------------|-----------------------|
| 1.0         | Primera Versión Cifrada en Español                                                              | 28 de Mayo del 2021   |
| 1.1         | Actualización del manual                                                                        | 15 de Abril del 2022  |
| 1.2         | Se actualiza manual homologando nombres de campos e incluyendolos campos de Tokenización        | 11 de Julio del 2022  |
| 1.3         | Se actualiza manual con explicación de armado del cifradoconsiderando narrativa de ejemplo .Net | 01 de Agosto del 2022 |
| 1.4         | Actualización de tablas de códigos anexos D y E                                                 | 12 de Agosto del 2022 |

Contenido
---------

[Introducción](#bookmark0) [4](#bookmark0)

[Características Generales del Producto](#bookmark1) [4](#bookmark1)

[Arquitectura](#bookmark2) [4](#bookmark2)

[Divisas Ventana de Comercio Electrónico](#bookmark3) [6](#bookmark3)

[Transacciones Soportadas](#bookmark4) [6](#bookmark4)

[Integración a Ventana de Comercio Electrónico](#bookmark5) [6](#bookmark5)

[Variables de envío](#bookmark6) [7](#bookmark6)

[Variables de Retorno](#bookmark7) [11](#bookmark7)

[Transacciones a modo de Prueba](#bookmark8) [11](#bookmark8)

[Certificación y liberación a producción](#bookmark9) [12](#bookmark9)

[Proceso de certificación](#bookmark10) [12](#bookmark10)

[ANEXO A – Ejemplo de Integración](#bookmark11) [13](#bookmark11)

[ANEXO B – Ejemplo de Cifrado / Descifrado](#bookmark12) [14](#bookmark12)

[ANEXO C – Códigos de Rechazo (CODIGO\_PAYW/PAYW\_CODE)](#bookmark13) [29](#bookmark13)

[ANEXO D – Códigos de Estatus 3D Secure](#bookmark14) [39](#bookmark14)

[ANEXO E – Códigos de Estatus Cybersource](#bookmark15) [40](#bookmark15)

[Glosario](#bookmark16) [41](#bookmark16)

[Información de contacto para soporte y certificación.](#bookmark17) [42](#bookmark17)

Introducción
-------------

El presente documento tiene por objetivo proporcionar un panorama general de la arquitectura de modo que el lector
técnico pueda adquirir una mayor comprensión sobre su construcción.

Características Generales del Producto
---------------------------------------

Ventana de Comercio Electrónico, forma parte de la renovación tecnológica de nuestros servicios adquirente. El rediseño
del servicio consta de:

* Implementación de nueva arquitectura que permite la administración de las opciones de pago
* Cambio de Imagen
* Mejora la experiencia al tarjeta habiente con proceso de pago intuitivo
* Incrementa la seguridad
* Adicionará nuevas opciones de pago.

Los comercios afiliados a Banorte que operan a través de Payworks podrán realizar operaciones de venta vía comercio
electrónico mediante el uso Payworks Ventana de Comercio Electrónico. Esta implementación permitirá soportar conexiones
con tecnología actualizada y segura, para realizar un pago orquestado siendo invocados desde web o móviles mediante un
Plug in.

Ventana de Comercio Electrónico, es complementado con la aplicación Consola E-commerce que reside dentro de Multicobros.

Banorte cuenta con módulos para la configuración de promociones por afiliación. Éste puede configurarse a nivel
afiliación desde la Consola de configuración.

Arquitectura
------------

Ventana de Comercio Electrónico es una aplicación que coordina todos los servicios contratados por el comercio afiliado
al adquiriente para hacer una venta, que permite aceptar operaciones con Tarjetas de Crédito y Débito VISA y MasterCard.

Es una aplicación Web SPA (Single Page Application), que consume servicios de back end por medio de la arquitectura
Multicanal, que a su vez ejecuta los distintos servicios de manera ordenada.

* E-Site Comercio. Aplicación del comercio Banorte habilitado para recibir pagos con Tarjeta. Cuando se hace una venta
  con tarjeta de Crédito y/Débito, el sitio solicita el servicio de pago Ventana de Comercio Electrónico, para que se
  realice el cargo a la tarjeta utilizada.
* Ventana de Comercio Electrónico. Es una aplicación web de página única que funge como interfaz de usuario para los
  servicios de pago orquestados. Por medio de esta interfaz se proporcionan los datos del tarjetahabiente y de acuerdo
  con la configuración, se ejecutarán los diversos pasos del pago.
* MCA Arquitectura Multi-Canal. Componente de alta disponibilidad donde se exponen los servicios de pagos. La
  arquitectura multicanal le da robustez y puede llegar a mejorar los tiempos de respuesta por medio de mecanismos como
  un pool de conexiones y servidores aplicativos de más capacidad.
* Servicios SOAP. Son los puntos de acceso a los servicios consumidos por Ventana de Comercio Electrónico.
* Cybersource. Permite hacer validaciones de los datos proporcionados por el tarjetahabiente, para validar la identidad
  y disminuir el nivel de fraude en la transacción.
* 3D Secure Plus. Permite hacer validaciones adicionales de los datos proporcionados por el tarjetahabiente, para
  validar el plástico y disminuir el nivel de fraude en la transacción de venta.
* Payworks. Es el motor de pagos del adquirente. Permite hacer los pagos de tarjeta.

Divisas Ventana de Comercio Electrónico
----------------------------------------

Las divisas que se aceptan son pesos Mexicanos y Dólares de los Estados Unidos. Para esto, es necesario configurar una
afiliación por cada una de las divisas.

Transacciones Soportadas
------------------------

Las transacciones son operaciones que están asociadas a una tarjeta de crédito o débito y tienen la finalidad de
producir un movimiento financiero en la cuenta del tarjetahabiente. Se producen normalmente como resultado de la
interacción de negocio entre el comercio y el tarjetahabiente (por ejemplo, para pagar algún bien o servicio), y
normalmente son enviadas al autorizador donde reside la cuenta del tarjetahabiente, para que éste decida si la
transacción solicitada se aprueba o se declina. Las siguientes son las transacciones disponibles en Ventana de
Comercio Electrónico:

```
* Venta

* Venta con Promoción
```

**Integración a Ventana de Comercio Electrónico**

Para poder realizar cobros mediante la aplicación “Ventana de Comercio Electrónico”, el Comercio deberá integrar en su
Aplicación Web (Client Side) los siguientes scripts:

* [“checkout.js” (](https://multicobros.banorte.com/orquestador/lightbox/checkoutV2.js)https://multicobros.banorte.com/orquestador/lightbox/checkoutV2.js)
* [“jquery-3.3.1.js” (](https://multicobros.banorte.com/orquestador/resources/js/jquery-3.3.1.js)https://multicobros.banorte.com/orquestador/resources/js/jquery-3.3.1.js)

Los previos scripts proveerán las funciones necesarias para procesar los pagos de sus clientes, dichos scripts estarán
ubicados en el servidor seguro de Banorte, los cuales se tienen que importar en la página/módulo donde se esté siendo
realizando el cobro.

#### Nota: La importación del script se tiene que poner de manera online (URL desde el servidor de Banorte), no crear una copia local de los scripts.

Al importar el script “checkoutV2.js”, se tendrán las siguientes funciones para poder implementar la ventana de pagos en
forma de “lightbox”.

Variables de envío
-------------------

La siguiente tabla especifica los parámetros de envío al aplicativo Ventana de Comercio en formato JSON, estos deberán
estar contenidos como resultado del cifrado que se realice, es decir la estructura JSON de los parámetros deberá estar
cifrada con el mecanismo de cifrado provisto, dicho resultado se deberá enviar como valor único hacia la Ventana de
Comercio.

Ej.

```
{

“parametro1”: “valor1,

“parametro2”: “valor2,

….

}
```

El contenido deberá estar cifrado para poder ser procesado por la Ventana de Comercio.

**NOTA: Favor de no mandar palabras acentuadas, diéresis o ñ en las variables de envío**

**Variablesde Envio:**

| **VARIABLE INGLÉS** | **DESCRIPCIÓN**                                                                                                                                                                                                              | **FORMATO**   | **MAX** | **¿ES REQUERIDO?** |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------|--------------------|
| merchantId          | Número de afiliación asignado por Banorte para identificar al comercio                                                                                                                                                       | Numérico      | 7       |                    |
| name                | Usuario generado por el Cliente el cual solo tiene permiso de ejecutar transacciones.                                                                                                                                        | Alfa-numérico | 20      |                    |
| password            | Contraseña del usuario con el que se ejecuta la transacción                                                                                                                                                                  | Alfa-numérico | 20      |                    |
| mode                | Indica el modo en que se ejecutará la transacción. Valores posibles:                                                                                                                                                         | Alfa-numérico | 30      |                    |
| controlNumber       | Referencia única para la transacción controlada por el comercio.                                                                                                                                                             | Alfa-numérico | 30      |                    |
| terminalId          | El identificador de punto de venta o terminal sobre la que se ejecuta la transacción. El identificador especificado deberá existir en la base de datos de Payworks, lo cual se hará normalmente al registrar una afiliación. | Alfa-numérico | 15      |                    |
| amount              | Especifica el monto de la transacción. Debe de incluir los decimales a dos dígitos, ejemplo 1.00 o 2.85.                                                                                                                     | Numérico      | 15      |                    |
| customerRef1        | Dato para uso exclusivo del cliente.                                                                                                                                                                                         | Alfa-numérico | 30      |                    |
| customerRef2        | Dato para uso exclusivo del cliente.                                                                                                                                                                                         | Alfa-numérico | 16      |                    |
| customerRef3        | Dato para uso exclusivo del cliente.                                                                                                                                                                                         | Alfa-numérico | 30      |                    |
| customerRef4        | Dato para uso exclusivo del cliente.                                                                                                                                                                                         | Alfa-numérico | 30      |                    |
| customerRef5        | Dato para uso exclusivo del cliente.                                                                                                                                                                                         | Alfa-numérico | 30      |                    |
| merchantName        | Nombre del Comercio                                                                                                                                                                                                          | Carácter      | 25      |                    |
| merchantCity        | Ciudad matriz del Comercio                                                                                                                                                                                                   | Carácter      | 40      |                    |
| lang                | Especifica el idioma en que se devolverán las variables de salida.Valores posibles: ES - Español, EN - Inglés.Mandar siempre y cuando tengan el servicio de Cybersource                                                      | Alfa-numérico | 2       |                    |

Variables de Retorno
--------------------

| **VARIABLE INGLÉS** | **DESCRIPCIÓN**                                                | **FORMATO**  | **COMENTARIOS**                                                                                                                                                                                                                                                                                                         |
|---------------------|----------------------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DATA                | Referencia única para la transacción controlada por el cliente | Alfanumérico | El contenido de esta variable traerá la estructura de Payworks, mismo que se deberá descifrar para poder ver los siguientes parámetros: CONTROL_NUMBER REFERENCE CUST_REQ_DATE AUTH_REQ_DATE AUTH_RSP_DATE CUST_RSP_DATE PAYW_RESULT AUTH_RESULT PAYW_CODE AUTH_CODE TEXT ISSUING_BANK CARD_BRAND CARD_TYPE MERCHANT_ID |

Transacciones a modo de Prueba
------------------------------

Ventana de Comercio Electrónico permite ejecutar transacciones en modo de Prueba (para simular el comportamiento de la
aplicación del comercio) y en modo Producción. Esto se define en la variable Modo (Mode). Los diferentes valores que se
pueden definir en esta variable son:

* PRD (Producción), la transacción es procesada en modo real.
* AUT (Autorización), modo de simulación, la transacción enviada en este modo siempre es aceptada.
* DEC (Declinado), modo de simulación, la transacción enviada en este modo siempre es rechazada.
* RND (Random), modo de simulación, la transacción enviada en este modo es aceptada o rechazada aleatoriamente.

Si lo que se desea es simplemente verificar la conexión con la aplicación Payworks puede establecer la variable mode en
modo de prueba (valor AUT, DEC o RND), considerando que todas las transacciones generadas en este modo no llegarán hasta
el procesador de tarjetas y por lo tanto no se hará ningún cargo a la tarjeta y ningún abono al estado de cuenta.

**NOTA: Es importante que al momento de terminar las pruebas esta variable se establezca en modo Producción (PRD) para
transaccionar, ya que si la aplicación del comercio envía por error las transacciones a modo de prueba no existe forma
de reprocesar las ventas para su pago**

Certificación y liberación a producción
------------------------------------------

Una vez que el usuario administrador del comercio reciba la contraseña, es necesario que realice el cambio de la misma y
que cree un usuario de solo ejecución para utilizarlo en su implementación. También es altamente recomendable la
creación de usuarios independientes para cada persona que requiera consultar reportes. Estas modificaciones las pueden
realizar desde el módulo de Usuarios de la Herramienta Administrativa.

Los usuarios requeridos son los siguientes:

* Usuario administrador para la gestión de los usuarios creados
* Usuario de solo ejecución para utilizarlo en la implementación
* Usuario para cada persona que requiera consultar reportes

NOTA: Es responsabilidad del usuario administrador la gestión de los usuarios y el correcto uso de su contraseña

Antes de la liberación a producción es requerido que se lleve a cabo un proceso de certificación, este proceso verifica
que su integración cumpla con los requerimientos necesarios para operar. Este proceso es obligatorio para todo comercio
que realizó un desarrollo propio o con un tercero para su conexión al motor de pagos de Banorte.

Proceso de certificación
-------------------------

El proceso se compone de las siguientes dos fases:

En la primera fase el comercio nos debe solicitar y hacer llegar llenados dos documentos que se les compartirá:

1. Solicitud de certificación: Documento en formato Word en el cual se solicitan datos de la integración (
   características generales del proyecto, transacciones a implementar, etc.).
2. Matriz de pruebas: Documento en formato Excel, el cual se debe llenar con los datos de las transacciones que se van a
   certificar (Afiliación, Número de control, Referencia, Hora, Fecha, entre otros datos).

En la segunda fase el Laboratorio Payworks procede a verificar la documentación anterior, así como la mensajería
transaccional enviada al motor, esta revisión se realiza con cada una de las transacciones que nos describieron en la
matriz de certificación. Si las validaciones son correctas, se realizará la entrega de una Carta de Certificación,
documento que avala que la integración del comercio cumple con los requisitos mínimos necesarios para operar, y describe
las características de la integración del comercio, transacciones que implementó, notas u observaciones, entre otros
datos. Si las validaciones no son correctas se solicitará al comercio las adecuaciones necesarias para la corrección.

**NOTA: Si el comercio inicia transacciones productivas antes de finalizar el proceso de certificación, Banorte no se
hará
responsable por:**

* Fallas en la integración del comercio
* Contra-cargos generados durante ese periodo
* El abono de lo operado a modo producción mientras no finalice el proceso de certificación

ANEXO A – Ejemplo de Integración
----------------------------------

```html

<script src="https://multicobros.banorte.com/orquestador/resources/js/jquery-3.3.1.js" type="text/javascript"></script>
<script src="https://multicobros.banorte.com/orquestador/lightbox/checkoutV2.js" type="text/javascript"></script>

<script>
    // Como primer paso, se realiza el llamado del ambiente donde se ejecutarán las operaciones.
    Payment.setEnv("pro");
    // Como segundo paso, se crea una variable, que contendrá la información encriptada de los datos del comercio, compra y cliente (responsabilidad del comercio).
    var xObjEnc;
    // Como tercer paso, se invoca la función Payment.startPayment, donde se inicializará el proceso de pago, esta función será la encargada de realizar la recepción del objeto encriptado que contiene la información de los datos del comercio, compra y cliente, posterior, enviarlo dentro de un parámetro llamado “Params”. Al implementar la función, se deben tener implementados los 4 eventos para controlar los eventos de éxito (onSuccess), cancelación (onCancel) de la operación y cerrado del lightbox(onClosed).
    Payment.startPayment({
        Params: xObjEnc,
        onClosed: function (response) {
        },
        onError: function (response) {
        },
        onSuccess: function (response) {
        },
        onCancel: function (response) {
        }
    });
    })
    ;
</script>
```

ANEXO B – Ejemplo de Cifrado / Descifrado
------------------------------------------

1. CIFRADO

### Objetivo.

Obtener cadena de datos para invocar a VCE, se requiere armar una cadena compuesta por dos subcadenas separadas por el
delimitador “:::”: (`Subcadena1:::Subcadena2`)

## Procedimiento para generar Subcadena1:

### Significado Subcadena1:

* Cadena cifrada de forma simétrica con RSA utilizando el certificado proporcionado por Banorte.
* El contenido de la cadena son tres elementos generados al momento de cifrar `Subacdena2` separados por el
  delimitador “::”. Ejemplo: `viHex::saltHex::passprhase`
* Algoritmo utilizado: RSA/ECB/OAEPWITHSHA256ANDMGF1WITHSHA1PADDING
* Del certificado proporcionado por Banorte se tiene que extraer la llave pública del certificado convirtiendo el
  certificado de PEM a x.509.

### Significado Subcadena2:

* Cadena cifrada de forma asimétrica con AES utilizando llaves generadas de manera dinámica.
* El contenido son los datos en formato JSON requeridos por VCE.
* Algoritmo utilizado: AES/CTR/NOPADDING
* Se utilizan 4 elementos para lograr el cifrado:

* #### passprhase
* Cadena de 16 caracteres.
    * Se generan 16 caracteres de manera aleatoria de una cadena predefinida:
    * 0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz\*&-%/!?\*+=()

#### viHex

* Cadena de 32 caracteres
* Se generan 16 caracteres de manera aleatoria de una cadena predefinida:
    * `0123456789abcdefghiklmnopqrstuvwxyz`
* De los 16 caracteres se obtiene su representación en hexadecimal de cada carácter para obtener la cadena final
  de 32.

#### saltHex:

* Cadena de 32 caracteres
* Se generan 16 caracteres de manera aleatoria de una cadena predefinida:
* 0123456789abcdefghiklmnopqrstuvwxyz

#### Key

* Llave generada mediante el método Rfc2898DeriveBytes utilizando el algoritmo HashAlgorithmName.SHA1 y los elementos
  salHex (los 16 caracteres convertidos en un arreglo de bytes) y passprhase.
  **Nota:** Depende del provider a utilizar encontrar el equivalente del algoritmo.
* De la llave generada se obtienen los primeros 16 bytes.

```c#
public static ComponenteCifrado AESEncryptString(string datosJSONtxt)
{
// Se generan las naves aleatorias.
string passphrase = Keys.CreaRandom(true, 16);
string vi1 = keys. CreaRandom(false, 16);
string salt1 = Keys .CreaRandom(false, 16);

var viHex = vi1.ToHex();
var salttHex = salt1.ToHex();
var viByte = viHex.HexToByte();
var saltBYte = saltHex.HexToByte();

//Se genera la Secret key
int iterations = 1000;
var rfc2898 = new Rfc2898DeriveBytes(passphrase, saltByte, iterations, HashAlgorithmName.SHA1);

byte[] key = rfc2898.GetBytes(16);

//se prepara Ia informaci6n a ser cifrada
byte[] data = Encoding.UTF8.GetBytes(datosJSONtxt);

//se cifra la informaci6n con Bouncyclastle
IBufferedCipher cipher CipherUtilities.GetCipher("AES/CTR/NOPADDING");
cipher.Init(true, new ParametersWithIV(ParameterUtilities.CreateKeyParameter("AES", key), viByte));
byte[] encryptedBytes = cipher.DoFinal(data);

return new ComponentCifrado() { Vi = viHex, Salt = saltHex, PassPhrase = passphrase, CypherData = Convert.ToBase64String(encryptedBytes) };
}
```

### Resultado:

Del resultado se toma **CypherData** como **Subcadena2** para armar la cadena final:

```
{
    "Vi": " 7434316130317A753068723272746569",
    "Salt": " 3076356C346F7366387675337A316171",
    "PassPhrase": " g-T=Kq81GSgxRhc%",
    "CypherData": "{encrypted DATA OMMITED FOR BREVITY}"
}
```

### Armado de cadena final

Basándonos en el objetivo, se tiene que armar una cadena final con las dos subcadenas.`Subcadena1:::Subcadena2`

2. Descifrado de respuesta de VCE

Para descifrar la información que está encriptada de manera simétrica, será necesario contar con los valores que se
generaron de manera inicial en el cifrado AES (`viHex::saltHex::passprhase`), estos valores se sugieren que se queden a
resguardo por parte del comercio, dado que son la llave que utilizará para descifrar la información que la VCE retorne:

```
{
    "data": "XxsiFPMZjPSOjJyanlLHARoa/+lIdegR3lUczOcD4qGa4a4InjrkeL+QY6PpGpJwDoimBOgbB/0E03YQBxNKMI
RX8fZvKxszHcsZ16IgyB/gZHhv+/sguHFMYC0Ccu5hHQejZzX0/5OmXeGkMm6XhlxLKlOhbzcNCaEOQru23sn
BrIfvoJN8lWC+q4FlQKIGS3TiFLGQGSBahB3ePnysGAiGD4eWrvtRmUM8NdiWJ6AEWKYFtnhAshTc3NprUIj
A7IGrqrHaOtQUw/Zrz7s5ng/Fjj9CI9bE+UyPpjGzPwGtRkkg4G1jGZWPuyJw7yH5tb/q7MboZX8zb5nbVuikD yDhQw==",
    "status3D": "200",
    "eci": "05",
    "decision": "REVIEW", 
    "reasonCode": 480,
    "bnteCode": "00",
    "bnteText": "Transacción Exitosa", "id": 2,
    "message": "operationSuccessfully", 
    "numeroControl": "PBA22042709695XXFA36H01"

}
```

### Resultado:

```
    {
        "idAfiliacion":7000002,
        "referencia":248233587990,
        "numeroControl":"PBA22042709695XXFA36H01",
        "fechaReqCte":"2022-04-28T13:41:18.558",
        "fechaRspCte":"2022-04-28T13:41:18.684",
        "resultadoPayw":"A",
        "codigoAut":"214414",
        "texto":"Aprobada por Payworks (modo prueba)"
    }
```

### Formateado como JSON:

```
{
"idAfiliacion": 7000002,
"referencia": 248233587990,
"numeroControl": "PBA22042709695XXFA36H01", 
"fechaReqCte": "2022-04-28T13:41:18.558", 
"fechaRspCte": "2022-04-28T13:41:18.684",
"resultadoPayw": "A", "codigoAut": "214414",
"texto": "Aprobada por Payworks (modo prueba)"
}
```

**NOTA CIFRADO Y DESCIFRADO ASIMÉTRICO**: se sugiere realizar el cifrado AES de manera local, cifrado y descifrado, es
decir, con el algoritmo dado para el proceso simétrico, se deberá realizar sobre la estructura JSON a enviar y adicional
identificar muy bien los componentes que conforman la llave, VI, SALT y Passphrase dado que son elementos que tienen que
estar al resguardo del comercio para posteriormente realizar el descifrado.

Si el cifrado de los parámetros por el mecanismo provisto es generado satisfactoriamente, la VCE desplegará la
aplicación, dado que todos los parámetros se enviaron de acuerdo con la estructura siguiente:

### CifradoAsimeticoLlaveAES:::cifradoSimetricoParametrosVCE

Caso contrario, VCE enviará un error de autenticación con la siguiente estructura:

```
errorCode: "AUT-10"
message: "Authentication failed"
```

ANEXO C – Códigos de Rechazo (CODIGO_PAYW/PAYW\_CODE)
-----------------------------------------------------

<table><tbody><tr><td><p>CÓDIGO</p></td><td><p>TEXTO INGLÉS</p></td><td><p>TEXTO ESPAÑOL</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON TLS</p></td></tr><tr><td><p>PAYW-0001</p></td><td><p>Platform does not support requested TLS algorithm.</p></td><td><p>El algoritmo definido para encriptar en TLS no está soportado en esta plataforma.</p></td></tr><tr><td><p>PAYW-0002</p></td><td><p>Unexpected error when trying to access local keystore</p></td><td><p>Falla inesperada al accesar almacén de llaves (keystore)</p></td></tr><tr><td><p>PAYW-0003</p></td><td><p>The keystore could not be found at the configured location</p></td><td><p>El almacén de llaves (keystore) especificado no existe en la ubicación configurada</p></td></tr><tr><td><p>PAYW-0004</p></td><td><p>The keystore is not valid or is corrupted</p></td><td><p>El almacén de llaves (keystore) configurado no es válido o esta corrupto.</p></td></tr><tr><td><p>PAYW-0005</p></td><td><p>Access to keystore is not allowed</p></td><td><p>El acceso al almacén de llaves (keystore) fue denegado por falta de permisos</p></td></tr><tr><td><p>PAYW-0006</p></td><td><p>General failure during TLS handshaking</p></td><td><p>Falla general de seguridad en manejo de socket TLS</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON SERVIDOR TCP</p></td></tr><tr><td><p>PAYW-0101</p></td><td><p>Socket server cannot be started</p></td><td><p>Falla al inicializar servidor de sockets</p></td></tr><tr><td><p>PAYW-0102</p></td><td><p>Unable to process transaction</p></td><td><p>Imposible procesar transacción</p></td></tr><tr><td><p>PAYW-0103</p></td><td><p>Unable to process transaction</p></td><td><p>Imposible procesar transacción</p></td></tr><tr><td><p>PAYW-0104</p></td><td><p>Unable to process transaction</p></td><td><p>Imposible procesar transacción</p></td></tr><tr><td><p>PAYW-0105</p></td><td><p>Unable to process transaction</p></td><td><p>Imposible procesar transacción</p></td></tr><tr><td><p>PAYW-0106</p></td><td><p>Unable to process transaction</p></td><td><p>Imposible procesar transacción</p></td></tr><tr><td><p>PAYW-0107</p></td><td><p>Unable to process transaction</p></td><td><p>Imposible procesar transacción</p></td></tr><tr><td><p>PAYW-0108</p></td><td><p>Unable to process transaction</p></td><td><p>Imposible procesar transacción</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON CLIENTE TCP</p></td></tr><tr><td><p>PAYW-0201</p></td><td><p>Client was unable to create socket to connect to server xxx</p></td><td><p>Falla al intentar crear socket en cliente hacia servidor xxx</p></td></tr></tbody></table>
<table><tbody><tr><td><p>PAYW-0202</p></td><td><p>Unable to connect to server xxx</p></td><td><p>Incapaz de establecer conexión con servidor xxx</p></td></tr><tr><td><p>PAYW-0203</p></td><td><p>Connection to server xxx has been closed. Trying to reconnect</p></td><td><p>No se tiene conexión actualmente con el servidor xxx. Se intenta reconexión</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON MENSAJERIA ISO</p></td></tr><tr><td><p>PAYW-1001</p></td><td><p>Received ISO message does not meet the expected format</p></td><td><p>El mensaje ISO recibido no tiene el formato esperado</p></td></tr><tr><td><p>PAYW-1002</p></td><td><p>Invalid TPU in the received ISO message</p></td><td><p>El mensaje ISO recibido contiene una TPDU no válida</p></td></tr><tr><td><p>PAYW-1003</p></td><td><p>The bitmap in the received ISO message is not valid</p></td><td><p>El mensaje ISO recibido no tiene un mapa de bits consistente.</p></td></tr><tr><td><p>PAYW-1004</p></td><td><p>Received ISO message has an invalid suffix</p></td><td><p>El mensaje ISO recibido tiene un terminador no válido</p></td></tr><tr><td><p>PAYW-1005</p></td><td><p>Failure when trying to decode field xxx</p></td><td><p>Falla al decodificar el campo xxx</p></td></tr><tr><td><p>PAYW-1006</p></td><td><p>Failure when trying to encode xxx. Value\: ''yyy''</p></td><td><p>Falla al codificar el campo xxx. Valor\: ''yyy''</p></td></tr><tr><td><p>PAYW-1007</p></td><td><p>Field contents in the ISO message exceeds the maximum allowed</p></td><td><p>El contenido del campo ISO excede el máximo permitido</p></td></tr><tr><td><p>PAYW-1008</p></td><td><p>Unexpected type for field xxx in the ISO message</p></td><td><p>El tipo del campo xxx de ISO no es del tipo esperado</p></td></tr><tr><td><p>PAYW-1009</p></td><td><p>Charset ISO-8859-1 is not supported in the current execution platform</p></td><td><p>El juego de caracteres ISO-8859-1 no está soportado en esta plataforma</p></td></tr><tr><td><p>PAYW-1010</p></td><td><p>Incomplete field xxx in the ISO message</p></td><td><p>El campo xxx está incompleto en el mensaje ISO</p></td></tr><tr><td><p>PAYW-1011</p></td><td><p>Invalid field xxx in the ISO message</p></td><td><p>El campo xxx no es válido</p></td></tr><tr><td><p>PAYW-1012</p></td><td><p>Variable length for field xxx exceeds value specified in the prefix</p></td><td><p>La longitud del campo variable xxx excede lo indicado en el prefijo</p></td></tr><tr><td><p>PAYW-1013</p></td><td><p>Field xxx has an invalid content</p></td><td><p>El contenido del campo xxx no es válido</p></td></tr><tr><td><p>PAYW-1014</p></td><td><p>POS Entry Mode (field 22) has an invalid value</p></td><td><p>El modo de entrada (campo 22) no es válido</p></td></tr><tr><td><p>PAYW-1015</p></td><td><p>Field xxx is required but was not included in the ISO message</p></td><td><p>El campo xxx es requerido y no fue incluido en el mensaje ISO</p></td></tr><tr><td><p>PAYW-1016</p></td><td><p>Statistical message does not have the expected format</p></td><td><p>El mensaje de estadísticos recibido no tiene el formato esperado</p></td></tr><tr><td><p>PAYW-1017</p></td><td><p>Unable to recognize transaction sent by device</p></td><td><p>No ha sido posible identificar el tipo de transacción enviada por el dispositivo</p></td></tr><tr><td><p>PAYW-1018</p></td><td><p>Information about Q6 promotion is not valid</p></td><td><p>La información de promoción Q6 es inválida</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON INTERFAZ HTTP</p></td></tr><tr><td><p>PAYW-2001</p></td><td><p>Unexpected failure when processing command/transaction</p></td><td><p>Falla inesperada al intentar procesar transacción</p></td></tr><tr><td><p>PAYW-2002</p></td><td><p>Parameter 'xxx' cannot be provided for a manual transaction</p></td><td><p>El parámetro 'xxx' no puede incluirse en una transacción manual</p></td></tr><tr><td><p>PAYW-2003</p></td><td><p>Parameter 'xxx' cannot be provided for transaction with a swiped/inserted card</p></td><td><p>El parámetro 'xxx' no puede incluirse en una transacción con plástico presente</p></td></tr><tr><td><p>PAYW-2004</p></td><td><p>Parameter 'xxx' with value 'yyy' can only be provided for a transaction with a chip card</p></td><td><p>El parámetro 'xxx' con valor 'yyy' sólo es requerido en una transacción de chip</p></td></tr><tr><td><p>PAYW-2005</p></td><td><p>Parameter 'xxx' with value 'yyy' cannot be accepted for a manual transaction</p></td><td><p>El parámetro 'xxx' con valor 'yyy' no es compatible con una transacción manual</p></td></tr><tr><td><p>PAYW-2006</p></td><td><p>Parameter 'xxx' with value 'yyy' cannot be accepted for a swiped / inserted card</p></td><td><p>El parámetro 'xxx' con valor 'yyy' no es compatible con una transacción con plástico presente</p></td></tr><tr><td><p>PAYW-2007</p></td><td><p>Promotional transaction requires some missing fields</p></td><td><p>La información sobre la promoción en la transacción no está completa</p></td></tr><tr><td><p>PAYW-2008</p></td><td><p>Parameter 'xxx' with value 'yyy' specifies an expired date</p></td><td><p>El parámetro 'xxx' con valor ''yyy' corresponde a una fecha expirada</p></td></tr><tr><td><p>PAYW-2009</p></td><td><p>Command requires either 'REFERENCE' or 'CONTROL_NUMBER'</p></td><td><p>El comando requiere 'REFERENCIA' o 'NUMERO_CONTROL'</p></td></tr><tr><td><p>PAYW-2010</p></td><td><p>Required parameter 'CMD_TRANS' was not supplied</p></td><td><p>No se especificó el parámetro requerido 'CMD_TRANS'</p></td></tr></tbody></table>

<table><tbody><tr><td><p>PAYW-2011</p></td><td><p>Requested Command/transaction 'xxx' is not valid or not supported</p></td><td><p>El comando/transacción 'xxx' no es válido(a) o no está soportado(a)</p></td></tr><tr><td><p>PAYW-2012</p></td><td><p>Value 'yyy' supplied for parameter 'xxx' is not valid</p></td><td><p>El valor 'yyy' suministrado para el parámetro 'xxx' es inválido</p></td></tr><tr><td><p>PAYW-2013</p></td><td><p>Value 'yyy' supplied for parameter 'xxx' exceeds maximum allowed length</p></td><td><p>El valor 'yyy' suministrado para el parámetro 'xxx' excede la longitud máxima permitida</p></td></tr><tr><td><p>PAYW-2014</p></td><td><p>Parameter 'xxx' cannot be null</p></td><td><p>El parámetro 'xxx' no puede ser nulo</p></td></tr><tr><td><p>PAYW-2015</p></td><td><p>No response received for the command / transaction</p></td><td><p>No hubo respuesta para el comando / transacción</p></td></tr><tr><td><p>PAYW<span>‐</span>2016</p></td><td><p>Parameters 'XID' y 'CAVV' are required for this type of transaction</p></td><td><p>Los parámetros 'XID' y 'CAVV' son obligatorios para este tipo de transacción</p></td></tr><tr><td><p>PAYW<span>‐</span>2017</p></td><td><p>Failure while trying to decypher transaction data</p></td><td><p>Falla al intentar descifrar campos de transacción</p></td></tr><tr><td><p>PAYW<span>‐</span>2018</p></td><td><p>The following parameter is required to process the request: ''</p></td><td><p>El siguiente parámetro es requerido para procesar el requerimiento: ''</p></td></tr><tr><td><p>PAYW<span>‐</span>2019</p></td><td><p>The key needed to decrypt data from this device has not been loaded or is not available</p></td><td><p>La llave necesaria para procesar datos cifrados no ha sido cargada para este dispositivo o no está disponible</p></td></tr><tr><td><p>PAYW<span>‐</span>2020</p></td><td><p>Unable to decrypt data received at the 'INTERREDES' channel</p></td><td><p>Falla al intentar descifrar requerimiento enviado al canal INTERREDES</p></td></tr><tr><td><p>PAYW<span>‐</span>2021</p></td><td><p>Parameter '' cannot accept negative values</p></td><td><p>El parámetro '' no puede aceptar valores negativos</p></td></tr><tr><td><p>PAYW<span>‐</span>2022</p></td><td><p>Response url not valid</p></td><td><p>Respuesta url no válida</p></td></tr><tr><td><p>PAYW<span>‐</span>2023</p></td><td><p>Control number not secure</p></td><td><p>El número de control no es seguro</p></td></tr><tr><td><p>PAYW<span>‐</span>2024</p></td><td><p>Response url not valid</p></td><td><p>Respuesta url no válida</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON CARD ON FILE</p></td></tr><tr><td><p>PAYW<span>‐</span>2025</p></td><td><p>Incomplete COF variables</p></td><td><p>Variables COF incompletas</p></td></tr><tr><td><p>PAYW<span>‐</span>2026</p></td><td><p>The 3DSecure variables were not sent</p></td><td><p>Monto Invalido</p></td></tr><tr><td><p>PAYW<span>‐</span>2027</p></td><td><p>Value 'xxx' is invalid format</p></td><td><p>El valor 'xxx' tiene un formato invalido</p></td></tr><tr><td><p>PAYW<span>‐</span>2028</p></td><td><p>Merchant_id 'xxx' haven´t a decrypt key</p></td><td><p>La afiliación 'xxx' no tiene una llave asignada para el descifrado</p></td></tr><tr><td><p>PAYW<span>‐</span>2029</p></td><td><p>The JSON is invalid format</p></td><td><p>El JSON proporcionado es invalido</p></td></tr><tr><td><p>PAYW<span>‐</span>2030</p></td><td><p>The JSON is Invalid format</p></td><td><p>El JSON proporcionado es invalido</p></td></tr><tr><td><p>PAYW<span>‐</span>2031</p></td><td><p>DFA data does not have the correct format, in the field: ''{0}'' with value: 'xxx'</p></td><td><p>Los datos de DFA no cuenta con el formato correcto, en el campo: 'xxx' con valor: 'yyy'</p></td></tr><tr><td><p>PAYW<span>‐</span>2032</p></td><td><p>Invalid Amount</p></td><td><p>Monto Invalido</p></td></tr><tr><td><p>PAYW<span>‐</span>2033</p></td><td><p>Incomplete Apple Pay variables</p></td><td><p>Variables Apple Pay incompletas</p></td></tr><tr><td><p>PAYW<span>‐</span>2034</p></td><td><p>'xxx' value of 3D_VERSION is invalid</p></td><td><p>El valor 'xxx' de 3D_VERSION es invalido</p></td></tr><tr><td><p>PAYW<span>‐</span>2035</p></td><td><p>The value 'xxx' supplied for the parameter 'xxx' does not have the exact length of characters allowed</p></td><td><p>El valor 'xxx' suministrado para el parámetro 'yyy' no cuenta con la longitud exacta permitida de caracteres</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON COMANDOS Y TRANSACCIONES</p></td></tr><tr><td><p>PAYW-3001</p></td><td><p>Unable to execute command/transaction; please retry later</p></td><td><p>Incapaz de realizar operación. Por favor intente más tarde</p></td></tr><tr><td><p>PAYW-3002</p></td><td><p>Invalid Affiliation / User</p></td><td><p>La afiliación o el usuario proporcionados no existen</p></td></tr><tr><td><p>PAYW-3003</p></td><td><p>Invalid User / Password</p></td><td><p>Usuario o contraseña inválidos</p></td></tr><tr><td><p>PAYW-3004</p></td><td><p>Affiliation xxx is currently inactive</p></td><td><p>La afiliación xxx no se encuentra active</p></td></tr><tr><td><p>PAYW-3005</p></td><td><p>Client xxx is currently inactive</p></td><td><p>El cliente xxx no se encuentra active</p></td></tr><tr><td><p>PAYW-3006</p></td><td><p>User xxx is currently inactive</p></td><td><p>El cliente xxx no se encuentra active</p></td></tr><tr><td><p>PAYW-3007</p></td><td><p>User xxx is not allowed to execute commands / transactions</p></td><td><p>El usuario xxx no tiene el permiso necesario para ejecutar comandos/transacciones</p></td></tr></tbody></table>


<table><tbody><tr><td><p>PAYW-3008</p></td><td><p>Terminal xxx does not exist for this affiliation</p></td><td><p>La terminal xxx no existe para esta afiliación</p></td></tr><tr><td><p>PAYW-3009</p></td><td><p>Terminal xxx is currently inactive</p></td><td><p>La terminal xxx no se encuentra active</p></td></tr><tr><td><p>PAYW-3010</p></td><td><p>Card brand / terminal do not allow this type of transaction</p></td><td><p>Transacción no permitida para esta terminal y marca de tarjeta</p></td></tr><tr><td><p>PAYW-3011</p></td><td><p>Command xxx is not currently supported</p></td><td><p>El comando xxx no está soportado actualmente</p></td></tr><tr><td><p>PAYW-3012</p></td><td><p>Referred transaction xxx does not exist</p></td><td><p>La transacción referenciada xxx no existe</p></td></tr><tr><td><p>PAYW-3013</p></td><td><p>Referred transaction xxx has been previously cancelled</p></td><td><p>La transacción referenciada xxx ha sido cancelada previamente.</p></td></tr><tr><td><p>PAYW-3014</p></td><td><p>Rejected: The total amount for transaction xxx has been already refunded</p></td><td><p>Rechazada: El 100% del importe de la transacción referenciada xxx ya ha sido devuelto</p></td></tr><tr><td><p>PAYW-3015</p></td><td><p>Rejected: Partial refunds have been already applied to referred transaction xxx</p></td><td><p>Rechazada: La transacción referenciada xxx ya tiene devoluciones parciales aplicadas</p></td></tr><tr><td><p>PAYW-3016</p></td><td><p>Illegal to execute a refund on the referred transaction xxx</p></td><td><p>La transacción referenciada xxx no permite devoluciones</p></td></tr><tr><td><p>PAYW-3017</p></td><td><p>Refund requires the referred transaction xxx to be closed first (still open)</p></td><td><p>No es posible efectuar una devolución sobre la transacción xxx, la cual no ha sido cerrada</p></td></tr><tr><td><p>PAYW-3018</p></td><td><p>Amount requested in the refund xxx exceeds the maximum allowed: yyy</p></td><td><p>El importe de la devolución por xxx excede el máximo disponible: yyy</p></td></tr><tr><td><p>PAYW-3019</p></td><td><p>Not allowed to close a reauthorization; please use the original preauthorization</p></td><td><p>No se admite el cierre de reautorizaciones; utilice la preautorizacion original.</p></td></tr><tr><td><p>PAYW-3020</p></td><td><p>Postauthorizations are only valid for open preauthorizations</p></td><td><p>Sólo se permiten postautorizaciones para preautorizaciones abiertas.</p></td></tr><tr><td><p>PAYW-3021</p></td><td><p>Postauthorizations amount of xxx exceeds the maximum allowed: yyy</p></td><td><p>El monto de la postautorización por xxx excede el máximo disponible: yyy</p></td></tr><tr><td><p>PAYW-3022</p></td><td><p>Reauthorizations are only valid for open preauthorizations</p></td><td><p>Sólo se permiten reautorizaciones para preautorizaciones abiertas</p></td></tr><tr><td><p>PAYW-3023</p></td><td><p>Reauthorizations are not allowed for this application type: xxx</p></td><td><p>El tipo de aplicación xxx no permite reautorizaciones</p></td></tr><tr><td><p>PAYW-3024</p></td><td><p>Illegal to execute a cancellation on the referred transaction xxx</p></td><td><p>La transacción referenciada xxx no permite cancelaciones</p></td></tr><tr><td><p>PAYW-3025</p></td><td><p>Cancellation requires the referred transaction xxx to be closed first (still open)</p></td><td><p>No es posible efectuar una cancelación sobre la transacción xxx, la cual no ha sido cerrada</p></td></tr><tr><td><p>PAYW-3026</p></td><td><p>Not allowed to execute cancellations</p></td><td><p>No tiene el permiso para ejecutar una cancelación</p></td></tr><tr><td><p>PAYW-3027</p></td><td><p>Not allowed to execute a cashback</p></td><td><p>No tiene el permiso para ejecutar una transacción de cashback</p></td></tr><tr><td><p>PAYW-3028</p></td><td><p>Not allowed to execute a credit</p></td><td><p>La transacción de crédito directo no está habilitada</p></td></tr><tr><td><p>PAYW-3029</p></td><td><p>Not allowed to execute a refund</p></td><td><p>No se tiene el permiso necesario para ejecutar una transacción de Devolución</p></td></tr><tr><td><p>PAYW-3030</p></td><td><p>Unrestricted or late refunds are not allowed</p></td><td><p>No se tiene el permiso necesario para ejecutar una transacción de Devolución</p></td></tr><tr><td><p>PAYW-3031</p></td><td><p>Not allowed to execute transactions including promotions</p></td><td><p>No se tiene el permiso necesario para efectuar una transacción con promoción</p></td></tr><tr><td><p>PAYW-3032</p></td><td><p>Not allowed to execute QPS transactions</p></td><td><p>No se tiene el permiso necesario para ejecutar transacciones QPS</p></td></tr><tr><td><p>PAYW-3033</p></td><td><p>Not allowed to execute a forced authorization</p></td><td><p>No se tiene el permiso necesario para realizar una venta forzada</p></td></tr><tr><td><p>PAYW-3034</p></td><td><p>Amount exceeds the maximum allowed for a QPS transaction</p></td><td><p>El monto indicado en la transacción QPS excede el máximo permitido</p></td></tr><tr><td><p>PAYW-3035</p></td><td><p>Affiliation requires a valid terminal number to be supplied</p></td><td><p>La afiliación requiere que se proporcione una terminal válida</p></td></tr><tr><td><p>PAYW-3036</p></td><td><p>Default terminal does not exist in the database</p></td><td><p>La terminal por defecto no ha sido creada en la base de datos</p></td></tr><tr><td><p>PAYW-3037</p></td><td><p>Card type xxx is not currently Supported</p></td><td><p>No hay soporte para las tarjetas de marca xxx</p></td></tr><tr><td><p>PAYW-3038</p></td><td><p>Authorizer xxx is not currently supported</p></td><td><p>No hay soporte para el autorizador xxx</p></td></tr></tbody></table>

<table><tbody><tr><td><p>PAYW-3039</p></td><td><p>Control number xxx has been already used for a previous transaction</p></td><td><p>El No. de Control xxx ya existe para una transacción anterior</p></td></tr><tr><td><p>PAYW-3040</p></td><td><p>Transactions with amount zero are not valid</p></td><td><p>No se permite monto cero en una transacción</p></td></tr><tr><td><p>PAYW-3041</p></td><td><p>FALLBACK transactions are not allowed</p></td><td><p>Las transacciones FALLBACK no están permitidas</p></td></tr><tr><td><p>PAYW-3042</p></td><td><p>The 3DSecure eCommerce indicator (ECI) received for this transaction is not allowed</p></td><td><p>El indicador de 3DSecure (ECI) recibido para esta transacción no está permitido</p></td></tr><tr><td><p>PAYW-3043</p></td><td><p>Previous operation required by this transaction could not be executed</p></td><td><p>La operación previa requerida para ejecutar esta transacción no tuvo éxito</p></td></tr><tr><td><p>PAYW-3044</p></td><td><p>Previous operation required by this transaction was declined by authorizer</p></td><td><p>La operación previa requerida para ejecutar esta transacción fue declinada por el autorizador.</p></td></tr><tr><td><p>PAYW-3045</p></td><td><p>No response received for previous operation required by this transaction</p></td><td><p>La operación previa requerida para ejecutar esta transacción no tuvo respuesta</p></td></tr><tr><td><p>PAYW-3046</p></td><td><p>The security code is required and was not supplied</p></td><td><p>El código de seguridad es requerido y no fue proporcionado</p></td></tr><tr><td><p>PAYW-3047</p></td><td><p>Transaction entry mode is not allowed for affiliation type: xxx</p></td><td><p>El modo de entrada de la transacción no es compatible con el tipo de afiliación: xxx</p></td></tr><tr><td><p>PAYW-3048</p></td><td><p>No manual entry mode for transactions is allowed</p></td><td><p>No se tiene el permiso necesario para ejecutar transacciones digitadas o manuales.</p></td></tr><tr><td><p>PAYW-3049</p></td><td><p>Referred transaction xxx has been previously cancelled</p></td><td><p>La transacción referenciada xxx ya había sido reversada</p></td></tr><tr><td><p>PAYW-3050</p></td><td><p>The referred transaction cannot be reversed</p></td><td><p>La transacción referenciada no admite reversas</p></td></tr><tr><td><p>PAYW-3051</p></td><td><p>Referred transaction xxx had not been approved</p></td><td><p>La transacción referenciada xxx se encuentra en estado de suspensión</p></td></tr><tr><td><p>PAYW-3052</p></td><td><p>Referred transaction xxx is currently locked</p></td><td><p>La transacción referenciada xxx se encuentra en estado de suspensión</p></td></tr><tr><td><p>PAYW<span>‐</span>3053</p></td><td><p>Cashback is only allowed for transactions with card present (CHIP / MAGSTRIPE)</p></td><td><p>La transacción de cashback sólo está permitida con plástico presente (CHIP / BANDA)</p></td></tr><tr><td><p>PAYW-3054</p></td><td><p>No transaction was found for the affiliation / terminal supplied</p></td><td><p>No se encontró ninguna transacción para la afiliación/terminal suministrados</p></td></tr><tr><td><p>PAYW-3055</p></td><td><p>Referred transaction exists, but it was not generated by the supplied terminal</p></td><td><p>La transacción referenciada existe, pero no fue generada por la terminal proporcionada</p></td></tr><tr><td><p>PAYW-3056</p></td><td><p>Referred transaction exists, but it does not belong to the supplied affiliation</p></td><td><p>La transacción referenciada existe, pero no pertenece a la afiliación proporcionada</p></td></tr><tr><td><p>PAYW-3057</p></td><td><p>Settlement for group xxx is already running; cannot be executed concurrently more than once</p></td><td><p>El cierre del lote xxx ya está en proceso; no puede ejecutarse concurrentemente más de una vez</p></td></tr><tr><td><p>PAYW-3058</p></td><td><p>Settlement for this affiliation is already running; cannot be executed concurrently more than once</p></td><td><p>El cierre masivo para esta afiliación ya está en proceso; no puede ejecutarse concurrentemente más de una vez</p></td></tr><tr><td><p>PAYW<span>‐</span>3059</p></td><td><p>No transaction mode was sent (if it is an ISO transaction, please make sure that the affiliation is of type TPV)</p></td><td><p>No se especificó modo de la transacción (si es ISO verifique que la afiliación sea de tipo TPV).</p></td></tr><tr><td><p>PAYW<span>‐</span>3060</p></td><td><p>The affiliation is of type TPV. It is not valid to provide the MODE parameter</p></td><td><p>La afiliación es de tipo TPV. no es válido proporcionar el parámetro MODO</p></td></tr><tr><td><p>PAYW<span>‐</span>3061</p></td><td><p>The affiliation has been configured as aggregator, but the format indicator is null</p></td><td><p>La afiliación ha sido configurada como agregador pero el indicador de formato es nulo</p></td></tr><tr><td><p>PAYW<span>‐</span>3062</p></td><td><p>The affiliation has been configured as aggregator; missing associated merchant is required (SUB_MERCHANT)</p></td><td><p>La afiliación es un agregador; se requiere obligatoriamente el nombre del comercio asociado (SUB_AFILIACION)</p></td></tr><tr><td><p>PAYW<span>‐</span>3063</p></td><td><p>This transaction is not acceptable under mobile payment mode</p></td><td><p>Esta transacción no es aceptable con pago móvil</p></td></tr><tr><td><p>PAYW<span>‐</span>3064</p></td><td><p>Not allowed to execute mobile payment transactions</p></td><td><p>No se tiene el permiso necesario para ejecutar transacciones de pago móvil</p></td></tr><tr><td><p>PAYW<span>‐</span>3065</p></td><td><p>This card cannot be used in mobile payment transactions</p></td><td><p>Esta tarjeta no está autorizada para realizar transacciones de pago móvil</p></td></tr><tr><td><p>PAYW<span>‐</span>3066</p></td><td><p>Mobile payment transactions can only be manually entered</p></td><td><p>La transacciones de pago móvil únicamente pueden ser digitadas</p></td></tr><tr><td><p>PAYW<span>‐</span>3067</p></td><td><p>Plan type xxx is not valid</p></td><td><p>El valor del tipo de plan suministrado xxx es inválido</p></td></tr></tbody></table>


<table><tbody><tr><td><p>PAYW<span>‐</span>3068</p></td><td><p>Promotion is not valid or not supported</p></td><td><p>La promoción proporcionada es inválida o no está soportada</p></td></tr><tr><td><p>PAYW<span>‐</span>3069</p></td><td><p>Plan type xxx conflicts with other data in the promotion</p></td><td><p>El tipo de plan xxx es inconsistente con la promoción proporcionada</p></td></tr><tr><td><p>PAYW<span>‐</span>3070</p></td><td><p>This transaction cannot be sent in test mode, since the referred transaction was sent in production mode</p></td><td><p>No se admite esta transacción en modo de prueba, ya que la transacción referenciada fue enviada en modo de producción</p></td></tr><tr><td><p>PAYW<span>‐</span>3071</p></td><td><p>This transaction cannot be sent in production mode, since the referred transaction was sent in test mode</p></td><td><p>No se admite esta transacción en modo de producción, ya que la transacción referenciada fue enviada en modo de prueba</p></td></tr><tr><td><p>PAYW<span>‐</span>3072</p></td><td><p>The requested cashback amount is below the minimum required</p></td><td><p>El monto para disponer en esta transacción está por debajo del mínimo requerido</p></td></tr><tr><td><p>PAYW<span>‐</span>3073</p></td><td><p>The requested cashback amount exceeds the maximum allowed</p></td><td><p>El monto para disponer en esta transacción excede el máximo autorizado</p></td></tr><tr><td><p>PAYW<span>‐</span>3074</p></td><td><p>The maximum number of cashback transactions allowed per day has been already reached</p></td><td><p>El número máximo de transacciones cashback que pueden ejecutarse en un día ha sido ya alcanzado</p></td></tr><tr><td><p>PAYW<span>‐</span>3075</p></td><td><p>Transaction rejected since it would cause the maximum allowed daily cashback disposal to be exceeded</p></td><td><p>Transacción rechazada ya que se excedería el monto máximo diario autorizado de disposición cashback</p></td></tr><tr><td><p>PAYW<span>‐</span>3076</p></td><td><p>Reauthorizations on a previous EMV transaction are not acceptable; a new preauthorization is required</p></td><td><p>No se admiten reautorizaciones de una transacción previa de tipo EMV; se requiere nueva lectura de plástico</p></td></tr><tr><td><p>PAYW<span>‐</span>3077</p></td><td><p>Amount exceeds maximum limit allowed for a manual transaction</p></td><td><p>El monto excede el tope máximo permitido para una transacción digitada</p></td></tr><tr><td><p>PAYW<span>‐</span>3078</p></td><td><p>One or more elements required by the referred transaction are empty</p></td><td><p>Uno o más elementos requeridos por la transacción referenciada no fueron proporcionados</p></td></tr><tr><td><p>PAYW<span>‐</span>3079</p></td><td><p>Selector validation for device serial number 'xxx' failed</p></td><td><p>Falla al validar el selector enviado para el pinpad con número de serie 'xxx'</p></td></tr><tr><td><p>PAYW<span>‐</span>3080</p></td><td><p>Unable to cypher master key for device with serial number 'xxx'</p></td><td><p>Falla al intentar cifrar la llave que se enviará al pinpad con número de serie 'xxx'</p></td></tr><tr><td><p>PAYW<span>‐</span>3081</p></td><td><p>No terminal was found having the provided serial number 'xxx'</p></td><td><p>No se encontró una terminal válida para el número de serie proporcionado 'xxx'</p></td></tr><tr><td><p>PAYW<span>‐</span>3082</p></td><td><p>The device with serial number 'xxx' has not been assigned a key</p></td><td><p>El dispositivo con número de serie 'xxx' no cuenta con una llave asignada</p></td></tr><tr><td><p>PAYW<span>‐</span>3083</p></td><td><p>Unable to retrieve exception bins for the requesting customer</p></td><td><p>Falla al obtener lista de bines de excepción para el cliente solicitante</p></td></tr><tr><td><p>PAYW<span>‐</span>3084</p></td><td><p>Failure when trying to cipher list of exception bins requested by device with serial number 'xxx'</p></td><td><p>Falla al intentar cifrar lista de bines de excepción que se enviará al dispositivo con número de serie 'xxx'</p></td></tr><tr><td><p>PAYW-3087</p></td><td><p>Referred transaction xxx does not exist</p></td><td><p>La transacción referenciada 'xxx' no existe</p></td></tr><tr><td><p>PAYW-3088</p></td><td><p>Exceeded the days of the closing time limit</p></td><td><p>Excedió los días del tiempo límite de cierre</p></td></tr><tr><td><p>PAYW-3089</p></td><td><p>The card is not allowed for this transaction</p></td><td><p>La tarjeta no está permitida para esta transacción</p></td></tr><tr><td><p>PAYW-3090</p></td><td><p>Unable to process transaction</p></td><td><p>Imposible procesar transacción</p></td></tr><tr><td><p>PAYW-3091</p></td><td><p>Reference 3 not found</p></td><td><p>Referencia 3 no encontrada</p></td></tr><tr><td><p>PAYW-3092</p></td><td><p>The tip amount is higher than 15 percent</p></td><td><p>El monto de la propina es mayor al 15%</p></td></tr><tr><td><p>PAYW-3093</p></td><td><p>Invalid transaction</p></td><td><p>Transacción no valida</p></td></tr><tr><td><p>PAYW-3094</p></td><td><p>The transaction was declined due to re-trial rules</p></td><td><p>La Transacción fue rechazada por regla de reintentos</p></td></tr><tr><td><p>PAYW-3095</p></td><td><p>Invalid format in Sub Merchant</p></td><td><p>Formato incorrecto en Sub_Afiliación</p></td></tr><tr><td><p>PAYW-3096</p></td><td><p>Invalid format in control number</p></td><td><p>Formato incorrecto en número de control</p></td></tr><tr><td><p>PAYW-3097</p></td><td><p>Invalid format in REF_CLIENTE from 1 to 5</p></td><td><p>Formato incorrecto en REF_CLIENTE 1 al 5</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON AUTORIZADOR TV</p></td></tr><tr><td><p>PAYW-3085</p></td><td><p>Referred transaction 'xxx' had not been approved</p></td><td><p>La transacción referenciada 'xxx' no había sido aprobada</p></td></tr></tbody></table>
<table><tbody><tr><td><p>PAYW-3086</p></td><td><p>Transaction rejected. Use chip reader slot</p></td><td><p>Transacción rechazada, utilice lector chip</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON TOKENIZACION</p></td></tr><tr><td><p>PAYW-3100</p></td><td><p>The merchant ‘xxx' does not have a tokenization service</p></td><td><p>La afiliación ‘xxx' no tiene servicio de tokenización</p></td></tr><tr><td><p>PAYW-3101</p></td><td><p>Invalid token</p></td><td><p>Token no valido</p></td></tr><tr><td><p>PAYW-3102</p></td><td><p>Failure in the MCA tokenization service</p></td><td><p>Falla en el servicio de tokenización de MCA</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON AUTORIZADORES</p></td></tr><tr><td><p>PAYW-4001</p></td><td><p>Configuration for connector to authorizer xxx does not include any channel</p></td><td><p>El conector hacia el autorizador xxx no tiene canales configurados</p></td></tr><tr><td><p>PAYW-4002</p></td><td><p>Authorizer xxx is not currently available</p></td><td><p>El autorizador xxx no está Disponible</p></td></tr><tr><td><p>PAYW-4003</p></td><td><p>Transaction xxx is not supported for authorizer yyy</p></td><td><p>La transacción xxx no está soportada para el autorizador yyy</p></td></tr><tr><td><p>PAYW-4004</p></td><td><p>Timeout for transaction xxx; response not received within the maximum amount of time</p></td><td><p>El tiempo máximo de espera para la transacción xxx ha sido excedido</p></td></tr><tr><td><p>PAYW-4005</p></td><td><p>Authorizer requires track 1 for this transaction</p></td><td><p>El track 1 es requerido por el autorizador para esta transacción</p></td></tr><tr><td><p>PAYW-4006</p></td><td><p>There is no information in the database about the specified affiliation/terminal for the authorizer xxx</p></td><td><p>No hay información en la base de datos sobre la afiliación/terminal para enviar hacia el autorizador xxx.</p></td></tr><tr><td><p>PAYW-4007</p></td><td><p>There is no terminal id for the authorizer xxx</p></td><td><p>No existe no. de terminal para enviar hacia el autorizador xxx</p></td></tr><tr><td><p>PAYW-4008</p></td><td><p>There is no merchant id for the authorizer xxx</p></td><td><p>No existe no. de afiliación para enviar hacia el autorizador xxx</p></td></tr><tr><td><p>PAYW-4009</p></td><td><p>Invalid type plan ('xxx') for a promotion</p></td><td><p>El valor para el tipo de plan ('xxx') no es válido.</p></td></tr><tr><td><p>PAYW-4010</p></td><td><p>Plan type value ('xxx') mismatches other parameters in the promotion</p></td><td><p>El valor para el tipo de plan ('xxx') no es congruente con el resto de los parámetros de la promoción.</p></td></tr><tr><td><p>PAYW-4011</p></td><td><p>Promotion must include initial deferment and/or payments number</p></td><td><p>La promoción debe incluir diferimiento inicial y/o número de pagos</p></td></tr><tr><td><p>PAYW-4012</p></td><td><p>Failure to decode token xxx: Value ‘yyy’ for subfield zzz is not</p><p>aceptable according to the specification</p></td><td><p>La información de EMV suministrada no es válida o está incompleta.</p></td></tr><tr><td><p>PAYW-4013</p></td><td><p>Failure to decode token xxx: Value ‘yyy’ for subfield zzz is not</p><p>aceptable according to the specification</p></td><td><p>Falla al decodificar token xxx: El valor ‘yyy’ para el subcampo zzz no es aceptable de acuerdo con la especificación.</p></td></tr><tr><td><p>PAYW-4014</p></td><td><p>Supplied EMV data does not contain element '' and it is required</p></td><td><p>El elemento ‘yyy’ no está presente en la información EMV suministrada y es requerido</p></td></tr><tr><td><p>PAYW-4015</p></td><td><p>Element ‘yyy’ supplied as part of EMV data is invalid</p></td><td><p>El elemento ‘yyy’ suministrado en la información EMV es inválido</p></td></tr><tr><td><p>PAYW-4016</p></td><td><p>Transaction ‘yyy’ is too old and will not be sent to the authorizer</p></td><td><p>La transacción ‘yyy’ fue recibida hace ya demasiado tiempo y no se enviará al autorizador</p></td></tr><tr><td><p>PAYW-4017</p></td><td><p>Inconsistent card number</p></td><td><p>Número de tarjeta inconsistente</p></td></tr><tr><td><p>PAYW-4018</p></td><td><p>Timeout for transaction 'xxx'; response not received within the maximum amount of time; it has reversal ''</p></td><td><p>El tiempo máximo de espera para la transacción 'xxx' ha sido excedido, reversa generada.</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON LA MENSAJERÍA</p></td></tr><tr><td><p>PAYW-4020</p></td><td><p>Failure to decode field received by the authorizer</p></td><td><p>Falla al decodificar un campo recibido por el autorizador</p></td></tr><tr><td><p>PAYW-4021</p></td><td><p>Timeout for transaction ‘xxx’ response not received within the maximum amount of time</p></td><td><p>El tiempo máximo de espera para la transacción ‘xxx’ ha sido excedido</p></td></tr><tr><td><p>PAYW-4022</p></td><td><p>Invalid transaction date</p></td><td><p>Fecha de transacción invalida</p></td></tr><tr><td><p>PAYW-4023</p></td><td><p>Invalid transaction amount</p></td><td><p>Monto de transacción invalido</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON EL CONECTOR PROSA</p></td></tr></tbody></table>


<table><tbody><tr><td><p>PAYW-4501</p></td><td><p>Failure to decode token. Value ‘xxx’ for subfield’ yyy’ is not acceptable according to the specification</p></td><td><p>Falla al decodificar token el valor ‘xxx’ para el subcampo</p><p>‘yyy’ no es aceptable de acuerdo con la especificación</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON BASE DE DATOS</p></td></tr><tr><td><p>PAYW-5000</p></td><td><p>Failure when trying to execute operation in the database</p></td><td><p>Falla al intentar ejecutar la siguiente operación en base de datos</p></td></tr><tr><td><p>PAYW-5001</p></td><td><p>Query produced multiple rows when expected a single value</p></td><td><p>Se obtuvieron múltiples resultados en una consulta cuando se esperaba un resultado único</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON REGLAS DE PREVENCION DE FRAUDE</p></td></tr><tr><td><p>PAYW-6001</p></td><td><p>Transaction has been rejected due to application of rule xxx assigned to this affiliation.</p></td><td><p>Transacción rechazada por aplicación de la regla xxx asignada para esta afiliación.</p></td></tr><tr><td><p>PAYW-6002</p></td><td><p>Rule xxx assigned to this affiliation contains errors in its formula</p></td><td><p>Transacción rechazada por error en la fórmula definida para la regla xxx asignada para esta afiliación</p></td></tr><tr><td><p>PAYW-6003</p></td><td><p>Failure when executing formula defined for rule xxx assigned to this affiliation.</p></td><td><p>Transacción rechazada por falla al procesar la fórmula definida para la regla xxx asignada para esta afiliación.</p></td></tr><tr><td><p>PAYW-6004</p></td><td><p>Class defined for rule xxx has not been implemented yet.</p></td><td><p>La clase definida para la regla xxx no ha sido implementada.</p></td></tr><tr><td><p>PAYW-6005</p></td><td><p>Unable to create executor for rule xxx.</p></td><td><p>Falla al instanciar clase definida para la regla xxx.</p></td></tr><tr><td><p>PAYW-6006</p></td><td><p>Invalid search condition for rule xxx</p></td><td><p>Condición inválida de búsqueda en regla xxx.</p></td></tr><tr><td><p>PAYW-6007</p></td><td><p>The search table used in formula for rule xxx does not exist.</p></td><td><p>La tala de búsqueda proporcionada en la fórmula para la regla xxx no existe.</p></td></tr><tr><td><p>PAYW-6008</p></td><td><p>The Excel file needed by formula defined for rule xxx does not exist.</p></td><td><p>El archivo Excel requerido por la fórmula definida para la regla xxx no existe.</p></td></tr><tr><td><p>PAYW-6009</p></td><td><p>Failure when trying to access the }Excel file needed by formula defined for rule xxx.</p></td><td><p>Falla al intentar accesar el archivo Excel requerido por la fórmula definida para la regla xxx.</p></td></tr><tr><td><p>PAYW-6010</p></td><td><p>Failure when querying table needed by rule xxx.</p></td><td><p>Falla al ejecutar búsqueda en tabla requerida por la regla xxx.</p></td></tr><tr><td><p>PAYW-6011</p></td><td><p>Unable to load Excel driver required to execute rule xxx.</p></td><td><p>Incapaz de cargar driver Excel para ejecutar regla xxx.</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON EL SERVICIO VISA CHECK OUT</p></td></tr><tr><td><p>PAYW-6100</p></td><td><p>Service Temporarily Unavailable</p></td><td><p>Servicio no disponible</p></td></tr><tr><td><p>PAYW-6101</p></td><td><p>Invalid request data: a required field is either missing or invalid</p></td><td><p>Solicitud invalida, uno de los campos falta o es invalido</p></td></tr><tr><td><p>PAYW-6102</p></td><td><p>shipping region is not accepted by the merchant</p></td><td><p>La región de envío no es aceptada por el comercio.</p></td></tr><tr><td><p>PAYW-6103</p></td><td><p>The API key used in the operation is not authorized for the requested action; ensure that the API key corresponds to</p></td><td><p>El API key usado en la operación es invalido, asegúrese de proporcionar el API key correcto para el call ID</p></td></tr><tr><td><p>PAYW-6104</p></td><td><p>Data access level (dataLevel)of the request is invalid</p></td><td><p>El nivel de acceso a los datos (dataLevel) de la solicitud es invalido</p></td></tr><tr><td><p>PAYW-6105</p></td><td><p>x-pay-token header missing or invalid, or API key is missing or invalid</p></td><td><p>El encabezado x-pay-token falta o es invalido, o el API key falta o es invalido</p></td></tr><tr><td><p>PAYW-6106</p></td><td><p>API key is not authorized to request dataLevel=FULL</p></td><td><p>El API key no está autorizado para la solicitud data Level = FULL</p></td></tr><tr><td><p>PAYW-6107</p></td><td><p>Customer's account is locked</p></td><td><p>La cuenta del cliente está bloqueada</p></td></tr><tr><td><p>PAYW-6108</p></td><td><p>Customer's account is inactive</p></td><td><p>La cuenta del cliente se encuentra inactiva</p></td></tr><tr><td><p>PAYW-6109</p></td><td><p>Further operations on the card are not allowed</p></td><td><p>No se permiten más operaciones en la tarjeta</p></td></tr><tr><td><p>PAYW-6110</p></td><td><p>API key or call ID not found, or data referenced by the API key or call ID is invalid or not available</p></td><td><p>API key o call ID no encontrados, o la referencia del dato por el API key o call ID son inválidos o no están disponibles</p></td></tr><tr><td><p>PAYW-6111</p></td><td><p>Expired Call ID</p></td><td><p>El Call ID se encuentra expirado</p></td></tr><tr><td><p>PAYW-6112</p></td><td><p>Merchant doesn't have visa check out active</p></td><td><p>La afiliación no tiene el producto visa check out activo</p></td></tr><tr><td><p>PAYW-6113</p></td><td><p>Merchant isn't registered in visa check out</p></td><td><p>La afiliación no está registrada en visa checkout</p></td></tr><tr><td><p>PAYW-6114</p></td><td><p>Transaction not valid</p></td><td><p>Transacción no valida</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON EL SERVIDOR DE CORREO</p></td></tr></tbody></table>


<table><tbody><tr><td><p>PAYW-6301</p></td><td><p>Attached element ‘xxx’ was not found in expected location</p></td><td><p>El elemento adjunto ‘xxx’ no existe en la ubicación esperada</p></td></tr><tr><td><p>PAYW-6302</p></td><td><p>Attached element ‘xxx’ is not really a file</p></td><td><p>El elemento adjunto ‘xxx’ no es un archivo</p></td></tr><tr><td><p>PAYW-6303</p></td><td><p>Attached element ‘xxx’ cannot be read</p></td><td><p>El elemento adjunto ‘xxx’ no puede ser leído</p></td></tr><tr><td><p>PAYW-6304</p></td><td><p>Unable to send mail. Reason: ‘xxx’</p></td><td><p>Incapaz de enviar correo. Causa ‘xxx’</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON REPORTES DE CIERRE</p></td></tr><tr><td><p>PAYW-6601</p></td><td><p>Unable to initialize group capture report.</p></td><td><p>Falla al inicializar reporte de cierre de lote.</p></td></tr><tr><td><p>PAYW-6602</p></td><td><p>Unable to create header in group capture report.</p></td><td><p>Falla al crear encabezado de reporte de cierre de lote.</p></td></tr><tr><td><p>PAYW-6603</p></td><td><p>Unable to add row to group capture report.</p></td><td><p>Falla al agregar línea al reporte de cierre de lote.</p></td></tr><tr><td><p>PAYW-6604</p></td><td><p>Unable to create group capture report file. Name: ‘xxx’</p></td><td><p>Falla al tratar de crear archivo de reporte de cierre de lote. Nombre: ‘xxx’</p></td></tr><tr><td><p>PAYW-6605</p></td><td><p>Unable to initialize affiliation capture report.</p></td><td><p>Falla al inicializar reporte de cierre de afiliación.</p></td></tr><tr><td><p>PAYW-6606</p></td><td><p>Unable to create header in affiliation capture report.'</p></td><td><p>Falla al crear encabezado de reporte de cierre de afiliación. Causa: ''</p></td></tr><tr><td><p>PAYW-6607</p></td><td><p>Unable to add row to affiliation capture report.</p></td><td><p>Falla al agregar línea al reporte de cierre de afiliación. Causa: ''</p></td></tr><tr><td><p>PAYW-6608</p></td><td><p>Unable to create affiliation capture report file. Name: ‘xxx’</p></td><td><p>Falla al tratar de crear archivo de reporte de cierre de afiliación. Nombre: ‘xxx’</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON CYBERSOURCE</p></td></tr><tr><td><p>PAYW-6801</p></td><td><p>Cybersource service is not available for this type of affiliation</p></td><td><p>El servicio Cybersource no está disponible para este tipo de afiliación</p></td></tr><tr><td><p>PAYW-6802</p></td><td><p>The transaction received (Cybersource Id = ‘xxx’) has not been previously verified by Cybersource</p></td><td><p>La transacción proporcionada (Id Cybersource = ‘xxx’) no ha sido validada previamente por Cybersource</p></td></tr><tr><td><p>PAYW-6803</p></td><td><p>The transaction received (Cybersource Id = ‘xxx’) was previously rejected by Cybersource and cannot be processed</p></td><td><p>La transacción proporcionada (Id Cybersource = ‘xxx’) fue rechazada por Cybersource y no puede ser procesada</p></td></tr><tr><td><p>PAYW-6804</p></td><td><p>Unable to connect to Banorte Cybersource service to validate the submitted transaction (Cybersource Id = ‘xxx’)</p></td><td><p>No ha podido establecerse la conexión necesaria con el sistema Banorte Cybersource para validar la transacción (Id Cybersource = '‘xxx’)</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON AMERICAN EXPRESS</p></td></tr><tr><td><p>PAYW-6900</p></td><td><p>There isn't a fraudulency secure level: high, middle, there isn't verification</p></td><td><p>No se tiene asignado un nivel de seguridad contra fraude (SIN VALIDACION, MEDIO, ALTO)</p></td></tr><tr><td><p>PAYW-6901</p></td><td><p>The fraudulency secure level '' isn't valid</p></td><td><p>El nivel de seguridad contra fraudes '' no es valido</p></td></tr><tr><td><p>PAYW-6902</p></td><td><p>The fields are necessary: ''</p></td><td><p>Los siguientes datos deben ser proporcionados ''</p></td></tr><tr><td><p>PAYW-6903</p></td><td><p>There aren't AAV, phone and email verification</p></td><td><p>No existen las validaciones AAV, Teléfono y Correo electrónico</p></td></tr><tr><td><p>PAYW-6904</p></td><td><p>There isn't a format valid for AAV, phone and email verification</p></td><td><p>Validaciones AAV, Teléfono y Correo electrónico tiene un formato incorrecto</p></td></tr><tr><td><p>PAYW-6905</p></td><td><p>Values CID supplied for parameter Fraud Prevention Services is not valid</p></td><td><p>El valor CID proporcionado para el parametro Servicio de Prevención de Fraudes no es valido</p></td></tr><tr><td><p>PAYW-6906</p></td><td><p>Values ZIP CODE, STREET ADDRESS, PHONE NUMBER and</p><p>EMAIL ADDRESS supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores CODIGO POSTAL, DIRECCION, NUMERO</p><p>TELEFONICO y CORREO ELECTRONICO proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6907</p></td><td><p>Values ZIP CODE, PHONE NUMBER, EMAIL ADDRESS supplied</p><p>for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores CODIGO POSTAL, NUMERO TELEFONICO y</p><p>CORREO ELECTRONICO proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6908</p></td><td><p>Values ZIP CODE, STREET ADDRESS and PHONE NUMBER</p><p>supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores CODIGO POSTAL, DIRECCION y NUMERO</p><p>TELEFONICO proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr></tbody></table>

<table><tbody><tr><td><p>PAYW-6909</p></td><td><p>Values ZIP CODE and PHONE NUMBER supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores CODIGO POSTAL y NUMERO TELEFONICO</p><p>proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6910</p></td><td><p>Values ZIP CODE, STREET ADDRESS and EMAIL ADDRESS</p><p>supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores CODIGO POSTAL, DIRECCION y CORREO</p><p>ELECTRONICO proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6911</p></td><td><p>Values ZIP CODE and EMAIL ADDRESS supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores CODIGO POSTAL y CORREO ELECTRONICO</p><p>proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6912</p></td><td><p>Values ZIP CODE, STREET ADDRESS supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores CODIGO POSTAL y DIRECCION proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6913</p></td><td><p>Value ZIP CODE supplied for parameter Fraud Prevention Services is not valid</p></td><td><p>El valor CODIGO POSTAL proporcionado para el parametro Servicio de Prevención de Fraudes no es valido</p></td></tr><tr><td><p>PAYW-6914</p></td><td><p>Values STREET ADDRESS, PHONE NUMBER and EMAIL ADDRESS</p><p>supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores DIRECCION, NUMERO TELEFONICO y CORREO</p><p>ELECTRONICO proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6915</p></td><td><p>Values PHONE NUMBER and EMAIL ADDRESS supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores NUMERO TELEFONICO y CORREO ELECTRONICO</p><p>proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6916</p></td><td><p>Values STREET ADDRESS and PHONE NUMBER supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores DIRECCION y NUMERO TELEFONICO</p><p>proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6917</p></td><td><p>Value PHONE NUMBER supplied for parameter Fraud Prevention Services is not valid</p></td><td><p>El valor NUMERO TELEFONICO proporcionado para el parametro Servicio de Prevención de Fraudes no es valido</p></td></tr><tr><td><p>PAYW-6918</p></td><td><p>Values EMAIL and STREET ADDRESS supplied for parameters Fraud Prevention Services are not valid</p></td><td><p>Los valores CORREO ELECTRONICO Y DIRECCION</p><p>proporcionados para el parametro Servicio de Prevención de Fraudes no son validos</p></td></tr><tr><td><p>PAYW-6919</p></td><td><p>Value EMAIL ADDRESS supplied for parameter Fraud Prevention Services is not valid</p></td><td><p>El valor CORREO ELECTRONICO proporcionado para el parametro Servicio de Prevención de Fraudes no es valido</p></td></tr><tr><td><p>PAYW-6920</p></td><td><p>Value STREET ADDRESS supplied for parameter Fraud Prevention Services is not valid</p></td><td><p>El valor DIRECCION proporcionado para el parametro Servicio de Prevención de Fraudes no es valido</p></td></tr><tr><td><p>PAYW-6921</p></td><td><p>Does not meet the fraud prevention configuration chosen by the Electronic Commerce</p></td><td><p>No cumple con la configuración de prevención de fraudes elegida por el Comercio Electrónico</p></td></tr><tr><td><p>PAYW-6922</p></td><td><p>Invalid data</p></td><td><p>Dato no valido</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON OPERACIONES DE CIFRADO O DESCIFRADO</p></td></tr><tr><td><p>PAYW-7001</p></td><td><p>Failure when trying to encrypt a text</p></td><td><p>Falla al intentar cifrar un texto</p></td></tr><tr><td><p>PAYW-7002</p></td><td><p>Failure when trying to decrypt a text</p></td><td><p>Falla al intentar descifrar un texto</p></td></tr><tr><td><p>PAYW-7003</p></td><td><p>Unable to generate a key for a device</p></td><td><p>Falla al intentar generar llave para dispositivo</p></td></tr><tr><td><p>PAYW-7004</p></td><td><p>Unable to decypher key in database for device with id ‘xxx’</p></td><td><p>Falla al intentar descifrar llave en base de datos para el dispositivo con id ‘xxx’</p></td></tr><tr><td><p>PAYW-7005</p></td><td><p>Unable to initialize HSM. Message = ‘xxx’</p></td><td><p>Incapaz de inicializar HSM. Mensaje = '’xxx’</p></td></tr><tr><td><p>PAYW-7006</p></td><td><p>Unable to retrieve key from the HSM</p></td><td><p>Falla al intentar obtener llave del HSM</p></td></tr><tr><td><p>PAYW-7007</p></td><td><p>The HSM device is not currently active</p></td><td><p>El dispositivo HSM no se encuentra operativo</p></td></tr><tr><td><p>PAYW-7008</p></td><td><p>Failure when trying to remove a key from the HSM</p></td><td><p>Falla al eliminar llave del HSM</p></td></tr><tr><td><p>PAYW-7009</p></td><td><p>Failure when trying to add a key into the HSM</p></td><td><p>Falla al agregar llave al HSM</p></td></tr><tr><td><p>PAYW-7010</p></td><td><p>Failure processing unencrypted transaction</p></td><td><p>Error al procesar transacción no cifrada</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON 3D SECURE</p></td></tr><tr><td><p>PAYW-7100</p></td><td><p>The Transaction does not contain valid information.</p></td><td><p>La transacción no contiene información válida.</p></td></tr></tbody></table>

38

VENTANA DE COMERCIO ELECTRÓNICO CIFRADA

MANUAL DE INTEGRACION

<table><tbody><tr><td><p>PAYW-7101</p></td><td><p>No 3D Secure variables were sent</p></td><td><p>Variables 3DSecure V2 incompletas</p></td></tr><tr><td><p>PAYW-7102</p></td><td><p>Unable to execute command/transaction; please retry later</p></td><td><p>Incapaz de realizar operación. Por favor intente más tarde</p></td></tr><tr><td><p>PAYW-7103</p></td><td><p>Unable to execute command/transaction; please retry later</p></td><td><p>Incapaz de realizar operación. Por favor intente más tarde</p></td></tr><tr><td><p>PAYW-7104</p></td><td><p>Unable to execute command/transaction; please retry later</p></td><td><p>Incapaz de realizar operación. Por favor intente más tarde</p></td></tr><tr><td><p>PAYW-7105</p></td><td><p>Unable to execute command/transaction; please retry later</p></td><td><p>Incapaz de realizar operación. Por favor intente más tarde</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON CONEXIÓN PRM MERCHANT</p></td></tr><tr><td><p>PAYW-7200</p></td><td><p>The connection could not be established</p></td><td><p>No se pudo establecer la conexión</p></td></tr><tr><td><p>PAYW-7201</p></td><td><p>Rejected transaction</p></td><td><p>Transacción rechazada</p></td></tr><tr><td><p>PAYW-7202</p></td><td><p>No response was obtained from PRM Merchant</p></td><td><p>No se obtuvo respuesta de PRM Merchant</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON CONEXIÓN A TOKENIZACION</p></td></tr><tr><td><p>PAYW-7300</p></td><td><p>Unable to connect to MCA</p></td><td><p>Imposible realizar la conexión a MCA</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS EN BASE DE DATOS</p></td></tr><tr><td><p>PAYW-8001</p></td><td><p>The transaction could not be processed</p></td><td><p>La transacción no pudo ser procesada</p></td></tr><tr><td><p>PAYW-8002</p></td><td><p>Can't get information</p></td><td><p>Por el momento no se puede obtener información</p></td></tr><tr><td><p>PAYW-8003</p></td><td><p>There was a problem saving the information</p></td><td><p>Por el momento ocurrió un problema guardando la información.</p></td></tr><tr><td><p>PAYW-8004</p></td><td><p>There was a problem updating the information</p></td><td><p>Por el momento ocurrió un problema actualizando la información.</p></td></tr><tr><td colspan="3"><p>PROBLEMAS MISCELANEOS INESPERADOS</p></td></tr><tr><td><p>PAYW-9999</p></td><td><p>Unexpected failure</p></td><td><p>Falla inesperada en aplicación.</p></td></tr></tbody></table>

ANEXO D – Códigos de Estatus 3D Secure
----------------------------------------

<table><tbody><tr><td><p>CODIGO</p></td><td><p>DESCRIPCION</p></td></tr><tr><td><p>200</p></td><td><p>Indica que la transacción es segura y se puede enviar a Payworks.</p></td></tr><tr><td><p>201</p></td><td><p>Indica que se detectó un error general en el sistema de Visa o Master Card, se recomienda esperar unos momentos para reintentar la transacción</p></td></tr><tr><td><p>421</p></td><td><p>Indica que el servicio 3D Secure no está disponible, se recomienda esperar unos momentos para reintentar la transacción.</p></td></tr><tr><td><p>422</p></td><td><p>Indica que hubo un problema genérico al momento de realizar la Autenticación, no se debe enviar la transacción a Payworks.</p></td></tr><tr><td><p>423</p></td><td><p>Indica que la Autenticación no fue exitosa, no se debe enviar la transacción a Payworks ya que el comprador no se pudo autenticar con éxito.</p></td></tr><tr><td><p>424</p></td><td><p>Autenticación 3D Secure no fue completada. NO se debe enviar a procesar la transacción al motor de pagos Payworks, ya que la persona no está ingresando correctamente la contraseña 3D Secure</p></td></tr><tr><td><p>425</p></td><td><p>Autenticación Inválida. Indica que definitivamente NO se debe enviar a procesar la transacción a Payworks, ya que la persona no está ingresando correctamente la contraseña 3D Secure.</p></td></tr><tr><td><p>426</p></td><td><p>Afiliación no existe</p></td></tr><tr><td><p>430</p></td><td><p>Tarjeta de Crédito nulo, la variable Card se envió vacía.</p></td></tr><tr><td><p>431</p></td><td><p>Fecha de expiración nulo, la variable Expires se envió vacía.</p></td></tr></tbody></table>

39

VENTANA DE COMERCIO ELECTRÓNICO CIFRADA

MANUAL DE INTEGRACION

<table><tbody><tr><td><p>432</p></td><td><p>Monto nulo, la variable Total se envió vacía</p></td></tr><tr><td><p>433</p></td><td><p>Id del comercio nulo, la variable MerchantId se envió vacía.</p></td></tr><tr><td><p>434</p></td><td><p>Liga de retorno nula, la variable ForwardPath se envió vacía.</p></td></tr><tr><td><p>435</p></td><td><p>Nombre del comercio nulo, la variable MerchantName se envió vacía.</p></td></tr><tr><td><p>436</p></td><td><p>Formato de TC incorrecto, la variable Card debe ser de 16 dígitos.</p></td></tr><tr><td><p>437</p></td><td><p>Formato de Fecha de Expiración incorrecto, la variable Expires debe tener el siguiente formato: MM/YY donde MM se refiere al mes y YY se refiere al año de vencimiento de la tarjeta</p></td></tr><tr><td><p>438</p></td><td><p>Fecha de Expiración incorrecto, indica que el plástico esta vencido.</p></td></tr><tr><td><p>439</p></td><td><p>Monto incorrecto, la variable Total debe ser un número menor a 999,999,999,999.## con la fracción decimal opcional, esta debe ser con 2 decimales como máximo.</p></td></tr><tr><td><p>440</p></td><td><p>Formato de nombre del comercio incorrecto, debe ser una cadena de máximo 25 caracteres alfanuméricos.</p></td></tr><tr><td><p>441</p></td><td><p>Marca de Tarjeta nulo, la variable CardType se envió vacía.</p></td></tr><tr><td><p>442</p></td><td><p>Marca de Tarjeta incorrecta, debe ser uno de los siguientes valores: VISA (para tarjetas Visa) o MC (para tarjetas Master Card).</p></td></tr><tr><td><p>443</p></td><td><p>CardType incorrecto, se ha especificado el CardType como VISA, sin embargo, el Bin de la tarjeta indica que esta no es Visa.</p></td></tr><tr><td><p>444</p></td><td><p>CardType incorrecto, se ha especificado el CardType como MC, sin embargo, el Bin de la tarjeta indica que esta no es Master Card.</p></td></tr><tr><td><p>445</p></td><td><p>CardType incorrecto, se ha especificado el CardType como AMEX, sin embargo, el Bin de la tarjeta indica que esta no es America Express</p></td></tr><tr><td><p>446</p></td><td><p>Monto incorrecto, la variable amount debe tener un monto mayo a 0 (cero)</p></td></tr><tr><td><p>447</p></td><td><p>Numero de referencia 3D Nulo la variable controlNumber no debe de enviarse vacía</p></td></tr><tr><td><p>448</p></td><td><p>Número de certificado nulo o distinto a “03”</p></td></tr><tr><td><p>450</p></td><td><p>Afiliación Inactiva</p></td></tr><tr><td><p>451</p></td><td><p>El valor de la variable NAME\NOMBRE es un campo obligatorio.</p><p>El valor de la variable APELLIDO\LAST_NAME es un campo obligatorio. El valor de la variable PAIS\COUNTRY es un campo obligatorio.</p><p>El valor de la variable CIUDAD\CITY es un campo obligatorio. El valor de la variable ESTADO\STATE es un campo obligatorio. El valor de la variable CALLE\STREET es un campo obligatorio.</p><p>El valor de la variable CORREO\EMAIL es un campo obligatorio.</p><p>El valor de la variable NUMERO_CELULAR\MOBILE_PHONE es un campo obligatorio. El valor de la variable CODIGO_POSTAL\POSTAL_CODE es un campo obligatorio.</p><p>El valor de la variable TIPO_TARJETA\CREDIT_TYPE es un campo obligatorio.</p></td></tr></tbody></table>

ANEXO E – Códigos de Estatus Cybersource
------------------------------------------

<table><tbody><tr><td><p>CÓDIGO</p></td><td><p>TEXTO INGLÉS</p></td><td><p>TEXTO ESPAÑOL</p></td></tr><tr><td colspan="3"><p>PROBLEMAS RELACIONADOS CON TLS</p></td></tr><tr><td><p>11</p></td><td><p>Parameter X exceeds maximum allowed length: Y characters</p></td><td><p>El algoritmo definido para encriptar en TLS no está soportado en esta plataforma.</p></td></tr><tr><td><p>12</p></td><td><p>Parameter X has an invalid index</p></td><td><p>Falla inesperada al accesar almacén de llaves (keystore)</p></td></tr><tr><td><p>13</p></td><td><p>Parameter X is not valid (Either bad formed or having an unexpected value)</p></td><td><p>El almacén de llaves (keystore) especificado no existe en la ubicación configurada</p></td></tr><tr><td><p>14</p></td><td><p>Parameter X is required and is missing</p></td><td><p>El parámetro X excede la máxima longitud permitida: Y caracteres</p></td></tr></tbody></table>

<table><tbody><tr><td><p>15</p></td><td><p>Parameter X is not valid (Either bad formed or having an unexpected value)</p></td><td><p>El parámetro X no es válido (mal formado o no corresponde a un valor esperado)</p></td></tr><tr><td><p>21</p></td><td><p>Unexpected failure while creating Cybersource request</p></td><td><p>Falla inesperada al intentar crear requerimiento hacia Cybersource</p></td></tr><tr><td><p>22</p></td><td><p>Unexpected failure trying to store transactions in database</p></td><td><p>Falla al intentar almacenar transacción en base de datos</p></td></tr><tr><td><p>23</p></td><td><p>Multiple business type items have been received</p></td><td><p>No es posible recibir detalle de más de un tipo de negocio a la vez</p></td></tr><tr><td><p>31</p></td><td><p>Unable to send transaction to Cybersource (server is not reachable or available)</p></td><td><p>Incapaz de enviar transacción a Cybersource (servidor no disponible)</p></td></tr><tr><td><p>32</p></td><td><p>Transaction has been rejected by Cybersource. Code: X, Message: Y</p></td><td><p>Transacción rechazada por Cybersource. Código: X, Mensaje: Y</p></td></tr><tr><td><p>41</p></td><td><p>Unexpected failure while processing Cybersource response</p></td><td><p>Falla inesperada al procesar respuesta de Cybersource</p></td></tr><tr><td><p>42</p></td><td><p>Unable to update database transaction</p></td><td><p>Falla al intentar actualizar transacción en base de datos</p></td></tr></tbody></table>

Glosario
--------

#### Web SPA (Single Page Application): es una aplicación que consume servicios de back end por medio de la arquitectura Multicanal, que a su vez ejecuta los distintos servicios de manera ordenada.

#### SISA: Plataforma Multicobros

#### Client Side: En una aplicación informática del lado del comercio (client-side en inglés) en el cual ejecuta sus operaciones en una relación cliente-servidor dentro de una red informática.

#### Genera Salt: Es un número de dígitos aleatorios que se le agrega a la contraseña ya sea al principio o al final y que el usuario no conocerá.

#### x.509: Es un formato estándar para certificados de clave pública, documentos digitales que asocian de forma segura pares de claves criptográficas con identidades como sitios web, individuos u organizaciones.

#### PEM del certificado: Es un formato de archivo contenedor que se utiliza a menudo para almacenar claves criptográficas.

#### Lightbox: Permite a los usuarios ver una versión ampliada de imágenes sin la necesidad de ir a otra página, además de ofrecer una herramienta simple y profesional para mostrar imágenes en un sitio web.

#### JSON: (JavaScript Object Notation - Notación de Objetos de JavaScript)

#### Evento onSuccess: El controlador de eventos onsuccess de la interfaz IDBRequest maneja el evento success , que se activa cuando el resultado de una solicitud se devuelve correctamente.

#### Algoritmo AES: Es un sistema de sustitución y permutación, el cual debe su alta seguridad gracias a que la clave inicial o semilla que le va a servir a través de una fórmula generar claves nuevas que al mismo tiempo se utilizarán para codificar los datos.

41

VENTANA DE COMERCIO ELECTRÓNICO CIFRADA

MANUAL DE INTEGRACION

#### Modo CTR: Transforma un algoritmo de cifrado por bloques en un algoritmo de cifrado de flujo.

#### NoPadding: Hace que el compilador señale todas las estructuras que contienen relleno.

#### Vector de Inicialización (vi): Es un bloque de bits que es requerido para permitir un cifrado en flujo o un cifrado por bloques, en uno de los modos de cifrado, con un resultado independiente de otros cifrados producidos por la misma clave.

#### SecretKey (key): Una clave, palabra clave o clave criptográfica es una pieza de información que controla la operación de un algoritmo de criptografía.

#### Provider: Esta clase representa para la API de Java Security, donde un proveedor implementa algunas o todas las partes de Java Security.

#### Cifrado simétrico: Es un tipo de cifrado que usa una misma clave para cifrar y para descifrar. Las dos partes que se comunican mediante el cifrado simétrico deben estar de acuerdo en la clave a usar de antemano.

Información de contacto para soporte y certificación.
-------------------------------------------------------

Una vez que el desarrollador del comercio ha integrado las indicaciones de este manual es necesario que pase por un
proceso de Certificación por parte del Laboratorio de Comercio Electrónico de Banorte que cuenta con la siguiente
información de contacto:

<table><tbody><tr><td><p>TELÉFONOS:</p></td><td><p>CORREO:</p></td></tr><tr><td><p>Lada Internacional: +(52)</p></td><td></td></tr><tr><td><p>Conmutador: (81) 5102-1000</p></td><td></td></tr><tr><td><p>Ext – 2758</p></td><td></td></tr><tr><td><p>Ext – 1321</p><p>Ext – 1305</p></td><td><p><a href="mailto:L.Payworks_ComercioElectronico@banorte.com">L.Payworks_ComercioElectronico@banorte.com</a></p></td></tr><tr><td><p>Red Interna Banorte</p></td><td></td></tr><tr><td><p>8800-2758</p></td><td></td></tr><tr><td><p>8800-1321</p></td><td></td></tr><tr><td><p>8800-1305</p></td><td></td></tr><tr><td colspan="2"><p>Horario de atención:</p><p>Lunes a Viernes de 9:00 am a 6:00 p.m.</p></td></tr></tbody></table>
```

