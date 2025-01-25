import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import DishGallery from "@/components/DishGallery";
import Timeline from "@/components/Timeline";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <DishGallery />
      <Timeline />
    </motion.div>
  );
};

export default Index;