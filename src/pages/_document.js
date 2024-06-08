// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import { metadata } from '../app/metadata';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
