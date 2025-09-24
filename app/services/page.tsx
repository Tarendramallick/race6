"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Monitor, Gamepad2, Calendar, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "professional-sim",
    name: "Professional Racing Simulator",
    description: "Experience the ultimate racing simulation with our professional-grade setup",
    image: "/professional-racing-simulator-setup-with-steering-.jpg",
    duration: "60 minutes",
    capacity: "1 person",
    price: 89,
    features: [
      'Triple 32" 4K monitors',
      "Direct drive steering wheel",
      "Load cell pedals",
      "Motion platform",
      "Professional racing seat",
      "Multiple racing games",
    ],
    popular: true,
  },
  {
    id: "vr-racing",
    name: "VR Racing Experience",
    description: "Immerse yourself in virtual reality racing with cutting-edge VR technology",
    image: "/vr-racing-experience-with-headset.jpg",
    duration: "45 minutes",
    capacity: "1 person",
    price: 69,
    features: [
      "Premium VR headset",
      "360-degree immersion",
      "Hand tracking controllers",
      "Multiple VR racing titles",
      "Comfortable racing seat",
      "Instructor guidance",
    ],
    popular: false,
  },
  {
    id: "manual-transmission",
    name: "Manual Transmission Training",
    description: "Learn proper manual transmission techniques with our realistic shifter setup",
    image: "/manual-transmission-shifter-gear.jpg",
    duration: "90 minutes",
    capacity: "1 person",
    price: 129,
    features: [
      "Realistic H-pattern shifter",
      "Clutch pedal training",
      "Sequential mode option",
      "Heel-toe technique coaching",
      "Multiple car simulations",
      "Personal instructor",
    ],
    popular: false,
  },
  {
    id: "group-session",
    name: "Group Racing Session",
    description: "Compete with friends in our multiplayer racing environment",
    image: "/precision-racing-simulator-cockpit.jpg",
    duration: "120 minutes",
    capacity: "4-8 people",
    price: 299,
    features: [
      "Multiple simulator stations",
      "Tournament-style racing",
      "Live timing and scoring",
      "Team competitions",
      "Refreshments included",
      "Awards ceremony",
    ],
    popular: true,
  },
]

const packages = [
  {
    name: "Racing Enthusiast",
    price: 199,
    originalPrice: 249,
    duration: "3 sessions",
    description: "Perfect for beginners wanting to explore racing simulation",
    features: [
      "2x Professional Sim sessions",
      "1x VR Racing experience",
      "Basic racing techniques guide",
      "Progress tracking",
      "Valid for 3 months",
    ],
  },
  {
    name: "Pro Racer Package",
    price: 399,
    originalPrice: 499,
    duration: "6 sessions",
    description: "Comprehensive training for serious racing enthusiasts",
    features: [
      "3x Professional Sim sessions",
      "2x Manual Transmission training",
      "1x Group racing session",
      "Personal coaching included",
      "Performance analytics",
      "Valid for 6 months",
    ],
    popular: true,
  },
  {
    name: "Championship Series",
    price: 699,
    originalPrice: 899,
    duration: "12 sessions",
    description: "Ultimate racing experience with comprehensive training",
    features: [
      "6x Professional Sim sessions",
      "3x Manual Transmission training",
      "2x VR Racing experiences",
      "1x Group racing session",
      "Dedicated instructor",
      "Competition preparation",
      "Valid for 12 months",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="racing-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-shadow text-balance">
              Racing <span className="text-red-500">Simulation</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-pretty">
              Professional racing simulators, VR experiences, and expert training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
                <Link href="/booking">Book Your Session</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="#packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Services */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Choose from our range of professional racing simulation experiences, each designed to provide the most
              realistic and engaging racing experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.popular && (
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">Most Popular</Badge>
                  )}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg">
                    <span className="text-2xl font-bold">${service.price}</span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{service.name}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {service.capacity}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button asChild className="flex-1 bg-red-600 hover:bg-red-700">
                        <Link href={`/booking?service=${service.id}`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Now
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div id="packages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Training <span className="text-red-600">Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Save money with our comprehensive training packages designed for different skill levels and commitment
              levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-red-600 scale-105" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-red-600">${pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`w-full ${pkg.popular ? "bg-red-600 hover:bg-red-700" : ""}`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      <Link href={`/booking?package=${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        Select Package
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-red-600">Turn6 Racing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Equipment</h3>
              <p className="text-muted-foreground">State-of-the-art simulators with the latest technology</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from experienced racing professionals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Realistic Experience</h3>
              <p className="text-muted-foreground">The most authentic racing simulation available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All Skill Levels</h3>
              <p className="text-muted-foreground">From beginners to professional racers</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="racing-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text-shadow">Ready to Start Your Racing Journey?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto text-pretty">
            Book your first session today and experience the thrill of professional racing simulation.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
            <Link href="/booking">Book Your Session Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
