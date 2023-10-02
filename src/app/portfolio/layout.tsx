import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";

type Props = {
  children: React.ReactNode;
};

const PortfolioLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main className="mt-10 min-h-[calc(100vh-11rem)] font-incognito md:mt-10 lg:mt-16 lg:min-h-[calc(100vh-12.5rem)]">
        {children}
      </main>

      <Separator />

      <Footer />
    </>
  );
};

export default PortfolioLayout;
