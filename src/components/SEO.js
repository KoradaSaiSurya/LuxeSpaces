// frontend/src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_TITLE = "LuxeSpaces";
const SITE_URL =
  process.env.REACT_APP_SITE_URL || "https://luxe-spaces.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export default function SEO({
  title,
  description,
  image,
  url,
  keywords,
  schema,
}) {
  const metaTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
  const metaUrl =
    url || (typeof window !== "undefined" ? window.location.href : SITE_URL);
  const metaImage = image || DEFAULT_IMAGE;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_TITLE,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta
        name="description"
        content={
          description ||
          "LuxeSpaces — premium interior design services for modern homes."
        }
      />
      <meta
        name="keywords"
        content={keywords || "interior design, home interiors, luxe spaces"}
      />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description || ""} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
