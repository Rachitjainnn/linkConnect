'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faStarHalfAlt, faStar, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  
  const toggleBilling = () => {
    setAnnual(!annual);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Plan</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Select the plan that fits your needs and start sharing your links with the world
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-4">
          <span className={`mr-3 text-sm ${annual ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>Annual</span>
          <button 
            onClick={toggleBilling}
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
          >
            <span className="sr-only">Toggle billing period</span>
            <span 
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${annual ? 'translate-x-1' : 'translate-x-7'}`} 
            />
          </button>
          <span className={`ml-3 text-sm ${!annual ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>Monthly</span>
        </div>
        
        <p className="text-sm text-green-600 font-medium">
          Save 20% with annual billing
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Free Plan */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Free</h2>
            <p className="text-gray-500 mb-4">Get started with the basics</p>
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 ml-1">/forever</span>
            </div>
            <Link 
              href="/signup" 
              className="block w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md text-center transition mt-4"
            >
              Get Started
            </Link>
          </div>
          
          <div className="p-6 flex-1">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">1 customizable page</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Up to 5 links</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Basic analytics</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Mobile-friendly design</span>
              </li>
              <li className="flex items-start opacity-50">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faTimes} className="text-gray-400" />
                </div>
                <span className="text-gray-500">Custom domain</span>
              </li>
              <li className="flex items-start opacity-50">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faTimes} className="text-gray-400" />
                </div>
                <span className="text-gray-500">Priority support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border-2 border-blue-500 shadow-md overflow-hidden flex flex-col relative">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
            Most Popular
          </div>
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Pro</h2>
            <p className="text-gray-500 mb-4">Everything you need to grow</p>
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold text-gray-900">${annual ? '5' : '7'}</span>
              <span className="text-gray-500 ml-1">/{annual ? 'mo' : 'mo'}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Billed {annual ? 'annually ($60/year)' : 'monthly'}</p>
            <Link 
              href="/signup?plan=pro" 
              className="block w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md text-center transition mt-4"
            >
              Get Started
            </Link>
          </div>
          
          <div className="p-6 flex-1">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600"><strong>Unlimited</strong> links</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Detailed analytics</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Custom backgrounds</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Link scheduling</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Priority email support</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">No LinkConnect branding</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Business</h2>
            <p className="text-gray-500 mb-4">For teams and businesses</p>
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold text-gray-900">${annual ? '12' : '15'}</span>
              <span className="text-gray-500 ml-1">/{annual ? 'mo' : 'mo'}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Billed {annual ? 'annually ($144/year)' : 'monthly'}</p>
            <Link 
              href="/signup?plan=business" 
              className="block w-full py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-md text-center transition mt-4"
            >
              Get Started
            </Link>
          </div>
          
          <div className="p-6 flex-1">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Everything in Pro</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Multiple team members</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Custom domain</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Advanced analytics</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">API access</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-2 mt-0.5">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </div>
                <span className="text-gray-600">Dedicated support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Feature Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-6 text-left text-gray-600 font-medium">Feature</th>
                <th className="py-4 px-6 text-center text-gray-600 font-medium">Free</th>
                <th className="py-4 px-6 text-center text-blue-600 font-medium">Pro</th>
                <th className="py-4 px-6 text-center text-gray-600 font-medium">Business</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 text-gray-700">Number of links</td>
                <td className="py-4 px-6 text-center text-gray-600">5</td>
                <td className="py-4 px-6 text-center text-gray-600 font-medium">Unlimited</td>
                <td className="py-4 px-6 text-center text-gray-600 font-medium">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 text-gray-700">Custom backgrounds</td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faTimes} className="text-gray-400" />
                </td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 text-gray-700">Analytics</td>
                <td className="py-4 px-6 text-center text-gray-600">Basic</td>
                <td className="py-4 px-6 text-center text-gray-600">Detailed</td>
                <td className="py-4 px-6 text-center text-gray-600">Advanced</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 text-gray-700">Custom domain</td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faTimes} className="text-gray-400" />
                </td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faTimes} className="text-gray-400" />
                </td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 text-gray-700">Link scheduling</td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faTimes} className="text-gray-400" />
                </td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 text-gray-700">Remove LinkConnect branding</td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faTimes} className="text-gray-400" />
                </td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </td>
                <td className="py-4 px-6 text-center">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 text-gray-700">Team members</td>
                <td className="py-4 px-6 text-center text-gray-600">1</td>
                <td className="py-4 px-6 text-center text-gray-600">1</td>
                <td className="py-4 px-6 text-center text-gray-600">Up to 5</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-6 text-gray-700">Support</td>
                <td className="py-4 px-6 text-center text-gray-600">Email</td>
                <td className="py-4 px-6 text-center text-gray-600">Priority</td>
                <td className="py-4 px-6 text-center text-gray-600">Dedicated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Can I switch plans later?</h3>
            <p className="text-gray-600">
              Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the end of your current billing cycle.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Do you offer refunds?</h3>
            <p className="text-gray-600">
              We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our payment processor.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Is there a contract or commitment?</h3>
            <p className="text-gray-600">
              No long-term contracts! Our monthly plans can be canceled anytime. Annual plans offer savings but can also be canceled anytime, though refunds are prorated after the 14-day guarantee period.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Share Your Links with the World?</h2>
          <p className="mb-6 max-w-xl mx-auto">
            Start with our free plan or get all features with Pro. No credit card required for free accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition font-medium">
              Create Your Free Page
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}