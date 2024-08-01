import React from "react";

type faq = {
    question: string,
    answer:string
}

function Faqs({question,answer}:faq) {
    return (<div className="py-5" id="faq">
            <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>{question}</span>
                    <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">{answer}
                </p>
            </details>
        </div>
        );
};

const Faq = () => {return (
<div
    className="relative bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-screen-2xl sm:rounded-lg sm:px-10">
    <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions
            </p>
        </div>
        <div className="mx-auto mt-8 grid divide-y divide-neutral-200">
        <Faqs question="What is the FEP portal?" answer="The FEP (Foreign Exposure Program) portal is an online platform designed to manage the application, selection, and monitoring processes for students participating in international Exposure programs, internships, and research projects." />

<Faqs question="How do I access the FEP portal?" answer="You can access the FEP portal through a dedicated link provided on the IIT Kanpur website. You will need to log in using your institute-provided credentials." />
<Faqs question="Who is eligible to apply for the FEP programs?" answer="The FEP programs are typically open to undergraduate, postgraduate, and doctoral students who meet specific academic and performance criteria. Eligibility requirements are detailed in each program listing on the portal." />
<Faqs question="What documents are required for the application?" answer="Required documents usually include a resume, statement of purpose, academic transcripts, and recommendation letters. Specific requirements are listed in each program’s application guidelines on the portal." />
<Faqs question="How can I track the status of my application?" answer="You can track the status of your application through the FEP portal. Notifications about your application status, interview schedules, and final selections will be communicated through the portal and via email." />
<Faqs question="What happens after I submit my application?" answer="After submission, your application will be reviewed by faculty advisors and selection committees. If shortlisted, you may be called for an interview or additional assessments. Final selections are then communicated through the portal." />
<Faqs question="Is there any financial support available for FEP programs?" answer="Yes, financial support such as scholarships or stipends may be available to cover expenses like travel, accommodation, and living costs. Details are provided in the program listings on the portal." />
<Faqs question="What kind of pre-departure preparations are required?" answer="Pre-departure preparations include orientations on cultural training, travel arrangements, health and safety guidelines, and academic expectations. Necessary documentation, such as visas and travel insurance, must also be arranged." />
<Faqs question="How do I submit progress reports during the program?" answer="You can submit progress reports and updates through the FEP portal. These reports are monitored by faculty advisors and program coordinators to ensure the program objectives are being met." />
<Faqs question="What are the post-FEP requirements?" answer="Upon returning, you need to submit a detailed report on your experience, outlining the skills and knowledge gained. Additionally, you may be required to present your experiences in seminars or presentations organized by the institute." />
<Faqs question="How can I connect with alumni of the FEP program?" answer="The FEP portal includes a section for alumni, allowing you to connect with past participants. This network provides valuable insights and opportunities for current and future participants." />
<Faqs question="How can I provide feedback about the FEP portal and program?" answer="You can provide feedback through the FEP portal, helping the institute make improvements and enhance the experience for future participants." />
<Faqs question="Who should I contact for support and assistance?" answer="Contact information for support and assistance is provided on the FEP portal. You can reach out to program coordinators or the helpdesk for any queries or issues." />

        </div>
    </div>
</div>
);};
export default Faq;