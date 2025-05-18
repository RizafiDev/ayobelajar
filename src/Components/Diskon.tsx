import Orb from "../ui/Orb/Orb";
import Countdown from "./ui/Countdown";

function Diskon() {
  return (
    <section
      id="diskon"
      className="container px-6 bg-bgblack md:px-28 w-full mx-auto py-8"
    >
      <div className="text">
        <p className="text-5xl font-bold text-white">
          Diskon Spesial Kelas <br />
          Premium 50%
        </p>
        <div id="any-id" className="any-class theme-or-custom-theme"></div>
      </div>
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
      <Countdown />
    </section>
  );
}
export default Diskon;
