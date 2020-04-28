import React, { FunctionComponent } from "react";

export const Navbar: FunctionComponent<{}> = () => (
    <div className="flex justify-between flex-wrap">
        <div className="block">
          <p className="">icon</p>
        </div>
        <nav className="flex space-between mx-r">
          <a className="text-xl" href="#">
            som link
          </a>
          <a className="text-xl" href="#">
            otter link
          </a>
          <a className="text-xl top-0 right-0" href="#">
            moar link
          </a>
        </nav>
    </div>
);
