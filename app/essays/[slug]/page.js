"use client";

import { useParams } from "next/navigation"; // Use next/navigation instead of next/router
import Link from "next/link";

export default function EssayPage() {
  const { slug } = useParams(); // Get slug from URL

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Essay: {slug}</h1>
      <div className="prose max-w-none">
        <p>Content for essay with slug: {slug}</p>
        {/* Fetch and display essay content based on slug (e.g., from API or database) */}
      </div>
      <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}