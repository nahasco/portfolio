import { Button } from "@/components/ui/button"
import { ArrowDownToLineIcon } from "lucide-react"
import Image from "next/image"
import { promises as fs } from "fs"
import Link from "next/link"

export default async function Home() {
    const file = await fs.readFile(process.cwd() + "/src/data/projects.json", "utf8")
    const projects = JSON.parse(file).projects

    function TechIcon({ children }) {
        return (
            <li className="inline-flex px-6 py-4 rounded-md items-center gap-4 bg-primary-foreground text-base">
                {children}
            </li>
        )
    }

    function Heading({ children }) {
        return <h2 className="text-2xl my-6">{children}</h2>
    }

    function ProjectItem({ project }) {
        return (
            <Link href={`/projects/${project.slug}`}>
                <article className="flex flex-col gap-3">
                    <div className="bg-white/50 h-[225px] rounded-md relative overflow-hidden">
                        <Image src={`/images/${project.slug}.png`} alt={project.slug} fill className="object-cover" />
                    </div>
                    <h1 className="text-lg">{project.title}</h1>
                </article>
            </Link>
        )
    }

    return (
        <>
            <main className="container mx-auto px-16 flex">
                <header className="flex justify-between items-center py-8">
                    <h1 className="text-2xl">Mohamed Alnahhas</h1>
                    <div className="flex gap-6 items-center">
                        <div className="flex gap-3">
                            <a>
                                <Image src="/icons/github-icon.svg" alt="Github Logo" width={20} height={20} priority />
                            </a>
                            <a href="https://www.linkedin.com/in/mohamed-alnahhas/" target="_blank">
                                <Image
                                    src="/icons/linkedin-icon.svg"
                                    alt="Linkedin Logo"
                                    width={20}
                                    height={20}
                                    priority
                                />
                            </a>
                        </div>
                        <Button className="rounded-full">
                            <ArrowDownToLineIcon className="me-2 w-4 h-4" />
                            Resume(CV)
                        </Button>
                    </div>
                </header>

                <div>
                    <div className="flex flex-col w-full py-14 gap-6">
                        <div className="text-6xl">
                            Hi, I’m Mohamed
                            <br></br>A Web Developer & Designer
                        </div>
                        <p className="lg:max-w-[60%]">
                            As a Business Administration student with a keen interest in technology and software, I have
                            been drawn to the field of web development. I am equally passionate about both areas and
                            have pursued my interest in web development by completing two Harvard courses and working on
                            various personal projects.
                        </p>
                    </div>

                    <div>
                        <Heading>My Skills</Heading>
                        <ul className="flex flex-wrap gap-4">
                            <TechIcon>
                                <Image src="/icons/js-logo.svg" alt="JS Logo" width={30} height={30} priority />
                                Javascript
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/python-logo.svg" alt="Python Logo" width={30} height={30} priority />
                                Python
                            </TechIcon>
                            <TechIcon>
                                <Image
                                    src="/icons/nextjs-logo.svg"
                                    alt="Next.js Logo"
                                    width={30}
                                    height={30}
                                    priority
                                />
                                Next.js
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/react-logo.svg" alt="React Logo" width={30} height={30} priority />
                                React
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/django-logo.svg" alt="Django Logo" width={20} height={20} priority />
                                Django
                            </TechIcon>
                            <TechIcon>
                                <Image
                                    src="/icons/postgresql-logo.svg"
                                    alt="PostgresSQL Logo"
                                    width={30}
                                    height={30}
                                    priority
                                />
                                PostgreSQL
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/aws-logo.svg" alt="AWS Logo" width={30} height={30} priority />
                                Amazon Web Services
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/sql-logo.svg" alt="SQL Logo" width={30} height={30} priority />
                                SQL
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/html-logo.svg" alt="HTML Logo" width={26} height={30} priority />
                                HTML
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/css-logo.svg" alt="CSS Logo" width={28} height={30} priority />
                                CSS
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/github-icon.svg" alt="Github Logo" width={30} height={30} priority />
                                GitHub
                            </TechIcon>
                            <TechIcon>
                                <Image src="/icons/figma-logo.svg" alt="Figma Logo" width={20} height={30} priority />
                                Figma
                            </TechIcon>
                            <TechIcon>
                                <Image
                                    src="/icons/wordpress-logo.svg"
                                    alt="WordPress Logo"
                                    width={30}
                                    height={30}
                                    priority
                                />
                                WordPress
                            </TechIcon>
                            <TechIcon>
                                <Image
                                    src="/icons/woocommerce-logo.svg"
                                    alt="Woocommerce Logo"
                                    width={30}
                                    height={30}
                                    priority
                                />
                                Woocommerce
                            </TechIcon>
                        </ul>
                    </div>

                    <div className="mt-[4rem]">
                        <Heading>Projects</Heading>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                            {projects.map((project) => {
                                return <ProjectItem project={project} />
                            })}
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-20 flex justify-center border-t mt-20">
                <div>Mohamed Alnahhas</div>
            </footer>
        </>
    )
}
