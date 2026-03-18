import type { Metadata } from "next";
import { Gudea } from "next/font/google";
import "./globals.css";

const gudea = Gudea({
  variable: "--font-gudea",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Insolvencia Colombia | Ley 1564 - Solución Legal a tus Deudas",
  description:
    "Asesórate con expertos en la Ley de Insolvencia 1564. Negocia tus deudas, frena embargos y recupera tu tranquilidad financiera. Consulta gratuita.",
  keywords:
    "insolvencia, ley 1564, deudas, embargo, Colombia, persona natural, liquidación, negociación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${gudea.variable} antialiased`}>{children}</body>
    </html>
  );
}
