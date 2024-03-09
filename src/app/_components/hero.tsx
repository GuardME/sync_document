import React from "react";

function Hero() {
  return (
    <section className="bg-[#16161a]">
      <div
        className="flex items-baseline 
        justify-center pt-20"
      >
        <h2
          className="text-[#72757e] border 
            px-3 p-2 rounded-full
        text-center border-[#fffffe]"
        >
          See What's New | <span className="text-[#7f5af0]">AI Diagram</span>
        </h2>
      </div>
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-[#fffffe] font-extrabold sm:text-5xl">
            Documents & diagrams
            <strong className="font-extrabold text-[#fffffe] sm:block">
              for engineering teams.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-[#94a1b2]">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-[#7f5af0] text-[#fffffe] px-12 py-3 text-sm font-medium  shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
