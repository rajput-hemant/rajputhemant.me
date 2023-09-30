import { incognito } from "@/lib/fonts";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};

const PortfolioLayout = ({ children }: Props) => {
  return (
    <div className={incognito.className}>
      <Navbar />

      {children}

      <Footer absolute />
    </div>
  );
};

export default PortfolioLayout;
