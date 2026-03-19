// src/data/toolkit.ts

import affinity from '../assets/affinity.svg?url'; // Affinity
import astro from '../assets/astro.svg?url'; // Astro
import css from '../assets/css.svg?url'; // CSS
import figma from '../assets/figma.svg?url'; // Figma
import html from '../assets/html.svg?url'; // HTML
import javascript from '../assets/javascript.svg?url'; // JavaScript
import tailwind from '../assets/tailwind.svg?url'; // Tailwind
import wordpress from '../assets/wordpress.svg?url'; // WordPress
import woocommerce from '../assets/woocommerce.svg?url'; // WooCommerce
import hostinger from '../assets/hostinger.png?url'; // Hostinger
import godaddy from '../assets/godaddy.svg?url'; // GoDaddy
import typescript from '../assets/typescript.svg?url'; // TypeScript
import yoastSeo from '../assets/yoast-seo.svg?url'; // Yoast SEO
import contactForm7 from '../assets/contact-form-7.png?url'; // Contact Form 7
import unsplash from '../assets/unsplash.svg?url'; // Unsplash
import flaticon from '../assets/flaticon.svg?url'; // Flaticon
import coolors from '../assets/coolors.svg?url'; // Coolors
import dafontFree from '../assets/dafont-free.svg?url'; // Dafont Free
import googleFonts from '../assets/google-fonts.svg?url'; // Google Fonts
import php from '../assets/php.svg?url'; // PHP

// Toolkit centralizado con labels e iconos
export const TOOLKIT = {
    figma: { label: 'Figma', icon: figma },
    affinity: { label: 'Affinity', icon: affinity },
    html: { label: 'HTML', icon: html },
    css: { label: 'CSS', icon: css },
    javascript: { label: 'JavaScript', icon: javascript },
    astro: { label: 'Astro', icon: astro },
    tailwind: { label: 'Tailwind CSS', icon: tailwind },
    wordpress: { label: 'WordPress', icon: wordpress },
    woocommerce: { label: 'Woo', icon: woocommerce },
    hostinger: { label: 'Hostinger', icon: hostinger },
    godaddy: { label: 'GoDaddy', icon: godaddy },
    typescript: { label: 'TypeScript', icon: typescript },
    yoastSeo: { label: 'Yoast SEO', icon: yoastSeo },
    contactForm7: { label: 'Contact Form 7', icon: contactForm7 },
    unsplash: { label: 'Unsplash', icon: unsplash },
    flaticon: { label: 'Flaticon', icon: flaticon },
    coolors: { label: 'Coolors', icon: coolors },
    dafontFree: { label: 'Dafont Free', icon: dafontFree },
    googleFonts: { label: 'Google Fonts', icon: googleFonts },
    php: { label: 'PHP', icon: php },
} as const;

// Tipo dinámico basado en las keys del toolkit
export type ToolkitKey = keyof typeof TOOLKIT;