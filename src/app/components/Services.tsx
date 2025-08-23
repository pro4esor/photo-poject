import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Heart, Users, Package, TreePine, Video, ArrowRight, Clock, Check } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "wedding",
      title: "Весільна зйомка",
      description: "Ваш особливий день назавжди збережений через наш професійний об'єктив",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50JTIwdWtyYWluaWFufGVufDF8fHx8MTc1NTYwOTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "від 25,000 грн",
      duration: "8-12 годин",
      features: ["Повний день супроводу", "300+ оброблених фото", "Онлайн галерея", "USB з фото"],
      icon: Heart,
      popular: true
    },
    {
      id: "portrait",
      title: "Особисті сесії",
      description: "Індивідуальні та парні фотосесії в студії або на локації",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzU1NjA5NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "від 3,500 грн",
      duration: "1-2 години",
      features: ["Студія або локація", "30+ оброблених фото", "Консультація зі стилем", "Візажист (доплата)"],
      icon: Camera
    },
    {
      id: "events",
      title: "Зйомка подій",
      description: "Корпоративи, вечірки, святкування — ми передаємо атмосферу та енергію",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGV2ZW50JTIwcGhvdG9ncmFwaHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTU2MDk3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "від 8,000 грн",
      duration: "3-6 годин",
      features: ["Покриття заходу", "150+ фото", "Швидка обробка", "Веб-галерея"],
      icon: Users
    },
    {
      id: "product",
      title: "Предметна зйомка",
      description: "Професійна зйомка товарів для каталогів, e-commerce та реклами",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsJTIwc3R1ZGlvfGVufDF8fHx8MTc1NTYwOTcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "від 500 грн",
      duration: "за товар",
      features: ["Білий фон", "Кілька ракурсів", "Швидке виконання", "Готово для e-commerce"],
      icon: Package
    },
    {
      id: "outdoor",
      title: "Зйомки на природі",
      description: "Природне освітлення у парках, лісах, на пляжах — природа як наш фон",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcGhvdG9ncmFwaHklMjBuYXR1cmUlMjBzZXNzaW9uJTIwZmFtaWx5fGVufDF8fHx8MTc1NTYwOTcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "від 4,000 грн",
      duration: "1-3 години",
      features: ["Підбір локації", "40+ фото", "Природне освітлення", "Сезонні знижки"],
      icon: TreePine
    },
    {
      id: "video",
      title: "Відеозйомка",
      description: "Професійне відео для весіль, подій та рекламних кампаній",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlb2dyYXBoeSUyMHNob290aW5nJTIwY2luZW1hdGljfGVufDF8fHx8MTc1NTYwOTcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "від 15,000 грн",
      duration: "за проект",
      features: ["4K якість", "Кінематографічний монтаж", "Кольорокорекція", "Музичний супровід"],
      icon: Video
    }
  ];

  return (
    <section className="section-padding bg-white" id="services">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Наші послуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Від весільних церемоній до корпоративних подій — ми створюємо незабутні 
            візуальні історії для будь-якого моменту у вашому житті.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className={`border hover:shadow-lg transition-all duration-300 ${
              service.popular ? 'ring-gold ring-opacity-20' : ''
            }`}>
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  width={1080}
                  height={720}  
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <service.icon className="h-5 w-5 text-gold" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-6 py-4 border-y">
                  <div>
                    <div className="text-2xl font-bold text-gold">{service.price}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-gold mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                  Замовити зйомку
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Не знайшли те, що шукаєте?
              </h3>
              <p className="text-muted-foreground mb-6">
                Зв&apos;яжіться з нами, щоб обговорити індивідуальний пакет фотозйомки
              </p>
              <Button variant="outline" size="lg">
                Зв&apos;язатися з нами
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}