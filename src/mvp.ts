/*
 * Versión MVP (primer avance): el mismo código, con parte de las funciones apagadas.
 *
 * Se activa con `npm run dev:mvp` o `npm run build:mvp` (modo "mvp" de Vite, que lee `.env.mvp`).
 * Sin ese modo la aplicación es la completa. Todo lo que el MVP apaga está en este archivo, para
 * poder encenderlo de nuevo cambiando un valor.
 *
 *   Incluye:  Explorar, péndulo con ángulo pequeño (MAS), largo / ángulo / gravedad, Play,
 *             Reiniciar, período y frecuencia, gráfica θ(t) y el botón "¿Qué es esto?".
 *   No incluye (todavía): modo Experimentos, modelo "Real" (no lineal), curva de comparación,
 *             masa, fricción y velocidad ("Más opciones"), los atajos de gravedad
 *             (Tierra, Luna, Marte, Júpiter) y el panel de Teoría.
 */
export const MVP = import.meta.env.VITE_MVP === '1';

export const FEATURES = {
  experimentos: !MVP,
  modeloReal: !MVP,
  comparacion: !MVP,
  masOpciones: !MVP,
  teoria: !MVP,
  atajos: !MVP,
} as const;
