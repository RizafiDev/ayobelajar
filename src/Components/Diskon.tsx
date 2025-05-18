import Orb from "../ui/Orb/Orb";
import Countdown from "./ui/Countdown";

function Diskon() {
  return (
    // Section diskon, beri role region dan aria-label untuk aksesibilitas
    <section
      id="diskon"
      className="container px-6 bg-bgblack md:px-28 w-full mx-auto py-8"
      role="region"
      aria-label="Diskon Spesial Kelas Premium 50 persen"
    >
      <div className="text">
        {/* Heading utama diskon, gunakan tag heading agar SEO terbantu */}
        <h2 className="text-5xl font-bold text-white">
          Diskon Spesial Kelas <br />
          Premium 50%
        </h2>

        {/* Elemen dengan id dan class yang tidak terpakai? Jika punya fungsi, berikan deskripsi aria */}
        <div
          id="any-id"
          className="any-class theme-or-custom-theme"
          aria-hidden="true"
        ></div>
      </div>

      {/* Orb: elemen visual, pastikan sudah accessible atau berikan aria-hidden jika hanya dekorasi */}
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
        aria-hidden="true"
      />

      {/* Countdown: pastikan komponen ini sudah accessible */}
      <Countdown />
    </section>
  );
}

export default Diskon;
