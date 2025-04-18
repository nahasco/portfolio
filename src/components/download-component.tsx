"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowDownToLineIcon } from "lucide-react"
import { useOnClickOutside } from "usehooks-ts"
import { AnimatePresence, motion, MotionConfig } from "motion/react"

function DownloadComponent() {
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
    }, [open])

    function handleDownload(lang: "en" | "de") {
        const url = lang === "en" ? "/Resume_Mohamed_Alnahhas.pdf" : "/Lebenslauf_Mohamed_Alnahhas.pdf"
        const title = lang === "en" ? "Resume-Mohamed-Alnahhas" : "Lebenslauf-Mohamed-Alnahhas"

        const link = document.createElement("a")
        link.href = url
        link.download = title
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setOpen(false)
    }

    return (
        <MotionConfig transition={{ type: "spring", bounce: 0.27, duration: 0.5 }}>
            <motion.button
                layoutId="popover"
                className="relative w-fit flex items-center bg-primary p-3 text-primary-foreground"
                onClick={() => setOpen(true)}
                style={{ borderRadius: 15 }}
            >
                <motion.div layoutId="icon">
                    <ArrowDownToLineIcon className="me-2 w-4 h-4" />
                </motion.div>
                <motion.span layoutId="label">Resume(CV)</motion.span>
            </motion.button>
            <AnimatePresence>
                <div className="relative flex align-start justify-start text-start">
                    {open ? (
                        <motion.div
                            layoutId="popover"
                            ref={ref}
                            className="absolute bottom-0 flex flex-col gap-2 bg-primary p-4 w-full md:w-[200px]"
                            style={{ borderRadius: 15 }}
                        >
                            <div className="flex items-center text-primary-foreground">
                                <motion.div layoutId="icon" style={{ opacity: 0, width: 0 }}>
                                    <ArrowDownToLineIcon className="me-2 w-4 h-4" />
                                </motion.div>
                                <motion.span layoutId="label">Resume(CV)</motion.span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 1 }}
                                className="flex flex-col gap-2"
                            >
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
                            </motion.div>
                        </motion.div>
                    ) : null}
                </div>
            </AnimatePresence>
        </MotionConfig>
    )
}

export default DownloadComponent
