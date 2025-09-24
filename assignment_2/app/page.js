"use client";
import { useState } from "react";

function InstaPost({ img, username, caption }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      
     
      <div style={{ padding: "10px", fontWeight: "bold", color: "black" }}>
        {username}
      </div>
      
      <img
        src={img}
        alt={username}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />

    
      <div style={{ padding: "10px" }}>
        <div
          onClick={toggleLike}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color: liked ? "red" : "gray",
            userSelect: "none",
            marginBottom: "5px",
          }}
        >
          {liked ? " ❤️ Liked" : " 🤍 Like"}
        </div>
         <div style={{ color: "black" }}>{caption}</div>
      </div>
    </div>
  );
}


export default function Home() {
  const posts = [
    {
      username: "Navaratri",
      img: "https://img.pikbest.com/templates/20240930/happy-navratri-maa-durga-festival-social-media-post-template-_10914459.jpg!sw800",
      caption: "Navaratri 2025 is a vibrant Hindu festival celebrated over nine nights and ten days",
    },
    {
      username: "shark",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Corl0207_%2828225976491%29.jpg",
      caption: "Meet the ocean’s ultimate predator! Sharks rule the waves with power and grace 🦈💙 #SharkFacts #OceanKing #WildLife"
    },
    {
      username: "travel_guru",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      caption: "Exploring the hidden gems of Europe ✈️"
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Instagram Posts</h1>
      {posts.map((post, index) => (
        <InstaPost
          key={index}
          username={post.username}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}