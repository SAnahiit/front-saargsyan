const POSTS_API_URL = "https://cloud.codesupply.co/endpoint/react/data.json";

export async function fetchPosts() {
  const response = await fetch(POSTS_API_URL);
  if (!response.ok) {
    throw new Error("Failed to load posts");
  }
  return response.json();
}