export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Jae Jackson",
  title: "3rd Year Undergraduate Student",
  institution: "Georgia Southern University",
  // Note that links work in the description
  description:
    "I am a 3rd year student majoring in computer science and software engineering (double major) at Georgia Southern University. I want to create autonomous, assistive robot systems capable of reasoning, decision-making, learning, and human connection. That goal is huge and difficult. So, my current focus is creating a robot capable of making proactive assistance decisions based on multiple methods! :)",
  email: "zj02031@georgiasouthern.edu",
  imageUrl:
    "https://drive.google.com/file/d/14_q8vE0IjGKWIebMkocHqMJIv0Z7piu0/view?usp=sharing",
  githubUsername: "jae2ology",
  linkedinUsername: "jae jackson",
  cvUrl: "https://drive.google.com/file/d/1rcIxYMMMhYYWxrA6GsSTXKoC66nmC1_s/view?usp=sharing",
  institutionUrl: "https://www.georgiasouthern.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
