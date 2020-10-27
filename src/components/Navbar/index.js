import React from "react";

export const Navbar = () => (
    <div className="flex px-4 justify-between flex-wrap border-b-2 border-black">
        <div className="flex text-xl px-2">
          <img className="h-12 pt-2 pb-2" src="/mountain.svg" alt="mountain"/>
        </div>
        <nav className="flex space-between mx-r pt-2">
          <a href="https://www.notion.so/German-Bonin-32f5076d93fc4acfa996e8a92f5dca08" target="_blank">
              <span className="font-semibold px-4">about</span>
          </a>
          <a href="https://github.com/bhflm" target="_blank">
            <img className="h-8 pt-1 pb-2" src="/github.svg" alt="github logo"/>
          </a>
        </nav>
    </div>
);
