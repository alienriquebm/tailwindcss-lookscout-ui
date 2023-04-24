import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="min-h-screen max-w-full overflow-y-hidden">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen max-w-full overflow-y-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
