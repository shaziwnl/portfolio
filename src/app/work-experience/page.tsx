import WorkExperienceResumeItem from "@/components/WorkExperienceResume";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const resumeItems = {
    Meta: [
        "Incoming Software Engineer Intern at 메타 for Summer 2025",
    ],
    TD: [
        "Saved users 20+ minutes per banking session by integrating the Plaid API into an open banking application and delivering real-time multi-account aggregation. Built using Firebase with TypeScript",
        "Spearheaded the development of an automated technical interview tool using NextJS and Firebase, completely automating the manual interview process within the team, saving $100 per interview",
        "Designed and implemented the software architecture from the ground up for a new application, that provides users with personalization, guidance and actions. Implemented using the OpenAI API with PyMongo and LangChain",
    ],
    Questrade: [
        "Developed the “Roll Up Options” feature for the Questrade web application that enables users to extend the expirations of their existing options. Implemented business logic in TypeScript for a new order-entry library",
        "Boosted testing efficiency by 50 seconds by creating automated performance tests in JMeter using Java",
        "Improved the accuracy of order entry creation and saved user income by fixing a critical bug for the new micro front-end in Angular which used to create an order for an incorrect number of shares",
        "Detected 15+ major bugs through UAT testing for new microservice endpoints using Postman",
    ],
    TCS: [
        "Accelerated the report generation of product reviews by 85% for Walmart Canada, using Scikit-Learn Logistic Regression and SVM. Achieved an accuracy of 98% between expected and actual output",
        "Enhanced the TCS resume screening accuracy by 25% using PyPDF2 and the OpenAI API",
        "Authored comprehensive code documentation for system-integration tests, detailing test cases, architecture, and automation workflows to ensure maintainability and ease of future enhancements",
        "Analyzed and suggested improvements for the responses of an AI Chatbot for the TCS employee portal",
    ],
    IQHub: [
        "Created the foundation and developed the website for IQ Hub, a leading coaching institute using React",
        "Migrated the codebase to Angular and employed responsive web-design methods to maximize compatibility",
        "Implemented a data storage system by integrating Google Sheets Apps Script API to store form data",
        "Contacted and enrolled 150+ new students using stored data, earning over $25,000",
    ],
}

export default function Experience() {
    return (
      <div className="max-w-4xl mx-auto md:p-6 text-white">

        <div className="flex items-center justify-center">
                  
          <div className="transition-transform transform duration-300 hover:scale-125 mb-8">
            <Link href="/" className="">
                <AiFillHome className="text-2xl md:text-4xl text-white scale-100" />
            </Link>
          </div>
          
  
          
          <div className="flex-grow text-center">
            <h1 className="text-xl md:text-4xl font-semibold text-center mb-8 mt-8 md:mb-14 md:mt-5">WORK EXPERIENCE</h1>
          </div>

        </div>

        {/* <div className="absolute top-8 left-6 md:top-7 md:left-10 ">
          <Link href='/'>
            <AiFillHome className="text-2xl md:text-4xl text-white"/>
          </Link>
        </div> */}

        

        {/* Meta Section */}
        <WorkExperienceResumeItem title="Software Engineer" company="메타" location="Seattle, WA" date="May 2025 - Present" resumeItems={resumeItems.Meta}/>

        {/* TD Section */}
        <WorkExperienceResumeItem title="Software Developer" company="TD Bank" location="Waterloo, ON" date="Jan 2025 – Apr 2025" resumeItems={resumeItems.TD}/>
  
        {/* Questrade Section */}
        <WorkExperienceResumeItem title="Full Stack Engineer" company="Questrade" location="Toronto, ON" date="Jan 2024 – Apr 2024" resumeItems={resumeItems.Questrade}/>
  
        {/* TCS Section */}
        <WorkExperienceResumeItem title="Software Developer" company="Tata Consultancy Services" location="Toronto, ON" date="May 2023 – Sep 2023" resumeItems={resumeItems.TCS}/>
  
        {/* IQ Hub Section */}
        

      </div>
    );
  }
  