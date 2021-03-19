import MobileMenu from './components/mobile-menu';
import RevealOnScroll from './components/reveal-on-scroll';

new MobileMenu();
new RevealOnScroll('.animate-left', 'left', 1000, '25rem', 250);
new RevealOnScroll('.animate-right', 'right', 1000, '25rem', 250);
new RevealOnScroll('.animate-up', 'bottom', 1000, '10rem', 250);
new RevealOnScroll('.animate-down', 'top', 1000, '10rem', 250);
