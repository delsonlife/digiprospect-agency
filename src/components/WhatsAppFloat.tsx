"use client";

import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { whatsappLink, whatsappMessages } from "@/lib/site";

export function WhatsAppFloat() {
  const pathname = usePathname();
  const message = whatsappMessages[pathname] ?? whatsappMessages.default;
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à DigiProspect Agency sur WhatsApp"
      className="wa-pulse touch-manipulation fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 md:bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-50 flex h-14 items-center gap-2 rounded-full bg-green-deep px-4 text-white shadow-lg shadow-black/20 transition-colors hover:bg-ink sm:right-6 sm:px-5"
    >
      <Icon name="whatsapp" size={28} />
      <span className="hidden text-[1.05rem] font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
