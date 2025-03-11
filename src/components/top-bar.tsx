import Link from "next/link"
import { CloudDownload, Lock, ChevronDown } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-navy-900 text-white py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/blog" className="hover:text-blue-200 transition text-sm md:text-base">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition text-sm md:text-base">
            Contact us
          </Link>
          <Link href="/reviews" className="hover:text-blue-200 transition text-sm md:text-base">
            Reviews
          </Link>
        </div>
        
        {/* Features */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <CloudDownload className="text-blue-200 w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Fast Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="text-blue-200 w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Secure Payment</span>
          </div>
        </div>
        
        {/* Currency Selector */}
        <div className="border border-gray-600 rounded px-3 py-1.5 flex items-center hover:border-gray-400 cursor-pointer transition">
          <span className="mr-2 text-sm md:text-base">AUD</span>
          <span>🇦🇺</span>
          <ChevronDown className="ml-1 w-4 h-4" />
        </div>
      </div>
    </div>
  )
}