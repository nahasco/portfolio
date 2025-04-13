"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowDownToLineIcon } from "lucide-react"
import { useOnClickOutside } from "usehooks-ts"
import { motion } from "motion/react"

function DownloadComponent() {
    const [state, setState] = useState()
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    useOnClickOutside(ref, () => setOpen(false))

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpen(false)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [open, state])

    function handleDownload(lang: "en" | "de") {
        const url = lang === "en" ? "/cv-en.pdf" : "/cv-de.pdf"
        const title = lang === "en" ? "CV-Mohamed-Alnahhas" : "Lebenslauf-Mohamed-Alnahhas"

        const link = document.createElement("a")
        link.href = url
        link.download = title
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setOpen(false)
    }

    return (
        <div className="relative flex align-start justify-start text-start">
            <motion.button
                layoutId="popover"
                className="relative flex items-center bg-primary p-3 text-primary-foreground"
                onClick={() => setOpen(true)}
                style={{ borderRadius: 20 }}
            >
                <motion.div>
                    <ArrowDownToLineIcon className="me-2 w-4 h-4" />
                </motion.div>
                <motion.span layoutId="label">Resume(CV)</motion.span>
            </motion.button>
            {open ? (
                <motion.div
                    layoutId="popover"
                    ref={ref}
                    className="absolute bottom-0 flex flex-col gap-2 bg-primary p-4 w-full md:w-[200px]"
                    style={{ borderRadius: 15 }}
                >
                    <div className="flex items-center text-primary-foreground">
                        <motion.span layoutId="label">Resume(CV)</motion.span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <motion.button
                            onClick={() => handleDownload("en")}
                            className="flex border border-white/5 items-center text-start py-3 px-4 md:py-1 md:px-3 text-primary-foreground bg-white/10 hover:bg-white/20 transition-colors rounded-lg"
                        >
                            English
                            <ArrowDownToLineIcon className="ms-auto w-4 h-4" />
                        </motion.button>
                        <motion.button
                            onClick={() => handleDownload("de")}
                            className="flex border border-white/5 items-center text-start py-3 px-4 md:py-1 md:px-3 text-primary-foreground bg-white/10 hover:bg-white/20 transition-colors rounded-lg"
                        >
                            Deutsch
                            <ArrowDownToLineIcon className="ms-auto w-4 h-4" />
                        </motion.button>
                    </div>
                </motion.div>
            ) : null}
        </div>
    )
}

export default DownloadComponent
