export interface ItemType {
    slug: string
    title: string
    description?: string
    techs: string[]
    link?: string
}

export const projects: ItemType[] = [
    {
        slug: "tibian",
        title: "Student Managment System Web Application - Tibian",
        techs: ["Nextjs", "Django", "PostgreSQL"],
    },
    {
        slug: "ilimacademy",
        title: "Exam Practice Web Application - Ilimacademy",
        techs: ["Nextjs", "Django", "PostgreSQL"],
    },
]

export const works: ItemType[] = [
    {
        slug: "layered-creatives",
        title: "Online Store Design & Development - Layered Creatives",
        techs: ["WordPress", "Woocommerce", "Elementor"],
        link: "layeredcreatives.nl",
    },
    {
        slug: "albayanknowledge",
        title: "Company Website Design & Development - Albayan Knowledge",
        techs: ["WordPress", "Elementor"],
        link: "albayanknowledge.com",
    },
    {
        slug: "rebelladigital",
        title: "Agency Website Design & Development - Rebella Digital",
        techs: ["WordPress", "Elementor"],
        link: "rebelladigital.be",
    },
    {
        slug: "weddingniceties",
        title: "Company Website and Online Store Design & Development - Wedding Niceties",
        techs: ["WordPress", "Woocommerce", "Elementor"],
        link: "weddingniceties.com",
    },
    {
        slug: "eleven46",
        title: "Small Online Store Design & Development - Eleven46",
        techs: ["WordPress", "Woocommerce", "Elementor"],
    },
]

export const educations = [
    {
        years: "2024-Present",
        university: "Saarland University",
        degree: "Bachelor of Arts - Business Administration",
        location: "Saarland, Germany"
    },
    {
        years: "2021-2024",
        university: "Yildiz Technical University",
        degree: "Bachelor of Arts - Business Administration",
        location: "Istanbul, Turkey"
    },
]
