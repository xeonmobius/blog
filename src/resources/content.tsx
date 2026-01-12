import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shannon",
  lastName: "Chowdhury",
  name: `Shannon Chowdhury`,
  role: "Product Manager",
  avatar: "/images/avatar.jpg",
  email: "shannon.chow@live.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/xeonmobius",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shannonchowdhury/",
    essential: true,
  },
  //   {
  //     name: "Instagram",
  //     icon: "instagram",
  //     link: "https://www.instagram.com/once_ui/",
  //     essential: false,
  //   },
  //   {
  //     name: "Threads",
  //     icon: "threads",
  //     link: "https://www.threads.com/@once_ui",
  //     essential: true,
  //   },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming healthcare experiences through product innovation</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Prescription Digitization</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/prescription-data-entry-digitization",
  },
  subline: (
    <>
      I'm Shannon, a product manager at{" "}
      <Text as="span" size="xl" weight="strong">
        Loblaws
      </Text>
      , where I craft intuitive <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shannon is a Clinical Product Manager based in Toronto with a passion for solving real-world
        healthcare challenges. With a PharmD background, he brings a unique clinical perspective to
        product development—using his expertise to identify and fix the issues that matter most to
        patients and clinicians. His approach is rooted in user research, conducting in-depth
        interviews with clinicians to understand their pain points firsthand. He works closely with
        cross-functional teams including regulatory subject matter experts, QA, and developers to
        translate these insights into actionable solutions. Through IT tickets, surveys, and direct
        feedback, Shannon ensures every product decision is data-informed. Currently building
        Healthcare Clinical Products at Loblaws, Shannon is driven by the opportunity to solve
        pharmacists' problems and see the positive impact on patient care. He thrives on bridging
        business requirements with technical feasibility, finding new and innovative ways to address
        complex healthcare challenges.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Loblaws",
        timeframe: "October 2021 - Present",
        role: "Product Owner / Product Manager, Pharmacy",
        achievements: [
          <>
            Executed product roadmap for prescription data entry and fax digitization across 1,400+
            stores, delivering 30% improvement in user satisfaction.
          </>,
          <>
            Led integration of PC Optimum apps with Pharmacy Software, reducing wait times by 20%
            and increasing NPS score by 10%.
          </>,
          <>
            Maintained tactical product backlog of 80+ User Stories, improving development team
            velocity by 10 story points and ensuring 95% on-time delivery.
          </>,
          <>
            Conducted customer research with 20 pharmacy stores nationwide, uncovering critical
            workflow problems that increased user satisfaction by 40%.
          </>,
          <>
            Implemented AI-powered document processing solutions, resulting in 50% faster processing
            times.
          </>,
          <>
            Led UAT efforts on 4 cross-functional teams, achieving 95% user acceptance rate and
            reducing post-launch defects by 60%.
          </>,
          <>
            Ensured HIPAA/PHIPA compliance for patient data protection, achieving 99.9% compliance
            rate with zero security breaches.
          </>,
          <>
            Developed reports tracking Key Success Metrics for specialty prescription levels,
            achieving 9% increase in Rx volume and improved patient adherence.
          </>,
        ],
        images: [],
      },
      {
        company: "Roche Pharmaceutical",
        timeframe: "September 2019 - June 2020",
        role: "Business Analyst",
        achievements: [
          <>
            Led business analysis to create a UIPath bot with 100% accuracy, saving 3 months of
            manual work annually.
          </>,
          <>Delivered first POC of the ROI of using RPA in the company.</>,
          <>
            Partnered with global stakeholders to deliver 10+ features for automated document
            processing, accelerating time-to-market by 6 sprints.
          </>,
          <>
            Enhanced data integrity for regulatory submissions by designing structured, automated
            workflows for health authorities.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Western Governors University",
        description: <>Master of Business Administration (MBA).</>,
      },
      {
        name: "University of Toronto",
        description: <>Doctor of Pharmacy (PharmD).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Product Management",
        description: (
          <>
            Executing product roadmaps, managing backlogs, and delivering user-centered solutions
            with measurable impact.
          </>
        ),
        tags: [
          {
            name: "Jira",
            icon: "document",
          },
          {
            name: "Roadmapping",
            icon: "rocket",
          },
          {
            name: "Agile",
            icon: "document",
          },
        ],
        images: [],
      },
      {
        title: "Leadership & Stakeholder Management",
        description: (
          <>
            Leading cross-functional teams, managing stakeholders, and driving change across
            organizations.
          </>
        ),
        tags: [
          {
            name: "Cross-functional Leadership",
            icon: "person",
          },
          {
            name: "Stakeholder Management",
            icon: "globe",
          },
          {
            name: "Change Management",
            icon: "rocket",
          },
        ],
        images: [],
      },
      {
        title: "User Research & Analytics",
        description: (
          <>
            Conducting customer research, tracking NPS and KPIs, and using data to inform product
            decisions.
          </>
        ),
        tags: [
          {
            name: "User Research",
            icon: "eye",
          },
          {
            name: "NPS Tracking",
            icon: "document",
          },
          {
            name: "Data Analysis",
            icon: "document",
          },
        ],
        images: [],
      },
      {
        title: "Process Improvement & Innovation",
        description: (
          <>
            Driving innovation through RPA, automation, and continuous process improvement
            initiatives.
          </>
        ),
        tags: [
          {
            name: "RPA",
            icon: "rocket",
          },
          {
            name: "Process Improvement",
            icon: "document",
          },
          {
            name: "Innovation",
            icon: "rocket",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about product...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Case Studies – ${person.name}`,
  description: `Product management projects and case studies`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
