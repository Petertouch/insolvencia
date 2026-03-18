export interface BlogPost {
  slug: string;
  titulo: string;
  extracto: string;
  contenido: string;
  imagen: string;
  categoria: string;
  autor: string;
  fecha: string;
  lectura: string;
}

export const CATEGORIAS = [
  "Todos",
  "Ley de Insolvencia",
  "Negociacion de Deudas",
  "Liquidacion",
  "Derechos del Deudor",
  "Consejos Financieros",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-es-la-ley-de-insolvencia-1564",
    titulo: "¿Qué es la Ley de Insolvencia 1564 y cómo te protege?",
    extracto:
      "Conoce los alcances de la Ley 1564 de 2012 que permite a personas naturales no comerciantes negociar sus deudas y recuperar su estabilidad financiera.",
    contenido: `La **Ley 1564 de 2012**, en su Título IV, establece el régimen de insolvencia para personas naturales no comerciantes en Colombia. Esta normativa representa una herramienta legal fundamental para quienes se encuentran en una situación de sobreendeudamiento.

## ¿A quién aplica?

Esta ley aplica a toda persona natural que no sea comerciante y que se encuentre en cesación de pagos. Es decir, si tienes deudas que no puedes pagar y no eres comerciante registrado, esta ley te protege.

## Dos procedimientos principales

### 1. Negociación de deudas
Es un mecanismo donde un conciliador autorizado por un centro de conciliación facilita un acuerdo entre el deudor y sus acreedores. El objetivo es reorganizar las obligaciones para que el deudor pueda cumplirlas.

### 2. Liquidación patrimonial
Cuando no es posible llegar a un acuerdo de negociación, se procede a liquidar el patrimonio del deudor de forma ordenada para pagar a los acreedores según la prelación legal.

## Beneficios clave

- **Suspensión de embargos**: Una vez aceptado el trámite, se suspenden todos los procesos ejecutivos en tu contra.
- **No más intereses moratorios**: Se dejan de causar intereses de mora durante el proceso.
- **Protección del mínimo vital**: Se garantiza que conserves lo necesario para vivir dignamente.
- **Borrón y cuenta nueva**: Al completar el proceso, puedes empezar de cero financieramente.

## Requisitos básicos

1. Ser persona natural no comerciante
2. Tener dos o más obligaciones a favor de dos o más acreedores
3. Estar en cesación de pagos (mora superior a 90 días)
4. No haber sido beneficiario de este procedimiento en los últimos 5 años

Si te encuentras agobiado por las deudas, no estás solo. La ley colombiana tiene herramientas para ayudarte.`,
    imagen: "/blog/ley-insolvencia.jpg",
    categoria: "Ley de Insolvencia",
    autor: "Dr. Ramirez",
    fecha: "2026-03-15",
    lectura: "6 min",
  },
  {
    slug: "como-negociar-deudas-con-bancos",
    titulo: "Cómo negociar tus deudas con bancos en Colombia",
    extracto:
      "Guía práctica para negociar tus deudas bancarias usando los mecanismos legales disponibles. Aprende a proteger tus derechos como deudor.",
    contenido: `Negociar deudas con entidades bancarias puede parecer intimidante, pero con la información correcta y el respaldo legal adecuado, es un proceso que puede cambiar tu vida financiera.

## Antes de negociar: prepárate

### Conoce tu situación real
- Haz un inventario completo de todas tus deudas
- Calcula tu capacidad real de pago mensual
- Identifica cuáles deudas tienen garantía (hipoteca, vehículo) y cuáles no

### Documéntate
- Reúne todos los extractos bancarios
- Guarda las comunicaciones con los bancos
- Ten a la mano tu historial crediticio

## Opciones de negociación

### 1. Negociación directa
Puedes acercarte directamente al banco y solicitar una reestructuración. Los bancos prefieren negociar antes que iniciar un proceso judicial costoso.

**Puedes solicitar:**
- Reducción de tasa de interés
- Ampliación del plazo
- Período de gracia
- Condonación parcial de intereses

### 2. Proceso de insolvencia
Si la negociación directa no funciona, el proceso de insolvencia de la Ley 1564 te da un marco legal para negociar con TODOS tus acreedores al mismo tiempo.

**Ventajas:**
- Un solo proceso para todas las deudas
- Suspensión inmediata de cobros
- Protección contra embargos
- Acuerdo aprobado obliga a todos los acreedores

## Errores comunes al negociar

1. **No negociar a tiempo**: Entre más esperes, más intereses se acumulan
2. **Firmar sin leer**: Nunca firmes un acuerdo sin entenderlo completamente
3. **No buscar asesoría legal**: Un abogado especializado puede conseguir mejores condiciones
4. **Ignorar las comunicaciones del banco**: Esto solo empeora la situación

## Recomendación final

No permitas que el miedo o la vergüenza te paralicen. Las deudas tienen solución legal y entre más pronto actúes, mejores serán las condiciones que puedas obtener.`,
    imagen: "/blog/negociar-bancos.jpg",
    categoria: "Negociacion de Deudas",
    autor: "Dra. Lopez",
    fecha: "2026-03-10",
    lectura: "5 min",
  },
  {
    slug: "embargo-de-salario-limites-legales",
    titulo: "Embargo de salario: ¿cuánto te pueden descontar legalmente?",
    extracto:
      "Entiende los límites legales del embargo salarial en Colombia y conoce tus derechos para proteger tu ingreso mínimo vital.",
    contenido: `Uno de los mayores temores de las personas endeudadas es el embargo de su salario. Sin embargo, la ley colombiana establece límites claros para proteger tu sustento.

## Regla general: el salario mínimo es inembargable

El artículo 154 del Código Sustantivo del Trabajo establece que el salario mínimo legal mensual vigente es **totalmente inembargable**.

## ¿Cuánto pueden embargar?

### Para deudas comunes (tarjetas, préstamos personales)
- Solo se puede embargar la **quinta parte (1/5)** de lo que exceda el salario mínimo
- Ejemplo: Si ganas $2.000.000 y el SMLMV es $1.423.500, solo pueden embargar 1/5 de $576.500 = **$115.300**

### Para deudas de alimentos y cooperativas
- Se puede embargar hasta la **mitad (1/2)** del salario, incluyendo el mínimo
- Estas obligaciones tienen prelación sobre las demás

## ¿Y la cuenta bancaria?

Las cuentas de nómina tienen protección especial. Los depósitos correspondientes a salario mantienen su carácter de inembargables. Sin embargo, debes informar al juzgado que se trata de una cuenta de nómina.

## ¿Cómo te protege la insolvencia?

Al iniciar un proceso de insolvencia bajo la Ley 1564:
- Se suspenden **todos** los embargos vigentes
- No se pueden iniciar nuevos embargos
- Se protege tu patrimonio durante el proceso

## ¿Qué hacer si te embargaron de más?

1. Verifica que el embargo respete los límites legales
2. Si excede los límites, presenta un escrito al juzgado solicitando la reducción
3. Consulta con un abogado para evaluar si un proceso de insolvencia es conveniente

No dejes que el desconocimiento te quite más de lo que la ley permite. Conoce tus derechos y hazlos valer.`,
    imagen: "/blog/embargo-salario.jpg",
    categoria: "Derechos del Deudor",
    autor: "Dr. Ramirez",
    fecha: "2026-03-05",
    lectura: "4 min",
  },
  {
    slug: "liquidacion-patrimonial-paso-a-paso",
    titulo: "Liquidación patrimonial: guía paso a paso",
    extracto:
      "Todo lo que necesitas saber sobre el proceso de liquidación patrimonial. Cuándo aplica, qué bienes se incluyen y qué queda protegido.",
    contenido: `La liquidación patrimonial es el segundo mecanismo que ofrece la Ley 1564 de 2012 para personas naturales no comerciantes. Se activa cuando no es posible llegar a un acuerdo en la negociación de deudas.

## ¿Cuándo se llega a liquidación?

- Cuando fracasa la negociación de deudas
- Cuando el deudor incumple el acuerdo de pago
- Cuando el deudor lo solicita directamente (en casos extremos)

## Paso 1: Inventario de bienes

Se realiza un inventario completo de todos los bienes del deudor:
- Inmuebles
- Vehículos
- Cuentas bancarias
- Inversiones
- Bienes muebles de valor

## Paso 2: Bienes excluidos

La ley protege ciertos bienes que NO entran en la liquidación:
- **Bien de familia**: La vivienda familiar inembargable
- **Herramientas de trabajo**: Lo necesario para ejercer tu profesión
- **Bienes inembargables por ley**: Ropa, muebles básicos del hogar, alimentos
- **Salario mínimo**: Mantiene su protección

## Paso 3: Graduación de créditos

Los acreedores se clasifican por orden de prelación:
1. **Primera clase**: Laborales y alimentos
2. **Segunda clase**: Con garantía prendaria
3. **Tercera clase**: Con garantía hipotecaria
4. **Cuarta clase**: Impuestos (DIAN, municipales)
5. **Quinta clase**: Quirografarios (sin garantía)

## Paso 4: Adjudicación

El liquidador distribuye los bienes entre los acreedores según la prelación. Si el patrimonio no alcanza para cubrir todas las deudas, las obligaciones restantes se extinguen.

## El beneficio del descargue

Este es el punto más importante: **las deudas que no se cubren con la liquidación se extinguen**. Esto significa que después del proceso, el deudor queda libre de todas las obligaciones incluidas.

## Duración del proceso

El proceso de liquidación patrimonial tiene un término máximo de **un año** desde su inicio.

Es un proceso serio pero que ofrece una salida real y definitiva al sobreendeudamiento.`,
    imagen: "/blog/liquidacion.jpg",
    categoria: "Liquidacion",
    autor: "Dra. Lopez",
    fecha: "2026-02-28",
    lectura: "7 min",
  },
  {
    slug: "5-senales-necesitas-proceso-insolvencia",
    titulo: "5 señales de que necesitas un proceso de insolvencia",
    extracto:
      "¿No sabes si calificas para un proceso de insolvencia? Estas son las señales claras de que es momento de buscar ayuda legal profesional.",
    contenido: `Muchas personas viven con el peso de las deudas sin saber que existe una solución legal. Aquí te presentamos las señales de alerta que indican que podrías beneficiarte de un proceso de insolvencia.

## 1. Pagas deudas con otras deudas

Si estás sacando préstamos para pagar tarjetas de crédito, o adelantos de nómina para cubrir cuotas, estás en un ciclo peligroso que solo empeora con el tiempo. Esta es la señal más clara de que necesitas intervención profesional.

## 2. Más del 40% de tus ingresos se va en deudas

Los expertos financieros coinciden: si más del 40% de tus ingresos mensuales se destina al pago de deudas (excluyendo vivienda), tu situación es insostenible. Haz el cálculo:

> (Total cuotas mensuales / Ingreso neto) x 100

Si el resultado supera el 40%, es momento de actuar.

## 3. Recibes llamadas de cobro constantemente

Si los cobradores te llaman al trabajo, a tu celular, e incluso contactan a tus familiares, la situación ya escaló. Recuerda que el acoso por cobro es ilegal en Colombia, pero la mejor forma de detenerlo es resolver la situación de fondo.

## 4. Tienes procesos ejecutivos o embargos

Si ya te notificaron de un proceso ejecutivo o te embargaron cuentas o bienes, no esperes más. El proceso de insolvencia puede suspender estos embargos y darte la oportunidad de negociar.

## 5. La ansiedad por las deudas afecta tu salud

El estrés financiero tiene consecuencias reales en la salud: insomnio, ansiedad, depresión, problemas familiares. Si las deudas están afectando tu calidad de vida, es razón suficiente para buscar ayuda.

## ¿Qué hacer?

1. **No te paralices**: La inacción solo empeora las cosas
2. **Busca asesoría profesional**: Un abogado especializado en insolvencia puede evaluar tu caso
3. **Reúne tu información financiera**: Extractos, certificaciones de deuda, comprobantes de ingresos
4. **Consulta gratuita**: Muchos profesionales ofrecen una primera valoración sin costo

El proceso de insolvencia no es un fracaso — es una herramienta legal diseñada para darte una segunda oportunidad.`,
    imagen: "/blog/senales-insolvencia.jpg",
    categoria: "Consejos Financieros",
    autor: "Dr. Ramirez",
    fecha: "2026-02-20",
    lectura: "5 min",
  },
  {
    slug: "reportes-centrales-riesgo-insolvencia",
    titulo: "Centrales de riesgo y proceso de insolvencia: lo que debes saber",
    extracto:
      "¿Cómo afecta el proceso de insolvencia tu reporte en Datacrédito y TransUnion? Descubre qué pasa con tu historial crediticio.",
    contenido: `Una de las preguntas más frecuentes de nuestros clientes es: ¿qué pasa con mi reporte en centrales de riesgo si inicio un proceso de insolvencia?

## Durante el proceso

Mientras dura el proceso de insolvencia:
- Las entidades **no pueden reportar nuevamente** las obligaciones incluidas en el proceso
- Los reportes existentes se mantienen pero con una anotación especial indicando que el deudor está en proceso de insolvencia
- No se pueden iniciar nuevos cobros ni actualizar reportes negativos

## Después del proceso exitoso

### Si se logra un acuerdo de pago
- Una vez cumplido el acuerdo, los acreedores deben actualizar el reporte
- La Ley de Habeas Data (1266 de 2008) establece que el reporte negativo permanece por un máximo de **4 años** desde la fecha de pago
- Si la mora fue menor a 2 años, el reporte negativo dura el **doble del tiempo de mora**

### Si se llega a liquidación patrimonial
- Las deudas extinguidas deben ser reportadas como tal
- El historial de la liquidación permanece en centrales de riesgo por 4 años
- Después de ese período, tu historial queda limpio

## Mitos comunes

### "Quedaré reportado de por vida"
**Falso.** La ley establece términos máximos de permanencia en centrales de riesgo. Nadie queda reportado para siempre.

### "Nunca más podré acceder a crédito"
**Falso.** Después de completar el proceso y cumplir los términos de permanencia, puedes reconstruir tu historial crediticio.

### "Es mejor no pagar y esperar que caduque"
**Peligroso.** Mientras no pagues, el acreedor puede iniciar procesos judiciales. La caducidad de la acción ejecutiva es de 5 años, pero el reporte puede renovarse.

## Reconstruir tu crédito

Después del proceso de insolvencia:
1. Empieza con productos financieros básicos (cuenta de ahorros)
2. Solicita una tarjeta de crédito con cupo bajo
3. Paga siempre a tiempo y genera historial positivo
4. En 1-2 años tendrás un perfil crediticio nuevo

El proceso de insolvencia es un nuevo comienzo, no un final.`,
    imagen: "/blog/centrales-riesgo.jpg",
    categoria: "Ley de Insolvencia",
    autor: "Dra. Lopez",
    fecha: "2026-02-15",
    lectura: "6 min",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategoria(categoria: string): BlogPost[] {
  if (categoria === "Todos") return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.categoria === categoria);
}
