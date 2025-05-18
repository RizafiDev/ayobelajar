import ElipsBackground from "../assets/heading/elipse.svg";
import Learning from "../assets/heading/learning.svg";
import SplitText from "../ui/SplitText/SplitText";
import FadeContent from "../ui/FadeContent/FadeContent";
import { easeCubicOut } from "d3-ease";
import ClickSpark from "../ui/ClickSpark/ClickSpark";

function Header() {
  return (
    <header
      id="header"
      className="relative w-full overflow-hidden min-h-screen"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={ElipsBackground}
          className="absolute top-0 left-0 min-w-full w-full h-full object-cover"
          alt="Background"
        />
      </div>

      <ClickSpark
        sparkColor="#ffcc00"
        sparkSize={12}
        sparkRadius={50}
        sparkCount={12}
        duration={800}
        easing="ease-out"
        extraScale={1.2}
      >
        <div className="container mx-auto relative z-10">
          <div className="content py-44 px-6 md:px-28 flex flex-col md:flex-row items-center justify-between">
            <div className="header w-full md:w-1/2 flex flex-col items-start text-start gap-3">
              <FadeContent
                blur={true}
                duration={500}
                delay={2000}
                easing="ease-out"
                initialOpacity={0}
              >
                <p className="text-secondary text-xl font-medium">
                  #BelajarInformatikaMudah
                </p>
              </FadeContent>
              <SplitText
                text="Tingkatkan Skillmu Wujudkan Karier Impian"
                className="text-white text-start text-4xl md:text-5xl font-bold leading-tight"
                textAlign="left"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing={easeCubicOut}
                threshold={0.2}
                rootMargin="-50px"
              />
              <SplitText
                text="Pelajari keahlian baru dengan kurikulum yang dirancang untuk dunia kerja nyata."
                className="font-medium text-lg md:text-xl text-white"
                textAlign="left"
                delay={50}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing={easeCubicOut}
                threshold={0.2}
                rootMargin="-50px"
              />
              <FadeContent
                blur={true}
                duration={1000}
                delay={5000}
                easing="ease-out"
                initialOpacity={0}
              >
                <button className="font-semibold text-center items-center flex text-lg py-3 px-6 rounded-sm text-primary bg-white mt-4">
                  Coba 30 Hari, GRATIS!⏳
                </button>
              </FadeContent>
            </div>
            <FadeContent
              blur={true}
              duration={1000}
              delay={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="ilustration flex items-center justify-center mt-8 md:mt-0 mr-4 floating-element">
                <img src={Learning} alt="Learning illustration" className="" />
              </div>
            </FadeContent>
          </div>
        </div>
      </ClickSpark>
    </header>
  );
}

export default Header;
