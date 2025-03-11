import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Microsoft Office 2021 Home & Business",
    price: 199.99,
    salePrice: 149.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Microsoft Office 2021 Professional Plus",
    price: 299.99,
    salePrice: 249.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Windows 11 Pro",
    price: 199.99,
    salePrice: 159.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Microsoft Visio 2021 Professional",
    price: 399.99,
    salePrice: 349.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function ProductGrid() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                  Sale!
                </div>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-navy-900 mb-2 h-12 line-clamp-2">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 line-through">${product.price}</span>
                  <span className="text-xl font-bold text-navy-900">${product.salePrice}</span>
                </div>
                <Link
                  href={`/product/${product.id}`}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded block text-center transition"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

