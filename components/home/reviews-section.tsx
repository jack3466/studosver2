"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { HolographicCard } from "@/components/HolographicCard"
import { CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Nagamani Y",
    date: "3 weeks ago",
    text: "The ICET/EAMCET application process was handled with great professionalism and accuracy. The document verification was clearly explained, and every step was completed efficiently. I truly appreciated the organized and reliable service provided. Highly recommend.",
    rating: 5,
  },
  {
    name: "Harsha Duddukuri",
    date: "3 weeks ago",
    text: "I had a great experience with StueHub while applying for ICET. They guided me through every step of the application, clarified all my doubts, and made the whole process really easy and stress-free. Their support was quick, friendly, and very helpful.",
    rating: 5,
  },
  {
    name: "AKUMALLA RESHMA",
    date: "a day ago",
    text: "I felt so happy after seeing my CV. It was extremely good 💯. Even on holidays, they are doing work as per client requirements. It shows their HARDWORK. Thanks to STUEHUB🙏.",
    rating: 5,
  },
  {
    name: "vkr goud",
    date: "3 weeks ago",
    text: "I sincerely appreciate your dedicated support and expert advice in helping students achieve their academic goals. Your transparency, patience, and step-by-step guidance make your STUEHUB highly trustworthy and reliable.",
    rating: 5,
  },
  {
    name: "Harshini Naidu",
    date: "3 weeks ago",
    text: "This is a great initiative focused on supporting student needs with useful and affordable services. Their dedication and student-friendly approach make them highly reliable and recommendable",
    rating: 5,
  },
  {
    name: "Pramila",
    date: "6 days ago",
    text: "I had a nice experience with Stuehub. They instantly responded to my message. They help with the online errors of the students. Highly recommended!!",
    rating: 5,
  },
  {
    name: "nagasai kanamarlapudi",
    date: "3 weeks ago",
    text: "Easy to understand the location. The service was too good, friendly behaviour, good guidance",
    rating: 5,
  },
  {
    name: "Sainadh Chandaluri",
    date: "3 weeks ago",
    text: "Had experienced a good and pleasant service I want to prefer this one",
    rating: 5,
  },
]

export function ReviewsSection() {
  // We duplicate the array to allow for a seamless infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Students Say</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from the students we've helped achieve their academic and professional goals.
          </p>
        </div>

        <div className="relative flex w-full flex-col gap-8">
          <div className="flex w-[200%] gap-6 animate-marquee-slower overflow-visible">
            <motion.div 
              className="flex w-fit gap-6 shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              <div className="flex w-full min-w-max gap-6 shrink-0">
                {duplicatedReviews.map((review, index) => (
                  <div key={`${review.name}-${index}`} className="w-[85vw] sm:w-[350px] shrink-0">
                    <HolographicCard className="h-full">
                      <CardContent className="p-6 flex flex-col h-full bg-card/40 backdrop-blur-sm border border-white/10 rounded-xl relative z-20">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary border border-primary/30">
                            {review.name.charAt(0)}
                          </div>
                          <div className="min-w-0 pr-4">
                            <h3 className="font-semibold text-sm truncate">{review.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex text-yellow-500">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed flex-grow italic">"{review.text}"</p>
                      </CardContent>
                    </HolographicCard>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
