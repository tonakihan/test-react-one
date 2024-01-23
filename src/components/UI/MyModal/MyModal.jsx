import React from "react";
import cl from "./MyModal.module.css"

export default function MyModal ({children, visable, setVisable, ...props}) {
  const rootCl = [cl.myModal];
  if (visable) {
    rootCl.push(cl.active);
  }

  return (
    <div className={rootCl.join(' ')} onClick={() => setVisable(false)}>
      <div className={cl.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  ) 
}