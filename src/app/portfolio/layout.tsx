import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};

const PortfolioLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-10rem)] font-incognito md:min-h-[calc(100vh-8rem)]">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default PortfolioLayout;
