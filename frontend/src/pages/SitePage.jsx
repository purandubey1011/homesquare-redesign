import { Navigate, useLocation } from "react-router-dom";
import { PageHero, PageSection } from "../components/site/PageSections";
import { SiteShell } from "../components/site/SiteShell";
import { pages } from "../content/siteContent";
import { usePageMeta } from "../hooks/usePageMeta";

export default function SitePage() {
  const location = useLocation();
  const page = pages.find((entry) => entry.slug === location.pathname);

  usePageMeta(page?.title ?? "Home Square Siliguri", page?.description ?? "");

  if (!page) {
    return <Navigate replace to="/" />;
  }

  return (
    <SiteShell>
      <PageHero hero={page.hero} />
      {page.sections.map((section, index) => (
        <PageSection key={section.id ?? `${section.type}-${index}`} section={section} />
      ))}
    </SiteShell>
  );
}
