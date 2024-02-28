import { Button } from "@/components/ui/button"
import { ArrowDownToLineIcon, ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import { ItemType, projects, works } from "@/data"
import { ExternalLink, Heading, Item, TechItem } from "@/components/components"

export default async function Home() {
    return (
        <>
            <main className="container mx-auto px-10 lg:px-24 grid lg:grid-cols-2 grid-cols-1 gap-4 min-h-screen">
                <header className="flex flex-col pt-12 lg:py-24 justify-between gap-8 relative lg:sticky top-0 max-h-screen">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl sm:text-4xl font-bold">Mohamed Alnahhas</h1>
                        <h2 className="text-xl">Web Developer</h2>
                        <p className="lg:max-w-[80%] text-muted-foreground mt-5">
                            As a Business Administration student with a keen interest in technology and software, I have
                            been drawn to the field of web development. I am equally passionate about both areas and
                            have pursued my interest in web development by completing two Harvard courses and working on
                            various personal projects.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <a href="/cv.pdf" download="CV-Mohamed-Alnahhas">
                            <Button className="rounded-full self-start">
                                <ArrowDownToLineIcon className="me-2 w-4 h-4" />
                                Resume(CV)
                            </Button>
                        </a>
                        <div className="flex gap-3">
                            <a href="https://github.com/nahasco" target="_blank">
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
                    </div>
                </header>

                <div className="py-16 lg:py-24">
                    <div>
                        <Heading className="mt-0">Tech Skills</Heading>
                        <ul className="flex flex-wrap gap-2 mt-6 pb-20">
                            <TechItem label={"Javascript"} imageSrc="/icons/js-logo.svg" imageAlt="JS Logo" />
                            <TechItem label={"Typescript"} imageSrc="/icons/ts-logo.svg" imageAlt="TS Logo" />
                            <TechItem label={"Python"} imageSrc="/icons/python-logo.svg" imageAlt="Python Logo" />
                            <TechItem label={"Next.js"} imageSrc="/icons/nextjs-logo.svg" imageAlt="Next.js Logo" />
                            <TechItem label={"React"} imageSrc="/icons/react-logo.svg" imageAlt="React Logo" />
                            <TechItem label={"Django"} imageSrc="/icons/django-logo.svg" imageAlt="Django Logo" />
                            <TechItem
                                label={"Tailwind CSS"}
                                imageSrc="/icons/tailwindcss.svg"
                                imageAlt="Tailwind Logo"
                            />
                            <TechItem label={"HTML"} imageSrc="/icons/html-logo.svg" imageAlt="HTML Logo" />
                            <TechItem label={"CSS"} imageSrc="/icons/css-logo.svg" imageAlt="CSS Logo" />
                            <TechItem
                                label={"PostgreSQL"}
                                imageSrc="/icons/postgresql-logo.svg"
                                imageAlt="PostgresSQL Logo"
                            />
                            <TechItem
                                label={"Amazon Web Services"}
                                imageSrc="/icons/aws-logo.svg"
                                imageAlt="AWS Logo"
                            />
                            <TechItem label={"SQL"} imageSrc="/icons/sql-logo.svg" imageAlt="SQL Logo" />
                            <TechItem label={"GitHub"} imageSrc="/icons/github-icon.svg" imageAlt="Github Logo" />
                            <TechItem label={"Figma"} imageSrc="/icons/figma-logo.svg" imageAlt="Figma Logo" />
                            <TechItem
                                label={"WordPress"}
                                imageSrc="/icons/wordpress-logo.svg"
                                imageAlt="WordPress Logo"
                            />
                            <TechItem
                                label={"Woocommerce"}
                                imageSrc="/icons/woocommerce-logo.svg"
                                imageAlt="Woocommerce Logo"
                            />
                            <TechItem label={"Elementor"} imageSrc="/icons/elementor.svg" imageAlt="Elementor Logo" />
                        </ul>
                    </div>

                    <div>
                        <Heading>Projects</Heading>
                        <div className="flex flex-col gap-12 mt-6 pb-20">
                            {projects.map((project) => {
                                return <Item key={project.slug} item={project} />
                            })}
                        </div>
                    </div>

                    <div>
                        <Heading>Client Work</Heading>
                        <div className="flex flex-col gap-12 mt-6 pb-20">
                            {works.map((work) => {
                                return <Item key={work.slug} item={work} />
                            })}
                        </div>
                    </div>

                    <div>
                        <Heading>Formal Education</Heading>
                        <ul className="flex flex-col gap-8 mt-6 pb-20">
                            <li className="grid grid-cols-8 gap-4 text-muted-foreground">
                                <div className="col-span-2 text-muted-foreground">2021-2025</div>
                                <div className="col-span-6">
                                    <h4 className="text-lg text-foreground">Yildiz Technical University</h4>
                                    <p>Bachelor of Arts - Business Administration</p>
                                    <p>Istanbul, Turkey</p>
                                </div>
                            </li>

                            <li className="grid grid-cols-8 gap-4 text-muted-foreground">
                                <div className="col-span-2 text-muted-foreground">2023</div>
                                <div className="col-span-6">
                                    <h4 className="text-lg text-foreground">Technical University Dortmund</h4>
                                    <p>Erasmus+ - Business Administration</p>
                                    <p>Dortmund, Germany</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Heading>Course Work</Heading>
                        <ul className="flex flex-col gap-8 mt-6 pb-20">
                            <li className="grid grid-cols-8 text-muted-foreground">
                                <div className="col-span-2 text-muted-foreground">2022</div>
                                <div className="col-span-6">
                                    <h4 className="text-lg text-foreground">
                                        CS50's Web Development with Python & Javascript
                                    </h4>
                                    <ExternalLink href="https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript">
                                        View
                                    </ExternalLink>
                                    <p>Harvard University</p>
                                    <p>Online</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}
