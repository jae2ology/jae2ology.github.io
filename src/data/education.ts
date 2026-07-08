export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "Georgia Southern University",
    degree: "B.S. in Computer Science",
  },
  {
    year: "2024-Present",
    institution: "Georgia Southern University",
    degree: "B.S. in Software Engineering",
  },
];
