import { ReactNode } from "react";
import { Title } from "./style";
import { Caveat } from "next/font/google";

const caveat = Caveat({ weight: "400", subsets: ["latin"] });

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <Title className={`${caveat.className} text-6xl mt-20 mb-20`}>
        Reviewzando
      </Title>
      {children}
    </div>
  );
}
