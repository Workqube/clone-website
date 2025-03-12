"use client"

import { useState } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-sm max-w-3xl">
            We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to
            improve user experience, personalize content, and analyze website traffic. For these reasons, we may share
            your site usage data with our analytics partners. By clicking &quot;Accept,&quot; you agree to our website&apos;s
            cookie use as described in our{" "}
            <Link href="/cookie-policy" className="text-blue-600 hover:underline">
              Cookie Policy
            </Link>
            . You can change your cookie settings at any time by clicking &quot;Preferences.&quot;
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setVisible(false)}
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded"
            >
              Preferences
            </button>
            <button
              onClick={() => setVisible(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
