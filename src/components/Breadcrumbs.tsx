import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const titleCase = (s: string) => s.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  if (pathname === '/') return null;
  const parts = pathname.split('/').filter(Boolean);
  const items = parts.map((p, i) => ({
    name: titleCase(decodeURIComponent(p)),
    href: '/' + parts.slice(0, i + 1).join('/'),
  }));

  return (
    <nav aria-label="Breadcrumb" className="border-bottom" style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}>
      <ol className="container breadcrumb small mb-0 py-2"
        itemScope itemType="https://schema.org/BreadcrumbList">
        <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((it, idx) => (
          <li key={it.href} className={`breadcrumb-item ${idx === items.length - 1 ? 'active' : ''}`} aria-current={idx === items.length - 1 ? 'page' : undefined}
              itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {idx === items.length - 1 ? (
              <span itemProp="name">{it.name}</span>
            ) : (
              <Link to={it.href} itemProp="item"><span itemProp="name">{it.name}</span></Link>
            )}
            <meta itemProp="position" content={String(idx + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
