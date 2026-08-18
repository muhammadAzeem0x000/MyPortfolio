import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES, PROJECTS_LIST } from "@/lib/projects-data";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { TracePilotVisual } from "@/components/case-study/visuals/TracePilotVisual";
import { SupportFlowVisual } from "@/components/case-study/visuals/SupportFlowVisual";
import { MuscleBotVisual } from "@/components/case-study/visuals/MuscleBotVisual";
import { SignalRoomVisual } from "@/components/case-study/visuals/SignalRoomVisual";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS_LIST.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    return {
      title: "Case Study Not Found — Muhammad Azeem",
    };
  }

  return {
    title: `${project.title} Case Study — ${project.eyebrow} | Muhammad Azeem`,
    description: project.heroDescription,
    openGraph: {
      title: `${project.title} — ${project.heroTitle}`,
      description: project.heroDescription,
      type: "article",
      images: [
        {
          url: "/og.png",
          width: 1733,
          height: 907,
          alt: `${project.title} Case Study — Muhammad Azeem`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study | Muhammad Azeem`,
      description: project.heroDescription,
      images: ["/og.png"],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];

  if (!data) {
    notFound();
  }

  let visualCenterpiece: React.ReactNode = null;
  if (slug === "tracepilot") {
    visualCenterpiece = <TracePilotVisual />;
  } else if (slug === "supportflow") {
    visualCenterpiece = <SupportFlowVisual />;
  } else if (slug === "musclebot") {
    visualCenterpiece = <MuscleBotVisual />;
  } else if (slug === "signalroom") {
    visualCenterpiece = <SignalRoomVisual />;
  }

  return <CaseStudyLayout data={data} visualCenterpiece={visualCenterpiece} />;
}
