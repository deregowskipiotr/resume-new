// src/constants/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: "bartenday-hq",
    title: "BartenDay HQ",
    description:
      "Choose your mood, tell the bartender how you feel, and receive a personalized cocktail recommendation.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://party-aid-app.netlify.app",
    sourceUrl: "https://github.com/yourusername/bartenday-hq",
  },
  {
    id: "bourbon-showcase",
    title: "Iconic Whisky Products Showcase",
    description:
      "A modern product showcase for premium bourbon, highlighting craftsmanship, tasting notes, and bottle design with smooth animations.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://perplex-app.netlify.app",
    sourceUrl: "https://github.com/yourusername/bourbon-showcase",
  },
  {
    id: "resume-app",
    title: "Landing page",
    description:
      "A clean, responsive resume builder that lets users create and export a professional CV with customizable sections and themes.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zod", "React Hook Form"],
    liveUrl: "https://vite-landing-pagge.netlify.app",
    sourceUrl: "https://github.com/yourusername/resume-app",
  },
];
