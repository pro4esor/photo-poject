import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Camera, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Heart } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: 'Головна', href: '#hero' },
    { name: 'Про нас', href: '#about' },
    { name: 'Послуги', href: '#services' },
    { name: 'Портфоліо', href: '#portfolio' },
    { name: 'Відгуки', href: '#testimonials' },
    { name: 'Контакти', href: '#contact' }
  ];

  const services = [
    { name: 'Весільна фотозйомка', href: '#services' },
    { name: 'Особисті портрети', href: '#services' },
    { name: 'Сімейні портрети', href: '#services' },
    { name: 'Зйомка подій', href: '#services' },
    { name: 'Предметна зйомка', href: '#services' },
    { name: 'Зйомки на природі', href: '#services' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <Camera className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">Lumina Studio</div>
                  <div className="text-sm text-muted-foreground">Професійна фотозйомка</div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Створюємо незабутні візуальні історії для ваших найважливіших моментів. 
                Кожен кадр — це мистецтво.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-muted rounded-lg hover:bg-gold hover:text-white flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Навігація</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Послуги</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Контакти</h3>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-gold" />
                  <a href="tel:+380671234567" className="text-muted-foreground hover:text-gold transition-colors">
                    +38 (067) 123-45-67
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-gold" />
                  <a href="mailto:info@luminastudio.ua" className="text-muted-foreground hover:text-gold transition-colors">
                    info@luminastudio.ua
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-gold mt-0.5" />
                  <span className="text-muted-foreground">вул. Хрещатик, 25<br />Київ, Україна</span>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Новини</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Підпишіться на наші новини
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1"
                  />
                  <Button size="sm" className="bg-gold hover:bg-gold/90 text-white">
                    Підписатися
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2025 Lumina Studio. Всі права захищені.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Політика конфіденційності
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Умови використання
              </a>
            </div>
            
            <div className="flex items-center text-muted-foreground text-sm">
              Створено з <Heart className="h-4 w-4 mx-1 text-gold" /> для фотографів
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}