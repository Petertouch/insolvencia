import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/providers";

export const metadata = {
  title: "Blog | Insolvencia 360",
  description: "Artículos y guías sobre la Ley de Insolvencia, negociación de deudas y derechos del deudor en Colombia.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
}
