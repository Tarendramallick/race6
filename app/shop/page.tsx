"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Filter, Star } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const categories = [
  { id: "all", name: "All Products", count: 24 },
  { id: "simulators", name: "Racing Simulators", count: 8 },
  { id: "wheels", name: "Steering Wheels", count: 6 },
  { id: "pedals", name: "Pedal Sets", count: 4 },
  { id: "accessories", name: "Accessories", count: 6 },
]

const products = [
  {
    id: 1,
    name: "Professional Racing Simulator Pro",
    category: "simulators",
    price: 4999,
    originalPrice: 5499,
    image: "/professional-racing-simulator-setup-with-steering-.jpg",
    rating: 4.9,
    reviews: 127,
    description: "Complete professional racing simulator with triple monitor setup",
    features: ['Triple 32" Monitors', "Direct Drive Wheel", "Load Cell Pedals", "Motion Platform"],
    inStock: true,
  },
  {
    id: 2,
    name: "Precision Racing Wheel Elite",
    category: "wheels",
    price: 899,
    originalPrice: 1099,
    image: "/precision-racing-steering-wheel.jpg",
    rating: 4.8,
    reviews: 89,
    description: "High-precision direct drive racing wheel with force feedback",
    features: ["Direct Drive Motor", "Carbon Fiber Rim", "Quick Release", "Force Feedback"],
    inStock: true,
  },
  {
    id: 3,
    name: "VR Racing Experience Kit",
    category: "accessories",
    price: 1299,
    image: "/vr-racing-headset-and-setup.jpg",
    rating: 4.7,
    reviews: 156,
    description: "Complete VR racing setup with premium headset and controllers",
    features: ["VR Headset", "Hand Controllers", "Racing Games Bundle", "Setup Support"],
    inStock: true,
  },
  {
    id: 4,
    name: "Manual Transmission Shifter",
    category: "accessories",
    price: 349,
    image: "/manual-transmission-shifter-gear.jpg",
    rating: 4.6,
    reviews: 73,
    description: "Realistic manual transmission shifter with H-pattern and sequential modes",
    features: ["H-Pattern Shifting", "Sequential Mode", "Adjustable Gates", "Realistic Feel"],
    inStock: true,
  },
  {
    id: 5,
    name: "Racing Simulator Cockpit",
    category: "simulators",
    price: 1899,
    image: "/precision-racing-simulator-cockpit.jpg",
    rating: 4.8,
    reviews: 94,
    description: "Adjustable racing cockpit with premium materials and ergonomic design",
    features: ["Adjustable Seating", "Aluminum Frame", "Monitor Mounts", "Pedal Platform"],
    inStock: false,
  },
  {
    id: 6,
    name: "VR Racing Headset Pro",
    category: "accessories",
    price: 599,
    image: "/vr-racing-experience-with-headset.jpg",
    rating: 4.5,
    reviews: 112,
    description: "Professional VR headset optimized for racing simulations",
    features: ["4K Resolution", "Low Latency", "Racing Optimized", "Comfort Padding"],
    inStock: true,
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { addItem, getCartCount } = useCart()

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Racing Equipment <span className="text-red-500">Shop</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl text-pretty">
                Professional racing simulators, wheels, and accessories for the ultimate racing experience
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">{getCartCount()} items</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold text-lg text-white">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.id ? "bg-red-600 text-white" : "hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    <span>{category.name}</span>
                    <Badge
                      variant="secondary"
                      className={selectedCategory === category.id ? "bg-red-700" : "bg-gray-700"}
                    >
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                {categories.find((c) => c.id === selectedCategory)?.name}
                <span className="text-gray-400 ml-2">({filteredProducts.length} products)</span>
              </h2>
              <div className="md:hidden flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg">
                <ShoppingCart className="w-4 h-4" />
                <span className="font-semibold">{getCartCount()}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-3 left-3 bg-red-600">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="secondary" className="bg-gray-800 text-white">
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-white">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                    </div>
                    <CardTitle className="text-lg leading-tight text-white">{product.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-300">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                            {feature}
                          </Badge>
                        ))}
                        {product.features.length > 2 && (
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                            +{product.features.length - 2} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-red-600">${product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <Button
                        onClick={() => addItem(product)}
                        disabled={!product.inStock}
                        className="w-full bg-red-600 hover:bg-red-700"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
