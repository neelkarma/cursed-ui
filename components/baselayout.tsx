import { FC } from "react";

const BaseLayout: FC<{}> = ({ children }) => {
  return (
    <div className="container mx-auto px-[5%] md:px-[20%] mt-5">{children}</div>
  );
};

export default BaseLayout;
