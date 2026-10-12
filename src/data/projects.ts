import balgo from "@/assets/balgo.jpg";
import punalur from "@/assets/punalur.jpg";
import eeva from "@/assets/eeva.jpg";
import studio from "@/assets/studio.jpg";
import landscape from "@/assets/landscape.jpg";
import hero from "@/assets/hero.jpg";

export type ProjectImage = { src: string; alt: string; w: number; h: number };
export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  conceptHeadline: string;
  shortDescription: string;
  fullDescription: string[];
  closing: string;
  image: ProjectImage;
  gallery: ProjectImage[];
  status: string | null;
  isConceptImagery: boolean;
};

const studioImg = { src: studio, alt: "Illustrative interior with timber ceiling opening to a planted courtyard", w: 1200, h: 1504 };
const landImg = { src: landscape, alt: "Illustrative aerial view of a tropical site with a clearing and stone path", w: 1600, h: 1104 };
const heroImg = { src: hero, alt: "Illustrative contemporary tropical house among palms at dusk", w: 1920, h: 1088 };

export const projects: Project[] = [
  {
    slug: "balgo",
    title: "BALGO",
    location: "Kayamkulam",
    category: "Residential Architecture",
    conceptHeadline: "A house that grows around a mango tree.",
    shortDescription: "An existing mango tree is preserved and becomes a defining element of the architecture.",
    fullDescription: [
      "An existing mango tree is preserved and becomes a defining element of the architecture.",
      "The balcony is positioned to create a visual relationship with the tree, so daily life looks out into its canopy.",
      "Rather than clearing the site, the house grows around the landscape instead of removing it.",
      "The name is the idea: BALcony + manGO.",
    ],
    closing: "A home designed around what was already there.",
    image: { src: balgo, alt: "Illustrative white residence with a balcony reaching toward a large mango tree", w: 1600, h: 1200 },
    gallery: [studioImg, landImg],
    status: "Design phase completed",
    isConceptImagery: true,
  },
  {
    slug: "punalur-residence",
    title: "Punalur Residence",
    location: "Punalur",
    category: "Residential Redesign / Renovation",
    conceptHeadline: "Not merely renovated, but reimagined.",
    shortDescription: "The site was designed first, and the architecture allowed to emerge from it.",
    fullDescription: [
      "The client wanted a home \"not merely renovated, but reimagined\": one that embraces nature, creates pleasing views and offers a unique everyday experience.",
      "The team studied the whole site first: landscape, orientation, surroundings, natural elements, movement and potential views.",
      "Multiple options were explored, treating the site as an integral part of the architecture. The studio \"designed the site first and allowed the architecture to emerge from it.\"",
      "Circulation, views, open spaces, landscape and built forms were composed as one experience. The result is a home that belongs to its surroundings without disappearing into them.",
    ],
    closing: "A home designed around the site, rather than a site designed around a home.",
    image: { src: punalur, alt: "Illustrative stone and concrete home opening onto a garden with a stepping-stone path", w: 1200, h: 1600 },
    gallery: [landImg, heroImg],
    status: null,
    isConceptImagery: true,
  },
  {
    slug: "eeva",
    title: "EEVA",
    location: "Malayalapuzha, Pathanamthitta",
    category: "Residential Renovation",
    conceptHeadline: "A Kerala home, opened up and given a sloped roof.",
    shortDescription: "A congested rectangular house reworked into a well-planned 3BHK under a Kerala-inspired sloped roof.",
    fullDescription: [
      "EEVA came to the studio in April 2025 for Mr. Akhil Vadakkan Pallikkal: a typical Kerala home with a simple rectangular structure.",
      "The existing building was documented and concepts were presented. The client gave the studio freedom in design.",
      "The house felt congested, so extensions and selected wall removals create a well-planned 3BHK with proper living, dining and two additional bedrooms with attached toilets.",
      "The key feature is a sloped roof inspired by traditional Kerala architecture.",
    ],
    closing:
      "The name EEVA means “life”, “living one”, “source of life”. Its typography is inspired by the elevation design of the house.",
    image: { src: eeva, alt: "Illustrative Kerala home with a steep sloped tiled roof and timber screens", w: 1920, h: 1088 },
    gallery: [studioImg, heroImg],
    status: "Brought to the studio April 2025",
    isConceptImagery: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
