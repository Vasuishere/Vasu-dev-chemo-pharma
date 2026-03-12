import Button from "@/components/Button";

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
              Page not found
            </h2>
            <p className="text-secondary text-lg mt-4">
              The page you are looking for doesn&apos;t exist or has been moved
            </p>
            <Button href="/" className="mt-8">
              Back to home
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
