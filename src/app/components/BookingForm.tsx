"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera, Send, Phone, Mail, MapPin, Clock, Calendar as CalendarIcon, CheckCircle } from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const services = [
    { value: "wedding", label: "Весільна фотозйомка" },
    { value: "portrait", label: "Особисті портрети" },
    { value: "family", label: "Сімейні портрети" },
    { value: "event", label: "Зйомка подій" },
    { value: "product", label: "Предметна зйомка" },
    { value: "outdoor", label: "Зйомки на природі" },
    { value: "video", label: "Відеозйомка" }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+38 (067) 123-45-67",
      link: "tel:+380671234567"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@luminastudio.ua",
      link: "mailto:info@luminastudio.ua"
    },
    {
      icon: MapPin,
      label: "Адреса",
      value: "вул. Хрещатик, 25, Київ",
      link: "#"
    },
    {
      icon: Clock,
      label: "Години роботи",
      value: "Щодня: 9:00 - 21:00",
      link: "#"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedDate ? selectedDate.toISOString() : undefined
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server error: ${errorText}`);
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        setSelectedDate(undefined);
      }, 3000);
    } catch (err) {
      console.error("Failed to send form:", err);
      alert("Не вдалося відправити форму. Спробуйте пізніше.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-muted/30" id="contact">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Зв&apos;яжіться з нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готові обговорити ваш проект? Зв&apos;яжіться з нами, щоб отримати персональну консультацію та розрахунок вартості.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                Замовити зйомку
              </CardTitle>
              <p className="text-muted-foreground">
                Заповніть форму і ми зв&apos;яжемося з вами протягом години
              </p>
            </CardHeader>

            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Дякуємо за звернення!
                  </h3>
                  <p className="text-muted-foreground">
                    Ми зв&apos;яжемося з вами найближчим часом
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ім&apos;я</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Послуга</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleInputChange("service", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Оберіть послугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Дата зйомки</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          {selectedDate ? selectedDate.toLocaleDateString() : "Оберіть дату"}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="message">Додаткові побажання</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-gold hover:bg-gold/90 text-white">
                    {loading ? "Відправляємо..." : <Send className="h-4 w-4 mr-2" />}
                    {loading ? "Відправляємо..." : "Надіслати запит"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border">
            <CardHeader>
              <CardTitle>Контактна інформація</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <info.icon className="h-6 w-6 text-gold" />
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
