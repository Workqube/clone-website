import Image from "next/image"
import Link from "next/link"
import { Youtube, Mail, MapPin, Phone } from "lucide-react"
import LogoBlack from "Public/assets/logo-black.png"

export default function Footer() {
    return (
        <footer className="bg-gray-50 pt-6 md:pt-10">
            <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="mb-4 flex justify-center sm:justify-start">
                            <Image
                                src={LogoBlack}
                                alt="GoSoftware"
                                width={160}
                                height={50}
                                className="h-10 md:h-12 w-auto"
                            />
                        </div>
                        <p className="text-gray-600 text-sm text-center sm:text-left">
                            We provide award-winning, security products. We are offering high quality genuine and legal licenses
                            you need at unbeatable prices.
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-bold text-[#001c5c] mb-4 text-center sm:text-left">Contact Us</h3>
                        <div className="space-y-3 text-gray-600 text-sm md:text-base">
                            <p className="flex items-start">
                                <Mail className="mr-2 w-5 h-5 mt-1 flex-shrink-0 text-blue-600" />
                                <a href="mailto:support@gosoftwarebuy.com" className="hover:text-blue-600 transition">
                                    support@gosoftwarebuy.com
                                </a>
                            </p>
                            <p className="flex items-start">
                                <MapPin className="mr-2 w-5 h-5 mt-1 flex-shrink-0 text-blue-600" />
                                <span>Office Address: 651 N Broad St, Suite 206, Middletown, DE 19709 USA</span>
                            </p>
                            <p className="flex items-start">
                                <Phone className="mr-2 w-5 h-5 mt-1 flex-shrink-0 text-blue-600" />
                                <a href="tel:+18886329902" className="hover:text-blue-600 transition">
                                    +1 (888) 632 9902
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* About Links */}
                    <div>
                        <h3 className="text-lg font-bold text-[#001c5c] mb-4 text-center sm:text-left">About</h3>
                        <ul className="space-y-2 text-gray-600 text-sm md:text-base text-center sm:text-left">
                            <li>
                                <Link href="/about" className="hover:text-blue-600 transition">
                                    Authorized Reseller
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-600 transition">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/reviews" className="hover:text-blue-600 transition">
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="hover:text-blue-600 transition">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-blue-600 transition">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-[#001c5c] mb-4 text-center sm:text-left">Quick Links</h3>
                        <ul className="space-y-2 text-gray-600 text-sm md:text-base text-center sm:text-left">
                            <li>
                                <Link href="/refund-policy" className="hover:text-blue-600 transition">
                                    Refund & Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-blue-600 transition">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-blue-600 transition">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-blue-600 transition">
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/eula" className="hover:text-blue-600 transition">
                                    EULA
                                </Link>
                            </li>
                            <li>
                                <Link href="/payment" className="hover:text-blue-600 transition">
                                    Payment Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="hover:text-blue-600 transition">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                        <div className="mt-4 flex justify-center sm:justify-start">
                            <Link href="https://youtube.com" className="text-red-600 hover:text-red-700 transition">
                                <Youtube size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-sm text-gray-700">
                    <p>
                        Disclaimer: Product images, logos, and brands displayed on our website may be protected by copyright. The
                        copyright of this belongs to the brand owner. these products can also be purchased from the respective brand
                        owners or somewhere else.
                    </p>
                </div>
            </div>

            {/* Copyright - Dark Background */}
            <div className="bg-gray-900 text-white py-4">
                <div className="container mx-auto px-4 text-center text-sm">
                    <p>©2024 Gosoftware US, Inc. | All Rights Reserved. All third-party trademarks are the property of their respective owners.</p>
                </div>
            </div>
        </footer>
    )
}