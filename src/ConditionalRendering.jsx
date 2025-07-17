import React from "react";

// using ternary
// const ConditionalRendering = () => {
//   let isLoggedIn = true;
//   return (
//     <div>
//       {isLoggedIn ? <p>Hello User!</p> : <p>Please login to continue</p>}
//     </div>
//   );
// };

// import React from 'react'

// using early return

const ConditionalRendering = () => {
  let isLoggedIn = true;
  let isAdmin = true;

  //   if (!isLoggedIn) {
  //     return <p>Access Denied. Please Login</p>;
  //   }

  return (
    <div>{isLoggedIn && isAdmin && <h2>welcome to the admin page </h2>}</div>
  );
};

// export default ConditionalRendering

export default ConditionalRendering;
