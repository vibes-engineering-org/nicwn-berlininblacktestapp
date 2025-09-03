"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import { RotatingCards } from "~/components/RotatingCards";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Support Cards
          </h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Discover and mint cards for organizations providing support and resources
          </p>
        </div>
        
        <RotatingCards 
          contractAddress="0x98AFe7a8D28bBc88DCF41F8E06d97C74958A47dc"
          autoRotate={true}
          rotationInterval={5000}
        />
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
