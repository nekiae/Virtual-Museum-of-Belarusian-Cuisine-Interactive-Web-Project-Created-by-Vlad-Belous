import { motion } from "framer-motion";
import { toast } from "sonner";

const Hero = () => {
  const handleStartJourney = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
    toast.success("Пачынаем падарожжа па беларускай кухні!");
  };

  const handleLearnMore = () => {
    const timelineSection = document.getElementById('timeline');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast.info("Даведайцеся больш пра гісторыю беларускай кухні");
  };

  return (
    <section className="hero-section">
      <div className="absolute inset-0 -z-10">
        <img
          src="/lovable-uploads/105d9251-26e8-4b3e-b874-ba181987813e.png"
          alt="Беларускае поле"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content relative"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="section-title mb-2">
            Віртуальны музей{" "}
          </h1>
          <motion.span 
            className="block text-[#F2FCE2] text-4xl md:text-6xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            беларускай кухні
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="section-subtitle backdrop-blur-sm bg-black/10 p-4 rounded-lg">
            Адкрыйце для сябе багатую гісторыю і традыцыі беларускай кухні, дзе кожная страва распавядае сваю непаўторную гісторыю
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-colors relative overflow-hidden group"
            onClick={handleStartJourney}
          >
            <span className="relative z-10">Пачаць падарожжа</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/10 text-white rounded-lg shadow-lg hover:bg-white/20 transition-colors backdrop-blur-sm relative overflow-hidden group"
            onClick={handleLearnMore}
          >
            <span className="relative z-10">Даведацца больш</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;