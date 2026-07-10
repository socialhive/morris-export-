import SectionLayout from "@/components/SectionLayout";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">History & <br/>Credentials</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Since 1942, Morris Export Services has been the backbone of Gulf Coast industrial logistics, blending old-world craftsmanship with modern infrastructure.
          </p>
        </div>
      </section>

      <SectionLayout title="Our Legacy" subtitle="Established 1942">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-zinc-400 text-lg leading-relaxed">
              Steeped in history dating back to our establishment in 1942, we have successfully blended old world craftsmanship with today&apos;s modern technology to generate the best service in the packing industry.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Morris Export leads industry standards by retaining the most experienced employees in the sector. With over 80 years of operational experience, we&apos;ve gained knowledge and craftsmanship that no other packer can compete with.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-zinc-800">
              <div>
                <div className="text-4xl font-black text-white mb-2">80+</div>
                <div className="text-xs font-bold text-morris-blue uppercase tracking-widest">Years in Operation</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">3rd</div>
                <div className="text-xs font-bold text-morris-blue uppercase tracking-widest">Generation Leadership</div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] border border-zinc-800 bg-zinc-900 p-2" />
        </div>
      </SectionLayout>

      <SectionLayout title="Craftsmanship, Experience & Technology" subtitle="Why We Lead">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-10">
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Morris Export Services is steeped in history, dating back to our establishment in 1942. We have successfully blended old-world craftsmanship with today&apos;s modern technology to deliver the best service in the packing industry.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Morris Export is able to lead industry standards by employing some of the most experienced professionals in the packing industry. With nearly 80 years of experience, we&apos;ve developed the knowledge and craftsmanship that no other packer can match.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Essential to our process, we also pride ourselves on our software and technological development. Our proprietary software, designed to work with any ERP system, gives you full transparency of our packing process. We encourage full access to our shared system.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10">
            <div className="text-morris-red font-black uppercase tracking-[0.2em] text-sm mb-6">
              Software Integration
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-6">
              Full visibility from packing to shipment.
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Our systems provide real-time transparency and seamless coordination for customers who need confidence at every step of the process.
            </p>
            <a
              href="mailto:sales@morrisexport.com"
              className="inline-flex items-center bg-morris-red hover:bg-red-700 text-white px-6 py-3 font-black uppercase tracking-widest text-sm transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout dark title="Operational Scale" subtitle="Assets & Infrastructure">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          <div className="bg-zinc-900 p-10">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Facilities</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-morris-red block"></span> 250,000 Sq Ft Warehouse Space</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-morris-red block"></span> 20 Acres Paved Concrete Staging</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-morris-red block"></span> Climate Controlled Zones</li>
            </ul>
          </div>
          <div className="bg-zinc-900 p-10">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Lifting</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-morris-blue block"></span> 140,000 lbs Max Forklift Capacity</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-morris-blue block"></span> Overhead Crane Systems</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-morris-blue block"></span> Specialized Rigging Teams</li>
            </ul>
          </div>
          <div className="bg-zinc-900 p-10">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Transport</h3>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-500 block"></span> Private Heavy Haul Fleet</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-500 block"></span> Escort & Permitting Services</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-zinc-500 block"></span> Port Drayage Operations</li>
            </ul>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
