import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Check, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CONTACT_VIDEO_SRC = new URL("../../../attached_assets/JJL.mp4", import.meta.url).href;

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  projectType: z.string().min(1, "Please select a project type"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budgetRange: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit");
      }
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Let's Build Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your vision into reality? Get in touch with our team of
              experts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden glass-strong h-[500px]">
                <video
                  id="contact-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={CONTACT_VIDEO_SRC}
                />
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => {
                      const video = document.getElementById('contact-video') as HTMLVideoElement;
                      if (video) {
                        if (video.paused) {
                          video.play();
                        } else {
                          video.pause();
                        }
                      }
                    }}
                    className="px-4 py-2 glass-strong rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                    aria-label="Play/Pause video"
                    data-testid="button-video-control"
                  >
                    Play/Pause
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-strong rounded-2xl p-8"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Thank You!</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="glass border-border"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                              className="glass border-border"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Acme Inc."
                              {...field}
                              className="glass border-border"
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="glass border-border" data-testid="select-project-type">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="ai-mvp">AI MVP Development</SelectItem>
                              <SelectItem value="vr-ar">VR/AR Experience</SelectItem>
                              <SelectItem value="automation">Custom Automation</SelectItem>
                              <SelectItem value="consulting">Consulting</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budgetRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="glass border-border" data-testid="select-budget">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="<50k">Less than $50K</SelectItem>
                              <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                              <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                              <SelectItem value=">250k">More than $250K</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="glass border-border min-h-[120px]"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      data-testid="button-submit"
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-6"
            >
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:info@hiphen.ai"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@hiphen.ai
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-6"
            >
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+14378891457"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (437) 889-1457
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-6"
            >
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">
                Ontario, Canada
                <br />
                Proudly Canadian 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-strong rounded-xl p-6"
            >
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Mon - Fri: 9AM - 6PM EST
                <br />
                Weekend: By Appointment
              </p>
            </motion.div>
          </div>

      
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
