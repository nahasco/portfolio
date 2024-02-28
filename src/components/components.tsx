import { ItemType } from "@/data"
import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import React from "react"

export function Heading({ children, className }: { children: any; className?: string }) {
    return (
        <h3
            className={`capitalize font-bold sticky top-0 bg-background z-50 text-xl py-2 px-4 -mx-4 ${
                className && className
            }`}
        >
            {children}
        </h3>
    )
}

export function TechItem({ label, imageSrc, imageAlt }: { label: string; imageSrc: string; imageAlt: string }) {
    return (
        <li className="inline-flex px-4 py-3 rounded-md items-center gap-2 bg-primary-foreground text-base">
            <div className="w-5 h-5 relative">
                <Image src={imageSrc} alt={imageAlt} draggable="false" fill className="object-contain" priority />
            </div>
            <div className="text-sm">{label}</div>
        </li>
    )
}

function Item2({ item }) {
    return (
        <article className="relative rounded hover:-m-4 hover:p-4 hover:bg-secondary">
            <div className="grid grid-cols-3 relative transition-colors">
                <div className="col-span-2 flex flex-col gap-3">
                    <h1 className="text-base">{item.title}</h1>
                    <p className="text-muted-foreground text-sm">item description</p>
                    <div className="inline-flex flex-wrap gap-2">
                        {item.techs.map((tech: string) => {
                            return (
                                <div
                                    key={tech}
                                    className="border text-sm rounded-full px-2 py-1 text-muted-foreground bg-[#2563eb]/10 text-[#2563eb]"
                                >
                                    {tech}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="bg-white/50 h-[100px] rounded-md relative flex-1">
                    <Image src={`/images/${item.slug}.png`} alt={item.slug} fill className="object-cover rounded-sm" />
                </div>
            </div>
        </article>
    )
}

export function Item({ item }: { item: ItemType }) {
    return (
        <article className="relative rounded hover:-m-4 hover:p-4 hover:bg-secondary">
            <div className="inline-flex flex-col lg:grid lg:grid-cols-3 gap-5 relative transition-colors">
                <div className="col-span-2 flex flex-col gap-3">
                    <h1 className="text-base">{item.title}</h1>
                    {item.link && <ExternalLink href={`https://${item.link}`}>{item.link}</ExternalLink>}
                    {item.description && <p className="text-muted-foreground text-sm">{item.description}</p>}
                    <div className="inline-flex flex-wrap gap-2">
                        {item.techs.map((tech: string) => {
                            return (
                                <div
                                    key={tech}
                                    className="border text-sm rounded-full px-2 py-1 text-muted-foreground bg-[#2563eb]/10"
                                >
                                    {tech}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="bg-white/50 lg:max-h-[125px] max-w-[300px] aspect-video rounded-md relative">
                    <Image src={`/images/${item.slug}.png`} alt={item.slug} draggable="false" fill className="object-cover object-left-top rounded-sm" />
                </div>
            </div>
        </article>
    )
}

export function ExternalLink({
    href,
    children,
    className,
    ...props
}: {
    href: string
    children: string
    className?: string
}) {
    return (
        <a
            href={href}
            className={`text-primary flex items-center gap-1 ${className && className}`}
            target="_blank"
            {...props}
        >
            {children}
            <ArrowUpRightIcon className="w-4 h-4" />
        </a>
    )
}
