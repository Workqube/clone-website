import Link from "next/link"

export default function PartnerBanner() {
  return (
    <div className="bg-gray-100 py-4 px-4">
      <div className="container mx-auto">
        <div className="border border-gray-300 bg-[#f0f0f0] p-4 rounded">
          <h2 className="font-bold text-navy-900">Authorized Microsoft partner (Partner No. 6285889)</h2>
          <p className="text-gray-700">
            Being a certified Microsoft partner means we resell genuine Microsoft products{" "}
            <Link href="/verify" className="text-blue-600 hover:underline">
              click here to verify
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

