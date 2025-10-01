import { Link } from "react-router-dom";
import { ArrowRight, Zap, Globe, Database, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: Zap,
      title: "Automation & Tools",
      description: "Automate routine tasks and improve productivity with intelligent chatbots, workflow automation, and data-driven insights.",
      link: "/automation",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Build responsive, professional websites and online stores that attract and engage customers with modern design.",
      link: "/websites",
    },
    {
      icon: Database,
      title: "Data Services",
      description: "Collect, clean, and analyze data to make better business decisions with comprehensive data management solutions.",
      link: "/data-services",
    },
  ];

  const reasons = [
    "Fast and professional delivery",
    "Quality control at every step",
    "Solutions tailored to your business needs",
    "Budget-friendly pricing options",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-hero opacity-10" />
          <div className="absolute -inset-40 mesh-overlay" />
          <div className="absolute inset-0 bg-pattern-dots opacity-20" />
          {/* Geometric shapes */}
          <svg className="absolute top-20 left-10 w-64 h-64 opacity-30 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(195 60% 65% / 0.6)" />
                <stop offset="100%" stopColor="hsl(48 100% 60% / 0.6)" />
              </linearGradient>
            </defs>
            <polygon points="100,10 190,190 10,190" fill="url(#gradA)" />
          </svg>
          <svg className="absolute bottom-10 -right-10 w-72 h-72 opacity-25 animate-spin-slow" style={{ animationDelay: '1.5s' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(195 60% 65% / 0.4)" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(48 100% 60% / 0.4)" strokeWidth="2" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="hsl(195 60% 65% / 0.4)" strokeWidth="2" />
          </svg>
          <svg className="absolute top-1/3 right-1/3 w-40 h-40 opacity-20 animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="160" height="160" rx="24" ry="24" fill="none" stroke="hsl(195 60% 65% / 0.35)" strokeWidth="2" />
          </svg>
          {/* Additional particles */}
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className={`absolute w-2 h-2 rounded-full shadow-glow ${
                i % 2 === 0 ? "bg-primary/80" : "bg-secondary/80"
              }`}
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animation: `float ${6 + (i % 5)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.9,
              }}
            />
          ))}
          {/* Orbiting dots around center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-40 h-40">
              <span className="absolute left-1/2 top-1/2 block w-2 h-2 rounded-full bg-primary shadow-glow animate-orbit" />
              <span className="absolute left-1/2 top-1/2 block w-2 h-2 rounded-full bg-secondary shadow-glow animate-orbit" style={{ animationDuration: '16s' }} />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in font-['Poppins']">
              Practical Solutions to{" "}
              <span className="text-gradient">Grow Your Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
              We provide automation, website, and data services that help businesses save time, stay organized, and make informed decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow transition-all duration-300 hover:scale-105 group"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </Link>
              
              <a href="#services">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300"
                >
                  Explore Services
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Poppins']">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From websites to data management, we deliver practical solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Poppins']">
                Why Choose Stryde?
              </h2>
              <p className="text-xl text-muted-foreground">
                Practical, reliable services designed to help your business run smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <p className="text-lg text-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
