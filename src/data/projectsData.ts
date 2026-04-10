// Portfolio
import jm_cv from '../assets/projects/jm_cv.png';
import jm_cv_1 from '../assets/projects/jm_cv-1.png';
import easy_dark_theme from '../assets/projects/easy_dark_theme.png';
import easy_dark_theme_1 from '../assets/projects/easy_dark_theme-1.png';
import easy_dark_theme_2 from '../assets/projects/easy_dark_theme-2.png';
// Jobs
import toppers from '../assets/projects/toppers.webp';
import toppers_1 from '../assets/projects/toppers-1.webp';
import toppers_2 from '../assets/projects/toppers-2.webp';
import toppers_3 from '../assets/projects/toppers-3.webp';
import toppers_4 from '../assets/projects/toppers-4.webp';
import decks from '../assets/projects/decks.png';
import decks_1 from '../assets/projects/decks-1.png';
import decks_2 from '../assets/projects/decks-2.png';
import decks_3 from '../assets/projects/decks-3.png';

// Toolkit icons
import affinity from '../assets/affinity.svg';
import astro from '../assets/astro.svg';
import css from '../assets/css.svg';
import figma from '../assets/figma.svg';
import godaddy from '../assets/godaddy.svg';
import javascript from '../assets/javascript.svg';
import tailwind from '../assets/tailwind.svg';
import typescript from '../assets/typescript.svg';
import woocommerce from '../assets/woocommerce.svg';
import wordpress from '../assets/wordpress.svg';
import php from '../assets/php.svg';

export interface ProjectTag {
  label: string;
  icon: { src: string };
}

export interface Project {
  id: string;
  section: 'portfolio' | 'jobs';
  title: string;
  category: string;
  description?: string;
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
  image: { src: string };
  gallery?: { src: string }[];
  tags?: ProjectTag[];
}

export const allProjectsData: Project[] = [

  // Easy Dark Theme for Astra
  {
    id: 'easy_dark_theme',
    section: 'portfolio',
    image: easy_dark_theme,
    gallery: [easy_dark_theme_1, easy_dark_theme_2],
    title: 'Easy Dark Theme for Astra',
    category: 'Plugin development · WordPress',
    description: 'WordPress plugin published on the official WordPress.org directory that adds a configurable dark mode for the Astra theme.',
    longDescription: `
    Easy Dark Theme for Astra is a WordPress plugin published officially on the WordPress.org directory. It adds a fully configurable dark mode for the Astra theme, with a floating toggle, shortcode, widget, custom color palettes, and accessibility options.
    <br><br> Key Features: <br><br>
    ✅ Published on the official WordPress.org plugin directory <br>
    ✅ Floating toggle button for easy dark mode switching <br>
    ✅ Shortcode and widget support <br>
    ✅ Custom color palette configuration <br>
    ✅ Accessibility options included <br>
    ✅ Open source — available on GitHub
    `,
    tags: [
      { icon: wordpress, label: 'WordPress' },
      { icon: php, label: 'PHP' },
      { icon: javascript, label: 'JavaScript' },
      { icon: css, label: 'CSS' },
    ],
    liveUrl: 'https://wordpress.org/plugins/easy-dark-theme-for-astra/',
    githubUrl: 'https://github.com/jaelmeire/easy-dark-theme-for-astra',
  },
  // JM CV
  {
    id: 'jm_cv',
    section: 'portfolio',
    image: jm_cv,
    gallery: [jm_cv_1],
    title: 'JM Curriculum Vitae',
    category: 'Web design · Web development',
    description: 'Online resume built with Astro, Tailwind CSS and TypeScript. Minimal design, SEO-optimized and print-ready.',
    longDescription: `
    JM CV is an online resume built with Astro, Tailwind CSS and TypeScript. Designed to be minimal, professional and fast.
    <br><br> The architecture is component-based with centralized data in TypeScript files, and includes full print support via @media print styles for clean PDF generation directly from the browser.
    <br><br> Key Features: <br><br>
    ✅ Built with Astro + Tailwind CSS + TypeScript <br>
    ✅ Component-based architecture <br>
    ✅ Print-ready with @media print styles <br>
    ✅ SEO optimized <br>
    ✅ Deployed on Vercel <br>
    ✅ Open source — available on GitHub
    `,
    tags: [
      { icon: astro, label: 'Astro' },
      { icon: tailwind, label: 'Tailwind CSS' },
      { icon: typescript, label: 'TypeScript' },
    ],
    liveUrl: 'https://jaelmeire.vercel.app/',
    githubUrl: 'https://github.com/jaelmeire/jm-cv',
  },

  // Topper's
  {
    id: 'toppers',
    section: 'jobs',
    image: toppers,
    gallery: [toppers_1, toppers_2, toppers_3, toppers_4],
    title: "Topper's",
    category: 'Web design · E-Commerce development',
    description: "Topper's is an artisanal brewery website built in WordPress with WooCommerce, designed to sell craft beers online and enhance the brand experience.",
    longDescription: `
    Topper's is an artisanal brewery website built in WordPress with WooCommerce, designed to sell craft beers online and enhance the brand experience. Originally designed in Figma, it was converted into a fully functional WordPress site.
    <br><br> The site includes an online store, pizzeria menu, event ticket sales, and multiple contact forms linked to Google Sheets via Contact Form 7. Event tickets are managed with the Eventin plugin integrated with WooCommerce.
    <br><br> Key Features: <br><br>
    ✅ Online store with WooCommerce catalog <br>
    ✅ Pizzeria & tap room menu sections <br>
    ✅ Event ticket system with Eventin <br>
    ✅ Contact forms linked to Google Sheets <br>
    ✅ Responsive and user-friendly design <br>
    ✅ Original Figma design converted to WordPress
    `,
    tags: [
      { icon: figma, label: 'Figma' },
      { icon: wordpress, label: 'WordPress' },
      { icon: woocommerce, label: 'WooCommerce' },
      { icon: godaddy, label: 'GoDaddy' },
    ],
    liveUrl: 'https://toppers.cl',
  },
  // DECKS.CL
  {
    id: 'decks',
    section: 'jobs',
    image: decks,
    gallery: [decks_1, decks_2, decks_3],
    title: 'DECKS.CL',
    category: 'Web design · E-Commerce development',
    description: 'Online store for a wood deck products business, built in WordPress with WooCommerce. Clean design focused on product display and easy navigation.',
    longDescription: `
    DECKS.CL is an online store for a wood deck and outdoor furniture business, built in WordPress with WooCommerce.
    <br><br> The store includes a product catalog with detailed pages, a contact form and a responsive layout optimized for both desktop and mobile browsing.
    <br><br> Key Features: <br><br>
    ✅ Online store with WooCommerce product catalog <br>
    ✅ Clean, product-focused design <br>
    ✅ Responsive layout for desktop and mobile <br>
    ✅ Contact form for customer inquiries <br>
    ✅ Hosted on GoDaddy <br>
    `,
    tags: [
      { icon: wordpress, label: 'WordPress' },
      { icon: woocommerce, label: 'WooCommerce' },
      { icon: godaddy, label: 'GoDaddy' },
    ],
    liveUrl: 'https://decks.cl',
  },
];