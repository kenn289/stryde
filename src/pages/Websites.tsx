import { Link } from "react-router-dom";
import { Layout, ShoppingCart, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Websites = () => {
  const services = [
    {
      icon: Layout,
      title: "Landing Pages & Multi-Page Sites",
      description: "Clean, responsive designs that look great on any device and convert visitors into customers.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Setup",
      description: "Quick and functional online stores with secure payment processing and inventory management.",
    },
    {
      icon: Code,
      title: "Tech Stack Expertise",
      description: "Built with modern technologies including WordPress, React, HTML/CSS for optimal performance.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in font-['Poppins']">
              Websites Designed to{" "}
              <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Multi-page websites, landing pages, and online stores built to attract and engage customers with modern, responsive design.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-['Poppins']">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Description */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 font-['Poppins']">
                Professional Websites That Drive Results
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In today's digital world, your website is often the first impression customers have of your business. We create professional, high-performing websites that not only look great but also drive real business results.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Responsive & Modern Design</h3>
                    <p>
                      Every website we build is fully responsive, ensuring a seamless experience across all devices - from desktop computers to smartphones and tablets.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">E-commerce Solutions</h3>
                    <p>
                      Launch your online store quickly with our e-commerce solutions. We handle everything from product catalogs to secure payment processing and order management.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Built with Best Practices</h3>
                    <p>
                      We use industry-leading technologies and follow web development best practices to ensure your site is fast, secure, and search engine friendly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Tech Stack</h3>
                    <p>
                      Whether you need a simple WordPress site, a custom React application, or a traditional HTML/CSS website, we have the expertise to deliver exactly what your business needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-glow transition-all duration-300 hover:scale-105 group"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </Link>
                
                <Link to="/" className="flex-1">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Websites;
