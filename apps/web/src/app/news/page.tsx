import { ResearchNews } from "@/components/ResearchNews";

export const metadata = {
  title: "News — Singuron",
  description: "Peer-reviewed research and publications from the team building Singuron.",
};

export default function NewsPage() {
  return <ResearchNews heading="News" />;
}
