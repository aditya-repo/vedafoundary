import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </>
  );
}
