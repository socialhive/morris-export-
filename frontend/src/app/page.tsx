import Image from "next/image";
import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";
import ServiceCard from "@/components/ServiceCard";
import { ShieldCheck, Anchor, Truck, Warehouse, CheckCircle2, ArrowRight, PackageCheck, Boxes, HardHat, Building2, BadgeCheck, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/warehousemanagement/warehousepackaging2.webp"
            alt="Industrial Logistics"
            fill
            className="object-cover object-center grayscale-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 mb-8">
              <span className="w-2 h-2 rounded-full bg-morris-red animate-pulse"></span>
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Active Operations</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Engineered <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">For Global</span> <br/>
              Transit
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 font-medium">
              The largest and oldest export packer on the Gulf Coast. Asset-based logistics, specialized crating, and heavy-haul operations built for the world&apos;s toughest industrial challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-morris-red hover:bg-red-700 text-white px-8 py-4 font-black uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2 group">
                Start Your Project
              </Link>
              <Link href="/services" className="bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white px-8 py-4 font-black uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2">
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="hidden lg:block absolute bottom-12 right-12 z-20">
          <div className="grid grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 shadow-2xl">
            <div className="bg-zinc-950 p-6 w-48">
              <div className="text-4xl font-black text-white mb-1">80+</div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="bg-zinc-950 p-6 w-48">
              <div className="text-4xl font-black text-white mb-1">250K</div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Sq Ft Facilities</div>
            </div>
            <div className="bg-zinc-950 p-6 w-48">
              <div className="text-4xl font-black text-white mb-1">140K</div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Lbs Lift Capacity</div>
            </div>
            <div className="bg-zinc-950 p-6 w-48">
              <div className="text-4xl font-black text-white mb-1">24/7</div>
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Operational Support</div>
            </div>
          </div>
        </div>
      </section>

      <SectionLayout dark title="U.S. Customs BONDED Warehouse & Trucking" subtitle="Premium Compliance & Control Solutions">
        <div className="border-2 border-morris-red bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
            <div className="lg:w-1/4 flex items-start justify-center">
              <div className="w-full max-w-[240px] rounded-3xl border-2 border-morris-red bg-zinc-950 p-4">
                <Image
                  src="/images/bonded.png"
                  alt="Bonded warehouse"
                  width={240}
                  height={240}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="lg:w-3/4">
              <p className="text-sm md:text-base text-white font-black uppercase tracking-wide max-w-3xl leading-relaxed mb-8">
                Morris Export is a trusted U.S. Customs BONDED warehouse with private bonded trucking.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-morris-red/50 bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors">
                  <h3 className="text-morris-red font-black uppercase tracking-wide text-sm mb-3">Customs Supervision</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Cargo can be stored under U.S. Customs control with documented chain-of-custody and compliance workflows.</p>
                </div>
                <div className="border border-morris-red/50 bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors">
                  <h3 className="text-morris-red font-black uppercase tracking-wide text-sm mb-3">Bonded Trucking</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Private fleet for bonded transport under Customs supervision, enabling seamless material movement in compliant status.</p>
                </div>
                <div className="border border-morris-red/50 bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors">
                  <h3 className="text-morris-red font-black uppercase tracking-wide text-sm mb-3">Duty Deferral & Storage</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Import duties deferred while freight remains in bonded status, with secure climate-controlled staging areas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Why Choose Us */}
      <SectionLayout dark title="Infrastructure & Capacity" subtitle="Why Choose Us">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8"/>, title: "Asset-Based", desc: "We own our facilities, fleets, and equipment for total control." },
            { icon: <Anchor className="w-8 h-8"/>, title: "Port Proximate", desc: "Strategic locations near major Gulf Coast shipping channels." },
            { icon: <Warehouse className="w-8 h-8"/>, title: "Bonded Storage", desc: "Secure, climate-controlled, and foreign trade zone capabilities." },
            { icon: <Truck className="w-8 h-8"/>, title: "Heavy Haul Fleet", desc: "Private fleet capable of transporting extreme dimensions." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-16 h-16 bg-zinc-950 flex items-center justify-center text-morris-blue mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Services Overview */}
      <SectionLayout title="Comprehensive Logistics & Transportation" subtitle="What We Do">
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-10">
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              At Morris Export Services, we provide comprehensive logistics and transportation solutions tailored to your operation. From export packing and crating to heavy-duty warehousing and specialized trucking, our team helps move your cargo safely and efficiently from the Port of Houston and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Export Packing & Crating", desc: "Secure packing and crating for ocean or air freight." },
                { title: "Onsite Packing", desc: "Professional packing services delivered at your location." },
                { title: "Container Stuffing & Transloading", desc: "Expert loading, blocking, bracing, and unloading for efficient cargo movement." },
                { title: "Drayage & Out of Gauge Trucking", desc: "Reliable service for oversized, heavy, and specialized loads." },
                { title: "Warehousing & Storage", desc: "Indoor, climate-controlled, and outdoor storage options." },
                { title: "Hazmat Handling", desc: "Storage, packing, and drayage capabilities for hazardous materials." }
              ].map((item) => (
                <div key={item.title} className="border border-zinc-800 bg-zinc-900/70 p-5">
                  <h3 className="text-white font-black uppercase tracking-wider text-sm mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-morris-red/10 via-zinc-950 to-zinc-950 border border-morris-red/30 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-morris-red font-black uppercase tracking-[0.2em] text-sm mb-6">
                <PackageCheck className="w-5 h-5" />
                Proven Experience
              </div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-6">
                Trusted by manufacturers, energy operators, and global shippers.
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                With more than 40 years of experience, we bring dependable execution, heavy-lift capability, and tailored support to every shipment.
              </p>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-start gap-3"><BadgeCheck className="w-5 h-5 text-morris-red mt-0.5" /><span>Secure handling for delicate, oversized, and mission-critical cargo.</span></div>
              <div className="flex items-start gap-3"><BadgeCheck className="w-5 h-5 text-morris-red mt-0.5" /><span>Flexible material handling, forklift rental, and warehouse relocation support.</span></div>
              <div className="flex items-start gap-3"><BadgeCheck className="w-5 h-5 text-morris-red mt-0.5" /><span>Onsite experts ready to protect your freight from loading to delivery.</span></div>
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-morris-red transition-colors">
              Request a Quote <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout dark title="Where We Excel" subtitle="Specialized Capabilities">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="w-7 h-7" />,
              title: "Wrap Protection",
              desc: "Protective wrapping helps prevent damage during transport for fragile, delicate, and high-value products."
            },
            {
              icon: <HardHat className="w-7 h-7" />,
              title: "Onsite Export Packing",
              desc: "Our team travels to client facilities to package and prepare bulky or difficult-to-move equipment for shipment."
            },
            {
              icon: <Building2 className="w-7 h-7" />,
              title: "Facilities & Warehouse Management",
              desc: "Our Houston facility combines export packing, secure storage, and warehouse management in one reliable operation."
            }
          ].map((item) => (
            <div key={item.title} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-morris-red/40 transition-colors">
              <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-morris-red mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionLayout>

      <SectionLayout title="Reliable Export Packing, Freight Shipping & Warehouse Management" subtitle="Why Morris Export Services">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-10">
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Our goal is to support manufacturers and industrial companies that need a dependable partner for international shipping, export preparation, and secure storage. We work closely with each client to develop tailored solutions that meet their schedule, budget, and compliance needs.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Custom Solutions', 'Global Reach', 'Responsive Support', 'Operational Excellence'].map((tag) => (
                <span key={tag} className="px-4 py-2 border border-zinc-700 bg-zinc-900 text-sm font-bold uppercase tracking-wider text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10">
            <div className="flex items-center gap-3 text-morris-red font-black uppercase tracking-[0.2em] text-sm mb-6">
              <Boxes className="w-5 h-5" />
              Built for complex cargo
            </div>
            <ul className="space-y-4">
              {[
                "Experienced professionals with state-of-the-art facilities and equipment.",
                "Flexible support for equipment exports, project cargo, and warehouse management.",
                "A trusted partner for safe handling, secure staging, and freight shipping coordination."
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-morris-red mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 bg-morris-red hover:bg-red-700 text-white px-6 py-3 font-black uppercase tracking-widest text-sm transition-colors">
              Explore Capabilities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout title="Core Operations" subtitle="Our Services">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Export Packing & Crating"
            description="Custom engineered wooden crates, vapor barrier packaging, and ISPM-15 certified materials for global compliance."
            image="/images/crating/customcrating.webp"
            link="/services#crating"
          />
          <ServiceCard 
            title="Heavy Assets & Breakbulk"
            description="Specialized lifting, securing, and transloading of oversized industrial machinery and energy infrastructure."
            image="/images/crane/img1-1.jpg.webp"
            link="/services#heavy"
          />
          <ServiceCard 
            title="Warehousing & Storage"
            description="Short and long-term secure storage, inventory management, and staging for complex project cargo."
            image="/images/facilitiesstorage/Secure Facilities.webp"
            link="/services#warehousing"
          />
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-morris-blue transition-colors">
            View All Capabilities <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </SectionLayout>

      {/* Success Stories Preview */}
      <SectionLayout dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-morris-red font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-morris-red"></span>
              Success Stories
            </h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
              Proven <br/> Performance
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              From relocating entire manufacturing facilities to shipping delicate aerospace components, our track record speaks for itself. We engineer solutions for the most complex logistical challenges.
            </p>
            <ul className="space-y-4 mb-10">
              {['Energy & Petrochemical', 'Aerospace & Defense', 'Manufacturing', 'Construction'].map(industry => (
                <li key={industry} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-morris-blue" />
                  <span className="text-zinc-300 font-bold uppercase tracking-wider text-sm">{industry}</span>
                </li>
              ))}
            </ul>
            <Link href="/success-stories" className="bg-white text-zinc-950 px-8 py-4 font-black uppercase tracking-widest inline-block hover:bg-zinc-200 transition-colors">
              Read Case Studies
            </Link>
          </div>
          <div className="relative h-[600px] border border-zinc-800">
            <Image 
              src="/images/containerization/container1.webp"
              alt="Project Cargo"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-zinc-950/90 backdrop-blur-md p-6 border border-zinc-800">
                <h4 className="text-white font-black uppercase tracking-tight text-xl mb-2">Project: Delta Refinery</h4>
                <p className="text-zinc-400 text-sm">Transloaded and secured 40+ oversized units for maritime transport.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
