import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-parchment p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <h1 className="text-9xl font-serif font-bold text-saddle opacity-20">404</h1>
        </div>

        <h2 className="text-2xl font-serif font-medium text-saddle mb-2">Page Not Found</h2>
        <p className="text-saddle/70 mb-8">
          The page you're looking for doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/home"
            className="inline-flex items-center justify-center bg-rust text-parchment px-6 py-3 font-medium hover:bg-rust-dark transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}