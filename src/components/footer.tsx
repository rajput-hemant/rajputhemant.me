import { cn } from "@/lib/utils";

type Props = {
  absolute?: boolean;
  className?: string;
};

const Footer = ({ absolute, className }: Props) => {
  return (
    <div
      className={cn(
        "flex w-full justify-center text-sm text-foreground/60",
        absolute && "absolute bottom-4 mx-auto",
        className
      )}
    >
      <div>© {new Date().getFullYear()} by rajput-hemant@github</div>
    </div>
  );
};

export default Footer;
