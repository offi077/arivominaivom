export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6 bg-white rounded-xl shadow-md">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          <strong>K. Thajudeen M.A.</strong>
          <br />
          <span className="text-gray-600">Mobile:</span> +965 55488494
          <br />
          <span className="text-gray-600">Email:</span>{" "}
          <a
            href="mailto:tkaderbatch@yahoo.com"
            className="text-blue-600 hover:underline"
          >
            tkaderbatch@yahoo.com
          </a>
          <br />
          Kuwait.
        </p>
      </div>
    </div>
  );
}
