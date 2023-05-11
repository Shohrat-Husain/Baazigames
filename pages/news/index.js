import React from "react";
import styles from "./style.module.css";
import PaginatedItems from '../../components/News/News';
import Head from "next/head";
function index() {
  return (
    <div>
      <Head>
      <title>News | Baazi Games</title>
       <link
          rel="icon"
          href="https://baazigames.com/wp-content/uploads/2022/11/cropped-BG-Blue-logo-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://baazigames.com/wp-content/uploads/2022/11/cropped-BG-Blue-logo-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://baazigames.com/wp-content/uploads/2022/11/cropped-BG-Blue-logo-180x180.png"
        />
      </Head>
     <PaginatedItems itemsPerPage={9} />
    </div>
  );
}

export default index;
