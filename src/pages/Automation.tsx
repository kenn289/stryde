import { Link } from "react-router-dom";
import { Bot, Workflow, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Automation = () => {
  const services = [
    {
      icon: Bot,
      title: "Chatbots",
      description: "Intelligent chatbots for customer support, FAQs, and lead follow-up that work 24/7.",
    },
    {
      icon: Workflow,
      title: "Business Automation",
      description: "Streamline repetitive tasks and improve team productivity with custom workflows.",
    },
    {
      icon: TrendingUp,
      title: "Data Insights",
      description: "Analyze trends and generate reports to guide strategic business decisions.",
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
              Smart Business Tools to{" "}
              <span className="text-gradient">Simplify Your Work</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Automate routine tasks, enhance productivity, and make data-driven decisions with intelligent automation solutions.
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
                How We Help Your Business
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Our automation tools are designed to take the burden of repetitive tasks off your team, allowing them to focus on what truly matters - growing your business.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Chatbots That Work for You</h3>
                    <p>
                      Deploy intelligent chatbots that handle customer inquiries, answer FAQs, and follow up with leads automatically. Available 24/7 to ensure you never miss an opportunity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Streamlined Workflows</h3>
                    <p>
                      Automate your business processes - from email marketing to inventory management. We create custom automation solutions tailored to your specific needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Data-Driven Decisions</h3>
                    <p>
                      Transform raw data into actionable insights. Our analytics tools help you understand trends, track performance, and make informed decisions backed by real data.
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
                    Get a Quote
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

export default Automation;
