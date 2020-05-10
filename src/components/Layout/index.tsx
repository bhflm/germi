import React, { FunctionComponent } from "react";

export const Layout: FunctionComponent<{}> = () => (
    <div>
      <h1 className="font-semibold ml-20 pt-20 text-left h-8 black">
        Hi there,
      </h1>
      <div className="font-small mt-16 ml-20 text-left h-9 black">
        <span>
          I'm a software developer based in Buenos Aires, Argentina.
          <br></br>
          <br></br>
          Currently working for <a className="font-semibold" target="_blank" href="https://properati.com.ar">Properati</a>, part of <a className="font-semibold" target="_blank" href="https://olxgroup.com">OLX Group</a>.
          <br></br>
          Helping to build a website for making it easier to find a new home.
          <br></br>
          <br></br>
          I enjoy creating things, with a preference for backend and security stuff.
          <br></br>
          <br></br>
          Feel free to reach me <a className="font-semibold" href="mailto:germanbonin@gmail.com">here</a> anytime.
        </span>
      </div>
    </div>
);
