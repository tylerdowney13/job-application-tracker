"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize");
  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto-max-w-6xl">
          {/* TABS */}
          <div className="flex gap-2 justify-center b-8">
            <Button
              onClick={() => setActiveTab("organize")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors 
                    ${activeTab == "organize" && "bg-blue-500"} `}
            >
              Organize Applications
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab == "hired" && "bg-blue-500"} `}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab("manage")}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab == "manage" && "bg-blue-500"} `}
            >
              Manage Boards
            </Button>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border mt-2 border-gray-200 shadow-xl">
          {activeTab === "organize" && (
            <Image
              src="/hero-images/hero1.png"
              alt="Organize Applications"
              width={1200}
              height={800}
            />
          )}
          {activeTab === "hired" && (
            <Image
              src="/hero-images/hero2.png"
              alt="Get Hired"
              width={1200}
              height={800}
            />
          )}
          {activeTab == "manage" && (
            <Image
              src="/hero-images/hero3.png"
              alt="Manage Boards"
              width={1200}
              height={800}
            />
          )}
        </div>
      </div>
    </section>
  );
}
