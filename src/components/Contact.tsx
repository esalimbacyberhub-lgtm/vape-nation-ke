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
              Located at Yaya Center in Nairobi, our flagship store offers the complete Vape Nation experience with expert staff and premium products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Store Information */}
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">VAPE NATION NAIROBI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">Yaya Center, Nairobi, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone / WhatsApp</p>
                      <div className="flex items-center gap-2">
                        <a href="tel:0742405841" className="text-primary hover:underline flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          0742405841
                        </a>
                        <span className="text-muted-foreground">|</span>
                        <a href="https://wa.me/254742405841" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@vapenationnairobi.co.ke" className="text-primary hover:underline">
                        info@vapenationnairobi.co.ke
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
                <a href="tel:0742405841" className="flex-1">
                  <Button size="lg" className="w-full flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    CALL NOW
                  </Button>
                </a>
                <a href="https://wa.me/254742405841" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WHATSAPP
                  </Button>
                </a>
              </div>
            </div>

            {/* Location Features */}
            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Yaya Center, Nairobi</h3>
                  </div>
                  <a href="https://maps.google.com/?q=Yaya+Center+Nairobi" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      Open in Google Maps
                    </Button>
                  </a>
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
                    <h4 className="font-semibold text-sm">Modern Mall</h4>
                    <p className="text-xs text-muted-foreground">Inside Yaya Center</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 text-center">
                    <Navigation className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Prime Location</h4>
                    <p className="text-xs text-muted-foreground">Yaya Center Mall</p>
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
                        <li>• Yaya Center Main Entrance (Ground Floor)</li>
                        <li>• Argwings Kodhek Road</li>
                        <li>• Kilimani Area</li>
                        <li>• The Junction Mall (10 minutes drive)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Transportation</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Matatu routes along Argwings Kodhek Rd</li>
                        <li>• Uber/Bolt readily available</li>
                        <li>• Yaya Center parking available</li>
                        <li>• Walking distance from Kilimani</li>
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
                    <svg className="h-8 w-8 text-primary mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <h4 className="font-semibold mb-2">WhatsApp</h4>
                    <p className="text-primary font-bold text-lg">0742405841</p>
                    <p className="text-sm text-muted-foreground">Quick responses via WhatsApp</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-primary font-bold">info@vapenationnairobi.co.ke</p>
                    <p className="text-sm text-muted-foreground">Send us a detailed message</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Store className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Visit Store</h4>
                    <p className="text-primary font-bold">Yaya Center, Nairobi</p>
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