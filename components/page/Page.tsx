import { ReactNode } from "react";

export interface IPage {
  children: ReactNode;
}

const Page: React.FC<IPage> = ({ children }) => {
  return <div>{children}</div>;
};

export default Page;
