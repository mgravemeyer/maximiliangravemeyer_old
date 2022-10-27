import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";

const Index = () => {
  return (
    <>
      <Head>
        <title>Maximilian Gravemeyer</title>
        <link rel="stylesheet" href="/index.css" />
      </Head>
      <div className="w-screen flex justify-center mt-12">
        <div className="h-full flex w-[64rem] ">
          <div className="flex-none w-64 p-4 mr-4 mt-10">
            <img
              className="w-16 mt-8"
              src={asset("logo.jpg")}
            />
            <div className="mt-10 font-[quickRegular] text-3xl">
              <h1 className="mb-1">I’m a freelance</h1>
              <h1>web developer.</h1>
            </div>
            <div className="mt-6 font-[quickRegular]">
              <p>m.gravemeyer@icloud.com</p>
              <p>+49 162 4375779</p>
            </div>
            <div className="mt-6 font-[quickRegular]">
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>

          <div className="flex-1 w-64 flex flex-col">
            <img src={asset("profile.jpg")} />

            <div className="w-2/3 mt-12">
              <h3 className="ml-1 font-[quickSemi]">About me</h3>
              <p className="font-[quickRegular] leading-relaxed mt-2">
                I'm a Full-stack developer that is experienced in modern web
                frameworks like react and node. I solve all kinds of problems in
                my day-to-day work while working on software products.
              </p>
            </div>

            <div className="w-2/3 mt-12">
              <h3 className="ml-1 font-[quickSemi]">Skills & Focus</h3>
              <p className="font-[quickRegular] leading-relaxed mt-2">
                Frontend Development (React, Next, Fresh) <br />
                Backend Development (Node, Deno, Symfony) <br />
                UI/UX and Prototyping <br />
              </p>
            </div>

            <div className="h-[3000px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
