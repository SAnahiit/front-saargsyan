import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import PostsList from "./components/PostsList/PostsList.jsx";
import logoImage from "@/assets/logo/Logo.png";
import { fetchPosts } from "./services/postsApi";
import "./styles/global.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    document.title = "Logotype - Fashion & Lifestyle";
    
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = logoImage;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPosts();

        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return posts;
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.text.toLowerCase().includes(query)
    );
  }, [posts, searchValue]);

  return (
    <div className="page">
      <Header
        onSearchToggle={() => setIsSearchVisible((prev) => !prev)}
      />

      <main className="main">
        {isSearchVisible && <SearchBar value={searchValue} onChange={setSearchValue} />}

        <section className="posts-section">
          <PostsList
            posts={filteredPosts}
            isLoading={isLoading}
          />
        </section>
      </main>
    </div>
  );
}

export default App;