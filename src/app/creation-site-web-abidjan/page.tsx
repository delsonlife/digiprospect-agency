import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/content/services";

const service = services[0];

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  alternates: { canonical: service.path },
  openGraph: { title: service.title, description: service.description, url: service.path },
};

export default function Page() {
  return <ServicePage service={service} related={services.filter((s) => s.slug !== service.slug)} />;
}
