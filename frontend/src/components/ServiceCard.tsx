"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <Link href={link} className="group block">
      <motion.div 
        whileHover={{ y: -5 }}
        className="industrial-card overflow-hidden h-full flex flex-col group-hover:border-morris-blue/50 transition-colors duration-300"
      >
        <div className="relative h-48 sm:h-64 overflow-hidden bg-zinc-950">
          <Image 
            src={image} 
            alt={title} 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-zinc-950/10"></div>
          
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="inline-flex max-w-full rounded-full border border-white/20 bg-zinc-950/85 px-4 py-2 shadow-lg backdrop-blur-sm">
              <h3 className="text-sm sm:text-base font-black uppercase tracking-[0.2em] text-white break-words">{title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
            {description}
          </p>
          
          <div className="flex items-center text-xs font-bold uppercase tracking-widest text-morris-blue group-hover:text-white transition-colors">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
