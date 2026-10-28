/**
 * Maintainable configuration for optional Marvel-inspired dialogue moments.
 * Quotes serve as subtle, recruiter-friendly Easter eggs and narrative enhancements,
 * never replacing essential technical information.
 */

export interface DialogueMoment {
  id: string;
  quote: string;
  subtext: string;
  context: string;
  placement: 'intro' | 'hero' | 'about' | 'projects' | 'footer';
  enabled: boolean;
  trigger: 'automatic' | 'click' | 'epigraph';
  ariaLabel: string;
}

export const marvelDialogue: Record<string, DialogueMoment> = {
  introSignature: {
    id: 'intro-signature',
    quote: '“I love you 3000.”',
    subtext: 'A personal tribute to the stories that inspired a passion for engineering.',
    context: 'Personal developer signature during universe initialization',
    placement: 'intro',
    enabled: true,
    trigger: 'automatic',
    ariaLabel: 'Personal tribute: I love you 3000',
  },
  learningMindset: {
    id: 'learning-mindset',
    quote: '“Sometimes you gotta run before you can walk.”',
    subtext: 'Growth Mindset: rapid iteration, continuous experimentation, and hands-on problem solving.',
    context: 'Origin story learning philosophy',
    placement: 'about',
    enabled: true,
    trigger: 'epigraph',
    ariaLabel: 'Learning mindset quote: Sometimes you gotta run before you can walk',
  },
  developerInitiative: {
    id: 'developer-initiative',
    quote: '“Fine. I’ll do it myself.”',
    subtext: 'The builder’s ethos: when standard templates and off-the-shelf tools fall short, engineer custom, end-to-end architectures from scratch.',
    context: 'Interactive Easter egg in project mission archives',
    placement: 'projects',
    enabled: true,
    trigger: 'click',
    ariaLabel: 'Interactive developer Easter egg: Fine, I will do it myself',
  },
  heroSubtle: {
    id: 'hero-subtle',
    quote: '“I am Iron Man.”',
    subtext: 'Embracing agency, technical identity, and ownership of every line of code deployed.',
    context: 'Discreet hero terminal Easter egg',
    placement: 'hero',
    enabled: true,
    trigger: 'click',
    ariaLabel: 'Hero terminal Easter egg',
  },
  footerSignoff: {
    id: 'footer-signoff',
    quote: '“Part of the journey is the end.”',
    subtext: 'Every finished release is just the foundation for the next iteration.',
    context: 'Discreet closing signature in footer',
    placement: 'footer',
    enabled: true,
    trigger: 'epigraph',
    ariaLabel: 'Footer sign-off quote',
  },
};

/**
 * Global helper to safely retrieve an enabled dialogue moment
 */
export const getDialogue = (key: keyof typeof marvelDialogue): DialogueMoment | null => {
  const item = marvelDialogue[key];
  return item && item.enabled ? item : null;
};
