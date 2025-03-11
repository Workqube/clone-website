import Image from "next/image"
import Link from "next/link"
import HeaderImage1 from "Public/assets/HeaderImage1.png"
import HeaderImage2 from "Public/assets/HeaderImage2.png"

export default function HeroSection() {
  return (
    <section className="bg-navy-900 text-white py-8 md:py-12 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* First Image */}
          <div className="w-full flex justify-center lg:justify-start z-10 mb-6 lg:mb-0">
            <Image
              src={HeaderImage1}
              alt="Microsoft Office Products"
              width={325}
              height={325}
              className="relative z-10 object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="w-full z-10 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 lg:mb-6">
              Boost Productivity with Microsoft Office 2024 for Business and Personal Use
            </h1>
            <p className="text-base md:text-lg mb-6 lg:mb-8">
              Trusted by over fifty thousand users across the globe.
            </p>
            <div className="flex justify-center w-full">
              <Link
                href="/shop"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-md text-lg md:text-2xl text-center inline-block transition duration-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
          
          {/* Second Image */}
          <div className="w-full  flex justify-center lg:justify-end z-10 mt-6 lg:mt-0">
            <Image
              src={HeaderImage2}
              alt="Microsoft Office Products"
              width={325}
              height={325}
              className="relative z-10 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}