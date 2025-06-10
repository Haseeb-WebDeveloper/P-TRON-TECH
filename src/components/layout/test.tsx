import React from 'react';
import {
    ChevronRight,
    Smartphone,
    TrendingUp,
    Users,
    Shield,
    CheckCircle,
    Star,
    ArrowRight,
    Clock,
    DollarSign,
    Globe,
    Zap,
    Target,
    Award,
    Lock,
    FileText,
    Mail,
    CreditCard
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UrgencyAndFaq } from './UrgencyAndFaq';

export default function Test() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="text-center">

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Invest in the Future of
                            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> Work</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-4xl mx-auto leading-relaxed">
                            Own a Piece of a <span className="text-amber-400 font-bold">$100B Swiss Micro-Task App</span>
                        </p>

                        <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
                            A free app that lets anyone earn money with their smartphone – no skills needed.
                            Backed by a Swiss tech team, 50% funded, and launching in 2025.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                                Invest Now – Limited Spots
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <span className="text-amber-300 text-sm">⚡ Only 3% equity remaining</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Works Section */}
            <section>
                <div className="container mx-auto px-4 py-16 rounded-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center"
                    >
                        <div className="flex items-center gap-3 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span className="">Complete ontzorging</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span className=""> Startdatum binnen 2 weken</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center md:pl-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="">Actief in de hele Randstad</span>
                        </div>
                        <div className="flex items-center gap-3 justify-center md:pl-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="">Subsidie-begeleiding</span>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* The Concept Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            The Concept: <span className="text-blue-600">Micro-Tasks = Massive Earnings</span>
                        </h2>
                        <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                            A free, intuitive mobile app where users earn money by completing quick tasks
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 rounded-full p-3">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Instant Earnings</h3>
                                    <p className="text-lg text-gray-800">Complete quick tasks like surveys, validations, and simple content creation</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 rounded-full p-3">
                                    <Smartphone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Zero Barriers</h3>
                                    <p className="text-lg text-gray-800">No resume, no commitments – just a smartphone and internet connection</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-100 rounded-full p-3">
                                    <TrendingUp className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Gig Economy Growth</h3>
                                    <p className="text-lg text-gray-800">Built for the exploding gig economy ($335B by 2025)</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-full w-full max-h-[450px] flex justify-end">
                            <Image src="/test.jpg" alt="Why It Works" width={1000} height={1000}
                                className="object-contain h-full w-fit max-h-[500px]" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Market Potential Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Market Potential: <span className="text-amber-600">A Goldmine Waiting</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Smartphone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">99%</h3>
                            <p className="text-gray-800 text-lg">Smartphone penetration in Europe</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-green-600 mb-2">Millions</h3>
                            <p className="text-gray-800 text-lg">Potential users (students, side hustlers, retirees)</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 text-center">
                            <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-amber-600 mb-2">First</h3>
                            <p className="text-gray-800 text-lg">First-mover advantage – no app like this exists yet</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Projected Growth Timeline</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-center space-x-4">
                                <div className="bg-white/20 rounded-full p-4">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-semibold">2025: Official Launch</h4>
                                    <p className="text-blue-100">App Store & Google Play release</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-white/20 rounded-full p-4">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-semibold">2026: International Expansion</h4>
                                    <p className="text-blue-100">Scaling & monetization phase</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            The Roadmap: <span className="text-green-600">Where We Are Now</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <div className="flex items-center bg-green-100 rounded-lg p-6">
                                <CheckCircle className="w-8 h-8 text-green-600 mr-4" />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-gray-900">Idea Validation</h3>
                                    <p className="text-lg text-gray-800">Market research and concept validation</p>
                                </div>
                                <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold">Completed</span>
                            </div>

                            <div className="flex items-center bg-green-100 rounded-lg p-6">
                                <CheckCircle className="w-8 h-8 text-green-600 mr-4" />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-gray-900">UX/Design</h3>
                                    <p className="text-lg text-gray-800">User interface and experience design</p>
                                </div>
                                <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold">Completed</span>
                            </div>

                            <div className="flex items-center bg-blue-100 rounded-lg p-6">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-gray-900">Development</h3>
                                    <p className="text-lg text-gray-800">Core app development and testing</p>
                                </div>
                                <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">In Progress</span>
                            </div>

                            <div className="flex items-center bg-amber-100 rounded-lg p-6">
                                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-gray-900">2025 Launch</h3>
                                    <p className="text-lg text-gray-800">Official market release and user acquisition</p>
                                </div>
                                <span className="bg-amber-600 text-white px-4 py-2 rounded-full font-semibold">On Track</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            The Team: <span className="text-red-600">Swiss-Backed & Experienced</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="bg-red-50 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <Shield className="w-8 h-8 text-red-600 mr-3" />
                                    <h3 className="text-2xl font-bold text-gray-900">P-TRON TECH</h3>
                                </div>
                                <p className="text-gray-800 text-lg mb-4">Swiss-registered company, fully GDPR-compliant with transparent legal structure</p>
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                                    <span className="text-sm text-lg text-gray-800">Zurich, Switzerland</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Founder: Enzo</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-3">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-800 text-lg">@travail_en_suisse – 85K followers</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <TrendingUp className="w-5 h-5 text-green-600" />
                                        <span className="text-gray-800 text-lg">Millions of monthly views</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Development Team</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 text-lg">🇨🇭 Swiss Engineers</span>
                                    <div className="flex space-x-1">
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 text-lg">🇫🇷 French Designers</span>
                                    <div className="flex space-x-1">
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 text-lg">🌍 Eastern European Developers</span>
                                    <div className="flex space-x-1">
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            💎 Why Invest Now?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="flex items-center mb-4">
                                <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                                <h3 className="text-xl font-bold">50% Already Funded</h3>
                            </div>
                            <p className="text-blue-100">Founder's own capital invested = genuine skin in the game</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="flex items-center mb-4">
                                <Shield className="w-8 h-8 text-red-400 mr-3" />
                                <h3 className="text-xl font-bold">Swiss Legal Security</h3>
                            </div>
                            <p className="text-blue-100">Transparent structure, no hidden fees, full legal protection</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="flex items-center mb-4">
                                <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                                <h3 className="text-xl font-bold">Early Access to Profits</h3>
                            </div>
                            <p className="text-blue-100">Potential 10X–100X returns for early investors</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="flex items-center mb-4">
                                <Star className="w-8 h-8 text-amber-400 mr-3" />
                                <h3 className="text-xl font-bold">Exclusive Perks</h3>
                            </div>
                            <p className="text-blue-100">Investor portal, updates, and direct founder access</p>
                        </div>
                    </div>

                    <div className="bg-foreground/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Investment Tiers & Perks</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/20 rounded-xl p-6">
                                <h4 className="text-xl font-bold mb-4">100 CHF+ Investors</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-300" />
                                        <span>Investor portal access</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-300" />
                                        <span>Monthly progress updates</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-300" />
                                        <span>Early user benefits</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/20 rounded-xl p-6">
                                <h4 className="text-xl font-bold mb-4">5,000 CHF+ Investors</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-300" />
                                        <span>Direct access to founder</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-300" />
                                        <span>Beta testing privileges</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-300" />
                                        <span>Strategic input opportunities</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Funds Usage Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            📈 How Funds Will Be Used
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-100 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-xl">50%</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">App Development</h3>
                                </div>
                                <p className="text-gray-800 text-lg">Core platform development, testing, and optimization</p>
                            </div>

                            <div className="bg-green-100 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-xl">20%</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Marketing & Launch</h3>
                                </div>
                                <p className="text-gray-800 text-lg">User acquisition, brand building, and market penetration</p>
                            </div>

                            <div className="bg-purple-100 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-xl">15%</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Customer Support</h3>
                                </div>
                                <p className="text-gray-800 text-lg">24/7 support team and user success initiatives</p>
                            </div>

                            <div className="bg-amber-100 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-xl">15%</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Emergency Reserve</h3>
                                </div>
                                <p className="text-gray-800 text-lg">Risk mitigation and unexpected opportunity fund</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ⚠ Transparency & Safety
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 rounded-2xl p-8 text-center">
                            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">🔒 Swiss-Hosted Data</h3>
                            <p className="text-gray-800 text-lg">GDPR-compliant with the highest privacy standards</p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 text-center">
                            <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">📜 Full Legal Docs</h3>
                            <p className="text-gray-800 text-lg">Complete documentation provided before investment</p>
                        </div>

                        <div className="bg-red-50 rounded-2xl p-8 text-center">
                            <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">🚫 No Hidden Fees</h3>
                            <p className="text-gray-800 text-lg">No auto-subscriptions or surprise charges</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <UrgencyAndFaq />

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center bg-red-500/20 rounded-full px-6 py-3 mb-8">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse mr-3"></div>
                        <span className="text-red-200 font-semibold">🚨 Limited Opportunity – Act Fast</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Only 3% of equity left for early investors
                    </h2>

                    <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                        Don't miss your chance to own a piece of the future of work.
                        This opportunity won't last long.
                    </p>

                    <div className="space-y-8">
                        <button className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                            Claim Your Stake Now
                            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-6">✍ How to Invest (30 Seconds)</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 rounded-full p-3">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold">1. Fill the Form</h4>
                                        <p className="text-blue-100 text-sm">Name, Email, Investment Amount</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 rounded-full p-3">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold">2. Get Legal Docs</h4>
                                        <p className="text-blue-100 text-sm">Review & Sign</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 rounded-full p-3">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold">3. Wire Funds</h4>
                                        <p className="text-blue-100 text-sm">Secure & Tracked</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/20 rounded-full p-3">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold">4. Investor Portal</h4>
                                        <p className="text-blue-100 text-sm">Updates + Perks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
