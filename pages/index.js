import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Video from "../components/Video/Video";
import Community from "../components/Community/Community";
import Slider_2 from "../components/Slider2/Slider_2";
import Letsplay from "../components/Slider3/Letsplay";
import Verticle from "../components/Slider4/Verticle";
import NewsHome from "../components/News/NewsHome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baazi Games - The Fastest Growing Online Gaming Company</title>
        <meta name="description" content="Baazi Games created the world-class gaming products for the biggest brands in online sports and real money gaming." />
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
      <main>
        <Video />
        <Community />
        <Slider_2 />
        <Letsplay />
        <Verticle />
        <NewsHome />
      </main>
    </div>
  );
}
