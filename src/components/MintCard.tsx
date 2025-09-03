"use client";

import React from "react";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { NFTMintButton } from "~/components/nft-mint-button";
import { Badge } from "~/components/ui/badge";
import { ExternalLink } from "lucide-react";

export interface CardData {
  id: string;
  title: string;
  description: string;
  language: string;
  cost: string;
  website: string;
  gradient: string;
}

interface MintCardProps {
  card: CardData;
  contractAddress: string;
  isActive?: boolean;
}

export function MintCard({ card, contractAddress, isActive = false }: MintCardProps) {
  return (
    <Card className={`relative overflow-hidden transform transition-all duration-500 ${
      isActive ? 'scale-105 shadow-2xl' : 'scale-95 opacity-70'
    }`}>
      <div 
        className={`absolute inset-0 ${card.gradient} opacity-90`}
        style={{
          background: card.gradient,
        }}
      />
      <CardContent className="relative z-10 p-6 text-white min-h-[400px] flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold leading-tight">{card.title}</h2>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {card.cost}
            </Badge>
          </div>
          
          <p className="text-white/90 leading-relaxed">{card.description}</p>
          
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              {card.language}
            </Badge>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20 p-2"
              asChild
            >
              <a 
                href={`https://${card.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-xs">{card.website}</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-6">
          <NFTMintButton
            contractAddress={contractAddress as `0x${string}`}
            network="ethereum"
            buttonText={`Mint ${card.title} Card`}
            className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-white font-semibold"
            variant="outline"
          />
        </div>
      </CardContent>
    </Card>
  );
}