export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Summer 2026",
    title: "Undergraduate Researcher",
    company: "McNair Scholar Summer Research Experience (MSRP) at Georgia Southern University",
    description:
      "Developed models for object detection and activity recognition using machine learning techniques and reinforcement learning for an assistive robot algorithm.",
    advisor: "Hayden Wimmer",
  },
  {
    date: "April 2025 -- Present",
    title: "Engineering Ambassador",
    company: "Georgia Southern University",
    description:
      "Organized and conducted engineering outreach activities at 20+ schools, providing resources for students interested in engineering fields while representing the Department of Computer Science and Software Engineering at recruitment and STEM events.",
    manager: "Amy Rowell, Natasha Sanders",
  },
  {
    date: "December 2024 -- Present",
    title: "President/Founder of Girls Who Code Chapter",
    company: "Georgia Southern University",
    description:
      "Founded a chapter supporting 60+ women and non-binary students in tech, providing resources for academic and professional success in computer science fields.",
    manager: "Vijayalakshmi Ramasamy",
  },
  {
    date: "December 2025 -- April 2026",
    title: "Undergraduate Researcher",
    company: "Georgia Southern University (DAC Lab)",
    description:
      "Developed models for object detection and activity recognition using machine learning techniques and reinforcement learning. Finalized LSTM, 1D CNN, 2D CNN, and LSTM-CNN hybrid models with over 0.85 validation accuracy in American Sign Language detection.",
    manager: "Hayden Wimmer",
  },
];
