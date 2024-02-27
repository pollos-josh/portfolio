import Head from 'next/head';
import Image from 'next/image';
import Scroll from './components/_Scroll'
import { ModelViewer } from './components/model-viewer';

export default function Home() {
  return (
    <div className="min-h-screen vh-100">
      <Head>
        <title>Your Portfolio</title>
        <meta name="description" content="Your portfolio description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto h-screen">
        <h1 className='text-[12.5rem] whitespace-nowrap text-center font-darker_grotesque font-black'>
          Joshua Villalobos
        </h1>
        <Scroll />
        <section className="flex justify-center py-11 mb-10 bg-cover section-bg"> 
          <div id='3dcontainer' className='w-full'>
              <ModelViewer />
          </div>
        </section>

        <footer className="text-white pb-10 text-center">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 inline" />
          </a>
        </footer>
        <div className='paperOverlay w-screen h-full'></div>
      </main>
    </div>
  );
}
