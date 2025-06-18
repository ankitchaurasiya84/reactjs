// import React from 'react'
// import CustomMemoriseBtn  from './CustomMemoriseBtn'
// const UseCallBack = () => {
//     const [count, setCount] = React.useState(0);

//   // useCallback returns the SAME function instance unless 'setCount' changes
//   const handleClick = React.useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <CustomMemoriseBtn onClick={handleClick} />
//     </div>
//   )
// }

// export default UseCallBack

import React, { useRef, useState } from "react";

function UseCallBack() {
    const [input,setInput]=useState(0)
  const inputRef = useRef(null);

  React.useEffect(() => {
    // Automatically focus the input when the component mounts
    if(input>5) inputRef.current.focus();
    else inputRef.current.blur()
  }, [input]);

  return (
    <div>
      <label>
        Username: 
        <input ref={inputRef}  value={input} type="text" placeholder="Enter your username" onChange={(e)=>setInput(e.target.value)} />
      </label>
    </div>
  );
}

export default UseCallBack;
