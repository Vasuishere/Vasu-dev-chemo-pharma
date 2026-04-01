import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const avatars = [
  "https://framerusercontent.com/images/4joakeBMa5GHrq9uyQPg0bnmko.png",
  "https://framerusercontent.com/images/HfRFaPjzU8WCChxWa4MmTB1BWg.png",
  "https://framerusercontent.com/images/atqhDfm1Q5VKmWwNHnp8Cl7GHo.png",
  "https://framerusercontent.com/images/crOykN7l4AlMK9acNXCVRzJmcg.png",
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel>Build on trust</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
            Trusted by clients, proven by results
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Testimonial */}
          <div>
            {/* Avatars row */}
            <div className="flex gap-2 mb-8">
              {avatars.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full border-2 border-white cursor-pointer hover:ring-2 hover:ring-accent transition-all"
                />
              ))}
              <div className="w-12 h-12 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center cursor-pointer">
                5+
              </div>
            </div>

            {/* Quote */}
            <div className="bg-light rounded-3xl p-8">
              <Image
                src="https://framerusercontent.com/images/vLIB1zDP4bI0m0N2PXLiIxcw5Y.svg"
                alt="Rating Image"
                width={95}
                height={14}
                className="mb-4"
              />
              <p className="text-base text-secondary leading-relaxed mb-6">
                Vasudev Chemo Pharma has been our go-to supplier for MEA Triazine 78%
                across multiple GCC projects. Their consistent product quality, on-time
                delivery to Jebel Ali, and responsive technical support make them a
                reliable long-term manufacturing partner.
              </p>
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Ahmed Al-Rashidi
                </h3>
                <p className="text-sm text-secondary">Procurement Manager — Oilfield Services, UAE</p>
              </div>
            </div>
          </div>

          {/* Right - Company Info & Support */}
          <div className="space-y-6">
            {/* Company card */}
            <div className="bg-dark text-white rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-white/60 tracking-widest uppercase">
                    {"// 2020-2026 //"}
                  </p>
                </div>
                <Image
                  src="https://framerusercontent.com/images/GhFAf9Nzk8NxLNAoAlvgFnivlg.svg"
                  alt="Brand Logo"
                  width={120}
                  height={16}
                  className="opacity-40"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-heading text-h3 font-semibold">98%</p>
                  <p className="text-sm text-white/60">On-Time delivery rate</p>
                </div>
                <div>
                  <p className="font-heading text-h3 font-semibold">200+</p>
                  <p className="text-sm text-white/60">Skilled professionals</p>
                </div>
              </div>
            </div>

            {/* Support card */}
            <div className="bg-light rounded-3xl p-8">
              <Image
                src="https://framerusercontent.com/images/ss0bmyns6jeXRaMshGzNYH68.svg"
                alt="Icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                Need help choosing the right product?
              </h4>
              <p className="text-sm text-secondary mb-6">
                Always ready with guidance, product details, and after-sales
                support.
              </p>
              <Button href="/contact">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
