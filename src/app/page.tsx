import { Button } from "@/components/ui/button";
import {
  AppWindowMac,
  ArrowRight,
  Atom,
  Braces,
  Cable,
  CloudRainWind,
  CloudSun,
  CodeXml,
  Database,
  Github,
  House,
  Icon,
  Key,
  Layers3,
  MapPin,
  Newspaper,
  Pipette,
  PlugZap,
  Presentation,
  Pyramid,
  Rabbit,
  Radar,
  Sparkle,
  Triangle,
  Trophy,
  UsersRound,
  Wind,
  Wrench,
} from "lucide-react";
import { GeneralCounter, GPACounter } from "./client";
import Link from "next/link";
import { toolbox } from "@lucide/lab";

export default async function Home() {
  const competitions = [
    {
      date: "Oct 23 2024",
      title: "KU High School Design Competition 2024",
      place: "2nd",
      description:
        "High School Design is a free event that takes place annually in the fall, putting high school students' creativity, teamwork skills, technical knowledge, and abilities to the test. Each High School Design features new engineering design challenges in various engineering disciplines created by students in the Self Engineering Leadership Fellows (SELF) Program. Working as individuals or in small teams, high school students design, build, and test a project that addresses the design criteria.",
      readMoreLink: "/competitons/kuhsd2024/",
      links: [
        [
          {
            icon: <House />,
            text: "Overview",
            href: "https://engr.ku.edu/high-school-design-competition/",
          },
          {
            icon: <MapPin />,
            text: "University of Kansas",
            href: "https://www.google.com/maps/place/Learned+Engineering+Expansion+Phase+2+(LEEP+2)/@38.9574654,-95.2540836,18.18z/data=!4m15!1m8!3m7!1s0x87bf6f3397c4b895:0x77efdc2860855fd0!2sGreen+Hall,+Lawrence,+KS+66044!3b1!8m2!3d38.9565257!4d-95.2541607!16s%2Fg%2F1yl49hby_!3m5!1s0x87bf6f33e786cd4d:0xc8516558a4b467c7!8m2!3d38.9577439!4d-95.2538317!16s%2Fg%2F11bwqmfq66?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D/",
          },
          {
            icon: <Newspaper />,
            text: "Rules",
            href: "https://engr.ku.edu/hsd-competition-details/",
          },
          {
            icon: <Trophy />,
            text: "Results",
            href: "https://engr.ku.edu/hsd-2024-winners/",
          },
        ],
        [
          {
            icon: <Presentation />,
            text: "Presentation",
            href: "https://www.canva.com/design/DAGTzQ4Mplk/UIj2jnzzV2qTlOpeuY7D3w/view",
          },
          {
            icon: <Github />,
            text: "Code Repository",
            href: "https://github.com/FortyGazelle700/weather-query/",
          },
        ],
      ],
      tools: [
        [
          {
            icon: <CodeXml />,
            text: "HTML",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML/",
          },
          {
            icon: <Pipette />,
            text: "CSS",
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/",
          },
          {
            icon: <Braces />,
            text: "JS",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
          },
          {
            icon: <Rabbit />,
            text: "Bun",
            href: "https://bun.sh/",
          },
        ],
        [
          {
            icon: <CloudSun />,
            text: "OpenMeteo",
            href: "https://open-meteo.com/",
          },
          {
            icon: <Radar />,
            text: "Radar.io",
            href: "https://radar.com/",
          },
        ],
      ],
    },
  ];

  const projects = [
    {
      date: "Nov 01 2024",
      title: "Portfolio",
      description:
        "Welcome to the portfolio of Drake Semchyshyn, a seasoned web developer dedicated to crafting user-friendly and impactful web applications. This site showcases Drake’s expertise in both front-end and back-end development, highlighting projects that combine creativity with technical precision. Here, you'll find examples of work that demonstrate a deep understanding of web technologies and practical skills in Rust and Python. Beyond development, this portfolio reflects Drake's commitment to excellence and teamwork—qualities honed through active involvement in club and school volleyball as well as the marching band. Dive in to explore a diverse, versatile body of work grounded in both skill and passion.",
      readMoreLink: "/projects/portfolio/",
      goToLink: "https://bluefla.me/",
      links: [
        [
          {
            icon: <House />,
            text: "Home Page",
            href: "https://bluefla.me/",
          },
        ],
      ],
      tools: [
        [
          {
            icon: <Layers3 />,
            text: "T3 Stack",
            href: "https://create.t3.gg/",
          },
          {
            icon: <Rabbit />,
            text: "Bun",
            href: "https://bun.sh/",
          },
          {
            icon: <Atom />,
            text: "React",
            href: "https://react.dev/",
          },
          {
            icon: <Triangle />,
            text: "Next.JS",
            href: "https://nextjs.org/",
          },
        ],
        [
          {
            icon: <Cable />,
            text: "tRPC",
            href: "https://trpc.io/",
          },
          {
            icon: <Wind />,
            text: "TailwindCSS",
            href: "https://tailwindcss.com/",
          },
        ],
        [
          {
            icon: <Triangle />,
            text: "Vercel",
            href: "https://vercel.com/",
          },
        ],
      ],
    },
    {
      date: "Sep 15 2023",
      title: "Truck Loader",
      description:
        "Truck Loader is a streamlined app designed to simplify logistics for marching bands by making it easy to log and manage instruments during transport. With Truck Loader, band members and staff can check instruments in and out effortlessly using QR codes, ensuring accurate, real-time tracking of each piece of equipment. The app provides instant details on which instruments are loaded or still need loading, reducing the risk of misplaced items and making setup and teardown faster and more organized. Tailored for the fast-paced needs of marching bands, Truck Loader enhances efficiency and keeps every instrument accounted for.",
      readMoreLink: "/projects/truck-loader/",
      goToLink: "https://bvw.bluefla.me/",
      links: [
        [
          {
            icon: <AppWindowMac />,
            text: "Application",
            href: "https://bvw.bluefla.me/",
          },
        ],
      ],
      tools: [
        [
          {
            icon: <Rabbit />,
            text: "Bun",
            href: "https://bun.sh/",
          },
          {
            icon: <Wrench />,
            text: "Svelte",
            href: "https://svelte.dev/",
          },
          {
            icon: <Icon iconNode={toolbox} />,
            text: "SvelteKit",
            href: "https://svelte.dev/docs/kit/introduction",
          },
        ],
        [
          {
            icon: <Pyramid />,
            text: "Prisma",
            href: "https://www.prisma.io/orm",
          },
          {
            icon: <Database />,
            text: "PostgresSQL",
            href: "https://www.postgresql.org/",
          },
        ],
        [
          {
            icon: <Triangle />,
            text: "Vercel",
            href: "https://vercel.com/",
          },
        ],
      ],
    },
    {
      date: "Jan 01 2025",
      title: "Catalyst",
      description:
        "Catalyst is an innovative application designed to enhance the student experience on Canvas LMS by providing a more intuitive and user-friendly interface. Built as a powerful new client for Canvas, Catalyst goes beyond basic functionality to offer tools like personalized schedules, real-time assignment tracking, and integrated AI features. These additions help students stay organized, manage their workloads effectively, and even gain insights into study habits or content summaries. Catalyst is the all-in-one academic companion for students seeking a seamless, efficient, and supportive learning platform.",
      readMoreLink: "/projects/catalyst/",
      goToLink: "https://catalyst.bluefla.me/",
      links: [
        [
          {
            icon: <House />,
            text: "Landing Page",
            href: "https://catalyst.bluefla.me/",
          },
        ],
      ],
      tools: [
        [
          {
            icon: <Layers3 />,
            text: "T3 Stack",
            href: "https://create.t3.gg/",
          },
          {
            icon: <Rabbit />,
            text: "Bun",
            href: "https://bun.sh/",
          },
          {
            icon: <Atom />,
            text: "React",
            href: "https://react.dev/",
          },
          {
            icon: <Triangle />,
            text: "Next.JS",
            href: "https://nextjs.org/",
          },
        ],
        [
          {
            icon: <Cable />,
            text: "tRPC",
            href: "https://trpc.io/",
          },
          {
            icon: <CloudRainWind />,
            text: "Drizzle ORM",
            href: "https://orm.drizzle.team/",
          },
          {
            icon: <Wind />,
            text: "TailwindCSS",
            href: "https://tailwindcss.com/",
          },
          {
            icon: <Key />,
            text: "Auth.js",
            href: "https://authjs.dev/",
          },
        ],
        [
          {
            icon: <Triangle />,
            text: "Vercel",
            href: "https://vercel.com/",
          },
          {
            icon: <Database />,
            text: "PostgresSQL",
            href: "https://www.postgresql.org/",
          },
          {
            icon: <Braces />,
            text: "Redis",
            href: "https://redis.io/",
          },
          {
            icon: <PlugZap />,
            text: "Pusher Channels",
            href: "https://pusher.com/docs/channels/getting_started/javascript/",
          },
        ],
        [
          {
            icon: <UsersRound />,
            text: "CanvasLMS API",
            href: "https://vercel.com/",
          },
          {
            icon: <Sparkle />,
            text: "Gemini API",
            href: "https://ai.google.dev/",
          },
        ],
      ],
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-2 pb-16">
        <h1 className="h1 flex items-center gap-2">
          <span className="animate-fade-in opacity-0 animate-delay-0">
            Hiya,
          </span>
          <span className="animate-fade-in opacity-0 animate-delay-600">
            I{"'"}m
          </span>
          <span className="animate-fade-in opacity-0 animate-delay-800">
            Drake!
          </span>
          <span className="animate-fade-in opacity-0 animate-delay-1000">
            👋🏻
          </span>
        </h1>
        <h2 className="text-md flex animate-fade-in flex-wrap items-center gap-2 text-muted-foreground opacity-0 animate-delay-1400">
          <span>Junior enrolled at </span>
          <Button
            variant="outline"
            className="h-auto gap-1 rounded-full px-3 py-1 text-inherit"
            target="_blank"
            href="https://www.google.com/maps/place/Blue+Valley+West+High+School/@38.8354484,-94.6926794,16z/data=!4m6!3m5!1s0x87c0c0e11a73935d:0xe2787aaa848d3639!8m2!3d38.8352247!4d-94.6925195!16zL20vMGIwbDBs?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
          >
            <MapPin /> Blue Valley West High School
          </Button>
          <span className="-ml-1.5">.</span>
        </h2>
        <div className="mt-4 flex flex-col gap-16 md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="h3 animate-fade-in opacity-0 animate-delay-1900">
              School Stats
            </h3>
            <div className="flex gap-2">
              <div className="relative flex animate-fade-in flex-col gap-2 rounded-full bg-secondary px-8 opacity-0 animate-delay-2000">
                <GPACounter gpa={4.4} delay={2100} />
                <div className="absolute left-1/2 top-full w-full -translate-x-1/2 pt-1 text-center text-[0.6rem] text-muted-foreground">
                  Weighted GPA
                </div>
              </div>
              <div className="relative flex animate-fade-in flex-col gap-2 rounded-full border px-8 opacity-0 animate-delay-2100">
                <GPACounter gpa={3.9} delay={2200} />
                <div className="absolute left-1/2 top-full w-full -translate-x-1/2 pt-1 text-center text-[0.6rem] text-muted-foreground">
                  Unweighted GPA
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="h3 animate-fade-in opacity-0 animate-delay-2300">
              Programming Stats
            </h3>
            <div className="flex gap-2">
              <div className="relative flex animate-fade-in flex-col gap-2 rounded-full bg-secondary px-8 opacity-0 animate-delay-2400">
                <GeneralCounter number={469528} delay={2500} />
                <div className="absolute left-1/2 top-full w-full -translate-x-1/2 pt-1 text-center text-[0.6rem] text-muted-foreground">
                  Lines of Code Written
                </div>
              </div>
              <div className="relative flex animate-fade-in flex-col gap-2 rounded-full border px-8 opacity-0 animate-delay-2600">
                <GeneralCounter number={1234} delay={2700} />
                <div className="absolute left-1/2 top-full w-full -translate-x-1/2 pt-1 text-center text-[0.6rem] text-muted-foreground">
                  Hours Spent
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="h3 mt-8 animate-fade-in opacity-0 animate-delay-2800">
          About Me
        </h3>
        <p className="animate-fade-in opacity-0 animate-delay-3000">
          I{"'"}m Drake Semchyshyn, a web developer with a strong foundation in
          building dynamic and user-friendly websites using modern frameworks
          like Next.js and SvelteKit. With a background in both front-end and
          back-end development, I bring expertise in languages like Rust and
          Python to create efficient, scalable applications. Beyond coding, I
          stay engaged with teamwork and discipline through competitive
          volleyball and as an active member of my school{"'"}s marching band.
          My projects showcase my commitment to clean, functional design and my
          drive for continuous learning and improvement in web development.
        </p>
      </section>
      <section className="flex flex-col gap-2 p-4 pb-16">
        <h2 className="h2 animate-fade-in opacity-0 animate-delay-4000">
          Competitions
        </h2>
        {competitions.map((competition, competitionIdx) => (
          <div
            className="group relative flex h-auto animate-fade-in flex-col-reverse items-stretch gap-2 opacity-0 md:mb-0 md:flex-row"
            style={{ animationDelay: `${competitionIdx * 200 + 4200}ms` }}
            key={competition.title}
          >
            <Button
              href={competition.readMoreLink}
              variant="secondary"
              className="h-auto flex-shrink-0 flex-col items-start justify-between rounded p-4 text-xs text-muted-foreground md:w-[20ch]"
            >
              <div className="flex flex-col">
                <span className="text-[0.5rem] text-muted-foreground">
                  Competed
                </span>
                {competition.date}
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <ArrowRight className="text-lg" />
                Read More
              </div>
            </Button>
            <div className="flex flex-1 flex-col gap-2 overflow-hidden p-4">
              <div className="flex items-center justify-between gap-1">
                <h3 className="h3">{competition.title}</h3>
                <h4 className="h4 flex items-center gap-1 text-amber-500">
                  <Trophy />
                  <span>
                    {competition.place.substring(
                      0,
                      competition.place.length - 2,
                    )}
                    <sup className="relative -top-2 text-xs">
                      {competition.place.substring(
                        competition.place.length - 2,
                      )}
                    </sup>
                  </span>
                </h4>
              </div>
              <div className="relative max-h-[10rem] transition-all duration-300 group-hover:max-h-[30rem]">
                <div className="pointer-events-none absolute -bottom-4 h-40 w-full bg-gradient-to-t from-background to-transparent transition-opacity duration-300 group-hover:opacity-0">
                  <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border bg-background px-4 py-1 text-xs text-muted-foreground transition-opacity duration-100 group-hover:opacity-0">
                    <ArrowRight className="rotate-90" /> Hover to view more
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {competition.description}
                </p>
                <div className="mt-3 flex gap-2">
                  <b className="w-[10ch] flex-shrink-0 text-xs">Links</b>
                  <div className="flex flex-1 flex-col gap-4">
                    {competition.links.map((linkGroup, groupIndex) => (
                      <div
                        key={competition.title + groupIndex}
                        className="flex w-full flex-wrap items-center justify-start gap-2"
                      >
                        {linkGroup.map((link, linkIndex) => (
                          <Button
                            key={competition.title + groupIndex + linkIndex}
                            variant="outline"
                            href={link.href}
                            target="_blank"
                            className="flex h-auto gap-2 rounded-full px-4 py-1 text-xs"
                          >
                            {link.icon} <span>{link.text}</span>
                          </Button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <b className="w-[10ch] flex-shrink-0 text-xs">Tech + Tools</b>
                  <div className="flex flex-1 flex-col gap-4">
                    {competition.tools.map((toolGroup, groupIndex) => (
                      <div
                        key={competition.title + groupIndex}
                        className="flex w-full flex-wrap items-center justify-start gap-2"
                      >
                        {toolGroup.map((tool, toolIndex) => (
                          <Button
                            key={competition.title + groupIndex + toolIndex}
                            variant="outline"
                            href={tool.href}
                            target="_blank"
                            className="flex h-auto gap-2 rounded-full px-4 py-1 text-xs"
                          >
                            {tool.icon} <span>{tool.text}</span>
                          </Button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-2 p-4 pb-16">
        <h2 className="h2 animate-fade-in opacity-0 animate-delay-5000">
          Projects
        </h2>
        {projects.map((project, projectIdx) => (
          <div
            className="group relative mb-8 flex h-auto animate-fade-in flex-col-reverse items-stretch gap-2 opacity-0 md:mb-0 md:flex-row"
            style={{ animationDelay: `${projectIdx * 200 + 5200}ms` }}
            key={project.title}
          >
            <Button
              href={project.readMoreLink}
              variant="secondary"
              className="h-auto flex-shrink-0 flex-col items-start justify-between rounded p-4 text-xs text-muted-foreground md:w-[20ch]"
            >
              <div className="flex flex-col">
                <span className="text-[0.5rem] text-muted-foreground">
                  Released
                </span>
                {project.date}
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <ArrowRight className="text-lg" />
                Read More
              </div>
            </Button>
            <div className="flex flex-1 flex-col gap-2 overflow-hidden p-4">
              <div className="flex items-center justify-between gap-1">
                <h3 className="h3 hover:underline">
                  <Link href={project.goToLink} target="_blank">
                    {project.title}
                  </Link>
                </h3>
              </div>
              <div className="relative max-h-[10rem] transition-all duration-300 group-hover:max-h-[30rem]">
                <div className="pointer-events-none absolute -bottom-4 h-40 w-full bg-gradient-to-t from-background to-transparent transition-opacity duration-300 group-hover:opacity-0">
                  <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border bg-background px-4 py-1 text-xs text-muted-foreground transition-opacity duration-300 group-hover:opacity-0">
                    <ArrowRight className="rotate-90" /> Hover to view more
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex gap-2">
                  <b className="w-[10ch] flex-shrink-0 text-xs">Links</b>
                  <div className="flex flex-1 flex-col gap-4">
                    {project.links.map((linkGroup, groupIndex) => (
                      <div
                        key={project.title + groupIndex}
                        className="flex w-full flex-wrap items-center justify-start gap-2"
                      >
                        {linkGroup.map((link, linkIndex) => (
                          <Button
                            key={project.title + groupIndex + linkIndex}
                            variant="outline"
                            href={link.href}
                            target="_blank"
                            className="flex h-auto gap-2 rounded-full px-4 py-1 text-xs"
                          >
                            {link.icon} <span>{link.text}</span>
                          </Button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <b className="w-[10ch] flex-shrink-0 text-xs">Tech + Tools</b>
                  <div className="flex flex-1 flex-col gap-4">
                    {project.tools.map((toolGroup, groupIndex) => (
                      <div
                        key={project.title + groupIndex}
                        className="flex w-full flex-wrap items-center justify-start gap-2"
                      >
                        {toolGroup.map((tool, toolIndex) => (
                          <Button
                            key={project.title + groupIndex + toolIndex}
                            variant="outline"
                            href={tool.href}
                            target="_blank"
                            className="flex h-auto gap-2 rounded-full px-4 py-1 text-xs"
                          >
                            {tool.icon} <span>{tool.text}</span>
                          </Button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
