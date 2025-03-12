import Image from "next/image"
import Link from "next/link"
import image from "Public/assets/Product/image.png"
const featuredProducts = [
  {
    id: 1,
    name: "Microsoft Office 2021 Home & Student (Mac)",
    originalPrice: 279.99,
    salePrice: 175.13,
    currency: "AUD",
    image: image,
    slug: "office-2021-home-student-mac",
  },
  {
    id: 2,
    name: "Microsoft Office 2021 Home & Business",
    originalPrice: 399.99,
    salePrice: 238.81,
    currency: "AUD",
    image: image,
    slug: "office-2021-home-business",
  },
  {
    id: 3,
    name: "Microsoft Office 2021 Home & Student (Windows)",
    originalPrice: 279.99,
    salePrice: 175.13,
    currency: "AUD",
    image: image,
    slug: "office-2021-home-student-windows",
  },
  {
    id: 4,
    name: "Microsoft Office 2021 Professional Plus (Windows)",
    originalPrice: 599.99,
    salePrice: 318.42,
    currency: "AUD",
    image: image,
    slug: "office-2021-professional-plus",
  },
]

export default function ProductGrid() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 shadow-xl">
          <div className="rounded-t-lg border-4 w-full border-navy-900"></div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg  shadow-lg overflow-hidden bg-white">
                <div className="relative p-4">
                  <div className="absolute top-2 left-2 bg-[#e84118] text-white text-sm font-bold px-2 py-1 rounded">
                    Sale!
                  </div>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-[#001c5c] mb-2 h-12 line-clamp-2 text-sm">{product.name}</h3>
                  <div className="flex flex-col items-center space-y-1 mb-4">
                    <span className="text-gray-500 line-through text-sm">
                      ${product.originalPrice.toFixed(2)} {product.currency}
                    </span>
                    <span className="text-xl font-bold text-[#001c5c]">
                      ${product.salePrice.toFixed(2)} {product.currency}
                    </span>
                  </div>
                  <Link
                    href={`/product/${product.slug}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded block text-center transition w-full"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

