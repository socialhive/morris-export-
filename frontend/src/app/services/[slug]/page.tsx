import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Boxes, PackageCheck } from "lucide-react";
import { findServiceBySlug, serviceCategories } from "../services-data";

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return serviceCategories.flatMap((category) =>
    category.services.map((service) => ({ slug: service.slug }))
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const entry = findServiceBySlug(slug);

  if (!entry) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-morris-red mb-4">Service not found</p>
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-6">That service is not available yet.</h1>
          <Link href="/services" className="inline-flex items-center gap-2 text-morris-blue hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to services
          </Link>
        </div>
      </main>
    );
  }

  const { categoryTitle, service } = entry;

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="relative min-h-[42vh] flex items-center overflow-hidden border-b border-zinc-800">
        <Image
          src={service.image}
          alt={service.heroTitle || service.title}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-zinc-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" /> All services
          </Link>
          <p className="text-sm uppercase tracking-[0.3em] text-morris-red mb-4">{categoryTitle}</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-3xl">{service.heroTitle || service.title}</h1>
        </div>
      </section>

      <section className="bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed">{service.intro}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {service.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
                  <div className="mb-3 text-morris-red">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-white font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <div className="flex items-center gap-3 text-morris-red mb-6">
              <PackageCheck className="w-6 h-6" />
              <h2 className="text-xl font-black uppercase tracking-tight">Capabilities</h2>
            </div>
            <ul className="space-y-4">
              {service.capabilities.map((item) => (
                <li key={item} className="flex gap-3 text-zinc-300">
                  <Boxes className="w-5 h-5 mt-0.5 shrink-0 text-morris-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10">Frequently asked questions</h2>
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <summary className="cursor-pointer font-semibold text-white list-none">{item.question}</summary>
                <p className="mt-4 text-zinc-400 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
