"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get AI-Powered Advice Instantly
            </h1>
            <p className="text-xl mb-8">
              Ask questions, get personalized recommendations, and make better
              decisions.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our AI Advisor?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Instant Answers</h3>
                <p>Get immediate responses to your questions, 24/7.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Personalized Advice
                </h3>
                <p>
                  Receive tailored recommendations based on your specific
                  situation.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Continuous Learning
                </h3>
                <p>
                  Our AI improves with every interaction, providing better
                  advice over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Statistics Section */}
        <section className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">100,000+</p>
                <p className="text-xl">Users Helped</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">500,000+</p>
                <p className="text-xl">Questions Answered</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">98%</p>
                <p className="text-xl">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* User Reviews Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <p className="mb-4">
                  &quot;This AI advisor has been a game-changer for my
                  decision-making process. Highly recommended!&quot;
                </p>
                <p className="font-semibold">- Sarah J.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <p className="mb-4">
                  &quot;I&apos;m impressed by the accuracy and depth of the
                  advice. It&apos;s like having a personal consultant available
                  24/7.&quot;
                </p>
                <p className="font-semibold">- Michael T.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <p className="mb-4">
                  &quot;The personalized recommendations have helped me make
                  better choices in both my personal and professional
                  life.&quot;
                </p>
                <p className="font-semibold">- Emily R.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-100 dark:bg-gray-900 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied users and start getting AI-powered
              advice today.
            </p>
            <Button size="lg">Sign Up Now</Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How does the AI advisor work?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI advisor uses advanced machine learning algorithms to
                  analyze your questions and provide personalized
                  recommendations based on a vast knowledge base and real-world
                  data.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is my data safe and confidential?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we take data privacy very seriously. All your information
                  is encrypted and stored securely. We never share your personal
                  data with third parties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I use the AI advisor for business decisions?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our AI advisor is designed to help with both
                  personal and professional decision-making. Many businesses use
                  our platform for strategic insights and problem-solving.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}
