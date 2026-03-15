import Image from 'next/image'
import { Box } from "lucide-react";
import Imagetext from './component/Imagetext';
import MultipleImgs from './component/MultipleImgs';
import Footer from './component/Footer';
import AnimatedText from './component/AnimatedText';
export default function Home() {
  const imgUrls = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
  ]

  return (
    <div className='relative bg-black'>
      <header className='sticky z-60 top-0 '>
        <nav >
          <ul className=' top-0 right-10 z-60 flex my-10 absolute bg-black/60 border-[0.px] px-5 py-1 shadow-lg backdrop-blur-sm rounded-xl gap-10 text-white' style={{fontFamily: "garamond"}}>
            <li className='hover:text-gray-400 cursor-pointer'>Home</li>
            <li className='hover:text-gray-400 cursor-pointer'>Company</li>
            <li className='hover:text-gray-400 cursor-pointer'>Services</li>
            <li className='hover:text-gray-400 cursor-pointer'>Projects</li>
            <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
          </ul>
        </nav>
      </header>
      <div className='sticky top-0 w-screen h-screen z-0'>
        <Image src="/bg1.png" alt="Background" fill className="object-cover" priority />
        <div className='relative z-50 h-full w-full'>
          <Box className='text-white absolute top-[10%] left-[10%] size-18 animate-flip-z' />
          <div className='absolute bottom-[30%] left-[10%]'>
            <h1 className='text-[clamp(3rem,10vw,7rem)] font-bold text-white max-w-2xl leading-[0.9]' style={{ fontFamily: "Aileron" }}>
             <AnimatedText text="Nessrine" /><br />
              <AnimatedText text="Macherki" />
            </h1>
            <p className='text-[clamp(1rem,3vw,2rem)] text-gray-200 max-w-2xl leading-relaxed'>
              <AnimatedText text="Full Stack software Developer" />
            </p>
          </div>
        </div>
      </div>

      {/* 2. COMPANY SECTION - Overlaps Hero */}
      <section className='sticky top-0 z-10 min-h-screen bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)]'>
        <Imagetext url="/company.png" />
      </section>

      {/* 3. SERVICES SECTION - Overlaps Company */}
      <section className='sticky top-0 z-20 min-h-screen bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.8)]'>
        <h2 className='text-white text-[clamp(1rem,3vw,4rem)] font-bold italic pt-20 text-center'>Our Services</h2>
        <Imagetext url="/services.png" />
      </section>

      {/* 4. CLIENTS SECTION - Overlaps Services */}
      <section className='sticky top-0 z-30 min-h-screen bg-zinc-900 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]'>
        <h2 className='text-white text-[clamp(1rem,3vw,4rem)] font-bold italic pt-20 text-center'>Our Projects</h2>
        <MultipleImgs imgUrls={imgUrls} />
      </section>

      {/* FOOTER - Scrolls naturally after the last sticky section */}
      <div className="relative z-40 bg-black">
        <Footer />
      </div>
    </div>
  )
}