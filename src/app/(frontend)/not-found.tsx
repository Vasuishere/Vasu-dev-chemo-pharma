import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10 text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="font-heading text-[120px] md:text-[180px] font-bold text-primary leading-none">
              404
            </h1>
            <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
              Page not found Redirect to home page - www.vasudevchemopharma.com
            </h2>
            <p className="text-secondary text-lg mt-4">
              The page you are looking for doesn&apos;t exist or has been moved
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button href="/">Back to home</Button>
            </div>
            
            <div className="mt-16 pt-16 border-t border-gray-200">
              <h3 className="font-heading text-h5 font-semibold text-primary mb-6">
                Useful Links:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                <Link href="/product" className="p-4 rounded-xl bg-light hover:bg-gray-100 transition-colors text-primary font-medium">Browse Products &rarr;</Link>
                <Link href="/service" className="p-4 rounded-xl bg-light hover:bg-gray-100 transition-colors text-primary font-medium">Our Services &rarr;</Link>
                <Link href="/blog" className="p-4 rounded-xl bg-light hover:bg-gray-100 transition-colors text-primary font-medium">Read Our Blog &rarr;</Link>
                <Link href="/contact" className="p-4 rounded-xl bg-light hover:bg-gray-100 transition-colors text-primary font-medium">Contact Us &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
