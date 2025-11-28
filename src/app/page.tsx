"use client";

import React from "react";
import { useState } from "react";
import LogoStrip from "../app/components/logoStrip";
import FreeSignForm from "./components/freeSignForm"
import FreeSignFormNoUrl from "./components/freeSignFormNoUrl"
import WhatWeMeasure from "./components/whatWeMeasure";
import ScrollSectionNew from "./components/scrollSectionNew";
import { Globe } from 'lucide-react'




export default function LandingPage() {

  const [url, setUrl] = useState("");
  const [showHeroForm, setShowHeroForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [formUrl, setFormUrl] = useState("");

  const openForm = (url: string) => {
    setFormUrl(url);
    setShowCardForm(true);
  };

  const handleStart = () => {
    if (url.trim()) setShowHeroForm(true);
  }



  const [showEmail, setShowEmail] = useState(false);


  return (
    <div className="bg-background-light font-display text-foreground-light">
      {/* Header */}
      <header className="">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-1">
            <div className="text-primary size-7">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">SpotRank</h2>
          </div>
          <div className="relative inline-block">
            <button className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-sm hover:opacity-90 transition-opacity"
              onClick={() => setShowEmail(!showEmail)}>
              Contact Us
            </button>

            <button className="md:hidden p-2 rounded-lg hover:bg-primary/20"
              onClick={() => setShowEmail(!showEmail)}>
              <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>

            {showEmail && (
              <div className="absolute top-full mt-2 right-0 md:right-auto bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow-md border border-gray-200 animate-fade-in"
                style={{ right: "0", maxWidth: "calc(100vw - 1rem)" }}>
                info@getspotrank.com
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-4xl text-white">
              Make Your Website<br /> Fluent in <span className="text-primary">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl">
              We are building the universal API layer for the Agent economy.<br /> Sign up to be the first to transform your site into an AI-native storefront.
            </p>
          </div>

          <div className="w-full max-w-xl">
            <form className="flex flex-col sm:flex-row w-full items-stretch sm:items-center gap-2 rounded-lg bg-white border border-border-light p-2 shadow-md">

              <div className="flex items-center px-2">
                <Globe className="text-gray-500" />
              </div>

              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your company’s URL"
                className="flex-1 border-none bg-transparent text-foreground-light focus:outline-none focus:ring-0 text-base px-2 py-2"
              />

              <button type="button" onClick={handleStart} disabled={!url} className="flex-shrink-0 sm:w-auto cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-sm hover:opacity-90 transition-opacity">
                Join Waitlist
              </button>
            </form>
          </div>

          {showHeroForm && <FreeSignForm preFilledUrl={url} onClose={() => setShowHeroForm(false)} />}
        </div>

        <LogoStrip />

        {/* Explainer Video */}
        <div className="flex flex-col items-center gap-6">
          <div
            className="relative w-full max-w-[1000px] aspect-video rounded-xl overflow-hidden shadow-lg group"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
              backgroundColor: "#1f1f1f"
            }}
          >
            <img
              alt="Explainer video thumbnail"
              className="absolute inset-0 w-full h-full object-cover"
              src="/chatscreen1.png"
            />
          </div>
        </div>

        {/* Features */}
        <div className="-mt-44 -md:mt-48 mb-16">
          <div className="flex flex-col justify-between h-full gap-12">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl md:text-8xl font-bold tracking-tight text-white">Designed to Help You Do More With <span className="text-primary">AI Agents</span></h2>
              <p className="text-lg text-white max-w-1xl mx-auto">
                Webfront acts as the universal translator between your beautiful<br /> human-centric website and the raw data needs of AI.
              </p>
            </div>
          </div>
        </div>

        <WhatWeMeasure />

        {showCardForm && <FreeSignFormNoUrl onClose={() => setShowCardForm(false)} />}
        <div className="-mt-40">
          <ScrollSectionNew />
        </div>


      </main>
    </div>
  )
};
