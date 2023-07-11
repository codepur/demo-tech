// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import CommonHeader from '../components/common/CommonHeader';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Head from 'next/head';
// import MainSection from '../components/MainSection';
// import Footer from "../components/common/footer"
// import Doubts from '../components/Doubts';
// import WhyChoose from '../components/WhyChoose';
// import ChooseEntity from '@/components/ChooseEntity';
// import KnowBetter from '@/components/KnowBetter';

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>{"company-registration"}</title>
//         <meta name="theme-color" content="#ffffff" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
//         <meta name="title" content="company-registration" />
//         <link rel="shortcut icon" href="/favicon.png" />
//       </Head>
//       <main className="">
//         <CommonHeader />
//         <MainSection/>
//         <KnowBetter/>
//         <WhyChoose/>
//         <ChooseEntity/>
//         <Doubts/>
//         <Footer/>
//       </main>
//     </>
//   )
// }

import dynamic from "next/dynamic";
import Layout from "../components/common/mainHeaderFooterLayout";
// import styles from "../src/styles/login.module.scss";
import Head from "next/head";
import { LazyLoaderGeneral } from "../components/common/LazyLoaderGeneral";
const Home = dynamic(() => import("../components/common/home"), { loading: () => <LazyLoaderGeneral />, });

export default function Index() {
  return (
    <div>
      <Layout title="Home | JSD" data={{ layoutType: "PAGE", pageScreen: "Home" }} description="JSD">
      </Layout>
      <Home />
    </div>
  );
}
