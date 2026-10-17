import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/content/services";

const service = services[1];

export const metadata: Metadata = pageMetadata({ title: service.title, description: service.description, path: service.path, absoluteTitle: true });

export default function Page() {
  return <ServicePage service={service} related={services.filter((s) => s.slug !== service.slug)} />;
}
