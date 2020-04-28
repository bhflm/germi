import React, { FunctionComponent } from "react";

export const Navbar: FunctionComponent<{}> = () => (
    <div className="flex justify-between flex-wrap">
        <div className="block">
          <p className="">icon</p>
        </div>
        <nav className="flex space-between mx-r">
          <a className="text-xl px-4" href="#">
            som link
          </a>
          <a className="text-xl px-4" href="#">
            otter link
          </a>
          <a className="text-xl px-4" href="#">
            moar link
          </a>
        </nav>
    </div>
);
