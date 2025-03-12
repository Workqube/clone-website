import Image from "next/image";
import Image1 from "Public/assets/TrustBadges/image1.png";
import Image2 from "Public/assets/TrustBadges/image2.png";
import Image3 from "Public/assets/TrustBadges/image3.png";
import Image4 from "Public/assets/TrustBadges/image4.png";
import Image5 from "Public/assets/TrustBadges/image5.png";
import Image6 from "Public/assets/TrustBadges/image6.png";

const Badges = [
  { src: Image1, alt: "Trusted Partner 1" },
  { src: Image2, alt: "Trusted Partner 2" },
  { src: Image3, alt: "Trusted Partner 3" },
  { src: Image4, alt: "Trusted Partner 4" },
  { src: Image5, alt: "Trusted Partner 5" },
  { src: Image6, alt: "Trusted Partner 6" },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-navy-900 mb-12">We Are Trusted By</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {Badges.map((badge, index) => (
            <div
              key={index}
              className="relative w-32 h-20 grayscale hover:grayscale-0 transition"
              style={{ width: '100%', aspectRatio: 3/2 }} // Adjust these values as needed
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                layout="fill"
                objectFit="contain" // Use "contain" to ensure the entire image fits within the container
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black w-full border mt-14"></div>
    </section>
  );
}
