import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Award } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Marcus Rodriguez",
    role: "Founder & Head Instructor",
    experience: "15+ years",
    image: "/professional-racing-instructor-headshot.jpg",
    bio: "Former professional race car driver with extensive experience in Formula racing and endurance events.",
    achievements: ["SCCA National Champion", "Le Mans Competitor", "Racing Instructor Certified"],
  },
  {
    name: "Sarah Chen",
    role: "VR Experience Director",
    experience: "8+ years",
    image: "/female-tech-professional-headshot.jpg",
    bio: "VR technology specialist and racing enthusiast, bringing cutting-edge virtual reality to racing simulation.",
    achievements: ["VR Technology Expert", "Racing Simulation Pioneer", "Customer Experience Leader"],
  },
  {
    name: "David Thompson",
    role: "Technical Director",
    experience: "12+ years",
    image: "/technical-director-professional-headshot.jpg",
    bio: "Automotive engineer and simulation technology expert, ensuring our equipment delivers the most realistic experience.",
    achievements: ["Automotive Engineer", "Simulation Expert", "Equipment Specialist"],
  },
]

const milestones = [
  {
    year: "2018",
    event: "Turn6 Racing Founded",
    description: "Started with a single racing simulator in a small garage",
  },
  {
    year: "2019",
    event: "First Professional Setup",
    description: "Upgraded to professional-grade equipment and moved to current location",
  },
  { year: "2020", event: "VR Integration", description: "Added cutting-edge VR racing experiences to our offerings" },
  { year: "2021", event: "1000+ Sessions", description: "Reached milestone of 1000 successful training sessions" },
  { year: "2022", event: "Expanded Facility", description: "Doubled our space and added multiple simulator stations" },
  {
    year: "2023",
    event: "Championship Training",
    description: "Launched professional racing championship preparation programs",
  },
  {
    year: "2024",
    event: "Industry Recognition",
    description: 'Awarded "Best Racing Simulation Center" by Racing Weekly',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="racing-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-text-shadow text-balance">
              About <span className="text-red-500">Turn6 Racing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-pretty">
              Pioneering the future of racing simulation with professional-grade equipment and expert instruction
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-red-600">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              At Turn6 Racing, we're passionate about bringing the thrill and precision of professional racing to
              everyone. Our mission is to provide the most realistic and immersive racing simulation experience
              possible, helping drivers of all skill levels improve their technique, learn new skills, and experience
              the adrenaline of high-speed racing in a safe, controlled environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Precision Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We focus on developing precise driving techniques using professional-grade simulation equipment that
                  mirrors real racing conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Expert Instruction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team of experienced racing professionals provides personalized coaching to help you reach your
                  racing goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Championship Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From beginners to professional racers, we prepare drivers for competition at every level with
                  comprehensive training programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-red-600">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our experienced team of racing professionals and technology experts are dedicated to providing you with
              the best possible racing simulation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-red-600 font-semibold">{member.role}</CardDescription>
                  <Badge variant="outline">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{member.bio}</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center justify-center gap-2">
                        <Award className="w-4 h-4 text-red-600" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From humble beginnings to becoming the premier racing simulation center, here's how we've grown over the
              years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">5000+</div>
              <div className="text-muted-foreground">Sessions Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">6</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="racing-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text-shadow">Ready to Experience Turn6 Racing?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto text-pretty">
            Join hundreds of satisfied customers who have improved their racing skills with our professional simulation
            training.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
