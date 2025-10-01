import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "Track Guard",
      description: "High-quality track guards for protecting your equipment's undercarriage system",
    },
    {
      title: "Track Shoe Plate",
      description: "Durable track shoe plates designed for maximum traction and longevity",
    },
    {
      title: "Track Link Assembly",
      description: "Complete track link assemblies for seamless equipment operation",
    },
    {
      title: "Sprocket",
      description: "Precision-engineered sprockets for optimal power transmission",
    },
    {
      title: "Carrier Roller",
      description: "Heavy-duty carrier rollers for smooth track movement",
    },
    {
      title: "Track Roller",
      description: "Reliable track rollers built to withstand heavy loads",
    },
    {
      title: "Idler",
      description: "Premium idlers for proper track tension and alignment",
    },
    {
      title: "Spring Assembly",
      description: "Robust spring assemblies for shock absorption and track tension",
    },
    {
      title: "Bucket Bushing and Pin",
      description: "High-strength bushings and pins for bucket attachments",
    },
    {
      title: "Yoke, Track Bolt and Shim",
      description: "Essential components for secure track assembly",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Comprehensive range of undercarriage parts for all major heavy equipment brands
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Settings className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/inquiry">
                  <Button variant="outline" className="w-full">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We supply parts for almost every major brand. Contact us for specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/9824235838" target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+919824235838">
              <Button variant="default" size="lg">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
