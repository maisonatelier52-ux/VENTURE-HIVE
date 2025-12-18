export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page does not exist</p>
      <a
        href="/"
        className="text-blue-600 underline"
      >
        Go back to Home
      </a>
    </div>
  );
}
