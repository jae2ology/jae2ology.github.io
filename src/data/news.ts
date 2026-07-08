export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "April 2026",
    title: "ML Poster won 2nd Place in Computer Science Category ($150)",
    description: "My work in comparing ASL recognition and detection models won 2nd place in the CS category at the Allen E. Paulson College of Engineering and Computing Research Symposium!",
  },
];
