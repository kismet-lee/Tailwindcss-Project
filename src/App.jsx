import React from "react";

export default function App() {

<div>
<div 
className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div 
            className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div 
            className="xl:max-w-xl">    
            <img 
                className="h-10"src="/img/logo.svg" 
                alt="Workcation"
            />
            <img 
                className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:w-full sm:object-cover object-center sm:h-64 lg:hidden " 
                src="/img/beach-work.jpeg" 
                alt="Woman workcationing on the beach"
            />
            <h1 
                className="mt-6 text-2xl font-bold sm:mt-8 text-gray-900 sm:text-4xl lg:text-3xl xl:text-4xl">You can work from anywhere. 
                <br className="hidden lg:inline"/>
                <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p 
                className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
                nice weather even when you're not on vacation.
            </p>
            <div 
                className="mt-4 sm:mt-6">
            <a 
                className="text-sm inline-block rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 transform transition
            focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 text-white px-4 py-2 uppercase tracking-wider font-semibold sm:text-base" 
            href="#">
                Book your escape.
            </a>
            </div>
        </div>
        </div>
        <div 
            className="hidden relative lg:block 2xl:col-span-3" >
            <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img/beach-work.jpeg" 
            alt="Woman workcationing on the beach"
            />
        </div>
    </div> 
</div>

}