import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Search, Menu, Info, Laptop, ChevronRight } from "lucide-react";
import { docsContent, categoryIcons } from "@/data/docsData";

export default function DocsPage() {
  const { slug } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState("welcome");

  // Filter docs for sidebar
  const filteredDocs = docsContent.map(cat => ({
    ...cat,
    items: cat.items.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(cat => cat.items.length > 0);

  // Scroll to section when clicking sidebar link
  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSlug(slug);
      setSidebarOpen(false);

      // Update URL without reloading if not already matching
      if (window.location.pathname !== `/docs/${slug}`) {
        window.history.pushState({}, "", `/docs/${slug}`);
      }
    }
  };

  // Scroll to slug on mount
  useEffect(() => {
    if (slug) {
      setTimeout(() => {
        scrollToSection(slug);
      }, 100); // Small delay to ensure rendering
    }
  }, [slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    docsContent.forEach(cat => {
      cat.items.forEach(item => {
        const element = document.getElementById(item.slug);
        if (element) observer.observe(element);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden p-4 border-b border-slate-200 bg-white flex items-center justify-between sticky top-[80px] z-20 shadow-sm">
        <span className="font-bold text-[#6f42c1]">ESKOOLIA DOCS</span>
        <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-md transition-colors">
          <Menu className="h-5 w-5 text-slate-600" />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden backdrop-blur-sm transition-opacity" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-[calc(100vh-80px)] lg:sticky lg:top-[80px] overflow-y-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} shadow-lg lg:shadow-none`}>
        <div className="p-4 flex flex-col h-full">
          {/* Logo Area */}
          <div className="mb-6 px-2 flex items-center gap-2 lg:hidden">
            <div className="h-8 w-8 bg-gradient-to-br from-[#6f42c1] to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">E</div>
            <span className="font-extrabold text-lg text-slate-800 tracking-tight">ESKOOLY</span>
          </div>

          <div className="mb-6 relative group">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 group-focus-within:text-[#6f42c1] transition-colors" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#6f42c1] transition-all placeholder:text-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <nav className="flex-1 space-y-6 pb-20 pr-2">
            {filteredDocs.map((category, idx) => {
              const Icon = categoryIcons[category.category] || Info;
              const isCategoryActive = category.items.some(item => item.slug === activeSlug);

              return (
                <div key={idx} className="group/category">
                  <div className="px-2 mb-2 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <Icon className="h-3.5 w-3.5" />
                    <span>{category.category}</span>
                  </div>

                  <div className="space-y-0.5 border-l border-slate-100 ml-3.5 pl-2 relative">
                    {/* Active line indicator */}
                    <div className={`absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#6f42c1] transition-all duration-300 origin-top ${isCategoryActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} />

                    {category.items.map(item => (
                      <button
                        key={item.slug}
                        onClick={() => scrollToSection(item.slug)}
                        className={`w-full text-left px-3 py-1.5 text-[13px] font-medium rounded-md transition-all duration-200 flex items-center justify-between group/item ${activeSlug === item.slug
                          ? "text-[#6f42c1] bg-purple-50"
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                          }`}
                      >
                        <span className="truncate">{item.title}</span>
                        {activeSlug === item.slug && <ChevronRight className="h-3 w-3 opacity-50" />}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 bg-white lg:bg-slate-50">
        <div className="max-w-full mx-auto px-4 py-8 lg:px-8 lg:py-12 pb-32">

          <div className="space-y-12">
            {docsContent.map((cat, catIdx) => (
              <div key={catIdx}>
                {cat.items.map((item, itemIdx) => (
                  <div key={item.slug} id={item.slug} className="scroll-mt-32 mb-12 last:mb-0">

                    {item.slug === 'welcome' ? (
                      // Special rendering for Welcome section
                      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-12 text-center transition-all hover:shadow-md">
                        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#6f42c1] prose-a:no-underline hover:prose-a:underline">
                          <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                      </section>
                    ) : (
                      // Standard rendering for other sections
                      <div className="group">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                          <div className="h-8 w-1 bg-[#6f42c1] rounded-full"></div>
                          <h1 className="text-2xl font-bold tracking-tight text-slate-800">{item.title}</h1>
                        </div>

                        <section className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden transition-all duration-300 hover:shadow-md p-6 lg:p-8">
                          <article className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-[#6f42c1]">
                            <div className="text-sm leading-7 space-y-4" dangerouslySetInnerHTML={{ __html: item.content }} />

                            {/* Screenshot Placeholder - Only show if content implies visual context or for major sections */}
                            {/* {['dashboard-overview', 'student-admission', 'collect-fees'].includes(item.slug) && (
                              <div className="mt-8 mb-4 border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                                <div className="aspect-[16/9] flex flex-col items-center justify-center text-slate-400 bg-slate-100/50">
                                  <div className="p-4 bg-white rounded-full shadow-sm mb-3">
                                    <Laptop className="h-6 w-6 text-slate-300" />
                                  </div>
                                  <p className="font-semibold text-xs uppercase tracking-wider text-slate-400">Application Screenshot</p>
                                </div>
                              </div>
                            )} */}
                          </article>
                        </section>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
