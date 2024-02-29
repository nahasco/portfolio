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

export function Item({ item }: { item: ItemType }) {
    return (
        <article className="relative inline-flex flex-col lg:grid lg:grid-cols-3 gap-5 transition-colors rounded -m-4 p-4 hover:bg-secondary ">
            <div className="col-span-2 flex flex-col gap-3">
                <h4 className="text-base">{item.title}</h4>
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
            <div className="bg-muted max-w-[300px] aspect-video rounded-sm relative border">
                <Image
                    src={`/images/${item.slug}.png`}
                    alt={item.slug}
                    draggable="false"
                    fill
                    className="object-cover object-left-top rounded-sm"
                />
            </div>
        </article>
    )
}

export function ExternalLink({ href, children, ...props }: { href: string; children: string }) {
    return (
        <a
            href={href}
            className={"group text-primary flex items-center gap-1 relative hover:underline"}
            target="_blank"
            {...props}
        >
            {children}
            <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </a>
    )
}
