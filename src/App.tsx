import "./index.css";
import { useEffect, useState } from "react";
import IconPlus from "./components/icons/IconPlus";
import IconStar from "./components/icons/IconStar";
import IconMinus from "./components/icons/IconMinus";
import { data } from "./constant";
// import BackgroundDesktop from "./components/background/BackgroundDesktop";
// import BackgroundMobile from "./components/background/BackgroundMobile";
import mobile from "../src/images/background-pattern-mobile.svg";
import desktop from "../src/images/background-pattern-desktop.svg";

interface ClickState {
  button1: boolean;
  button2: boolean;
  button3: boolean;
  button4: boolean;
  button5: boolean;
}
const App = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widthScreen]);

  return (
    <>
      <main className="bg-LightPink flex flex-col justify-center w-screen">
        <section
          style={{
            background: `url(${
              widthScreen > 600 ? desktop : mobile
            }) center/cover no-repeat`,
            height: "232px",
            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        ></section>
        <section className="relative w-screen h-[150vh] md:h-[100vh] flex justify-center">
          <article className="text-DarkPurple w-[330px] p-6 absolute top-[-20%] sm:top-[-25%] bg-White rounded-lg flex flex-col gap-5 sm:w-[600px]">
            <div className="flex justify-start mt-4">
              <span className="mr-5">
                <IconStar />
              </span>
              <h1 className="text-4xl font-bold md:text-5xl ">FAQS</h1>
            </div>
            {data.map((item) => (
              <>
                <div className="w-[280px] mb-4 sm:w-full" key={item.id}>
                  <div className="flex justify-between items-center sm:w-full">
                    <button
                      onClick={() =>
                        handleClick(`button${item.id}` as keyof ClickState)
                      }
                      className="flex justify-between items-center hover:text-[#AD28EB] sm:w-full sm:justify-evenly"
                    >
                      <h2 className="text-lg font-semibold w-[250px] text-left sm:w-full mb-3">
                        {item.title}
                      </h2>
                      {click[`button${item.id}` as keyof ClickState] ? (
                        <IconMinus />
                      ) : (
                        <IconPlus />
                      )}
                    </button>
                  </div>
                  <p
                    className={`text-GrayishPurple ${
                      !click[`button${item.id}` as keyof ClickState]
                        ? "hidden-container"
                        : "showed-container"
                    } `}
                  >
                    {item.paragraph}
                  </p>
                </div>
                <hr />
              </>
            ))}
          </article>
        </section>
      </main>
      <footer className="bg-LightPink">
        <h6 className="text-center">
          Challenge by Frontend Mentor. Coded by
          <a
            href="https://portfolio-frontdev.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AD28EB]"
          >
            {" "}
            <strong>German Pinto.</strong>
          </a>
        </h6>
      </footer>
    </>
  );
};

export default App;
