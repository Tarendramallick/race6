"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useSearchParams } from "next/navigation"

const services = [
  {
    id: "professional-sim",
    name: "Professional Racing Simulator",
    duration: 60,
    price: 89,
    description: "Ultimate racing simulation with professional-grade setup",
  },
  {
    id: "vr-racing",
    name: "VR Racing Experience",
    duration: 45,
    price: 69,
    description: "Immersive virtual reality racing experience",
  },
  {
    id: "manual-transmission",
    name: "Manual Transmission Training",
    duration: 90,
    price: 129,
    description: "Learn proper manual transmission techniques",
  },
  {
    id: "group-session",
    name: "Group Racing Session",
    duration: 120,
    price: 299,
    description: "Compete with friends in multiplayer environment",
  },
]

const packages = [
  {
    id: "racing-enthusiast",
    name: "Racing Enthusiast",
    price: 199,
    originalPrice: 249,
    sessions: 3,
    description: "Perfect for beginners wanting to explore racing simulation",
  },
  {
    id: "pro-racer-package",
    name: "Pro Racer Package",
    price: 399,
    originalPrice: 499,
    sessions: 6,
    description: "Comprehensive training for serious racing enthusiasts",
  },
  {
    id: "championship-series",
    name: "Championship Series",
    price: 699,
    originalPrice: 899,
    sessions: 12,
    description: "Ultimate racing experience with comprehensive training",
  },
]

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  })

  // Pre-select service or package from URL params
  useEffect(() => {
    const service = searchParams.get("service")
    const packageParam = searchParams.get("package")

    if (service) {
      setSelectedService(service)
    }
    if (packageParam) {
      setSelectedPackage(packageParam)
    }
  }, [searchParams])

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + i)

      const isCurrentMonth = date.getMonth() === month
      const isPast = date < today
      const isToday = date.getTime() === today.getTime()

      days.push({
        date: date,
        day: date.getDate(),
        isCurrentMonth,
        isPast,
        isToday,
        dateString: date.toISOString().split("T")[0],
      })
    }

    return days
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const bookingData = {
      service: selectedService ? services.find((s) => s.id === selectedService) : null,
      package: selectedPackage ? packages.find((p) => p.id === selectedPackage) : null,
      date: selectedDate,
      time: selectedTime,
      customer: customerInfo,
    }

    console.log("Booking submitted:", bookingData)
    alert("Booking submitted successfully! We will contact you shortly to confirm your appointment.")

    // Reset form
    setStep(1)
    setSelectedService("")
    setSelectedPackage("")
    setSelectedDate("")
    setSelectedTime("")
    setCustomerInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    })
  }

  const canProceedToStep2 = selectedService || selectedPackage
  const canProceedToStep3 = canProceedToStep2 && selectedDate && selectedTime
  const canSubmit = canProceedToStep3 && customerInfo.firstName && customerInfo.lastName && customerInfo.email

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const selectedPackageData = packages.find((p) => p.id === selectedPackage)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="racing-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-text-shadow text-balance">
              Book Your <span className="text-red-500">Racing Experience</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 text-pretty">
              Select your service, choose your preferred time, and get ready for the ultimate racing simulation
              experience
            </p>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
              <div className={`flex items-center gap-2 ${step >= 1 ? "text-white" : "text-gray-500"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-red-600" : "bg-gray-600"}`}
                >
                  1
                </div>
                <span className="hidden sm:inline">Service</span>
              </div>
              <div className="w-8 h-px bg-gray-600"></div>
              <div className={`flex items-center gap-2 ${step >= 2 ? "text-white" : "text-gray-500"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-red-600" : "bg-gray-600"}`}
                >
                  2
                </div>
                <span className="hidden sm:inline">Date & Time</span>
              </div>
              <div className="w-8 h-px bg-gray-600"></div>
              <div className={`flex items-center gap-2 ${step >= 3 ? "text-white" : "text-gray-500"}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-red-600" : "bg-gray-600"}`}
                >
                  3
                </div>
                <span className="hidden sm:inline">Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Choose Your Experience</h2>
                <p className="text-muted-foreground">Select a single session or choose a package for better value</p>
              </div>

              {/* Individual Services */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Individual Sessions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedService === service.id ? "ring-2 ring-red-600" : ""
                      }`}
                      onClick={() => {
                        setSelectedService(service.id)
                        setSelectedPackage("")
                      }}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <Badge variant="outline">{service.duration} min</Badge>
                        </div>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-red-600">${service.price}</span>
                          {selectedService === service.id && <CheckCircle className="w-6 h-6 text-green-600" />}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Packages */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Training Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <Card
                      key={pkg.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedPackage === pkg.id ? "ring-2 ring-red-600" : ""
                      } ${pkg.name === "Pro Racer Package" ? "scale-105 ring-1 ring-red-200" : ""}`}
                      onClick={() => {
                        setSelectedPackage(pkg.id)
                        setSelectedService("")
                      }}
                    >
                      {pkg.name === "Pro Racer Package" && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-red-600">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle>{pkg.name}</CardTitle>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-3xl font-bold text-red-600">${pkg.price}</span>
                            {pkg.originalPrice && (
                              <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{pkg.sessions} sessions</p>
                        </div>
                        <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        {selectedPackage === pkg.id && <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!canProceedToStep2}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Continue to Date & Time
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Select Date & Time</h2>
                <p className="text-muted-foreground">Choose your preferred date and time slot</p>
              </div>

              {/* Selected Service/Package Summary */}
              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{selectedServiceData?.name || selectedPackageData?.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedServiceData?.description || selectedPackageData?.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">
                        ${selectedServiceData?.price || selectedPackageData?.price}
                      </div>
                      {selectedServiceData && (
                        <div className="text-sm text-muted-foreground">{selectedServiceData.duration} minutes</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Select Date
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
                          }
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <span className="font-semibold min-w-[120px] text-center">
                          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
                          }
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {generateCalendarDays().map((day, index) => (
                        <button
                          key={index}
                          onClick={() => !day.isPast && day.isCurrentMonth && setSelectedDate(day.dateString)}
                          disabled={day.isPast || !day.isCurrentMonth}
                          className={`
                            p-2 text-sm rounded-lg transition-colors
                            ${!day.isCurrentMonth ? "text-gray-300" : ""}
                            ${day.isPast ? "text-gray-400 cursor-not-allowed" : ""}
                            ${day.isToday ? "bg-blue-100 text-blue-600" : ""}
                            ${selectedDate === day.dateString ? "bg-red-600 text-white" : ""}
                            ${!day.isPast && day.isCurrentMonth && selectedDate !== day.dateString ? "hover:bg-gray-100" : ""}
                          `}
                        >
                          {day.day}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Time Slots */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Select Time
                    </CardTitle>
                    {selectedDate && (
                      <CardDescription>
                        Available times for{" "}
                        {new Date(selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {selectedDate ? (
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              p-3 text-sm rounded-lg border transition-colors
                              ${
                                selectedTime === time
                                  ? "bg-red-600 text-white border-red-600"
                                  : "hover:bg-gray-50 border-gray-200"
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground py-8">Please select a date first</div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back to Service Selection
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!canProceedToStep3}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Continue to Details
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Customer Information */}
          {step === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Your Information</h2>
                <p className="text-muted-foreground">Please provide your contact details to complete the booking</p>
              </div>

              {/* Booking Summary */}
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-semibold">{selectedServiceData?.name || selectedPackageData?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold">
                      {new Date(selectedDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-semibold">{selectedTime}</span>
                  </div>
                  {selectedServiceData && (
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-semibold">{selectedServiceData.duration} minutes</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold border-t pt-4">
                    <span>Total:</span>
                    <span className="text-red-600">${selectedServiceData?.price || selectedPackageData?.price}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={customerInfo.firstName}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                          placeholder="Your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={customerInfo.lastName}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Special Requests or Notes</Label>
                      <Textarea
                        id="notes"
                        value={customerInfo.notes}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                        placeholder="Any special requests, dietary restrictions, or additional information..."
                        rows={4}
                      />
                    </div>

                    <div className="flex justify-between pt-6">
                      <Button variant="outline" onClick={() => setStep(2)}>
                        Back to Date & Time
                      </Button>
                      <Button type="submit" disabled={!canSubmit} className="bg-red-600 hover:bg-red-700">
                        Complete Booking
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
