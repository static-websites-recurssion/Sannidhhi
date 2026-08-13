import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-surface py-24">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-brand">404</p>
        <h1 className="mt-3 text-3xl font-bold text-ink-900">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-800/75">
          The page you requested is not in this static catalog. Try the home page or product
          directory.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25"
        >
          Back to home
        </Link>
      </Container>
    </section>
  );
}
