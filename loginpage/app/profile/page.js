"use client";

export default function Profile({ searchParams }) {
    // searchParams may be undefined; provide defaults
    const rawEmail = (searchParams && searchParams.email) || "";
    const rawPassword = (searchParams && searchParams.password) || "";

    // decode values in case they were encoded with encodeURIComponent
    const email = rawEmail ? decodeURIComponent(rawEmail) : "(not provided)";
    const password = rawPassword ? decodeURIComponent(rawPassword) : "(not provided)";

    return (
        <div>
            <h1>Name : {email}</h1>
            <h2>Password : {password}</h2>
        </div>
    );
}