import Divider from "../ui/Divider";
import SectionContainer from "../ui/SectionContainer";

import LogoLoop from "../ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/pink-flower.png",
    alt: "pink flower",
    // href: "https://company1.com",
  },
  {
    src: "/rose.png",
    alt: "rose flower",
    // href: "https://company2.com",
  },
  {
    src: "/red-rose.png",
    alt: "red rose",
    // href: "https://company3.com",
  },
  {
    src: "/blue-flower.png",
    alt: "blue flower",
    // href: "https://company3.com",
  },
];

export default function LoopingLogos({ fadeOutColor = "#ffffff" }) {
  return (
    <div>
      {" "}
      <LogoLoop
        logos={imageLogos}
        speed={40}
        direction="left"
        logoHeight={100}
        gap={20}
        pauseOnHover={false}
        scaleOnHover
        fadeOut
        fadeOutColor={fadeOutColor}
        ariaLabel="Technology partners"
      />
    </div>
  );
}
