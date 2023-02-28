const productos = [
    {
        id: 1,
        nombre: "Cerradura Inteligente WiFi Puerta Deslizable MCI S824 ",
        precio: 6898.50,
        img: "/build/img/cis824.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br>Cantidad de accesos,Huella digital hasta 100,Tarjetas inalámbricas,Contraseña,Código anti-espía, timbre incorporado, alarma de manipulación, bloqueo por intento incorrecto,Opciones de almacenamiento de datos: Nube,Color: Silver,Desbloquear forma: Aplicación Tuya / contraseña / huella digital / tarjeta / clave,Puerta de aplicación: puerta de madera, puerta de metal, puerta compuesta,Solicitud: Apartamento, VILLA, Hogar, oficina, hotel"
    },
    {
        id: 2,
        nombre: "Kit Vídeo Portero Wifi Ip65 Con Baterias Y Timbre Smart Life ",
        precio: 4825.50,
        img: "/build/img/lp65.png",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br>Tipo de sensor: 1/3\"CMOS,Pixel: 2.0 Mega, Iluminancia mínima: Color 0.01Lux @ F1.2, Blanco y negro 0.001Lux @ F1.2,Ángulo de visión: 140 °, Disparo: 1/25 ~ 1 / 100,000 por segundo, IR LED de alta potencia con ICR, Digtal WDR,Compresión de video estándar H.264, Velocidad de bits de salida comprimida 32 Kbps ~ 2 Mbps, Tamaño máximo de imagen 1920 X 1080, Velocidad de fotogramas 1 ~ 25 por segundo, Audio Full duplex, Tarjeta SD de soporte de almacenamiento (máx. 128G), almacenamiento en la nube, Configuración de imagen Soporte HD / SD; Soporte espejo, Restablecer soporte, Velocidad de dibujo: 4 segundos, Protocolo de interfaz: privado, Protocolo de comunicación: TCP / IP, http, DHCP, DNS, Función general doble flujo, protección por contraseña, Wifi IEEE802.11b / g / n, Instalación Soporte de montaje en pared, Accesorios opcionales Timbre inalámbrico, kit de timbre mecánico, carAador de batería,Activación Sensor PIR, Temperatura y humedad de trabajo -20 ¿ ~ 50 ¿, humedad inferior al 90% (sin condensación), Capacidad de la batería 6000 mAh,A prueba de agua IP65,Tamaño (mm): 61 * 41 * 135,Peso (sin batería) (g): 144.5"   
    },
    {
        id: 3,
        nombre: "Apagador Inteligente Wifi Triple 3 Escalera Negro Smart Life ",
        precio: 895.50,
        img: "/build/img/ai3w.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br>Voltaje de Entrada: 100-240VAC 50/60Hz,Cableado Línea Viva y Línea Neutra,Max Corriente Carga 10A,Max. Potencia 800W/Switch,Panel de vidrio 4 mm de vidrio templado,WiFi estándar 2.4GHz 802.11 b / g / n,Consumo en espera 0.5W,Soporte de aplicaciones Android 4.1 y iOS 8.0 o superior,Nombre de la aplicación Smart Life,Función Touch / Control móvil,Vida laboral 100,000 veces para la operación,Temperatura de funcionamiento -30° C + 70° C,Tamaño 120 * 72 * 34 mm"
    },
    {
        id: 4,
        nombre: "Tomacorriente Enchufe Inteligente Wifi Monitoreo De Energía ",
        precio: 550.50,
        img: "/build/img/tciw.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Vienen equipados con un enchufe de 3 clavijas estándar de EE. UU., Para 100/240 V / 10 A máx. carga, [2,400 watts Max.] es el estándar más utilizado en los hogares. Hecho de materiales ignífugos de alta calidad y equipado con protección contra sobrecarga, nuestro enchufe se puede usar de forma segura con una variedad de electrodomésticos.Compatible con las versiones de Android 4.1 y iOS 8.0 y superiores. ¡Descargue nuestra aplicación gratuita y fácil de usar \"Smart life\", conéctese al dispositivo y comience! En general, solo para uso en interiores y con fines domésticos."
    },
    {
        id: 5,
        nombre: "Sensor de movimiento PIR Inteligente WIFI Tuya Smart Life ",
        precio: 895.50,
        img: "/build/img/smvi.png",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Fuente de alimentación: 3 pilas AAA (no integradas) PIR., Corriente en espera: 20UA, Tiempo en espera: 12 meses (10 veces al día)., Ángulo de detección: 120 ° WIFI PIR, Distancia de detección: 5m, Tipo inalámbrico: wifi de 2,4 GHz, Protocolo: IEEE 802,11 b/g/n, Rango de conexión Wi-Fi: 45m (área abierta), Aplicación: Smart Life/Tuya Smart, Sistema operativo móvil requerido: Android 4,1/iOS 9,0 o posterior, Material: ABS Superior, Temperatura de funcionamiento: -20 °C - 60 °C, Humedad de funcionamiento: 10% - 90%, INCLUYE: 1 * Sensor de movimiento WiFi PIR1 * Manual del usuario"
    },
    {
        id: 6,
        nombre: "Apagador con contacto incluido Inteligente Wifi 1 botón Negro ",
        precio: 1378.50,
        img: "/build/img/smbn.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br>Voltaje de Entrada: 100-240VAC 50/60Hz, Cableado Línea Viva y Línea Neutra, Max Corriente Carga 10A, Max. Potencia 800W/Switch, Panel de vidrio 4 mm de vidrio templado, WiFi estándar 2.4GHz 802.11 b / g / n, Consumo en espera 0.5W, Soporte de aplicaciones Android 4.1 y iOS 8.0 o superior, Nombre de la aplicación Smart Life, Función Touch / Control móvil, Vida laboral 100,000 veces para la operación, Temperatura de funcionamiento -30 C a 70 C, Tamaño 120 x 72 x 34 mm "
    },
    {
        id: 7,
        nombre: "Control Remoto Multicanal Inalámbrico Rf 433.92mhz Para Motor WiFi de Persiana ",
        precio: 690.00,
        img: "/build/img/crmi.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Modelo: YC101-040-05, Sistema de cortina eléctrico de control remoto multicanal inalámbrico, Nombre del producto: control remoto inalámbrico multicanal, Función: se utiliza para controlar el motor de cortina eléctrica., Palabras clave: 5 canales, Frecuencia de radio: 433,92 MHz, Batería: batería de litio de 3 V CC CR2430, -20°C A +55°C"
    },
    {
        id: 8,
        nombre: "Cámara Inteligente Wi-Fi Tipo Bullet de 3MP 1080P para Exterior e Interior Tuya/Smart Life App ",
        precio: 2203.50,
        img: "/build/img/citb.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Seguimiento de movimiento humano, VISIÓN NOCTURNA, Detección de movimiento, Impermeable/Resistente a la intemperie, Sirena integrada, PAN-TILT, Audio bidireccional, Sensor: CMOS, Estilo: CÁMARA BALA, Función: Audio bidireccional, RESET, Micrófono incorporado, VISIÓN NOCTURNA, Impermeable / resistente a la intemperie, Sirena incorporada, Formato de compresión de video: H.264, Opciones de almacenamiento de datos: Full HD, tarjeta SD, Solicitud: Exterior Interior, Soporte personalizado: OEM, ODM, Nombre del producto: Cámara IP WIFI inteligente Tuya,Lente: Lente fija de 3,6 mm, Resolución: 3.0MP (2304×1296), VGA (480×360), Ángulo de visión: Horizontal: 108°, Vertical: 58°, Compresión de video: H.264, Distancia de visión nocturna: 15MControl remoto: Compatible con teléfono, PC, tableta (no compatible con MAC) para monitor remoto, Tienda: Admite tarjeta TF máx. 128 GB, Impermeable: IP66 a prueba de agua, APLICACIÓN: Tuya/Smart Life"
    },
    {
        id: 9,
        nombre: "Apagador Calentador Boiler Agua Inteligente Wifi Smart 20amp – Color Blanco ",
        precio: 1099.50,
        img: "/build/img/acba.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Voltaje de entrada 100-240 VCA 50 / 60Hz, Relé Dos relés 20A para neutro y Fase, Aplicación Calentador de agua eléctrico, Max. Potencia 2000W, Panel de vidrio vidrio templado de 4 mm, WiFi estándar 2.4GHz 802.11 b / g / n, Consumo en espera mayor igual 0.5W, Soporte de aplicaciones Android 4.1 y iOS 8.0 o superior, Nombre de la aplicación Tuya Smart / Smart Life, Vida laboral 100,000 veces para la operación, Temperatura de funcionamiento -30 °C + 70 °C, Tamaño 120 * 76 * 34 mm" 
    },
    {
        id: 10,
        nombre: "Control Remoto Ir Wifi Smart Life App Para Tv, Aires,dvd Etc ",
        precio: 1042.50,
        img: "/build/img/criw.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Fácil de configurar en 3 pasos., 1 Conéctalo a la energía, 2 Descarga e instala la aplicación de Smart life, 3 Añade tu nuevo dispositivo IR, Diseño moderno, enciende luz verde tenue alrededor del Control IR cada vez que se ejecuta con comando InfraRojo, Ángulo con emisión omnidireccional de 360 grados, Conexión Wi-Fi directa al enrutador, no necesita ninguna puerta de enlace, Control remoto a través de 3G / 4G / WiFi en la aplicación móvil, Datos de código IR masivos incorporados, solo emparejar por marca, DIY está disponible para el código IR inclusive si si su marca no está en el listado de la App"
    },
];
const productosmr = [
    {
        id: 11,
        nombre: "Videoportero con pantalla Tablet de 7″ con Intercom con Cámara 1MP ",
        precio: 13798.50,
        img: "/build/img/vpt7.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Conexión WiFi a internet,CPU de alta capacidad,Sistema operativo Android,Configuración fácil, Soporte de control de casa inteligente, monitor con camara 720P, Apertura de distintas App Smart life, Spotify, Video & Audio player, galeria de imagenes, etc, Visualización de cámaras IP de la marca Dahua/HikVision,etc,  Flexibilidad de conectar mas monitores con red de ethernet ilocal, Comunicación entre monitor y timbre por Red UTP RJ45, Requiere fuente de poder 12VCD,  Compatible con lectores de tarjetas para apertura IC, ID.,  Monitor: 200.5*132*19.5mm (mm), Intercom: 0*135*30.5mm"
    },
    {
        id: 12,
        nombre: "Apagador Inteligente Wifi Ventilador Con Luz Color Negro ",
        precio: 1087.50,
        img: "/build/img/aiwv.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Voltaje de entrada 100-240 VCA 50 / 60Hz, Cableado Línea Viva, Neutro y Tierra, Max. Corriente de carga 10A, Max. Potencia 400 W para ventilador, 600 W para lámpara, Panel de vidrio 4 mm de vidrio templado, WiFi estándar 2.4GHz 802.11 b / g / n, Consumo en espera =0.5W, Soporte de aplicaciones Android e IOS, Nombre de la aplicación Tuya / Smart Life App, Función Touchl / Control móvil, Vida laboral 100,000 veces para la operación, Temperatura de funcionamiento -30 + 70 grados C., amaño 120 * 72 * 34 mm, Control Touch, Rango de sensado de 15mm"
    },
    {
        id: 13,
        nombre: "Cerradura Chapa Inteligente Wifi Digital Moderna Smart Life MCI-S912 ",
        precio: 11371.50,
        img: "/build/img/cciw.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Cantidad de accesos, Huella digital hasta 100, Tarjetas inalámbricas hasta 300, Contraseña 300, Certificación: CE, Código anti-espía, timbre incorporado, alarma de manipulación, bloqueo por intento incorrecto, Opciones de almacenamiento de datos: Nube, Color: Negro, Puede solicitar Bronce / dorado / rojo, Rango del Espesor de la puerta: 40-110 mm, Batería: Baterías recargables de iones de litio de 3200 mAh, Duración de la batería 500000 veces a la temperatura de trabajo -20 ~ 60c, Energía, 7.4V 3200mhA, Corriente de trabajo 0.5 a 2A, Tamaño: 394*78mm, Material: aleación de aluminio + vidrio templado, Desbloquear forma: Aplicación Tuya / contraseña / huella digital / tarjeta / clave, Puerta de aplicación: puerta de madera, puerta de metal, puerta compuesta, Solicitud: Apartamento, VILLA, Hogar, oficina, hotel, Peso total: 6.00 kilogramos"
    }
    ,
    {
        id: 14,
        nombre: "Enchufe / Tomacorriente De Pared Inteligente /smart Wifi Usb  ",
        precio: 973.50,
        img: "/build/img/etdp.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Control de voz manos libres con Alexa o con Google Home,Cuenta con Función de sincronización / temporización para encender / apagar sus luces y electrodomésticos automáticamente., Seguro y duradero con Apariencia refinada y de material resistente al fuego y con protección de sobrecarga, Diseño elegante y minimalista, el interruptor inteligente combina bien con la decoración de cualquier habitación, Una vez que conecte el producto por APP en su teléfono, simplemente comparta el control con su familia para controlarlo., Nombre de la Aplicación Tuya / SmartLife, US/Mex/Can Estándar,Corriente 10A, Voltaje de velocidad 100-240 V, Potencia 3000W, Estándar inalámbrico 2.4GHz IEEE802.11b / g / n, Soporta Android e ISO"    
    }
    ,
    {
        id: 15,
        nombre: "Termostato WIFI para bomba de calor o Regulador de temperatura con calefacción y refrigeración ",
        precio: 5923.50,
        img: "/build/img/tstw.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Diámetro: 8.3 cm,  Altura: 3.1 cm,  Peso: 243.8 g,  Color y material: Acero Inoxidable,  Idiomas: Español, inglés, frances, italiano y danés,  Pantalla: LCD color de 24 bits,  Batería: Ion de litio recargable,  Redes inalámbricas: Wi-Fi 802.11 a/b/g/n (2.4 GHz/5 GHz),  Garantía: Limitada de dos años a partir del día de la compra,  Compatibilidad: Funciona con el 95% de los sistemas,  Serie: Puedes controlar hasta 20 termostatos por casa"
    }
    ,
    {
        id: 16,
        nombre: "Kit Grabador NVR inalámbrico con 4 Cámaras IP WiFi 2.0MP a prueba de agua ",
        precio: 7276.50,
        img: "/build/img/kgni.png",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> El sistema inalámbrico aquí significa que las cámaras se emparejarán automáticamente con el NVR mediante wifi integrado sin ningún cable de vídeo entre ellas.El Circuito cerrado de TV Nvr se puede manejar desde una aplicación, lo que le permite ver en vivo, grabar en la nube, en otro servidor, en un Pendrive, disco duro, ext, Las cámaras son inalámbricas pero deberá alimentarlas con energía"
    }
    ,
    {
        id: 17,
        nombre: "Apagador con contacto incluido Inteligente Wifi 3 botones Blanco ",
        precio: 1654.50,
        img: "/build/img/acii.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> 118x70x39cm, Material de la carcasa: ABS retardante de llama, Voltaje nominal: 220, Material del panel: ABS, Método de inicio: interruptor táctil, Material de la hoja de cobre: cobre puro, Rango de voltaje nominal 3C: 440 V y menos, Distancia del orificio de montaje: 120, Potencia nominal: 600 W / cada uno, Frecuencia inalámbrica: 2,4 GHz, Estándar inalámbrico: IEEE802.11b / g / n"
    }
    ,
    {
        id: 18,
        nombre: "Válvula bola para agua inteligente WiFi Tuya-Smart Life de 1” ",
        precio: 3931.50,
        img: "/build/img/vbai.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Modelo MCI-QT-03, Nombre de la aplicación TuyaSmart, Color blanco, Material Latón y plástico ABS, Fuente de alimentación DC5V / 2A, Falla de energía Cierre automático con retardo, Tamaño de válvula 1/2, 3/4, 1, Presión máxima nominal 16 bar, Función encender y apagar, Estándares Wi-Fi IEEE 802.11 b / n / g 2.4G Hz, Admite el trabajo de control por voz con Amazon Alexa / Google Assistance, Soporte de control de vinculación de productos Tuya Smart, Temperatura de operación. –10 ° C a + 50 ° C, Humedad 5% – 95% sin condensación, IP66 a prueba de agua, Dimensión 17,5 * 16,5 * 12,5 cm, Peso 0.93kg"
    }
    ,
    {
        id: 19,
        nombre: "Breaker Inteligente Smart Wifi Interruptor Termo magnético ",
        precio: 3469.50,
        img: "/build/img/bisw.png",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Tensión nominal CA 230A 50Hz, Material ABS Plástico 94-V0 ABS, Tamaño 89 * 53 * 50 mm, Redes WIFI 2.4G Hz, Corriente máxima 25A / 40A / 63A / 80A / 100A, Vida de servicio 10 años, Temperatura de funcionamiento -25 ~ 65 ° C, Soporte Alexa / Google Home, Nombre de la aplicación Smart Life / Tuya"
    }
    ,
    {
        id: 20,
        nombre: "Control Remoto Ir Wifi Tuya Smartlife Sensor de Temperatura & Humedad ",
        precio: 994.50,
        img: "/build/img/crwt.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Modelo: MCI-IR-010-TH, APLICACIÓN TuyaSmart / SmartLife, Fuente de alimentación DC5V 2A (fuente de alimentación no incluida), Aplicación de teléfono móvil de control remoto, Control remoto Cantidad ilimitada, Frecuencia infrarroja 38-56 K Hz, ulo infrarrojo 360 ángulo, Distancia infrarroja 7 m, Estándares WiFi IEEE 802.11 b / n / g 2.4G Hz, Admite el trabajo de control por voz con Amazon Alexa / Google Assistance, Operación Temp. –10 ° C a + 60 ° C, Humedad 5% – 95% sin condensación, Material ABS, De color negro, Tamaño de la caja 17,5 * 12,5 * 3 cm, Peso 0.22kg, Ángulo con emisión omnidireccional de 360 grados, Conexión Wi-Fi directa al enrutador, no necesita ninguna puerta de enlace, Control remoto a través de 3G / 4G / WiFi en la aplicación móvil, Datos de código IR masivos incorporados, solo emparejar por marca, DIY está disponible para el código IR inclusive si si su marca no está en el listado de la App, Comparte con tu familia para controlar juntos"
    }
];
const productosR = [
    {
        id: 21,
        nombre: "Tomacorriente Inteligente Wi-Fi con 3 Botones ",
        precio: 1774.50,
        img: "/build/img/kcgt.png",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> App Remote encendido / apagado nombre vida inteligente, Interruptor de potencia 10A 240V CA, Poder del enchufe CA de 16A 240V, Puerto USB No, inalámbrico 802.11 b / g / n 2.4G, Seguridad WPA-PSK / WPA2-PSK, Material ABS + vidrio temp., Toque encendido apagado, Función sistema de casa inteligente, pandilla 2 veces, Puerto USB 1 piezas, control de voz Asistente de Google Amazon Alexa, IFTTT apoyo"
    },
    {
        id: 22,
        nombre: "Videoportero con pantalla Tablet de 10″ con Intercom con Cámara 1MP ",
        precio: 17394.00,
        img: "/build/img/vpt10.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Pantalla Touch a color de 10', Resolución: 1024 x 600, Apertura desde monitor., Vista en vivo de frente de calle., Micrófono y altavoz interconstruido, Soporta hasta 16 canales de video., Entrada de Alarma: 8 inputs., Micro SD max. 32G. para almacenar capturas de imagen., Red WiFi, Ethernet 10/100 Mbps. TCP/IP, SIP, RTSP."
    },
    {
        id: 23,
        nombre: "Cerradura Chapa Inteligente Wifi con Reconocimiento Facial MCI-S920- 3MAX ",
        precio: 17397.57,
        img: "/build/img/ciwr.webp",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Cerradura digital biométrica con cámara integrada! fabulosa tanto en diseño como en funcionalidades, despreocúpate de las llaves!, 6 formas de apertura:,Reconocimiento Facial Automático, Huella dactilar,  Contraseña numérica, Tarjeta IC, Celular por APP (wifi),  Llave mecánica de alta seguridad. Ésta cerradura incluye módulo wifi integrado para conectarse a internet y permitir desbloquear la cerradura de manera remota desde tu celular"
    },
    {
        id: 24,
        nombre: "Apagador Inteligente Wifi Pantalla Lcd Homekit Lanbon L8 Color Blanco ",
        precio: 3307.50,
        img: "/build/img/aiwp.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Max. Actual: 10 A, Max. Voltaje: de 90V a 250VCA, Requiere neutro, fase y sus respectivos retornos, Vida mecánica: 100000 veces, Color: Blanco o negro, Material del panel: Vidrio de cristal templado, Temperatura de trabajo: -25 + 60 °C, relativamente humedad: mayor igual 95%, Estándar: 802.1b / g, Certificado: CB / CE / FCC / ROHS, Sistema de soporte: Aplicación Android / IOS, Compatible con HomeKit, Alexa, Google Home, App original: Smart Living de Lanbon, App secundaria: Casa de HomeKit, Solicitud: Sistema de casa inteligente, Modo de emparejamiento: Lectura de Código QR, Comunicación: WiFi Tipo Malla (Mesh)"
    }
    ,
    {
        id: 25,
        nombre: "Nest – Termostato inteligente – Plateado, integrable a sistemas LUTRON, Caseta Wireless, RA2 Select, RadioRa2 ",
        precio: 12735.50,
        img: "/build/img/ntip.png",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Precioso distribuidor de autenticidad – incluye garantía completa de Nest USA , Termostato de aprendizaje Nest 3ª generación (acero inoxidable), Control de temperatura de dispositivos inteligentes, visualización LCD de 2,1\" (480 x 480)., Incluido en la caja: Termostato de aprendizaje de rodar (tercera generación, acero inoxidable) – Base – Kit opcional – tornillos de montaje y etiquetas – destornillador de rodar – limitada garantía de 2 años, El paquete incluye: Termostato de aprendizaje de la tercera generación (acero inoxidable) Deco Gear 2 Pack Wifi Smart Plug"
    },
    {
        id: 26,
        nombre: "Apagador Inteligente Wifi Pantalla Lcd Homekit Lanbon L8 Color Negro ",
        precio: 3307.50,
        img: "/build/img/aipl.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Max. Actual: 10 A, Max. Voltaje: de 90V a 250VCA, Requiere neutro, fase y sus respectivos retornos, Vida mecánica: 100000 veces, Color: Blanco o negro, Material del panel: Vidrio de cristal templado, Temperatura de trabajo: -25 + 60 °C, , elativamente humedad: mayor igual 95%, Estándar: 802.1b / g, Certificado: CB / CE / FCC / ROHS, Sistema de soporte: Aplicación Android / IOS, Compatible con HomeKit, Alexa, Google Home, App original: Smart Living de Lanbon, App secundaria: Casa de HomeKit, Solicitud: Sistema de casa inteligente, Modo de emparejamiento: Lectura de Código QR, Comunicación: WiFi Tipo Malla (Mesh)"
    }
    ,
    {
        id: 27,
        nombre: "Kit Motor Tubular Persiana Inteligente Wifi Tuya Smart life control por Voz ",
        precio: 7498.50,
        img: "/build/img/kmtp.jpg",
        cantidad: 1,
        detalles: "<strong>Especificaciones Técnicas:</strong></br> Modelo: MCI-K35EW-10/21, Características con Tipo de voltaje AC110V / 60Hz, Control por Voz Google home y Alexa, Nivel impermeable IP44, Par nominal 10N.m, Velocidad nominal 21 r/min, Diámetro del tubo del motor 35 mm, Diámetro de extremidades para tubo de aluminio para 50mm, Potencia nominal de entrada 139W, Corriente nominal 1A, Tiempo de ejecución 4, Clase H, Peso del motor 1.48Kg, Capacidad de carga: 39Kg, Límite electrónico + condensador receptor, Colores de cables, Azul: Neutro, Brown: Fase, Verde: Tierra"
    }
];