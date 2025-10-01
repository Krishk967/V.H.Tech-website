import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Settings, Cog, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-machinery.jpg";

export default function Home() {
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
  ];

  const features = [
    {
      icon: <Settings className="h-12 w-12 text-accent" />,
      title: "Export Quality",
      description: "Premium quality parts meeting international standards",
    },
    {
      icon: <Cog className="h-12 w-12 text-accent" />,
      title: "Wide Compatibility",
      description: "Compatible parts for almost every major brand",
    },
    {
      icon: <Wrench className="h-12 w-12 text-accent" />,
      title: "Pan India Supply",
      description: "Reliable delivery across all regions of India",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Premium Undercarriage Parts
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Leading supplier of high-quality track system components for heavy equipment across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="accent" size="lg" className="min-w-[200px]">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/inquiry">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
            About V H Tech
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-4">
              Undercarriages and parts in crawler or track-mounted equipment play an important role in
              the mobility of the whole equipment and its uptime.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Undercarriage parts are small and simple, but when all put together, support the entire
              track system. The major undercarriage components include links, pins, bushings, sprockets,
              rollers, idlers, shoes and frames.
            </p>
            <p className="text-lg leading-relaxed">
              We supply the best quality parts pan India. We provide almost each and every company's
              compatible parts. Export quality parts are being provided by us.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Products We Supply
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{product}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products">
            <Button size="lg" variant="default">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Quality Undercarriage Parts?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for inquiries and quotations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/9824235838" target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg">
                WhatsApp Us
              </Button>
            </a>
            <a href="mailto:vhtech25@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
