import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Simple Way to Download and Install Office on iPad For Free",
    excerpt: "Are you a big iPad fan! Have you ever been...",
    slug: "install-office-on-ipad",
  },
  {
    id: 2,
    title: "Understanding the Basics of Cloud Security: A Comprehensive Guide",
    excerpt: "The realm of contemporary business operations is intrinsically linked with...",
    slug: "cloud-security-guide",
  },
  {
    id: 3,
    title: "Benefits of Microsoft Office for Students vs Professionals",
    excerpt: "Are you a savvy learner and go-getter? Are you ready...",
    slug: "office-benefits-comparison",
  },
  {
    id: 4,
    title: "Microsoft 365 vs. Office 2021: A Comprehensive Comparison",
    excerpt: "Choosing the right software suite can be a game-changer for...",
    slug: "microsoft-365-vs-office-2021",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#001c5c] mb-8">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-bold text-[#001c5c] mb-4 min-h-[4rem]">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block border-2 border-[#001c5c] text-[#001c5c] font-medium py-2 px-4 rounded hover:bg-[#001c5c] hover:text-white transition-colors w-full text-center"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

