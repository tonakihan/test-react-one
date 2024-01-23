import React from "react";
import cl from "./Loader.module.css"

export default function Loader({children, visable}) {
  const rootCl = [cl.loader];
  if (!visable) {
    rootCl.push(cl.none);
  }

  return (
    <div className={rootCl.join(' ')}>
      <div className={[cl.loader, cl.sign].join(' ')}></div>
      <br/>
      <h1>{children}</h1>
    </div>
  )
}