import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";
import { projects, Project } from "../constants/projects";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl py-16 md:py-24"
    >
      {/* Title - same as About / Experience */}
      <div className="max-w-2xl mx-auto text-center mb-6">
        <div className="inline-flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
        </div>
      </div>

      {/* Intro text */}
      <p className="max-w-3xl mx-auto text-center text-sm md:text-[18px] text-muted-foreground mb-12 md:mb-16">
        {t("projects.intro")}
      </p>

      {/* Projects grid */}
      <motion.div
        className="grid gap-8 md:grid-cols-1 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/70 px-5 py-6 shadow-sm backdrop-blur-md transition-colors hover:bg-background/90 md:px-7 md:py-8"
    >
      {/* corner accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* title */}
      <h3 className="text-xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-3">
        {t(`projects.${project.id}.title`)}
      </h3>

      {/* description */}
      <p className="text-sm text-muted-foreground mb-5 md:h-16">
        {t(`projects.${project.id}.description`)}
      </p>

      {/* tech stack */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={tech}
            className="rounded-full border border-border/50 bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
          >
            {t(`projects.${project.id}.tech.${index}`)}
          </span>
        ))}
      </div>

      {/* links */}
      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
          >
            {t(`projects.${project.id}.live`)}
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/70"
          >
            {t(`projects.${project.id}.source`)}
          </a>
        )}
      </div>
    </motion.div>
  );
}
