import { useEffect, useState } from "react";
import { waLink } from "@/data/site";

export function MobileWhatsApp({ text }: { text?: string }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const target = document.getElementById("contact") ?? document.querySelector("footer");
    if (!target) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), {
      threshold: 0.1,
    });
    io.observe(target);
    return () => io.disconnect();
  }, []);
  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noreferrer"
      className={`eyebrow fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 bg-forest-900 px-5 py-3.5 text-on-forest shadow-lg transition-opacity md:hidden ${hidden ? "pointer-events-none opacity-0" : ""}`}
    >
      WhatsApp
    </a>
  );
}
