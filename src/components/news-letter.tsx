import { CheckCircle2 } from "lucide-react"

export default function NewsletterSection() {
  return (
    <section className="bg-[#004AAD] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold mb-4 lg:mb-0">
            Subscribe to our newsletter to stay updated on the latest discount
          </h2>
          <div className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="Your Email address"
              className="flex-1 lg:w-80 px-4 py-3 rounded-l text-gray-900"
            />
            <button className="bg-[#FFD700] text-gray-900 px-6 py-3 font-bold rounded-r hover:bg-yellow-400 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between text-sm">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-4 lg:mb-0">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>Instant Email Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>Installation warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>100% legitimate software</span>
            </div>
          </div>
          <div className="text-right">5 years worldwide services</div>
        </div>
      </div>
    </section>
  )
}

