import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import PostsList from "./components/PostsList/PostsList.jsx";
import PostModal from "./components/PostModal/PostModal.jsx";
import logoImage from "@/assets/logo/Logo.png";
import { fetchPosts } from "./services/postsApi";
import "./styles/global.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    document.title = "Logotype - Fashion & Lifestyle";

    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");

    link.type = "image/png";
    link.rel = "shortcut icon";
    link.href = logoImage;

    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const title = post.title?.toLowerCase() || "";
      const text = post.text?.toLowerCase() || "";
      const tags = post.tags?.toLowerCase() || "";

      return title.includes(query) || text.includes(query) || tags.includes(query);
    });
  }, [posts, searchValue]);

  function handlePostClick(post) {
    setSelectedPost(post);
  }

  function handleModalClose() {
    setSelectedPost(null);
  }

  return (
    <div className="page">
      <Header
        logoImage={logoImage}
        onSearchToggle={() => setIsSearchVisible((prev) => !prev)}
      />

      <main className="main">
        {isSearchVisible && (
          <SearchBar value={searchValue} onChange={setSearchValue} />
        )}

        <section className="posts-section">
          <PostsList
            posts={filteredPosts}
            isLoading={isLoading}
            onPostClick={handlePostClick}
          />
        </section>
      </main>

      {selectedPost && (
        <PostModal
          post={selectedPost}
          closeText="Close"
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;