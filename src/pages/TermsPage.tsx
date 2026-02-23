import PageHeader from "@/components/layout/PageHeader";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        title="Terms of Service"
        category="Legal"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12 space-y-8">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-8">
              <p className="text-sm text-blue-800 font-medium">Last updated: February 2026</p>
            </div>

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold text-[#483285]">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed">By accessing or using Eskoolia Pro, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.</p>
            </section>

            <hr className="border-slate-100" />

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold text-[#483285]">2. Use of Service</h2>
              <p className="text-slate-600 leading-relaxed">Eskoolia Pro provides school management software as a service. You are responsible for maintaining the confidentiality of your account credentials.</p>
            </section>

            <hr className="border-slate-100" />

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold text-[#483285]">3. Data Ownership</h2>
              <p className="text-slate-600 leading-relaxed">You retain all rights to your data. We do not sell or share your data with third parties for marketing purposes.</p>
            </section>

            <hr className="border-slate-100" />

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold text-[#483285]">4. Service Availability</h2>
              <p className="text-slate-600 leading-relaxed">We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance.</p>
            </section>

            <hr className="border-slate-100" />

            <section className="space-y-4">
              <h2 className="font-display text-xl font-bold text-[#483285]">5. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">Eskoolia Pro shall not be liable for any indirect, incidental, or consequential damages arising from use of the service.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
