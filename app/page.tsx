import React from "react";
import { Metadata } from "next";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Home page",
  keywords: "home, page",
  authors: [{ name: "John Doe", url: "https://example.com" }],
  openGraph: {
    title: "Home",
    description: "Welcome to the Home page",
    url: "https://example.com",
    siteName: "Example",
    images: [
      {
        url: "https://example.com/image.png",
        width: 800,
        height: 600,
        alt: "Image alt text",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home",
    description: "Welcome to the Home page",
    images: ["https://example.com/image.png"],
    site: "@example",
    creator: "@example",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function Home() {
  return (
    <div className="flex flex-row px-3 py-2 container">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple Next.js application.</p>
    </div>
  );
}
