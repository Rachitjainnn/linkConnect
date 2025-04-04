'use client'
import Link from "next/link";
import { faLink, faPalette, faChartLine, faUserShield, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import AboutCard from "@/components/card/AboutCard";
import StepsCard from "@/components/card/StepsCard";

const features = [
    {title:"Secure Authentication", icon:faUserShield, description:"Create your account and manage your personal page with our secure authentication system."},
    {title:"Link Management", icon:faLink, description:"Add, edit, and organize all your important links in one central location for easy sharing."},
    {title:"Full Customization", icon:faPalette, description:"Personalize your page with custom background photos, colors, and styling options."},
    {title:"Detailed Analytics", icon:faChartLine, description:"Track profile visits and link clicks in real-time with daily and overall performance metrics."},
    {title:"Easy Sharing", icon:faShareAlt, description:"Share your personal page with a single, memorable link across all your platforms."},
    {title:"Performance Insights", icon:faChartLine, description:"See which links perform best and understand your audience with comprehensive statistics."}
]

const steps = [
    {title:"Create Your Account", description:"Sign up and set up your personal profile with your name and bio."},
    {title:"Add Your Links", description:"Add all your important links and customize their appearance."},
    {title:"Share & Track", description:"Share your unique URL and monitor engagement through analytics."}
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About LinkConnect</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Your personal digital hub: share all your important links in one customizable, analytics-powered page
        </p>
      </header>

      {/* Hero Section with Image */}
      <section className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">One Link to Share Everything</h2>
            <p className="text-gray-600 mb-6">
              LinkConnect helps you create a personalized page where you can share all your important links, social profiles, 
              and content with your audience. Stand out with full customization and get valuable insights on how your audience 
              engages with your content.
            </p>
            <Link href="/login" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition inline-block">
              Create Your Page
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-80 bg-white rounded-xl shadow-xl flex flex-col p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-10 bg-blue-100 rounded-lg w-full mb-2"></div>
                <div className="h-10 bg-green-100 rounded-lg w-full mb-2"></div>
                <div className="h-10 bg-purple-100 rounded-lg w-full mb-2"></div>
                <div className="h-10 bg-yellow-100 rounded-lg w-full mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, index) => (
                <AboutCard key={index} info={item}/>

            ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">How It Works</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
                <StepsCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Highlight */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Know Your Audience</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="font-medium text-xl text-gray-700 mb-4">Powerful Analytics</h3>
              <p className="text-gray-600 mb-4">
                Our built-in analytics provide valuable insights about your audience:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Track daily and total profile visits</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Monitor individual link performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Compare today's engagement with historical data</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Identify your most popular content</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                <div className="h-8 bg-gray-200 w-full rounded-lg mb-4"></div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="h-4 bg-gray-200 w-1/2 rounded mb-2"></div>
                    <div className="h-8 bg-blue-200 w-full rounded"></div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="h-4 bg-gray-200 w-1/2 rounded mb-2"></div>
                    <div className="h-8 bg-green-200 w-full rounded"></div>
                  </div>
                </div>
                <div className="h-32 bg-gray-200 w-full rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Create Your LinkConnect Page?</h2>
          <p className="mb-6 max-w-xl mx-auto">
            Join thousands of creators, influencers, and professionals who use LinkConnect to share their content and track engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link href={`${process.env.NEXT_PUBLIC_URL}helloo`} target="_blank" className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition">
              See Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}