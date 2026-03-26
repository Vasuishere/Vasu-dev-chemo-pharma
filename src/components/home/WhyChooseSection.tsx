import Image from "next/image";
import Button from "@/components/Button";

const clientLogos = [
  "https://framerusercontent.com/images/TqbYVzg7ybZyZdS0f5Kul8k3qE.svg",
  "https://framerusercontent.com/images/ZOshmfIPPyIgwc1vt8fg4jl7XPw.svg",
  "https://framerusercontent.com/images/dkPEYiQUEC8xGo7JZ3roQZEMCyo.svg",
  "https://framerusercontent.com/images/5gEKWg2vllhD1ObP6AQ66ePRw.svg",
  "https://framerusercontent.com/images/TqbYVzg7ybZyZdS0f5Kul8k3qE.svg",
];

const features = [
  "Direct manufacturer — no middlemen",
  "ISO 9001:2015 certified quality",
  "Export-ready packaging & documentation",
  "Competitive global pricing",
  "15+ chemical products available",
  "Near major Gujarat ports (Kandla, Mundra, Hazira)",
];

const avatars = [
  "https://framerusercontent.com/images/4joakeBMa5GHrq9uyQPg0bnmko.png",
  "https://framerusercontent.com/images/HfRFaPjzU8WCChxWa4MmTB1BWg.png",
  "https://framerusercontent.com/images/atqhDfm1Q5VKmWwNHnp8Cl7GHo.png",
  "https://framerusercontent.com/images/crOykN7l4AlMK9acNXCVRzJmcg.png",
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-32 bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Client Logos Marquee */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-16 opacity-40">
          {clientLogos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="Client Logo"
              width={110}
              height={28}
            />
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Why%20Choose%20Us%20Post.svg"
              alt="Why Choose Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
              Why choose Vasudev Chemo Pharma?
            </h2>
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Image
                    src="https://framerusercontent.com/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg"
                    alt="Check Mark Arrow"
                    width={15}
                    height={10}
                    className="flex-shrink-0"
                  />
                  <span className="text-base text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <Button href="/product">View our products</Button>

            {/* Happy Clients */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Avatar"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <Image
                  src="https://framerusercontent.com/images/vLIB1zDP4bI0m0N2PXLiIxcw5Y.svg"
                  alt="Rating Image"
                  width={80}
                  height={12}
                />
                <p className="text-sm text-secondary mt-1">
                  Trusted by buyers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
