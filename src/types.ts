export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  thumbnail: string;
  gallery: string[];
  liveUrl?: string;
  repoUrl?: string;
  date: string;
}
