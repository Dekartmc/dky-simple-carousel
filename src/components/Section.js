/* eslint-disable prettier/prettier */
import React from "react";

const Section = React.forwardRef(({ id, children, ClassName, Style, key }, ref) => (
  <div ref={ref} id={id} className={ClassName} key={key} style={Style}>
    {children}
  </div>
));

export default Section;
