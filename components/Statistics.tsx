import React, { RefObject, useEffect, useMemo, useRef, useState } from "react";
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const ComponentToTrack = (props:any) => {
  if (props.isVisible){
    console.log("hi")
  return <CountUp start={0} end={props.num}  duration={5} />;}
  else{
    0
  }
}

type stat={
    heading:String,
    num:number
}


function Stat({heading,num}:stat) {
      
    return (<div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
        <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">{heading}</dt>
        <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400"><span>
          <TrackVisibility>
          <ComponentToTrack num={num} />
          </TrackVisibility>
          </span></dd>
    </div>);
}


const Statistics = () => {
    return(
<div className="bg-green-50 dark:bg-gray-800 pt-12 sm:pt-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Our reach so far</h2>
    </div>
  </div>
  <div className="mt-10 bg-white dark:bg-gray-700 pb-12 sm:pb-16">
    <div className="relative">
      <div className="absolute inset-0 h-1/2 bg-green-50 dark:bg-gray-800"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
            <Stat heading="Universities" nuqm={132} />
            <Stat heading="Coorporate Recruiters" num={52} />
            <Stat heading="Students" num={1320} />
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Statistics;
