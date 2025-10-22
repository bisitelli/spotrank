"use client";

import React from "react";
import { useState } from "react";
import { analyzeCompany } from "../../lib/analyzeCompany";
import LogoStrip from "../app/components/logoStrip";
import FaqComponent from "../app/components/faqComponent";
import EmailForm from "../app/components/emailForm";
import SpotRankCards from "../app/components/spotRankCards";
import AIOSection from "./components/aioSection";
import ComparisionSection from "./components/comparisionSection";
import { CheckCircle } from "lucide-react";


export default function LandingPage() {
  const [company, setCompany] = useState("");
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [url, setUrl] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleStart = () => {
    if (url.trim()) setShowForm(true);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await analyzeCompany(company);
      setReport(data);
    } catch (err) {
      alert("Error fetching report");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
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
          <button className="hidden md:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-sm hover:opacity-90 transition-opacity">
            Ota yhteyttä
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-primary/20">
            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter max-w-4xl">
              Näy paremmin tekoälylle
            </h1>
            <p className="text-lg md:text-xl text-subtle-light max-w-3xl">
              Testaa yrityksesi näkyvyys veloituksetta – ja selvitä, kuinka todennäköisesti ChatGPT, Google ja muut AI-hakukoneet suosittelevat brändiäsi.
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <form className="flex flex-col sm:flex-row w-full items-stretch sm:items-center gap-2 rounded-lg bg-white dark:bg-background-dark border border-border-light dark:border-border-dark p-2 shadow-md">

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
                className="flex-1 border-none bg-transparent text-foreground-light dark:text-foreground-dark focus:outline-none focus:ring-0 text-base px-2 py-2"
              />

              <button type="button" onClick={handleStart} disabled={!url} className="flex-shrink-0 sm:w-auto cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-sm hover:opacity-90 transition-opacity">
                Aloita nyt
              </button>
            </form>
          </div>

          {showForm && <EmailForm preFilledUrl={url} onClose={() => setShowForm(false)} />}
        </div>

        <LogoStrip />

        <ComparisionSection />

        {/* Features */}
        <div className="mt-8 md:mt-12 mb-16">
          <div className="flex flex-col justify-between h-full gap-12">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vie näkyvyytesi seuraavalle tasolle</h2>
              <p className="text-lg text-subtle-light dark:text-subtle-dark max-w-1xl mx-auto">
                SpotRank yhdistää älykkäät työkalut, joilla kehität näkyvyyttäsi tekoälyssä ja erotut kilpailijoista.
              </p>
            </div>
          </div>
        </div>

        <SpotRankCards />

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
