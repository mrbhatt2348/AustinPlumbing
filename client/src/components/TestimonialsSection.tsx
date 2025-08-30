import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    title: "Austin Homeowner",
    initials: "SM",
    review: "Austin Pro Plumbing saved the day! Our water heater went out on a Sunday morning, and they had someone out within 2 hours. Professional, fair pricing, and excellent work. Highly recommend!",
  },
  {
    name: "Mike Johnson",
    title: "Business Owner",
    initials: "MJ",
    review: "We've used Austin Pro Plumbing for multiple projects over the years. They're always on time, clean up after themselves, and their prices are very reasonable. Our go-to plumbers!",
  },
  {
    name: "Lisa Wilson",
    title: "Cedar Park Resident",
    initials: "LW",
    review: "Professional service from start to finish. They explained everything clearly, provided upfront pricing, and completed the job perfectly. Will definitely call them again!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="testimonials-title">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-description">
            Don't just take our word for it. Here's what Austin homeowners and businesses have to say about our plumbing services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card rounded-xl p-8 shadow-lg border border-border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`testimonial-review-${index}`}>
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-title-${index}`}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
