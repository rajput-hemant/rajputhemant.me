import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <div className={cn("flex justify-center text-muted-foreground", className)}>
      <div>© {new Date().getFullYear()} by rajput-hemant@github</div>
    </div>
  );
};

export default Footer;
