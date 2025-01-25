import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useState } from "react";
import { X } from "lucide-react";

const dishes = [
  {
    id: 1,
    name: "Дранікі",
    image: "/lovable-uploads/2ea42b84-f96f-4d92-a206-90eb0c298c01.png",
    description: "Традыцыйная беларуская страва з дранай бульбы",
    fullDescription: "Дранікі - гэта традыцыйная беларуская страва, якая рыхтуецца з дранай бульбы з дабаўленнем цыбулі, солі і перцу. Падаюцца са смятанай ці грыбным соусам. Гэта адна з самых папулярных страў беларускай кухні.",
    ingredients: ["Бульба - 1 кг", "Цыбуля - 1 шт", "Яйкі - 2 шт", "Мука - 2 ст.л.", "Соль - 1 ч.л.", "Перац - па смаку", "Алей для смажання"],
    region: "Уся Беларусь",
    servingTemp: "Гарачыя",
    servedWith: "Смятана, грыбны соус",
    recipe: [
      "Бульбу і цыбулю надраць на дробнай тарцы",
      "Дадаць яйкі, муку, соль і перац",
      "Добра перамяшаць",
      "Смажыць на гарачай патэльні з двух бакоў да залацістай скарынкі",
      "Падаваць гарачымі са смятанай"
    ]
  },
  {
    id: 2,
    name: "Калдуны",
    image: "/lovable-uploads/6b56e127-961c-49e3-b1f9-ea9f1f56c0a7.png",
    description: "Смачныя клёцкі з мясной начынкай",
    fullDescription: "Калдуны - гэта невялікія клёцкі з бульбянога цеста, начыненыя мясным фаршам. Яны з'яўляюцца важнай часткай беларускай кухні і часта падаюцца на святочным стале.",
    ingredients: ["Бульба - 1 кг", "Мясны фарш - 500 г", "Цыбуля - 2 шт", "Яйкі - 2 шт", "Соль - 1.5 ч.л.", "Перац - па смаку", "Мука - 3 ст.л."],
    region: "Гродзенская вобласць",
    servingTemp: "Гарачыя",
    servedWith: "Смятана, масла",
    recipe: [
      "Бульбу надраць і адціснуць",
      "Дадаць яйкі і муку, замясіць цеста",
      "Фарш змяшаць з дробна нарэзанай цыбуляй",
      "Сфармаваць клёцкі з мясной начынкай",
      "Варыць у падсоленай вадзе 7-10 хвілін"
    ]
  },
  {
    id: 3,
    name: "Мачанка",
    image: "/lovable-uploads/27dd3656-bc02-4fc4-8a7f-12a62faa2424.png",
    description: "Густы соус з мясам і грыбамі",
    fullDescription: "Мачанка - традыцыйная беларуская страва, якая ўяўляе сабой густы соус з кавалачкамі мяса, грыбоў і смятаны. Падаецца з блінамі, у якія 'мачаюць' соус.",
    ingredients: ["Свініна - 800 г", "Грыбы - 200 г", "Смятана - 300 г", "Цыбуля - 2 шт", "Мука - 2 ст.л.", "Спецыі - па смаку", "Бліны"],
    region: "Магілёўская вобласць",
    servingTemp: "Гарачая",
    servedWith: "Дражджавыя бліны",
    recipe: [
      "Мяса нарэзаць невялікімі кавалачкамі і абсмажыць",
      "Дадаць нарэзаную цыбулю і грыбы",
      "Усыпаць муку і абсмажыць",
      "Уліць смятану і тушыць 15-20 хвілін",
      "Падаваць з гарачымі блінамі"
    ]
  },
  {
    id: 4,
    name: "Верашчака",
    image: "/lovable-uploads/a546d1ee-420c-48c5-96ac-37ca91027203.png",
    description: "Традыцыйная мясная страва",
    fullDescription: "Верашчака - старажытная беларуская страва з свініны, якая гатуецца ў смятанным соусе з дабаўленнем разнастайных спецый і зёлак. Лічыцца адной з самых смачных страў беларускай кухні.",
    ingredients: ["Свініна - 1 кг", "Смятана - 500 г", "Мука - 2 ст.л.", "Спецыі - па смаку", "Зёлкі - па смаку", "Цыбуля - 2 шт"],
    region: "Віцебская вобласць",
    servingTemp: "Гарачая",
    servedWith: "Бліны, хлеб",
    recipe: [
      "Мяса нарэзаць і абсмажыць да румянай скарынкі",
      "Дадаць нарэзаную цыбулю",
      "Дадаць муку і абсмажыць",
      "Уліць смятану і тушыць 30-40 хвілін",
      "У канцы дадаць спецыі і зёлкі"
    ]
  }
];

const DishGallery = () => {
  const [selectedDish, setSelectedDish] = useState<typeof dishes[0] | null>(null);

  return (
    <section id="gallery" className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <img 
              src="/lovable-uploads/78e99a07-3e44-4fee-8818-49d67c58a767.png"
              alt="Беларускае поле"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
          </div>
          <h2 className="section-title text-primary">Нашы стравы</h2>
          <p className="section-subtitle text-muted-foreground">
            Адкрыйце для сябе разнастайнасць беларускай кухні, дзе кожная страва мае сваю гісторыю і характар
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="dish-card group hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedDish(dish)}
              >
                <div className="relative aspect-square">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold mb-2">{dish.name}</h3>
                      <p className="text-sm mb-2">{dish.description}</p>
                      <p className="text-xs text-white/80">Націсніце, каб паглядзець рэцэпт</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedDish} onOpenChange={() => setSelectedDish(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center justify-between">
              {selectedDish?.name}
              <button 
                onClick={() => setSelectedDish(null)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <img
                    src={selectedDish?.image}
                    alt={selectedDish?.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Апісанне:</h4>
                    <p className="text-sm text-muted-foreground">{selectedDish?.fullDescription}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Інгрэдыенты:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {selectedDish?.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Рэцэпт прыгатавання:</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                  {selectedDish?.recipe.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Рэгіён: </span>
                  <span className="text-muted-foreground">{selectedDish?.region}</span>
                </div>
                <div>
                  <span className="font-semibold">Падаецца: </span>
                  <span className="text-muted-foreground">{selectedDish?.servedWith}</span>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DishGallery;