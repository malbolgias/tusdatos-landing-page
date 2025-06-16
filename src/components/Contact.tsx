
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contacts = [
    {
      title: "Administrative",
      email: "cartera@tusdatos.co",
      phone: "+57 305 408 2874",
      icon: Mail,
      color: "text-blue-600"
    },
    {
      title: "Support",
      email: "soporte@tusdatos.co", 
      phone: "+57 318 865 1031",
      icon: Phone,
      color: "text-green-600"
    },
    {
      title: "Sales",
      email: "comercial@tusdatos.co",
      phone: "+57 305 436 2276", 
      icon: Phone,
      color: "text-purple-600"
    },
    {
      title: "Data Rights",
      email: "habeas_data@tusdatos.co",
      phone: "",
      icon: Mail,
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for support, sales inquiries, or administrative matters.
            We're here to help you with all your validation and compliance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className={`w-6 h-6 ${contact.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="space-y-2">
                  <a 
                    href={`mailto:${contact.email}`}
                    className="block text-blue-600 hover:text-blue-800 font-medium break-all"
                  >
                    {contact.email}
                  </a>
                  {contact.phone && (
                    <div className="space-y-1">
                      <a 
                        href={`tel:${contact.phone}`}
                        className="block text-gray-700 hover:text-gray-900"
                      >
                        {contact.phone}
                      </a>
                      <a 
                        href={`https://wa.me/${contact.phone.replace(/\s/g, '').replace('+', '')}`}
                        className="text-green-600 hover:text-green-800 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Based in Bogotá, Colombia
              </p>
              <p className="text-gray-600 mt-2">
                Serving Colombia and Ecuador with global validation coverage
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-green-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">Business Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-medium">
                Monday - Friday
              </p>
              <p className="text-gray-600">
                8:00 AM - 6:00 PM (COT)
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Colombian Time Zone
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
