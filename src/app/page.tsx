"use client";

import React from "react";
import { useState } from "react";
import LogoStrip from "../app/components/logoStrip";
import FaqComponent from "../app/components/faqComponent";
import SpotRankCards from "../app/components/spotRankCards";
import ComparisionSection from "./components/comparisionSection";
import FreeSignForm from "./components/freeSignForm"
import FreeSignFormNoUrl from "./components/freeSignFormNoUrl"




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
            <h2 className="text-xl font-bold">SpotRank</h2>
          </div>
          <div className="relative inline-block">
            <button className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-sm hover:opacity-90 transition-opacity"
              onClick={() => setShowEmail(!showEmail)}>
              Ota yhteyttä
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
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-4xl">
              Näy paremmin tekoälylle <br /> <span className="text-primary">SpotRank</span>in avulla
            </h1>
            <p className="text-lg md:text-xl text-subtle-light max-w-3xl">
              Testaa yrityksesi näkyvyys veloituksetta – ja selvitä, kuinka todennäköisesti ChatGPT, Google ja muut AI-hakukoneet suosittelevat brändiäsi.
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <form className="flex flex-col sm:flex-row w-full items-stretch sm:items-center gap-2 rounded-lg bg-white border border-border-light p-2 shadow-md">

              <div className="flex items-center px-2">
                <svg className="text-subtle-light dark:text-subtle-dark" fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>

              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Syötä yrityksesi URL"
                className="flex-1 border-none bg-transparent text-foreground-light focus:outline-none focus:ring-0 text-base px-2 py-2"
              />

              <button type="button" onClick={handleStart} disabled={!url} className="flex-shrink-0 sm:w-auto cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-sm hover:opacity-90 transition-opacity">
                Aloita nyt
              </button>
            </form>
          </div>

          {showHeroForm && <FreeSignForm preFilledUrl={url} onClose={() => setShowHeroForm(false)} />}
        </div>

        <LogoStrip />

        <ComparisionSection />

        {/* Features */}
        <div className="mt-8 md:mt-12 mb-16">
          <div className="flex flex-col justify-between h-full gap-12">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vie näkyvyytesi seuraavalle tasolle</h2>
              <p className="text-lg text-subtle-light max-w-1xl mx-auto">
                SpotRank yhdistää älykkäät työkalut, joilla kehität näkyvyyttäsi tekoälyssä ja erotut kilpailijoista.
              </p>
            </div>
          </div>
        </div>

        <SpotRankCards openForm={() => setShowCardForm(true)} />

        {showCardForm && <FreeSignFormNoUrl onClose={() => setShowCardForm(false)} />}
        


        <FaqComponent />

        {/* Explainer Video
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Watch Our Explainer Video</h2>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg group">
            <img
              alt="Explainer video thumbnail"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="/video-thumbnail.jpg"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="flex items-center justify-center size-20 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                <svg fill="currentColor" height="40px" viewBox="0 0 256 256" width="40px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        */}
      </main>
    </div>
  )
};
