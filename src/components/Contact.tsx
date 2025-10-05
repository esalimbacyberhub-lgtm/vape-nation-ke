import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Car, Bus, Store, Navigation } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Store Location Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">VISIT OUR STORE</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Lavington, Nairobi, our flagship store offers the complete Vape Lounge experience with expert staff and premium products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Store Information */}
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">VAPE LOUNGE NAIROBI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">Riara Rd, Lavington, Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:0742405841" className="text-primary hover:underline">0742405841</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@vapeloungenairobi.co.ke" className="text-primary hover:underline">
                        info@vapeloungenairobi.co.ke
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Store Hours</p>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 9:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 mb-8">
                <Button size="lg" className="flex-1">
                  📞 CALL NOW
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  🗺️ GET DIRECTIONS
                </Button>
              </div>
            </div>

            {/* Location Features */}
            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Riara Rd, Lavington</h3>
                  </div>
                  <Button variant="outline" className="w-full">
                    Open in Google Maps
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Car className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Easy Parking</h4>
                    <p className="text-xs text-muted-foreground">Ample parking space available</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Bus className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Public Transport</h4>
                    <p className="text-xs text-muted-foreground">Easily accessible by matatu</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Store className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Modern Location</h4>
                    <p className="text-xs text-muted-foreground">Prime Lavington location</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Navigation className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Prime Location</h4>
                    <p className="text-xs text-muted-foreground">Central Lavington area</p>
                  </CardContent>
                </Card>
              </div>

              {/* Nearby Landmarks */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How to Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Nearby Landmarks</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Lavington Mall (5 minutes walk)</li>
                        <li>• Valley Arcade (10 minutes walk)</li>
                        <li>• Riara Road (1 minute walk)</li>
                        <li>• Junction Mall (15 minutes drive)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Transportation</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Matatu routes along Riara Rd</li>
                        <li>• Uber/Bolt readily available</li>
                        <li>• Ample parking available</li>
                        <li>• Walking distance from Lavington area</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">GET IN TOUCH</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about our products or need assistance? Our friendly team is here to help. Reach out to us through any of the methods below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Methods</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-primary font-bold text-lg">0742405841</p>
                    <p className="text-sm text-muted-foreground">Call us for immediate assistance</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">WhatsApp</h4>
                    <p className="text-primary font-bold text-lg">0742405841</p>
                    <p className="text-sm text-muted-foreground">Quick responses via WhatsApp</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-primary font-bold">info@vapeloungenairobi.co.ke</p>
                    <p className="text-sm text-muted-foreground">Send us a detailed message</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Store className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Visit Store</h4>
                    <p className="text-primary font-bold">Riara Rd, Lavington</p>
                    <p className="text-sm text-muted-foreground">Come see us in person</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-primary">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-primary">9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-primary">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-primary font-semibold mt-4">
                    <strong>24/7 WhatsApp Support:</strong> Send us a message anytime and we'll respond as soon as possible!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name *</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input placeholder="Your phone number" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="order">Order Support</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="feedback">Feedback/Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Quick Response:</strong> Need immediate help? Call us at{" "}
                    <a href="tel:0742405841" className="text-primary hover:underline">0742405841</a>{" "}
                    or WhatsApp us for faster assistance!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;