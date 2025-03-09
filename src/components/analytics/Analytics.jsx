// 'use client'

// import { GoogleTagManager } from "@next/third-parties/google";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const Analytics = () => {
//     const pathname = usePathname();
//     const searchParams = useSearchParams();
//     const [key, setKey] = useState(0);

//     useEffect(() => {
//         // Update key to force re-rendering of GoogleTagManager on route changes
//         setKey((prevKey) => prevKey + 1);
//     }, [pathname, searchParams]);

//     return (
//         <GoogleTagManager key={key} gtmId="GTM-T5527NF" />
//     );
// };

// export default Analytics;
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Explicitly send a pageview event to GTM
    sendGTMEvent({
      event: 'pageview',
      page: {
        url: `${window.location.pathname}${window.location.search}`,
        title: document.title,
      },
    });
  }, [pathname, searchParams]);
  // console.log(window.dataLayer);
  return null;
};

export default Analytics;
