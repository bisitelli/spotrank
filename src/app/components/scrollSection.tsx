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
                        <h1 className="text-4xl font-semibold text-black">
                            We're Building the Future of AI Visibility <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Get Early Access
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src="/screen.png"
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
                {open && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
                        <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-3 right-3 text-black text-xl"
                            >
                                ✕
                            </button>

                            <FreeSignFormNoUrl onClose={() => setOpen(false)}/>
                        </div>
                    </div>
                )}
            </ContainerScroll>
        </div>
    );
}

export default ScrollSection;