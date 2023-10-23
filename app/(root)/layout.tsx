import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Navbar
      <div>
        LeftSidebar
        <section>
          <div>{children}</div>
        </section>
        RightSidebar
      </div>
      Toaster
    </div>
  );
};

export default Layout;
