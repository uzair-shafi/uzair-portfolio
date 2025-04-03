export const config = {
  title: "BinaryBlazer",
  description:
    "This is a blog and portfolio website for a full-stack developer called BinaryBlazer.",
  author: "BinaryBlazer",
  keywords: "binaryblazer, blog, portfolio, full-stack, developer, germany",
  twitter: "@BinaryBlazer",
  favicon: "/img/favicon-rounded.jpg",
  image: "/img/og-image.png",
  underConstruction: true,
  mobileAllowed: false,
  github: {
    username: "binary-blazer",
  },
  npm: {
    username: "janjytapyt",
  },
};

export const items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },

  {
    name: "Projects",
    href: "/projects",
  },
];

export const projects = [
  {
    title: "Nexjs Ecommerce App (in working)",
    description:
      "A modern eCommerce platform built with Next.js, leveraging Sanity for dynamic content management and Stripe for secure, seamless payment processing.",
    link: "https://ecommerce-theta-wine.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "Sani", "Stripe"],
    image: "/img/projects/ecom.png",
    banner: "/img/projects/ecom.png",
  },
  {
    title: "Cuentto - Social App (in working)",
    description:
      "A modern Social platform for writters community, where they can post cuenttos, like, comment, share, save other's cuenttos. Can follow other people, can make groups with their specific followers and share cuenttos only to that group. Users can add background music with their cuenttos. App contains live notifications with socket.io and secure authentication with jwt.",
    link: "https://frontend.cuentto.com/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "Sani", "Stripe"],
    image: "/img/projects/cuentto.png",
    banner: "/img/projects/cuentto.png",
  },
  {
    title: "Kubic Docs",
    description:
      "Blockchain-powered document storage system with an integrated editor, utilizing IPFS for decentralized file storage and Ethereum smart contracts to ensure data integrity and transaction security.",
    link: "https://kubicdocs.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["ReactJS", "Tailwindcss"],
    image: "/img/projects/kubic.png",
    banner: "/img/projects/kubic.png",
  },
  {
    title: "Pdf Merger",
    description:
      "Pdf merger application build on nextjs harnessing the power of pdfjs. users can merge multiple pdfs, rotate and preview the pdf separate pages.",
    link: "https://pdf-merger-nextjs.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "PDFjs"],
    image: "/img/projects/pdf.png",
    banner: "/img/projects/pdf.png",
  },
  {
    title: "Trackly app",
    description:
      "Create reminders with multiple tasks, mark them complete, edit, or delete as needed. Reminders auto-complete when all tasks are done. Secure user signup and login keep your tasks accessible anytime.",
    link: "https://trackly-app-72ko.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["MEVN stack"],
    image: "/img/projects/trackly.png",
    banner: "/img/projects/trackly.png",
  },


  {
    title: "Ana Blogs",
    description:
      "A complete blog website with Light/Dark Mode, Google Sign In, Text Editor, categories based pages, comments functionality.",
    link: "https://github.com/uzair-shafi/Next-js-full-stack-blog-website-Prisma.git",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "NodeJS", "Prisma", "Next Auth"],
    image: "/img/projects/ana.png",
    banner: "/img/projects/ana.png",
  },
  {
    title: "trackly Landing Page",
    description:
      "A sleek landing page built with Next.js, featuring smooth, interactive animations powered by Framer Motion for a modern and engaging user experience.",
    link: "https://trackly-landing-page.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "TypeScript", "Framer Motion"],
    image: "/img/projects/rack.png",
    banner: "/img/projects/rack.png",
  },

  {
    title: "Hilkink Landing Page",
    description:
      "A Fully Responsive Modern UI/UX Landing Page developed using Next.js, typescript and Tailwind CSS",
    link: "https://travel-website-landing-page-beta.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "TypeScript", "Tailwindcss"],
    image: "/img/projects/travel.png",
    banner: "/img/projects/travel.png",
  },
  {
    title: "Crowdfunding Web 3.0",
    description:
      "A blockchain based application that allows users to invest money to the campaigns that interest them.",
    link: "https://github.com/uzair-shafi/Crowdfunding-Dapp.git",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["ReactJS", "Solidity", "Tailwindcss", "EtherJS"],
    image: "/img/projects/crowd.png",
    banner: "/img/projects/crowd.png",
  },

  {
    title: "Nust Orientation",
    description:
      "Crafted a website using Next.js and Framer Motion resulting in a visually captivating platform for the event.",
    link: "https://orientation-nust.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "Framer Motion", "Tailwindcss"],
    image: "/img/projects/on.png",
    banner: "/img/projects/on.png",
  },
  {
    title: "BrainWave Landing Page",
    description:
      "A fully Modern Landing Page of Brainwave using reactJs, FramerMotion and use of scroll and parallax effects to make it catchy and futuristic.",
    link: "https://brain-wave-landing-page.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "FramerMotion", "Tailwindcss"],
    image: "/img/projects/brain.png",
    banner: "/img/projects/brain.png",
  },
  {
    title: "Krypt Web 3.0",
    description:
      "It is a modern web3.0 application where a user can send digital currencies to anyone around the world.",
    link: "https://github.com/uzair-shafi/web3.0-Application.git",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["ReactJS", "Solidity", "Tailwindcss", "EtherJS"],
    image: "/img/projects/krypt.png",
    banner: "/img/projects/krypt.png",
  },

  {
    title: "Metaverse Landing Page",
    description:
      "Next.js powered website showcasing a modern aesthetic with captivating animations using FramerMotion",
    link: "https://metaverse-sage-psi.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["NextJS", "FramerMotion", "Tailwindcss"],
    image: "/img/projects/meta.png",
    banner: "/img/projects/meta.png",
  },

  {
    title: "3D Portfolio Website",
    description:
      "mmersive 3D portfolio website crafted in React and powered by Three.js and Framer Motion, boasting a sleek modern design.",
    link: "https://3-d-portfolio-liart.vercel.app/",
    status: {
      inProgress: true,
      complete: false,
      paused: false,
      cancelled: false,
    },
    technologies: ["ReactJS", "ThreeJS", "Framer Motion", "Tailwindcss"],
    image: "/img/projects/uz.png",
    banner: "/img/projects/uz.png",
  },
];

