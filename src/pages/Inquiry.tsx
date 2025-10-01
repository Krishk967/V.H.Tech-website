import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Inquiry() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    comments: "",
  });

  const products = [
    "Track Guard",
    "Track Shoe Plate",
    "Track Link Assembly",
    "Sprocket",
    "Carrier Roller",
    "Track Roller",
    "Idler",
    "Spring Assembly",
    "Bucket Bushing and Pin",
    "Yoke, Track Bolt and Shim",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `
*New Inquiry from V H Tech Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Product Required:* ${formData.product}

*Comments:*
${formData.comments}
    `.trim();

    const whatsappUrl = `https://wa.me/9824235838?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your inquiry will be sent via WhatsApp",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      comments: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Inquiry</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Send Your Inquiry</CardTitle>
            <CardDescription>
              We'll respond promptly to help you find the right parts for your equipment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              {/* Product */}
              <div className="space-y-2">
                <Label htmlFor="product">
                  Product Required <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.product}
                  onValueChange={(value) => setFormData({ ...formData, product: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Comments */}
              <div className="space-y-2">
                <Label htmlFor="comments">Additional Comments</Label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Please provide any additional details about your requirement..."
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="accent" size="lg" className="w-full">
                Submit Inquiry via WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Your inquiry will be sent directly to our WhatsApp for faster response
              </p>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Alternative Contact */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Prefer to Contact Us Directly?</h2>
          <p className="text-muted-foreground mb-6">
            Call us or send an email for immediate assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919824235838">
              <Button variant="default" size="lg">
                Call: +91 9824235838
              </Button>
            </a>
            <a href="mailto:vhtech25@gmail.com">
              <Button variant="outline" size="lg">
                Email: vhtech25@gmail.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
