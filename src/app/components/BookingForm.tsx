"use client"
import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Send, Phone, Mail, MapPin, Clock, Calendar as CalendarIcon, CheckCircle } from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const services = [
    { value: 'wedding', label: 'Весільна фотозйомка' },
    { value: 'portrait', label: 'Особисті портрети' },
    { value: 'family', label: 'Сімейні портрети' },
    { value: 'event', label: 'Зйомка подій' },
    { value: 'product', label: 'Предметна зйомка' },
    { value: 'outdoor', label: 'Зйомки на природі' },
    { value: 'video', label: 'Відеозйомка' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+38 (067) 123-45-67',
      link: 'tel:+380671234567'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@luminastudio.ua',
      link: 'mailto:info@luminastudio.ua'
    },
    {
      icon: MapPin,
      label: 'Адреса',
      value: 'вул. Хрещатик, 25, Київ',
      link: '#'
    },
    {
      icon: Clock,
      label: 'Години роботи',
      value: 'Щодня: 9:00 - 21:00',
      link: '#'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/contact/riyte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDate ? selectedDate.toLocaleDateString('uk-UA') : ''
        })
      });
  
      if (!res.ok) {
        throw new Error('Failed to send');
      }
  
      setIsSubmitted(true);
  
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setSelectedDate(undefined);
      }, 3000);
    } catch (err) {
      console.error(err);
      alert('Сталася помилка при надсиланні форми');
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
            Готові обговорити ваш проект? Зв&apos;яжіться з нами, щоб отримати 
            персональну консультацію та розрахунок вартості.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border p-4">
            <CardHeader>
              <CardTitle className="flex items-center p-2">
                <Camera className="h-5 w-5 mr-4" />
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
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Повне ім&apos;я *</Label>
                      <Input
                        id="name"
                        placeholder="Ваше повне ім&apos;я"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+38 (067) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email адреса *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Тип послуги *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Оберіть послугу" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Бажана дата</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? selectedDate.toLocaleDateString('uk-UA') : 'Оберіть дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full max-w-full" align="center">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Повідомлення</Label>
                    <Textarea
                      id="message"
                      placeholder="Розкажіть більше про вашу зйомку..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-[250px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Надіслати запит
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border">
              <CardHeader>
                <CardTitle>Контактна інформація</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      {info.link && info.link !== '#' ? (
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Studio Photo */}
            <Card className="border overflow-hidden">
              <div className="aspect-[4/3]">
                <ImageWithFallback  
                  width={1080}
                  height={720}
                  src="https://images.unsplash.com/photo-1537344622304-ef06c27e8fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc1NTYxMDE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Lumina Studio інтер'єр"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Наша студія</h3>
                <p className="text-muted-foreground text-sm">
                  Сучасне обладнання та комфортна атмосфера для ідеальних кадрів
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}