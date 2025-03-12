"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "What is a Digital Download?",
        answer:
            "A digital download is described as a product which will be delivered to you through the internet, most commonly through email, giving you access to download the product you have purchased immediately. Gosoftware will not dispatch and physical DVD or CD. Your software will be sent within minutes to the email address provided during the order process.",
    },
    {
        question: "How soon after purchase will I receive my software?",
        answer:
            "As soon as your payment has been successfully processed you will be able to instantly download. You will also receive a download link in a confirmation email to the email address provided.",
    },
    {
        question: "Can I buy one licensed software and install it on multiple computers.",
        answer:
            "No. Retail Product software licenses are designed to install and active on one computer only. We do however offer bulk deals on all our products.",
    },
    {
        question: "Do you supply your products in large wholesale or bulk orders?",
        answer: (
            <>
                Yes. Bulk orders can be processed by contacting us directly through live chat or emailing our support team at&nbsp;
                <a href="mailto:support@gosoftwarebuy.com" className="text-blue-600 font-bold underline">
                    support@gosoftwarebuy.com
                </a>
            </>
        ),
    },
    {
        question: "What's the difference between office 365 and office 2021?",
        answer: (
            <>
                <strong>Microsoft 365</strong> is a subscription that comes with premium apps like Word, Excel, PowerPoint, OneNote, Outlook, Publisher and Access (Publisher and Access available on PC only). The apps can be installed on multiple devices, including PCs, Macs, iPads, iPhones, Android tablets and Android phones. Microsoft 365 also comes with services like 1 TB of OneDrive storage, 60 Skype minutes per month and Microsoft chat and phone support. With a subscription, you get the latest versions of the apps and automatically receive updates when they happen.
                <br /><br />
                <strong>Office 2021</strong> is a one-time purchase that comes with classic apps like Word, Excel and PowerPoint for PC or Mac, and does not include any of the services that come with a Microsoft 365 subscription. One-time purchases don’t have an upgrade option, which means if you plan to upgrade to the next major release, you’ll have to buy it at full price.
                <br /><br />
                Buy <a href="https://www.microsoft.com/en/microsoft-365/buy" className="text-blue-600 font-bold underline">Office 2021</a> version for your needs.
            </>
        ),
    },
    {
        question: "How do I download, install, reinstall, activate, or update Office?",
        answer: (
            <>
                Once you have purchased Office, you can install it from the Services & subscriptions section of your
                <a href="https://account.microsoft.com/services/" className="text-blue-600 font-bold underline">
                    Microsoft Account page
                </a>.
                <br /><br />
                Go to the <a href="https://support.microsoft.com/office" className="text-blue-600 font-bold underline">
                    help center
                </a> for more steps to download, install, reinstall, activate, or update Office.
            </>
        ),
    },
    {
        question: "Do I need internet access to run Office?",
        answer:
            "Internet access is required to install and activate Office, but not to use Office apps such as Word, Excel, and PowerPoint once you have these fully installed on your computer.",
    },
]

export default function FAQSection() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-[#001c5c] mb-8 text-center">Frequently asked questions</h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-[#001c5c] font-medium text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-700 max-w-4xl">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

