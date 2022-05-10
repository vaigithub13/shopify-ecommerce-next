import React from "react";
import s from "./flex.module.css";

const flex = () => {
  return (
    <div className={s.parent}>
      <div className={s.child}></div>
      <div className={s.child}></div>
      <div className={s.child}></div>
      <div className={s.child}></div>
    </div>
  );
};

export default flex;
