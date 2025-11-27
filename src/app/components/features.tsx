"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { LucideIcon, ArrowRight } from "lucide-react"


export interface FeatureItem {
    id: number
    title: string
    description: string
    icon: LucideIcon
}

/**
 * Props for the main carousel component.
 */
interface HorizontalScrollCarouselProps {
    items: FeatureItem[]
}

/**
 * Renders a single feature card within the horizontal scroll.
 */
const Card = ({ item }: { item: FeatureItem }) => {
    const Icon = item.icon
    return (
        <div className="group relative h-[500px] w-[400px] md:w-[600px] flex-shrink-0 overflow-hidden bg-white/60 backdrop-blur-md border border-gray-100 rounded-[2.5rem] p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:bg-white">
            {/* Decorative Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-pink-50/0 to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-sm text-orange-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-10 h-10" />
                </div>

                <h3 className="text-4xl font-serif font-medium text-gray-900 mb-6">{item.title}</h3>
                <p className="text-xl text-gray-500 leading-relaxed">{item.description}</p>
            </div>

            <div className="relative z-10 flex items-center text-base font-semibold text-gray-900 mt-auto cursor-pointer">
                Explore Feature <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </div>

            {/* Abstract Shape */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
        </div>
    )
}

const Features: React.FC<HorizontalScrollCarouselProps> = ({ items }) => {
    const targetRef = useRef<HTMLDivElement>(null)

    // Track scroll progress within the target container
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })

    // Transform vertical scroll progress (0 to 1) into a horizontal translation (X)
    // This value controls how far the inner content is translated horizontally.
    const x = useTransform(scrollYProgress, [0, 1], ["1%", `-${(items.length * 600 - window.innerWidth / 2)}px`])


    return (
        <section
            ref={targetRef}
            // h-[300vh] provides vertical space for the scroll effect to occur.
            className="relative h-[300vh] w-full"
        >
            {/* Sticky container pins the content to the viewport while scrolling */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-8 pl-8 md:pl-20"
                >
                    {items.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export { Features }