import { Helmet } from "react-helmet";

export function PageHelmet({ title, description }: { title: string; description?: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}

export default PageHelmet;
