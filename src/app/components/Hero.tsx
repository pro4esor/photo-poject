"use client"
import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, ArrowRight, Star, Users, Award } from "lucide-react";

export function Hero() {


  const stats = [
    { icon: Users, number: "1000+", label: "Задоволених клієнтів" },
    { icon: Camera, number: "3000+", label: "Проведених зйомок" },
    { icon: Award, number: "10", label: "Років досвіду" },
    { icon: Star, number: "4.9", label: "Рейтинг" }
  ];

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding min-h-screen flex items-center justify-center bg-white" id="hero">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Професійна
                <br />
                <span className="text-gold">фотозйомка</span>
                <br />
                для ваших моментів
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Створюємо неповторні візуальні історії для весіль, подій та особистих сесій. 
                Кожен кадр — це мистецтво, кожен момент — назавжди.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-white"
                onClick={() => scrollToSection('#contact')} // або інша секція
              >
                <Camera className="h-5 w-5 mr-2" />
                Замовити зйомку
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#portfolio')} // або інша секція
              >
                Переглянути роботи
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-gold mr-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50JTIwY291cGxlfGVufDF8fHx8MTc1NTYxMDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Професійна фотозйомка"
                width={1080}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
