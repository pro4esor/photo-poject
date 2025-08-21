"use client"
import { useState } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader } from "./ui/dialog";
import { Camera, Eye, Heart, Users, Package, TreePine } from "lucide-react";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Всі роботи', icon: Eye },
    { id: 'wedding', name: 'Весілля', icon: Heart },
    { id: 'portrait', name: 'Портрети', icon: Camera },
    { id: 'events', name: 'Події', icon: Users },
    { id: 'product', name: 'Предмети', icon: Package },
    { id: 'outdoor', name: 'Природа', icon: TreePine }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      title: 'Весілля Анни та Максима',
      client: 'Анна і Максим',
      description: 'Романтична церемонія з неповторною атмосферою кохання та радості',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50JTIwY291cGxlfGVufDF8fHx8MTc1NTYwOTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      category: 'portrait',
      title: 'Сімейна фотосесія',
      client: 'Родина Петренків',
      description: 'Тепла атмосфера домашнього затишку та щирі емоції',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwaGFwcHl8ZW58MXx8fHwxNzU1NjA5ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      category: 'events',
      title: 'Корпоративна вечірка',
      client: 'IT компанія TechSoft',
      description: 'Енергійна атмосфера святкування та командний дух',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1NjA5ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      category: 'product',
      title: 'Предметна зйомка',
      client: 'Бренд LuxuryStyle',
      description: 'Елегантна презентація товарів з акцентом на деталях',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsJTIwbHV4dXJ5fGVufDF8fHx8MTc1NTYwOTg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      category: 'outdoor',
      title: 'Сесія на природі',
      client: 'Олена і Дмитро',
      description: 'Природна краса в золоту годину з чарівним освітленням',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGhvdG9ncmFwaHklMjBuYXR1cmUlMjBnb2xkZW4lMjBob3VyfGVufDF8fHx8MTc1NTYwOTg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      category: 'wedding',
      title: 'Вінчання в соборі',
      client: 'Марія і Сергій',
      description: 'Урочиста церемонія з дотриманням традицій',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBjaHVyY2glMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTU2MDk4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 7,
      category: 'portrait',
      title: 'Індивідуальна сесія',
      client: 'Вікторія',
      description: 'Стильні портрети в професійній студійній обстановці',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzU1NjA5OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 8,
      category: 'events',
      title: 'День народження',
      client: 'Ірина',
      description: 'Яскраве святкування з друзями та рідними',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBoYXBweXxlbnwxfHx8fDE3NTU2MDk5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="section-padding bg-muted/30" id="portfolio">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Наше портфоліо
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Кожен проект — це унікальна історія, розказана через об&apos;єктив. 
            Переглянуте наші роботи та відчуйте магію моментів.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={activeFilter === category.id ? "bg-gold hover:bg-gold/90 text-white" : ""}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer border hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <ImageWithFallback
                      width={1080}
                      height={720}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                  <DialogDescription>
                    {item.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="relative">
                  <ImageWithFallback
                    width={1080}
                    height={720}
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[70vh] object-contain rounded-lg"
                  />
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg text-muted-foreground">Клієнт: {item.client}</p>
                        <Badge variant="secondary" className="mt-2">
                          {categories.find(cat => cat.id === item.category)?.name}
                        </Badge>
                      </div>
                      <Button className="bg-gold hover:bg-gold/90 text-white">
                        <Camera className="h-4 w-4 mr-2" />
                        Подібна зйомка
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Готові створити щось неймовірне?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Зв&apos;яжіться з нами, щоб обговорити ваш проект
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-white">
            <Camera className="h-5 w-5 mr-2" />
            Почати проект
          </Button>
        </div>
      </div>
    </section>
  );
}