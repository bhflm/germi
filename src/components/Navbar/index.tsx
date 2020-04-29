import React, { FunctionComponent } from "react";

export const Navbar: FunctionComponent<{}> = () => (
    <div className="flex px-4 justify-between flex-wrap border-b-2 border-black">
        <div className="text-xl px-4">
          grmi
        </div>
        <nav className="flex space-between mx-r">
          <a className="text-xl px-4" href="/archive">
            archive
          </a>
          <a className="text-xl px-4" href="/about">
            about
          </a>
          <a href="https://github.com/bhflm" target="_blank">
            <img className="h-8 pt-1 pb-1 px-4" src="/github.svg" alt="github logo"/>
          </a>
        </nav>
    </div>
);
