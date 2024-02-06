import { useState } from "react";
import BackgroundMobile from "./components/background/BackgroundMobile";
import IconPlus from "./components/icons/IconPlus";
import IconStar from "./components/icons/IconStar";
import IconMinus from "./components/icons/IconMinus";

interface ClickState {
  button1: boolean;
  button2: boolean;
  button3: boolean;
  button4: boolean;
  button5: boolean;
}
const App = () => {
  const [click, setClick] = useState<ClickState>({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });

  const handleClick = (button: keyof ClickState) => {
    setClick((prevClicks) => {
      const newClickState: ClickState = {
        ...prevClicks,
        [button]: !prevClicks[button],
      };

      return newClickState;
    });
  };

  return (
    <main className="bg-LightPink min-h-[120vh] w-[375px] flex justify-center">
      <section className="w-full h-[232px]">
        <BackgroundMobile width={375} height={232} />
      </section>
      <article className="text-DarkPurple w-[330px] p-6 absolute top-20 bg-White rounded-lg flex flex-col gap-5">
        <div className="flex justify-start">
          <span className="mr-5">
            <IconStar />
          </span>
          <h1 className="text-4xl font-bold ">FAQS</h1>
        </div>
        <div className="w-[280px]">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => handleClick("button1")}
              className="flex justify-between items-center hover:text-[#AD28EB]"
            >
              <h2 className="text-lg font-semibold w-[250px] text-left ">
                What is Frontend Mentor, and how will it help me?
              </h2>
              {click.button1 ? <IconMinus /> : <IconPlus />}
            </button>
          </div>
          <p
            className={`text-GrayishPurple ${
              !click.button1
                ? "hidden opacity-0 translate-y-[-2px]"
                : "opacity-100 translate-y-0"
            } transition-all duration-300 ease-in-out`}
          >
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </p>
        </div>
        <hr />
        <div className="w-[280px]">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => handleClick("button2")}
              className="flex justify-between items-center hover:text-[#AD28EB]"
            >
              <h2 className="text-lg font-semibold w-[250px] text-left">
                Is Frontend Mentor free?
              </h2>
              {click.button2 ? <IconMinus /> : <IconPlus />}
            </button>
          </div>
          <p
            className={`text-GrayishPurple ${
              !click.button2
                ? "hidden opacity-0 translate-y-[-2px]"
                : "opacity-100 translate-y-0"
            } transition-all duration-300 ease-in-out`}
          >
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </p>
        </div>
        <hr />
        <div className="w-[280px]">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => handleClick("button3")}
              className="flex justify-between items-center hover:text-[#AD28EB]"
            >
              <h2 className="text-lg font-semibold w-[250px] text-left ">
                Can I use Frontend Mentor projects in my portfolio?
              </h2>
              {click.button3 ? <IconMinus /> : <IconPlus />}
            </button>
          </div>
          <p
            className={`text-GrayishPurple ${
              !click.button3
                ? "hidden opacity-0 translate-y-[-2px]"
                : "opacity-100 translate-y-0"
            } transition-all duration-300 ease-in-out`}
          >
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to
            potential employers!
          </p>
        </div>
        <hr />
        <div className="w-[280px]">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => handleClick("button4")}
              className="flex justify-between items-center hover:text-[#AD28EB]"
            >
              <h2 className="text-lg font-semibold w-[250px] text-left">
                How can I get help if I'm stuck on a challenge?
              </h2>
              {click.button4 ? <IconMinus /> : <IconPlus />}
            </button>
          </div>
          <p
            className={`text-GrayishPurple ${
              !click.button4
                ? "hidden opacity-0 translate-y-[-2px]"
                : "opacity-100 translate-y-0"
            } transition-all duration-300 ease-in-out`}
          >
            The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and
            seek support from other community members.
          </p>
        </div>
        <hr />
      </article>
    </main>
  );
};

export default App;
