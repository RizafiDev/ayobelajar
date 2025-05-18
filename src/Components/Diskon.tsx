import Orb from "../ui/Orb/Orb";

function Diskon() {
  return (
    <div className="container px-6 bg-bgblack md:px-28 w-full mx-auto py-8">
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
    </div>
  );
}
export default Diskon;
