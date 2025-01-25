import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const timelineEvents = [
  {
    year: "X-XII стст.",
    title: "Старажытная кухня",
    description: "У гэты перыяд фарміруюцца асноўныя прынцыпы беларускай кухні. Шырока выкарыстоўваліся мясцовыя прадукты: жыта, ячмень, гародніна. З'яўляюцца першыя рэцэпты хлеба, квасу і піва."
  },
  {
    year: "XIII-XV стст.",
    title: "Сярэднявечная кухня",
    description: "Развіццё гандлёвых сувязяў прыводзіць да з'яўлення новых прадуктаў і тэхнік прыгатавання. Пачынаюць гатаваць першыя версіі дранікаў і калдуноў."
  },
  {
    year: "XVI-XVII стст.",
    title: "Росквіт кулінарнага мастацтва",
    description: "Перыяд Вялікага Княства Літоўскага. Развіваецца шляхецкая кухня, з'яўляюцца складаныя стравы як верашчака і мачанка. Выдаюцца першыя кулінарныя кнігі."
  },
  {
    year: "XVIII-XIX стст.",
    title: "Фарміраванне класічнай кухні",
    description: "Удасканальваюцца рэцэпты традыцыйных страў. Кожны рэгіён развівае свае ўнікальныя кулінарныя традыцыі. Дранікі становяцца нацыянальнай стравай."
  },
  {
    year: "XX ст.",
    title: "Савецкі перыяд і адраджэнне",
    description: "Захаванне традыцый у вясковай мясцовасці. У гарадах - спалучэнне традыцыйнай і савецкай кухні. Пачатак адраджэння старадаўніх рэцэптаў."
  },
  {
    year: "XXI ст.",
    title: "Сучасная беларуская кухня",
    description: "Адраджэнне і мадэрнізацыя традыцыйных рэцэптаў. Павышэнне цікавасці да нацыянальнай кухні. Развіццё рэстараннай культуры з акцэнтам на беларускія стравы."
  }
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="timeline" ref={ref} className="timeline-container bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Гісторыя</h2>
          <p className="section-subtitle">
            Падарожжа праз стагоддзі беларускай кулінарнай традыцыі
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`timeline-item ${isInView ? "visible" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-bold text-primary mb-2">{event.year}</h3>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg" />
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/10 rounded-full animate-pulse" />
              </div>
              <div className="w-1/2 pl-8">
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <p className="text-muted-foreground text-sm md:text-base">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;