import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Trophy, Users, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center racing-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/professional-racing-simulator-setup-with-steering-.jpg')`,
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hero-text-shadow text-balance animate-fade-in-up">
              Unleash Your Inner <span className="text-primary animate-pulse-glow">Speedster</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty hero-text-shadow animate-fade-in-up animation-delay-200">
              Experience the ultimate racing adventures with professional-grade simulators, VR experiences, and expert
              training at Turn6 Racing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-glow">
                <Link href="/booking">
                  Book Your Session <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional racing equipment for the ultimate simulation experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src="/precision-racing-steering-wheel.jpg"
                  alt="Precision Drive Pro"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Precision Drive Pro</h3>
              <p className="text-2xl font-bold text-primary">$25</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src="/vr-racing-headset-and-setup.jpg"
                  alt="Elite VR Racing Throne"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Elite VR Racing Throne</h3>
              <p className="text-2xl font-bold text-primary">$25</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <img
                  src="/manual-transmission-shifter-gear.jpg"
                  alt="Stick Shift Racing Gear"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Stick Shift Racing Gear</h3>
              <p className="text-2xl font-bold text-primary">$25</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gray-200 hover:bg-gray-300 text-black px-12 py-3 rounded-full text-lg font-semibold"
            >
              <Link href="/shop">SHOP ALL</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional racing experiences tailored to your skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 bg-gray-700 border-gray-600">
              <CardContent className="p-0">
                <div className="h-48 bg-gray-600 rounded-t-lg overflow-hidden">
                  <img
                    src="/precision-racing-simulator-cockpit.jpg"
                    alt="Precision Drive Solution"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Precision Drive Solution</h3>
                  <p className="text-gray-300 mb-4">
                    Experience heightened control and immersion with our cutting-edge racing simulators.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$89/hr</span>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white">
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gray-700 border-gray-600">
              <CardContent className="p-0">
                <div className="h-48 bg-gray-600 rounded-t-lg overflow-hidden">
                  <img
                    src="/vr-racing-experience-with-headset.jpg"
                    alt="VR Racing Seat Experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">VR Racing Seat Experience</h3>
                  <p className="text-gray-300 mb-4">
                    Immerse yourself in the ultimate driving simulation with our state-of-the-art VR racing seats.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$129/hr</span>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white">
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gray-700 border-gray-600">
              <CardContent className="p-0">
                <div className="h-48 bg-gray-600 rounded-t-lg overflow-hidden">
                  <img
                    src="/manual-transmission-training-setup.jpg"
                    alt="ProDrive Manual Mastery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">ProDrive Manual Mastery</h3>
                  <p className="text-gray-300 mb-4">
                    Master manual transmission with comprehensive instruction and skill refinement.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$149/hr</span>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white">
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-300">Racing Sessions</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-300">Happy Racers</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Zap className="h-12 w-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-300">Racing Simulators</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Star className="h-12 w-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Experience the Thrill?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
            Book your racing session today and discover what it feels like to be behind the wheel of a professional
            racing simulator.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
            <Link href="/booking">
              Schedule Your Session <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden">
                  <img src="/turn6-logo-red.png" alt="Turn6 Racing Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-lg text-white">Turn6 Racing</span>
              </div>
              <p className="text-white/80">Professional racing simulators and training experiences.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Sim Racing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    VR Experience
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Manual Training
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-primary transition-colors">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-2 text-white/80">
                <p>123 Racing Street</p>
                <p>Speedway City, SC 12345</p>
                <p>(555) 123-RACE</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 Turn6 Racing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
