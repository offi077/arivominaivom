import Link from "next/link";
export default function SpaceExplorationPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Space Exploration</h1>
      <div className="prose max-w-none">
        <p>The next frontier for humanity...</p>
        <p>This essay covers the history, current advancements, and future prospects of space exploration. It discusses missions to Mars, commercial space travel, and the search for extraterrestrial life.</p>
        {/* Add full essay content here */}
      </div>
      <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}