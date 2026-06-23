import { footerLinks } from "@/data/mockHomePageData";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-4 md:px-margin-desktop bg-surface-container mt-auto">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="text-2xl font-bold text-on-surface mb-4">LXP</div>
          <p className="text-sm text-tertiary">
            © 2026 LXP Learning Platform. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="text-sm text-tertiary hover:text-primary transition-all"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
