import { useState } from "react";
import { z } from "zod";
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
] as const;

const NAME_MAX = 100;
const EMAIL_MAX = 255;
const COMMENTS_MAX = 1000;

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(NAME_MAX, { message: `Name must be less than ${NAME_MAX} characters` }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(EMAIL_MAX, { message: `Email must be less than ${EMAIL_MAX} characters` }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number is too long" })
    .regex(/^\+?[0-9\s\-()]{10,20}$/, {
      message: "Please enter a valid phone number (digits, spaces, +, -, () allowed)",
    }),
  product: z.enum(products, {
    errorMap: () => ({ message: "Please select a product" }),
  }),
  comments: z
    .string()
    .trim()
    .max(COMMENTS_MAX, { message: `Comments must be less than ${COMMENTS_MAX} characters` })
    .optional()
    .or(z.literal("")),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  product: string;
  comments: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Inquiry() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    product: "",
    comments: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = inquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        if (key && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Please fix the errors below",
        description: "Some fields contain invalid information.",
        variant: "destructive",
      });
      return;
    }

    const data = result.data;

    const message = `*New Inquiry from V H Tech Website*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Product Required:* ${data.product}

*Comments:*
${data.comments || "N/A"}`.trim();

    const whatsappUrl = `https://wa.me/919824235838?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your inquiry will be sent via WhatsApp",
    });

    setFormData({ name: "", email: "", phone: "", product: "", comments: "" });
    setErrors({});
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
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <span className="text-xs text-muted-foreground">
                    {formData.name.length}/{NAME_MAX}
                  </span>
                </div>
                <Input
                  id="name"
                  type="text"
                  required
                  maxLength={NAME_MAX}
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-sm font-medium text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <span className="text-xs text-muted-foreground">
                    {formData.email.length}/{EMAIL_MAX}
                  </span>
                </div>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={EMAIL_MAX}
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="your.email@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-sm font-medium text-destructive">{errors.email}</p>
                )}
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
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+91 XXXXXXXXXX"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-sm font-medium text-destructive">{errors.phone}</p>
                )}
              </div>

              {/* Product */}
              <div className="space-y-2">
                <Label htmlFor="product">
                  Product Required <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.product}
                  onValueChange={(value) => updateField("product", value)}
                >
                  <SelectTrigger aria-invalid={!!errors.product}>
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
                {errors.product && (
                  <p className="text-sm font-medium text-destructive">{errors.product}</p>
                )}
              </div>

              {/* Comments */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="comments">Additional Comments</Label>
                  <span className="text-xs text-muted-foreground">
                    {formData.comments.length}/{COMMENTS_MAX}
                  </span>
                </div>
                <Textarea
                  id="comments"
                  maxLength={COMMENTS_MAX}
                  value={formData.comments}
                  onChange={(e) => updateField("comments", e.target.value)}
                  placeholder="Please provide any additional details about your requirement..."
                  rows={5}
                  aria-invalid={!!errors.comments}
                />
                {errors.comments && (
                  <p className="text-sm font-medium text-destructive">{errors.comments}</p>
                )}
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
