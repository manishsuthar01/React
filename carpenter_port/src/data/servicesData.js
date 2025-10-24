import { Sofa, WandSparkles, Hammer, Circle, MessageCircle } from "lucide-react";
// No exact cabinet icon in Lucide, so we'll use Package as the closest match
import { Package } from "lucide-react";

export const services = [
  { 
    title: "Custom Furniture", 
    description: "Bespoke furniture pieces designed and crafted to your exact specifications, bringing your unique vision to life.",
    icon: Sofa
  },
  { 
    title: "Wood Restoration", 
    description: "Breathe new life into cherished wooden pieces with our meticulous restoration and refinishing services.",
    icon: WandSparkles
  },
  { 
    title: "Custom Cabinetry", 
    description: "Transform your kitchen, bathroom, or office with custom cabinetry that combines functionality with aesthetic appeal.",
    icon: Package
  },
  { 
    title: "Structural Carpentry", 
    description: "Expert craftsmanship for beams, staircases, and architectural woodwork that enhances your home's character.",
    icon: Hammer
  },
  { 
    title: "Wood Turning", 
    description: "Artisanal bowls, vases, and decorative items crafted through the traditional art of wood turning.",
    icon: Circle
  },
  { 
    title: "Design Consultation", 
    description: "Expert guidance on wood selection, design possibilities, and project planning to bring your ideas to fruition.",
    icon: MessageCircle
  }
];