export const wpprojects = [
  {
    title: "TMC Marketers",

    link: "https://tmcmarketers.com/",

    image: "/img/projects/tmc.png",
    banner: "/img/projects/tmc.png",
  },
  {
    title: "Dalton Litz",

    link: "https://daltonlitz.com/",

    image: "/img/projects/dalton.png",
    banner: "/img/projects/dalton.png",
  },

  {
    title: "Essence Tech",

    link: "https://the-essencetech.com/",

    image: "/img/projects/tech.png",
    banner: "/img/projects/tech.png",
  },

  {
    title: "Vetrox Pharma",

    link: "https://vetroxpharma.com/",

    image: "/img/projects/vetrox.png",
    banner: "/img/projects/vetrox.png",
  },

  {
    title: "Invicta Counselling",

    link: "https://invicta-counseling.org/",

    image: "/img/projects/invicta.png",
    banner: "/img/projects/invicta.png",
  },

];

export const testimonials = [
  {
    name: "Dalton Litz",
    title: "Dlitz",
    message:
      "Uzair was a lifesaver for my project. His dedication and expertise turned my vision into reality.",
  },
  {
    name: "Muiz Tariq",
    title: "Axesell",
    message:
      "We were impressed by Uzair's commitment to delivering quality work on time. Our project was a success thanks to him.",
  },
  {
    name: "Rehan Ijaz",
    title: "Invicta Counselling",
    message:
      "Uzair's innovative approach helped us stay ahead of the curve. We couldn't have done it without him.",
  },
  {
    name: "Umair Shafi",
    title: "Prisma Assist",
    message:
      "Working with uzair was a pleasure. His professionalism and technical skills exceeded our expectations.",
  },
  {
    name: "Absar Tariq",
    title: "Advent Aassets",
    message:
      "Uzair's ability to understand and solve complex problems was impressive. He were a valuable asset to our team.",
  },
  {
    name: "Afraz Ahmad",
    title: "Essence Tech",
    message:
      "Uzair's dedication to our project was instrumental in its success. We're grateful for his hard work.",
  },
  {
    name: "Ana",
    title: "Birdhaus",
    message:
      "Uzair's technical skills and dedication were a great asset to our project. We couldn't have asked for a better developer.",
  },
];

export const technologies = [
  {
    name: "FrontEnd",
    technologies: [
      {
        name: "HTML",
        icon: "/svg/html.svg",
      },
      {
        name: "CSS",
        icon: "/svg/css.svg",
      },
      {
        name: "Talwind CSS",
        icon: "/svg/tailwind.svg",
      },
      {
        name: "JavaScript",
        icon: "/svg/js.svg",
      },

      {
        name: "React Js",
        icon: "/svg/react.svg",
      },
      {
        name: "Next Js",
        icon: "/svg/next.svg",
      },
      {
        name: "Vue Js",
        icon: "/svg/vue.svg",
      },
      {
        name: "TypeScript",
        icon: "/svg/ts.svg",
      },
      {
        name: "Framer Motion",
        icon: "/svg/framer.svg",
      },
      {
        name: "Three Js",
        icon: "/svg/threejs.svg",
      },
      {
        name: "Wordpress",
        icon: "/svg/wordpress.svg",
      },
      {
        name: "Elementor Pro",
        icon: "/svg/elementor.svg",
      },
      {
        name: "Bubble io",
        icon: "/svg/bubble.svg",
      },
    ],
  },

  {
    name: "Backend",
    technologies: [
      {
        name: "Node Js",
        icon: "/svg/node.svg",
      },
      {
        name: "Express Jss",
        icon: "/svg/ex.svg",
      },
      {
        name: "Prisma",
        icon: "/svg/prisma.svg",
      },
      {
        name: "SQL",
        icon: "/svg/sql.svg",
      },
      {
        name: "Postgrese",
        icon: "/svg/postgrese.svg",
      },
      {
        name: "Mongo Db",
        icon: "/svg/db.svg",
      },
      {
        name: "Wordpress",
        icon: "/svg/wordpress.svg",
      },
      {
        name: "Elementor Pro",
        icon: "/svg/elementor.svg",
      },
      {
        name: "Bubble io",
        icon: "/svg/bubble.svg",
      },
    ],
  },

  {
    name: "Other",
    technologies: [
      {
        name: "Domain/Hosting Setup",
        icon: "/svg/hosting.svg",
      },
      {
        name: "Github",
        icon: "/svg/git.svg",
      },
      {
        name: "Vercel",
        icon: "/svg/vercel.svg",
      },
      {
        name: "Figma",
        icon: "/svg/figma.svg",
      },
      {
        name: "Adobe Photoshop",
        icon: "/svg/photoshop.svg",
      },
      {
        name: "Adobe Illustrator",
        icon: "/svg/illustrator.svg",
      },
    ],
  },
];
