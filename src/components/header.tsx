"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import logo from "Public/assets/logo.png"
import windows from "Public/assets/windows.svg"
import apple from "Public/assets/apple.svg"
import apps from "Public/assets/apps.svg"
import server from "Public/assets/server.svg"
import shop from "Public/assets/shop.svg"
import antivirus from "Public/assets/antivirus.svg"

export default function Header() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <header className="bg-navy-600 text-white py-2 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Microsoft Office"
            width={170}
            height={40}
            className="mr-2"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-5 bg-navy-900 p-2 rounded-xl">
          <div className="relative group">
            <button className="flex items-center px-4 py-2 hover:bg-navy-600 rounded transition">
              <Image
                src={windows}
                alt="Microsoft Office"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="mr-1 font-medium">Microsoft Office</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-navy-700 text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/office/home-business" className="block px-4 py-2 hover:bg-navy-600">
                Office Home & Business
              </Link>
              <Link href="/office/home-student" className="block px-4 py-2 hover:bg-navy-600">
                Office Home & Student
              </Link>
              <Link href="/office/professional" className="block px-4 py-2 hover:bg-navy-600">
                Office Professional
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center px-4 py-2 hover:bg-navy-600 rounded transition">
              <Image
                src={apple}
                alt="Office for Mac"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="mr-1 font-medium">Office for Mac</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-navy-700 text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/mac/office-home-business" className="block px-4 py-2 hover:bg-navy-600">
                Office Home & Business
              </Link>
              <Link href="/mac/office-home-student" className="block px-4 py-2 hover:bg-navy-600">
                Office Home & Student
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center px-4 py-2 hover:bg-navy-600 rounded transition">
              <Image
                src={apps}
                alt="Office Apps"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="mr-1 font-medium">Office Apps</span>
            </button>
          </div>

          <div className="relative group">
            <button className="flex items-center px-4 py-2 hover:bg-navy-600 rounded transition">
              <Image
                src={server}
                alt="Windows Server"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="mr-1 font-medium">Windows Server</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-navy-700 text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/server/2022" className="block px-4 py-2 hover:bg-navy-600">
                Windows Server 2022
              </Link>
              <Link href="/server/2019" className="block px-4 py-2 hover:bg-navy-600">
                Windows Server 2019
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center px-4 py-2 hover:bg-navy-600 rounded transition">
              <Image
                src={antivirus}
                alt="Antivirus"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="mr-1 font-medium">Antivirus</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-navy-700 text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/antivirus/norton" className="block px-4 py-2 hover:bg-navy-600">
                Norton
              </Link>
              <Link href="/antivirus/mcafee" className="block px-4 py-2 hover:bg-navy-600">
                McAfee
              </Link>
            </div>
          </div>

          <Link href="/shop" className="px-4 py-2 hover:bg-navy-600 rounded transition">
            Shop
          </Link>
        </nav>

        <div className="flex items-center">
          <Link href="/cart" className="relative">
            <Image
              src={shop}
              alt="Cart"
              width={35}
              height={35}
              className="mr-2"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

