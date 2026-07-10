import Link from "next/link";
import SectionLayout from "@/components/SectionLayout";

const faqs = [
  {
    question: "What services does Morris Export provide?",
    answer:
      "We provide export packing, custom crating, onsite packing, bonded warehousing, drayage, heavy-haul trucking, and project logistics support for industrial and commercial cargo.",
  },
  {
    question: "Do you handle oversized or out-of-gauge shipments?",
    answer:
      "Yes. Our team is experienced with heavy, oversized, and difficult-to-ship cargo and can coordinate specialized rigging, blocking, bracing, and transport planning.",
  },
  {
    question: "Is your facility bonded?",
    answer:
      "Yes. Morris Export operates as a U.S. Customs BONDED warehouse with compliant storage and transportation workflows for cargo under customs control.",
  },
  {
    question: "Can you pack equipment at our location?",
    answer:
      "Absolutely. We offer onsite packing services for equipment that cannot easily be moved or needs to be prepared for export in place.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can contact our team directly by phone or email, and we will review your cargo, destination, and schedule requirements to prepare a tailored solution.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-morris-red font-black uppercase tracking-[0.25em] text-sm mb-4">
              Frequently Asked Questions
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
              Answers for common shipping and packing needs
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              From bonded storage to export packing and heavy-haul support, these are the questions we hear most often from customers.
            </p>
          </div>
        </div>
      </section>

      <SectionLayout title="Common Questions" subtitle="What customers want to know">
        <div className="max-w-4xl space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
              <h2 className="text-xl font-black text-white uppercase tracking-tight mb-3">
                {item.question}
              </h2>
              <p className="text-zinc-400 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </SectionLayout>

      <SectionLayout dark title="Need a tailored solution?" subtitle="Let’s discuss your project">
        <div className="max-w-3xl rounded-3xl border border-morris-red/30 bg-zinc-950 p-8 md:p-10">
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Every shipment is different. Our team can help you determine the right packing, storage, and transportation approach for your equipment, schedule, and destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="inline-flex items-center justify-center bg-morris-red hover:bg-red-700 text-white px-6 py-3 font-black uppercase tracking-widest text-sm transition-colors">
              Explore Services
            </Link>
            <a href="mailto:sales@morrisexport.com" className="inline-flex items-center justify-center border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 font-black uppercase tracking-widest text-sm transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
