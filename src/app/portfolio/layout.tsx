import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};

const PortfolioLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main className="mt-10 min-h-[calc(100vh-10rem)] font-incognito md:mt-16 md:min-h-[calc(100vh-8rem)]">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default PortfolioLayout;
