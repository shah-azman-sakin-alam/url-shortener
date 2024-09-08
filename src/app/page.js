import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <header className="flex xs:px-12 xs:justify-end landing-header xs:gap-x-2 xs:py-3">
        <div className="flex md:flex-row-reverse xs:gap-x-2 lg:gap-x-20">
        <Link href='/' className="flex items-center justify-center rounded-lg xs:w-20 xs:h-12 xs:border-2 text-color-login border-color-login xs:text-[1.4rem] font-jost">Login</Link>
          <nav className="flex xs:flex-col xs:gap-y-3 md:flex-row md:gap-x-2">
              <Link href="/" className="text-xl text-center rounded-lg bg-btn-green text-btn-green-text xs:py-2 xs:px-4 font-jost">Home</Link>
              <Link href="/" className="">Help</Link>
              <Link href="/" className="">Pricing</Link>
        
          </nav>
        </div>
        
          
      </header>
      <main className=" xs:py-12 xs:px-8 sm:px-14 lg:grid-cols-2 lg:px-0 lg:flex lg:justify-end lg:py-0 lg:items-center xl:gap-x-16">
        <section className="flex flex-col items-center xs:gap-y-6 xs:mb-7 sm:items-start lg:w-auto lg:pl-14 ">
          <div className="flex flex-col items-start xs:gap-y-4 xs:w-full lg:w-auto ">
            <div className="py-3 text-center font-jost text-color-login bg-alert-button xs:w-[74%] rounded-2xl xs:text-lg sm:w-[60%] sm:text-xl md:w-[28rem] lg:w-[25rem] xl:w-[20rem]">Links are meant to be memorable</div>
            <h2 className="xs:w-[19ch] xs:text-[2.5rem] xs:leading-[50px] font-jost font-medium sm:text-[2.8rem] sm:leading-tight lg:leading-[55px] lg:text-[4vw] xl:leading-[70px] ">
            Analytics, shortlink, QR codes, all in one
            </h2>
            <p className="xs:w-[32ch] xs:leading-7 text-black text-opacity-[57%] font-jost xs:text-[1.15rem] tracking-tight sm:text-xl">No need to worry about different tools for the same job anymore.</p>
          </div>
          <div className="xs:w-full sm:w-[80%]">
            <div className="flex justify-between py-2  pr-6 pl-10  border-black border-[1px] gap-x-6  bg-input-button rounded-xl border-opacity-40 xs:mb-4 font-jost xs:w-[80%] sm:w-[90%] md:w-[75%] lg:w-[90%]">
              <input type='text' required className="w-full bg-transparent outline-none xs:w-[80%] sm:w-[60%] md:w-[70%]"/>
              <button className="flex items-center justify-center text-lg xs:px-6 w-28 bg-color-login rounded-xl sm:px-6">
                Shortify
                <img src="https://img.icons8.com/ios-filled/right--v1.png" alt="long-arrow-right"  className="h-10 w-9"/>
              </button>
            </div>

            <p className="text-small-text xs:text-xl xs:mb-3 font-jost ">We’ll handle the rest you just sit back.</p>
            <img src='/images/5star.png' alt="stars" className="xs:h-14 xs:mb-2 xs:-mx-2"/>
            <p className="text-small-text xs:text-xl font-jost">4.5 star review</p>
          </div>
        </section>
        <section className="flex xs:flex-col xs:items-center xs:gap-y-3 lg:hidden">
          <h3 className="font-semibold  xs:text-4xl  font-jost text-[#373737] md:mx-2 md:text-5xl">Preview</h3>
          <img src='/images/mobile dashboard.png' alt="mobile dashboard" className=" md:hidden"/>
          <img src='/images/tablet dashboard.png' alt="tablet dashboard" className="w-full lg:hidden"/>
        </section>
        <section className=" lg:justify-end lg:h-screen  xs:hidden bg-alert-button lg:flex lg:py-10 pl-10  lg:w-[520px]  xl:w-[580px] xl:pl-3">
          <img src='/images/desktop dashboard.png' alt="desktop dashboard" className="w-full h-full  xl:w-[95%]"/>
        </section>
      </main>
    </>
    
  );
}
