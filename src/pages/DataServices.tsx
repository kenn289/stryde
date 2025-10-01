import { Link } from "react-router-dom";
import { Database, Filter, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DataServices = () => {
  const services = [
    {
      icon: Database,
      title: "Data Acquisition",
      description: "Collect quality datasets from online sources, APIs, and various data channels efficiently.",
    },
    {
      icon: Filter,
      title: "Data Cleaning & Structuring",
      description: "Transform raw data into clean, organized, and actionable information ready for analysis.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Custom dashboards and reports to understand trends, patterns, and business performance.",
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
              Organize, Analyze, and{" "}
              <span className="text-gradient">Make the Most of Your Data</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Collect, clean, and analyze data to help your business operate efficiently and make informed decisions.
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
                Turn Data Into Your Competitive Advantage
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In the modern business landscape, data is one of your most valuable assets. We help you harness that value through comprehensive data services that transform raw information into strategic insights.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Data Collection & Acquisition</h3>
                    <p>
                      We gather high-quality data from multiple sources including web scraping, API integrations, and database exports. Whether you need market research data, customer information, or competitive intelligence, we ensure you have access to the data you need.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Data Cleaning & Organization</h3>
                    <p>
                      Raw data is rarely perfect. We clean, validate, and structure your data to eliminate errors, remove duplicates, and ensure consistency. The result is reliable, ready-to-use information that you can trust.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Analytics & Business Intelligence</h3>
                    <p>
                      Transform your data into actionable insights with custom analytics solutions. We create dashboards and reports that help you understand customer behavior, track key performance indicators, identify trends, and make data-driven decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Custom Solutions</h3>
                    <p>
                      Every business has unique data needs. We work closely with you to understand your requirements and develop tailored solutions that address your specific challenges and goals.
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
                    Request a Proposal
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

export default DataServices;
