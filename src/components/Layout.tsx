import React, { FC } from "react";

import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen dark:bg-gray-600 bg-white flex flex-col overflow-auto">
      <Navbar />
      <div className="h-full w-full overflow-auto p-2">{children}</div>
    </div>
  );
};

export default Layout;
