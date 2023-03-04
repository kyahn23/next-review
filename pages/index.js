import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";

export default function Home() {
  // This creates a custom component that wraps an <a> tag
  const RedLink = styled.a`
    color: red;
  `;

  return (
    <>
      <Head>
        <title>NextJS review</title>
        <meta name="description" content="nextjs review" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>review</h1>
        <Link href={"/news"}>news</Link>
        <Link href="/news">
          <button onClick={() => (window.location.href = "/about")}>
            About Page
          </button>
        </Link>
      </main>
    </>
  );
}
