import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-primary/50 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-foreground font-['Poppins']">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <Link to={link}>
          <Button 
            variant="ghost" 
            className="group/btn text-primary hover:text-primary-dark p-0 h-auto font-semibold"
          >
            Learn More
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
