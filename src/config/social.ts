// import { Github, Linkedin, Mail, Twitter, Telegram } from "lucide-react";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiGithub, SiLinkedin, SiX, SiMailboxdotorg } from "react-icons/si";

export type SocialLink = {
  id: "github" | "linkedin" | "x" | "email" | "website";
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  rel?: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/carabetcorneliu",
    icon: SiGithub,
    rel: "noopener noreferrer",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: SiLinkedin,
    rel: "noopener noreferrer",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/CarabetCornel",
    icon: SiX,
    rel: "noopener noreferrer",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:carabet.corneliu@gmail.com",
    icon: SiMailboxdotorg,
  },
  //   {
  //     id: "website",
  //     label: "Website",
  //     href: "https://carabet.corneliu",
  //     icon: Globe,
  //   },
] as const;
