import React from 'react'

const CustomMemoriseBtn =React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click me!</button>;
});
export default CustomMemoriseBtn
// import React from "react";
// export
