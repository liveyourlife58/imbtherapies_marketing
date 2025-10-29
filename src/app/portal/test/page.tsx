import Link from 'next/link';

export default function PortalTest() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Portal Test Page
        </h1>
        <p className="text-gray-600 mb-6">
          This page tests that the reverse proxy is working correctly.
        </p>
        <div className="space-y-4">
          <Link
            href="/patient/home/"
            className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Test Portal Home
          </Link>
          <Link
            href="/patient/product/33407"
            className="block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Test Gut Zoomer Product
          </Link>
          <Link
            href="/"
            className="block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
