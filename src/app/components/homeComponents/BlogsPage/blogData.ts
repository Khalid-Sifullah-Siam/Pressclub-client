export interface Blog {
  _id: string;
  title: string;
  content: string;
  description: string;
  author: string;
  thumbnail?: {
    url: string;
  };
  media?: {
    url: string;
    mediaType: string;
  };
  createdAt: string;
  updatedAt: string;
}

export const BLOGS: Blog[] = [
  {
    _id: "full-stack-journey",
    title: "Why I Love Full-Stack Development",
    description: "A practical reflection on building complete web applications with Next.js, React, Node.js, and MongoDB.",
    author: "Khalid Saifullah Siam",
    thumbnail: {
      url: "/profile.jpg",
    },
    content: `
      <p>As a full-stack developer, I enjoy building complete digital experiences that bridge user interfaces and server logic. Writing React components, designing API routes, and connecting data with MongoDB lets me solve problems end to end.</p>
      <h2>My Workflow</h2>
      <p>I usually start with a clean UI layout using Next.js and Tailwind CSS, then build the backend API with Express or Next.js server actions. I make sure each feature is testable and reusable.</p>
      <h2>Why It Matters</h2>
      <p>Full-stack work helps me understand the full user journey, from page load speed to database structure. It also lets me refine how data flows through the app, which improves performance and reliability.</p>
    `,
    createdAt: "2026-01-20T10:00:00.000Z",
    updatedAt: "2026-01-20T10:00:00.000Z",
  },
  {
    _id: "nextjs-portfolio-power",
    title: "Building a Modern Portfolio with Next.js",
    description: "How I designed a portfolio site that feels fast, responsive, and polished using modern Next.js patterns.",
    author: "Khalid Saifullah Siam",
    thumbnail: {
      url: "/profile.jpg",
    },
    content: `
      <p>I built this portfolio to showcase my projects, skills, and blog writing. Using Next.js allowed me to combine static rendering, client interactivity, and easy page transitions.</p>
      <h2>Key Features</h2>
      <ul>
        <li>Responsive design with Tailwind CSS</li>
        <li>Project cards and detail pages</li>
        <li>Resume download and contact links</li>
      </ul>
      <h2>User Experience</h2>
      <p>I focused on clean typography, fast loading, and meaningful animations to make the portfolio feel professional and modern.</p>
    `,
    createdAt: "2026-02-12T09:30:00.000Z",
    updatedAt: "2026-02-12T09:30:00.000Z",
  },
  {
    _id: "personal-branding-analysis",
    title: "Analyzing My Portfolio Data and Career Story",
    description: "A quick analysis of how my skills, projects, and resume information tell a stronger career story.",
    author: "Khalid Saifullah Siam",
    thumbnail: {
      url: "/profile.jpg",
    },
    content: `
      <p>This article examines the information in my portfolio: skills, projects, resume, and contact links. The goal is to present a single narrative that matches my career ambition.</p>
      <h2>Strengths</h2>
      <p>My profile shows strong full-stack skills, including Next.js, React, Node.js, and MongoDB. I also emphasize problem solving and AI interest, which fits modern web development roles.</p>
      <h2>Opportunity</h2>
      <p>Adding more project details, technical results, and real-world metrics will make the portfolio even stronger. It also helps to highlight the unique value I bring as a developer.</p>
    `,
    createdAt: "2026-03-05T14:15:00.000Z",
    updatedAt: "2026-03-05T14:15:00.000Z",
  },
];
