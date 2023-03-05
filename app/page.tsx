import { ReactNode } from "react";

export interface IPage {
  children: ReactNode;
}

const Page: React.FC = () => {
    return <div>Hello world</div>;
  };
  
  export default Page;