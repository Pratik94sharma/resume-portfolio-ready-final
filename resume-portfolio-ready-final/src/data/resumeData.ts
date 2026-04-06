import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  profile: {
    name: "Pratik Sharma",
    role: "Web Developer and Python Professional",
    location: "Ahmedabad, India",
    heroIntro:
      "I design and build user-focused web experiences with a strong foundation in frontend technologies and Python-based workflows.",
    summary:
      "To plan and design the structure and design of web pages. To develop website features that can enhance the user experience. To strategize design choices according to user experience and to implement design for mobile sites."
  },
  contactLinks: [
    {
      label: "Email",
      value: "sharmapratik151994@gmail.com",
      href: "mailto:sharmapratik151994@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 9825612940",
      href: "tel:+919825612940"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/pratik-sharma-b91b5925a",
      href: "https://www.linkedin.com/in/pratik-sharma-b91b5925a"
    },
    {
      label: "Location",
      value: "Ahmedabad",
      href: "#contact"
    }
  ],
  skills: [
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "PHP", category: "Programming" },
    { name: "SQL", category: "Database" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "C++", category: "Programming" }
  ],
  experience: [
    {
      title: "Jr. Python Developer",
      organization: "Amax Consultancy Pvt. Ltd.",
      location: "Ahmedabad",
      period: "Jan 2025 - Sep 2025",
      description:
        "Contributed to ERPNext customization with custom Doctypes, reports, and dashboards. Implemented Python-based server scripts and client scripts to optimize workflows, and collaborated on CRM, Sales, HR, and Manufacturing module features."
    },
    {
      title: "Assistant Professor",
      organization: "Silver Oak University",
      location: "Ahmedabad",
      period: "May 2024 - Nov 2024",
      description:
        "Delivered engaging lectures, designed practical curriculum material, and guided hands-on projects to strengthen student skills. Mentored students to support academic excellence and professional growth."
    },
    {
      title: "Computer Teacher",
      organization: "Swaminarayan Vidhya Sankul School",
      location: "Ahmedabad",
      period: "Jun 2013 - Apr 2023",
      description:
        "Taught higher and secondary students through practical and engaging technology lessons. Developed curricula to improve digital skills and problem-solving and helped students prepare for academic and professional success."
    }
  ],
  projects: [
    {
      title: "Manufacturing Machines (Ice Cream Maker)",
      stack: ["HTML", "CSS", "JavaScript", "Java", "Python"],
      description:
        "Designed an automated ice-cream-making machine concept focused on user-friendly operation, efficiency, and ease of cleaning and maintenance."
    },
    {
      title: "Test Your Skills",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description:
        "Built a quiz platform where users choose category and difficulty, receive instant answer feedback, and track scores per user."
    }
  ],
  education: [
    {
      degree: "M.Sc (IT)",
      institution: "Silver Oak University",
      location: "Ahmedabad",
      period: "Aug 2023 - Aug 2025"
    },
    {
      degree: "B.A (English)",
      institution: "Gujarat University",
      location: "Ahmedabad",
      period: "Jun 2011 - Apr 2017"
    }
  ],
  achievements: [
    {
      title: "Cyber Security Contest (127.0.0.1)",
      detail: "Ahmedabad, Oct 2024"
    },
    {
      title: "Machine Learning Contest (Silver Oak ML-thon)",
      detail: "Ahmedabad, Nov 2023"
    }
  ],
  leadership: [
    {
      title: "Computer Department Manager",
      detail: "SVS School, Jun 2013 - Apr 2023"
    },
    {
      title: "Class Representative",
      detail: "M.Sc IT (2 years)"
    },
    {
      title: "Managed Admin Tasks During Board Exams",
      detail: "SVS School"
    },
    {
      title: "Event Organization",
      detail: "Silver Oak University"
    }
  ]
};
