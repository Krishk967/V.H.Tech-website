import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Get in touch with us for inquiries, quotations, or support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Speak directly with our team
              </CardDescription>
              <a href="tel:+919824235838">
                <Button variant="outline" className="w-full">
                  +91 9824235838
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Quick inquiries via WhatsApp
              </CardDescription>
              <a href="https://wa.me/9824235838" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  Chat on WhatsApp
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Send us detailed inquiries
              </CardDescription>
              <a href="mailto:vhtech25@gmail.com">
                <Button variant="outline" className="w-full">
                  vhtech25@gmail.com
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Follow Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Instagram */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Instagram className="h-8 w-8 text-accent" />
                  <div>
                    <CardTitle>Instagram</CardTitle>
                    <CardDescription>@v_h_tech</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Follow us for product updates and industry insights
                </p>
                <a
                  href="https://www.instagram.com/v_h_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="w-full">
                    Visit Instagram
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Facebook className="h-8 w-8 text-accent" />
                  <div>
                    <CardTitle>Facebook</CardTitle>
                    <CardDescription>V H Tech</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with us on Facebook for news and updates
                </p>
                <a
                  href="https://www.facebook.com/people/V-H-Tech/100094656767801/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="w-full">
                    Visit Facebook
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Business Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-center text-muted-foreground">
              <p className="text-lg">
                <strong className="text-foreground">Monday - Saturday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p className="text-lg">
                <strong className="text-foreground">Sunday:</strong> Closed
              </p>
              <p className="text-sm mt-4">
                For urgent inquiries outside business hours, please contact us via WhatsApp
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
