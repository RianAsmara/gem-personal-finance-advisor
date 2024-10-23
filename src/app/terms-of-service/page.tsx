import { NextPage } from "next";
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - fin.ai</title>
        <meta name="description" content="Terms of Service for fin.ai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Terms of Service
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Last updated: 2023-07-21T06:42:00.000Z
            </p>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[70vh] pr-4">
              <div className="space-y-6">
                <p>
                  Please read these Terms of Service (&quot;Terms&quot;,
                  &quot;Terms of Service&quot;) carefully before using the
                  fin.ai website (the &quot;Service&quot;) operated by PT COMPILE LAB
                </p>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    1. Acceptance of Terms
                  </h2>
                  <p>
                    By accessing or using the Service, you agree to be bound by
                    these Terms. If you disagree with any part of the terms,
                    then you may not access the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    2. Description of Service
                  </h2>
                  <p>
                    fin.ai is a website that offers resume review and
                    interview practice services. The Service allows users to
                    upload their resumes and receive a detailed report with
                    actionable suggestions for improvement. Additionally, users
                    can engage in mock interviews with AI and receive
                    suggestions to enhance their real-life interview skills. All
                    AI services, including resume analysis and interview
                    feedback, utilize the GEMINI AI API.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    3. Data Privacy
                  </h2>
                  <p>
                    We are committed to protecting your privacy. All data
                    uploaded by users, including personal information, is stored
                    solely for AI analysis purposes. We do not use user data for
                    training or sell it to any third party. Users have the
                    option to permanently delete their uploaded data and
                    personal information by clicking the delete button.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    4. Future Features and Data Collection{" "}
                  </h2>
                  <p>
                    In the future, fin.ai may introduce additional features
                    that require more user data. Any data collected will be used
                    solely for the benefit of the users themselves and will not
                    be shared with any third party.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    5. Payment Gateway
                  </h2>
                  <p>
                    fin.ai utilizes the Lemonsqueezy payment gateway for USD
                    transactions and the Xendit payment gateway for IDR
                    transactions. All payment data is securely stored by these
                    payment gateways.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    6. Ownership and Legal Information
                  </h2>
                  <p>
                    fin.ai is owned and operated by PT COMPILE LAB. fin.ai is legally registered to
                    Electronic System Organizers by the Ministry of
                    Communication and Information in Indonesia.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    7. Contact Information
                  </h2>
                  <p>
                    For any business inquiries, please contact us at
                    business@fin.ai.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    8. Changes to Terms of Service
                  </h2>
                  <p>
                    We reserve the right to modify or replace these Terms at any
                    time. Any changes will be effective immediately upon posting
                    the revised Terms on this page. It is your responsibility to
                    review these Terms periodically for any updates or changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">
                    9. Governing Law
                  </h2>
                  <p>
                    These Terms shall be governed and construed in accordance
                    with the laws of Republik Indonesia, without regard to its
                    conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact
                    us at business@fin.ai.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default TermsOfService;
