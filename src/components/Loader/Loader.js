// 'use client'
// import Image from 'next/image';
// // components/Loader.js
// import { useEffect, useState } from 'react';
// // import styles from './Loader.module.css';

// export default function Loader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Set loading to false after 2 seconds
//     const timer = setTimeout(() => setLoading(false), 1000);

//     return () => clearTimeout(timer); // Cleanup on component unmount
//   }, []);

//   if (!loading) return null;

//   return (
//     <div className={`loaderOverlay`}>
//       {/* <div className={`spinner`}></div> */}
//       <Image src="/assets/imgs/logo/logo.png" alt="loader" width={200} height={200} />
//     </div>
//   );
// }
'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Set loading to false after 1 second
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out transition
      setTimeout(() => setLoading(false), 500); // Hide loader after the fade-out
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed', 
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 1000,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out', // Add transition effect
      }}
    >
      <Image src="/assets/imgs/logo/logo.png" alt="loader" width={200} height={200} />
    </div>
  );
}
