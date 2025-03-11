import Image from "next/image"

export default function TrustBadges() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">We Are Trusted By</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="grayscale hover:grayscale-0 transition">
              <Image
                src={`/placeholder.svg?height=80&width=120`}
                alt={`Trusted Partner ${i}`}
                width={120}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

