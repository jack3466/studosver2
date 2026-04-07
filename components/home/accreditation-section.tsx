export function AccreditationSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background glow and blur */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-md z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent z-0" />
      
      {/* Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] dark:bg-black/[0.1] shadow-2xl backdrop-blur-xl p-10 md:p-14 flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 hover:border-white/20">
          
          {/* Subtle moving glow inside the card */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] opacity-60 pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-60 pointer-events-none" />

          <h3 className="text-sm font-bold tracking-[0.2em] text-muted-foreground/80 uppercase mb-8 relative z-10">
            Recognitions & Affiliations
          </h3>
          
          <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-500 mb-8 backdrop-blur-sm group">
            <img 
              src="/msme.png" 
              alt="MSME Logo" 
              className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl transition-transform group-hover:scale-105 duration-500"
            />
          </div>

          <p className="max-w-2xl text-foreground/80 text-sm md:text-base font-medium relative z-10 leading-relaxed">
            Recognized by the Government of India for our commitment to empowering students.
          </p>
        </div>
      </div>
    </section>
  )
}
