"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home(){
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const router = useRouter();

  return (
    <div>
      <h1 style={{
        textAlign: "center",
        color: "red",
        fontSize: "40px",
        fontWeight: "bold",
        marginTop: "50px",
        fontFamily: "cursive"
      }}>Login Page</h1>

      <center>
        <div style={{
          marginTop: "30px",
          height: "30px",
          width: "250px",
          backgroundColor: "lightgrey",
          color: "black",
          fontSize: "20px",
          textAlign: "center"
        }}>
          <input
            type="text"
            placeholder="Username"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            style={{ border: "none", height: "25px", width: "240px", fontSize: "20px", textAlign: "center" }}
          />
        </div>
      </center>

      <br />

      <center>
        <div style={{
          marginTop: "30px",
          height: "30px",
          width: "250px",
          backgroundColor: "lightgrey",
          color: "black",
          fontSize: "20px",
          textAlign: "center"
        }}>
          <input
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            style={{ border: "none", height: "25px", width: "240px", fontSize: "20px", textAlign: "center" }}
          />
        </div>
      </center>

      <br />

      <center>
        <div>
          <button
            style={{
              marginTop: "30px",
              height: "50px",
              width: "250px",
              backgroundColor: "blue",
              color: "black",
              fontSize: "20px",
              textAlign: "center",
              borderRadius: "30px",
            }}
            onClick={() => {
              const e = encodeURIComponent(emailValue);
              const p = encodeURIComponent(passwordValue);
              console.log("navigating with:", { e, p });
              router.push(`/profile?email=${e}&password=${p}`);
            }}
          >
            Login
          </button>
        </div>
      </center>
    </div>
  );
}
