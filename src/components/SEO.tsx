import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type Breadcrumb = { name: string; path: string };

type SEOProps = {
  title: string;
  description: string;
  /** Path starting with / e.g., /services/cloud */
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  noindex?: boolean;
  /** Additional JSON-LD objects to include */
  jsonLd?: Array<Record<string, any>> | Record<string, any>;
  breadcrumbs?: Breadcrumb[];
};

const SITE_URL = 'https://aethrixsystems.com';
const BRAND = 'Aethrix Systems';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image,
  type = 'website',
  noindex,
  jsonLd,
  breadcrumbs,
}) => {
  const location = useLocation();
  const pathname = path || location.pathname || '/';
  const url = `${SITE_URL}${pathname}`;

  const ldBreadcrumbs = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.path}`,
        })),
      }
    : undefined;

  const jsonList = Array.isArray(jsonLd)
    ? jsonLd
    : jsonLd
    ? [jsonLd]
    : [];

  const scripts = [ldBreadcrumbs, ...jsonList].filter(Boolean);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD */}
      {scripts.map((obj, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
      
      {/* Brand */}
      <meta name="application-name" content={BRAND} />
    </Helmet>
  );
};

export default SEO;
