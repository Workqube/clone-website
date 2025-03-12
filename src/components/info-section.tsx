import Link from "next/link"

export default function InfoSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-[#001c5c] mb-6">Buy your software cheaply online at Gosoftware</h1>

        <div className="space-y-8">
          <div>
            <p className="text-gray-700">
              <Link href="/about" className="text-[#ff4757] hover:underline">
                Gosoftware
              </Link>{" "}
              is your provider to buy software cheaply online. In our software shop, you can order general PC software,
              antivirus programs, Microsoft Office and servers with corresponding licenses. You will receive the
              software that you buy online from us easily by e-mail so that you have immediate access to your software.
              The licenses purchased from us are exclusively new. Should problems arise during installation, our trained
              customer service team can assist you via email, telephone, live chat or screen sharing. Of course, we do
              not charge for this service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#001c5c] mb-4">Operating systems</h2>
            <p className="text-gray-700">
              Operating systems make your hardware usable. At{" "}
              <Link href="/about" className="text-[#ff4757] hover:underline">
                Gosoftware
              </Link>{" "}
              you can order the operating systems for Windows 7, 8 and 10. The systems of these are therefore available
              in different versions. But which one should you choose? This depends on your requirements and wishes. When
              you have questions or are you not sure what to do? Our customer service is happy to help you on your way.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#001c5c] mb-4">Microsoft Office</h2>
            <p className="text-gray-700">
              <Link href="/products/microsoft-office" className="text-[#ff4757] hover:underline">
                Microsoft Office
              </Link>{" "}
              is a software package that is known to everyone. However? Microsoft Office is known for Word, Excel,
              PowerPoint and Outlook. Microsoft Office is therefore the most widely used software package for text and
              data processing. The Microsoft Office packages are suitable for both Windows and Mac. Microsoft is
              expanding more and more and adding more and more software to its offer. Think of Publisher, Access,
              OneNote, Project, Visio and Visual Studio.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              In short, we at{" "}
              <Link href="/about" className="text-[#ff4757] hover:underline">
                Gosoftware
              </Link>{" "}
              are a provider of affordable software. Take a look at our software shop for general software, operating
              systems, security software and everything related to this software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

