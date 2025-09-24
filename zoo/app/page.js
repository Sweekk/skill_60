import REACT from "react";

export default function Zoo() {
  return (
    <main>
      <h1
        style={{
          fontWeight: "bolder",
          fontSize: 30,
          textAlign: "center",
          marginTop: 100,
        }}
      >
        Welcome to the Zoo
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: 20,
        }}
      >
        Explore our collection of amazing animals!
      </p>
      <div
        style={{
          border: "2px solid white",
          borderRadius: 10,
          marginLeft: 120,
          marginRight: 1050,
          padding: 15,
          backgroundColor: "lightblue",
          color: "black",
          marginTop: 30,
        }}
      >
        <h3
          style={{
            fontWeight: "bolder",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Land Animals
        </h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnDnhqw5kPYKQ8g0lmNj6N-lpRTbyo_tJhw&s"></img>
        <p style={{ marginTop: 5 }}>
          Land animals live on land and include creatures like lions, elephants,
          and insects. They adapt to different environments and play key roles
          in nature—like pollinating plants, spreading seeds, and keeping
          ecosystems balanced.
        </p>
      </div>
      <div
        style={{
          border: "2px solid white",
          borderRadius: 10,
          marginLeft: 580,
          marginRight: 580,
          padding: 15,
          backgroundColor: "lightblue",
          color: "black",
          marginTop: -390,
        }}
      >
        <h3
          style={{
            fontWeight: "bolder",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Water Animals
        </h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x21kmd7epgpVwwu4M0p7dun7v0YhLAjxxA&s"></img>
        <p style={{ marginTop: 5 }}>
          Water animals, or aquatic animals, live in oceans, rivers, and
          lakes.These are generally fishes. These creatures are adapted to swim,
          breathe underwater, and survive in different water conditions. They
          help keep aquatic ecosystems healthy and balanced.
        </p>
      </div>
      <div
        style={{
          border: "2px solid white",
          borderRadius: 10,
          marginLeft: 1050,
          marginRight: 120,
          padding: 15,
          backgroundColor: "lightblue",
          color: "black",
          marginTop: -400,
        }}
      >
        <h3
          style={{
            fontWeight: "bolder",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Reptiles
        </h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43cwS6w_ExdiGwqv0Xu5YSvroaX0uYy1Tbw&s"
          style={{ textAlign: "center" }}
        ></img>
        <p style={{ marginTop: 5 }}>
          Reptiles are cold-blooded animals that live on land or in water. They
          include snakes, lizards, turtles. Most have scaly skin and lay eggs.
          Reptiles are known for their ability to survive in harsh environments
          and play important roles in food chains and ecosystems.
        </p>
      </div>
    </main>
  );
}