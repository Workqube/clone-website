import Image from "next/image"
import Image1 from "Public/assets/Works/image1.png"
import Image2 from "Public/assets/Works/image2.png"
import Image3 from "Public/assets/Works/image3.png"
import Image4 from "Public/assets/Works/image4.png"
import Image5 from "Public/assets/Works/image5.png"

const steps = [
    {
        number: 1,
        title: "Add product to cart",
        description:
            "Use the quick search feature to look for the program you want. Make your selection and add it to your cart.",
        image: Image1,
    },
    {
        number: 2,
        title: "Secure checkout",
        description: "Keep in mind that special offers are frequently available on the website.",
        image: Image2,
    },
    {
        number: 3,
        title: "Receive download link in 2-3 hours",
        description:
            "You will receive your product in 2-3 hours after you&apos;ve paid for it. You won&apos;t have to queue up at a store. Instead, you&apos;ll get an email with a download link. Install the program and begin using it immediately.",
        image: Image3,
    },
]

export default function HowItWorks() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-navy-900 mb-16">How it works?</h2>

                <div className="space-y-20">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8`}
                        >
                            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                                <div className="flex flex-col items-center lg:items-start">
                                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-700 max-w-lg text-center lg:text-left">{step.description}</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src={step.image || "/placeholder.svg"}
                                    alt={`Step ${step.number}: ${step.title}`}
                                    width={520}
                                    height={400}
                                    className="rounded-lg shadow-md border border-gray-200"
                                />
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2 lg:pl-8">
                            <div className="flex flex-col items-center lg:items-start">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">About Gosoftware</h3>
                                <p className="text-gray-700 max-w-lg text-center lg:text-left">
                                    At Gosoftware, we pride ourselves on being experts in our field. Our daily mission is to guide consumers in making informed decisions when it comes to choosing the perfect product, and more importantly, utilising it effectively.
                                    We go beyond the traditional approach of simply selling a product and walking away. Our philosophy revolves around problem-solving, ensuring that we address and resolve any challenges our customers may encounter. This commitment sets us apart as a distinct player in the market and is the driving force behind our growing base of delighted new customers.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Image
                                src={Image4}
                                alt="About"
                                width={520}
                                height={400}
                                className="rounded-lg shadow-md border border-gray-200"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                        <div className="w-full lg:w-1/2 lg:pr-8">
                            <div className="flex flex-col items-center lg:items-start">
                                <h3 className="text-2xl font-bold text-navy-900 mb-4">Empowering Solutions: Software & Services for Your Success</h3>
                                <p className="text-gray-700 max-w-lg text-center lg:text-left">
                                    When you choose Gosoftware, you&apos;re not just getting a product; you&apos;re gaining access to a suite of exceptional services. We go above and beyond to ensure that your experience with our software is seamless and hassle-free.
                                    One of our standout services is our installation and configuration support. Beyond simply delivering the software, we offer an installation service where our experts take care of setting up and configuring your software according to your specific requirements. Whether it&apos;s security software or any other type of software solution.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Image
                                src={Image5}
                                alt="About"
                                width={520}
                                height={400}
                                className="rounded-lg shadow-md border border-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
