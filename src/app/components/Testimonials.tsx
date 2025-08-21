"use client"
import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Анна та Максим Коваленко",
      role: "Наречені",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwaGFwcHklMjBlbGVnYW50fGVufDF8fHx8MTc1NTYxMDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "Lumina Studio створили справжню магію на нашому весіллі! Кожен кадр передає емоції, кожне фото розповідає нашу історію кохання. Ми просто в захваті від професіоналізму команди та неймовірної якості робіт.",
      rating: 5,
      service: "Весільна фотозйомка"
    },
    {
      id: 2,
      name: "Олена Петренко",
      role: "Засновниця IT-стартапу",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NjEwMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "Потрібні були професійні фото для корпоративного сайту. Результат перевершив усі очікування! Команда створила комфортну атмосферу під час зйомки, а фотографії вийшли просто неймовірними.",
      rating: 5,
      service: "Корпоративна фотозйомка"
    },
    {
      id: 3,
      name: "Родина Іваненків",
      role: "Молода сім'я",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMGhhcHB5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzU1NjEwMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "Наша перша сімейна фотосесія була просто чудовою! Фотографи знайшли підхід до наших малюків, створили затишну атмосферу. Фотографії вийшли живими та щирими.",
      rating: 5,
      service: "Сімейна фотосесія"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Відгуки клієнтів
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Найкраща нагорода для нас — це щасливі обличчя наших клієнтів 
            та їхні щирі відгуки про співпрацю з нашою командою.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">1000+</div>
            <div className="text-muted-foreground">Щасливих клієнтів</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="text-3xl font-bold text-gold mr-2">4.9</div>
              <Star className="h-6 w-6 text-gold fill-gold" />
            </div>
            <div className="text-muted-foreground">Середній рейтинг</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">98%</div>
            <div className="text-muted-foreground">Позитивних відгуків</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">100%</div>
            <div className="text-muted-foreground">Рекомендацій</div>
          </div>
        </div>

        {/* Main testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Client photo */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <ImageWithFallback
                      width={1080}
                      height={720}
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-2">
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                    &quot;{testimonials[currentSlide].content}&quot;
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-muted-foreground mb-2">
                      {testimonials[currentSlide].role}
                    </div>
                    <div className="text-sm text-gold">
                      {testimonials[currentSlide].service}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-gold' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}