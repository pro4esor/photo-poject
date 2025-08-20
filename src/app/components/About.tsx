import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Heart, Clock, Award, Star } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Camera,
      title: "Професійне обладнання",
      description: "Використовуємо найсучасніші камери та об'єктиви для ідеальної якості знімків"
    },
    {
      icon: Award,
      title: "10+ років досвіду",
      description: "Наша команда має великий досвід у всіх жанрах фотографії"
    },
    {
      icon: Heart,
      title: "Індивідуальний підхід",
      description: "Кожна зйомка унікальна, адаптована під ваше бачення та побажання"
    },
    {
      icon: Clock,
      title: "Швидка обробка",
      description: "Професійно оброблені фотографії готові протягом 3-5 робочих днів"
    }
  ];

  const team = [
    {
      name: "Олександр Коваленко",
      role: "Головний фотограф",
      experience: "10 років досвіду",
      image: "https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NTU2MDk1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Марія Петренко",
      role: "Фотограф-портретист",
      experience: "8 років досвіду",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc1NTYwOTU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Дмитро Іваненко",
      role: "Відеограф",
      experience: "7 років досвіду",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlb2dyYXBoZXIlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NTU2MDk1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="section-padding bg-muted/30" id="about">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Про нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ми — команда професійних фотографів та відеографів, які створюють 
            візуальні історії з душею. Кожен проект для нас особливий.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBwaG90b2dyYXBoeSUyMHN0dWRpb3xlbnwxfHx8fDE3NTU2MDk2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Команда Lumina Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Наша філософія
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ми не просто робимо знімки — ми створюємо мистецтво. Наша команда 
                об&apos;єднана спільною пристрастю до візуального сторітелінгу та прагненням 
                зафіксувати найщирійші емоції наших клієнтів.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Кожен проект для нас — це можливість розказати унікальну історію 
                через об&apos;єктив, поєднуючи творчий підхід з технічною досконалістю.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <feature.icon className="h-8 w-8 text-gold mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Наша команда
          </h3>
          <p className="text-lg text-muted-foreground">
            Досвідчені професіонали, які втілюють ваші мрії у життя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card key={index} className="border hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-foreground text-lg mb-1">{member.name}</h4>
                <p className="text-gold font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <Card className="border">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">1000+</div>
                <div className="text-muted-foreground">Щасливих клієнтів</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">3000+</div>
                <div className="text-muted-foreground">Зйомок проведено</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">10</div>
                <div className="text-muted-foreground">Років досвіду</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <div className="text-3xl font-bold text-gold mr-2">4.9</div>
                  <Star className="h-6 w-6 text-gold fill-gold" />
                </div>
                <div className="text-muted-foreground">Середній рейтинг</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}