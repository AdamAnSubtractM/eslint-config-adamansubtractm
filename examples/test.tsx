// note: you will need to install React to get this to work properly.

// import React, { useEffect, useState, useContext } from 'react';

// type testprops = {
//     name: string;
//     age: number;
//     favFood: 'pizza' | 'tacos'
// }

// export default function Test({ name, age, favFood }: testprops) {
//   const [isAge, setIsAge] = useState(null);
//   const context = useContext(null);

//   useEffect(() => {
//     setIsAge(age);
//   }, [age]);

//   useEffect(() => {
//     console.log({ context });
//   }, [context]);

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{isAge}</h2>
//       <h3>{favFood}</h3>
//     </div>
//   );
// }
