"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import FreeSignFormNoUrl from "./freeSignFormNoUrl";

export function ScrollSection() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white">
                            We're Building the Future of AI Visibility <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Get Early Access
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src="/jsonss.png"
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />

                <button
                    onClick={() => setOpen(true)}
                    className="fixed inset-0 flex items-center justify-center pointer-events-none"
                >
                    <span className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-xl pointer-events-auto hover:opacity-90 transition">
                        Join Waitlist
                    </span>
                </button>
            </ContainerScroll>
            {open && (
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
                    

                        <FreeSignFormNoUrl onClose={() => setOpen(false)} />
                    
                </div>
            )}

        </div>
    );
}

export default ScrollSection;