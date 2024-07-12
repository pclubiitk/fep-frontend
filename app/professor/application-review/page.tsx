"use client";
import React from "react";
import { useState } from "react";

const Application = () => {
  // Initialization with Dummy Data
  const [applicant, setApplicant] = useState("Ballu");
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [onhold, setHold] = useState(true);
  const [proj, setProj] = useState("IMP Project");
  const [sop, setSop] = useState("Man kiya");

  function accept() {
    setAccepted(true);
    setRejected(false);
    setHold(false);
  }
  function reject() {
    setRejected(true);
    setHold(false);
    setAccepted(false);
  }
  function hold() {
    setHold(true);
    setRejected(true);
    setAccepted(false);
  }

  return (
    <div className="p-4 md m-1.5 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-110 duration-500">
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/400x400" alt="course img"></img>
      <div>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Applicant&apos;s Name: {applicant}
        </h1>
        <p className="text-sm leading-6 text-gray-900">{proj}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          SOP: {sop}
        </p>
      </div>
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="">More Details
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
      </svg>
      </a>
      <div className="space-x-2">
        <button
          onClick={accept}
          className="text-right flex-shrink-0 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded mt-10 sm:mt-0"
        >
          {accepted ? "Accepted" : "Accept"}
        </button>
        <button
          onClick={reject}
          className="flex-shrink-0 text-white bg-orange-400 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded mt-10 sm:mt-0"
        >
          {rejected ? "Rejected" : "Reject"}
        </button>
        <button
          onClick={hold}
          className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded mt-10 sm:mt-0"
        >
          {onhold ? "On Hold" : "hold"}
        </button>
      </div>
    </div>
  );
};

const ApplicationReview = () => {
  return (
    <>
      <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900 text-center">
        APPLICATION REVIEW
      </h1>
      <br/>
      <section
        role="list"
        className="text-gray-600 body-font flex flex-wrap -m-4"
      >
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
        <Application />
      </section>
    </>
  );
};

export default ApplicationReview;
