import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { NetlifyBlocker } from "@/components/sub/netlify-blocker";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-headline",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(cormorantGaramond.variable, plusJakartaSans.variable)}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const _createElement = document.createElement;
                document.createElement = function(tag, options) {
                  const el = _createElement.call(document, tag, options);
                  if (tag.toLowerCase() === 'script') {
                    Object.defineProperty(el, 'src', {
                      set: function(val) {
                        if (typeof val === 'string' && (val.includes('netlify') || val.includes('feedback/widget'))) {
                          return;
                        }
                        this.setAttribute('src', val);
                      },
                      get: function() {
                        return this.getAttribute('src') || '';
                      },
                      configurable: true
                    });
                  }
                  return el;
                };

                const observer = new MutationObserver((mutations) => {
                  for (const mutation of mutations) {
                    for (const node of mutation.addedNodes) {
                      if (node.nodeType === 1) {
                        const tag = node.tagName.toLowerCase();
                        const src = node.getAttribute('src') || '';
                        const id = node.id || '';
                        const className = typeof node.className === 'string' ? node.className : '';
                        if (
                          (tag === 'script' && (src.includes('netlify') || src.includes('feedback/widget'))) ||
                          (tag === 'iframe' && (src.includes('netlify') || id.includes('netlify') || className.includes('netlify'))) ||
                          id.includes('netlify') || 
                          className.includes('netlify')
                        ) {
                          node.remove();
                        }
                      }
                    }
                  }
                });
                observer.observe(document.documentElement, { childList: true, subtree: true });
              })();
            `
          }}
        />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden font-body",
          cormorantGaramond.variable,
          plusJakartaSans.variable
        )}
      >
        <NetlifyBlocker />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
