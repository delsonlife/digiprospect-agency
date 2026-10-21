import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

const service = services.find((s) => s.slug === "acquisition-clients")!;

export const metadata: Metadata = pageMetadata({ title: service.title, description: service.description, path: service.path, absoluteTitle: true });

export default function Page() {
  return <ServicePage service={service} related={services.filter((s) => s.slug !== service.slug)} />;
}
