import ElipsBackground from "../assets/heading/elipse.svg";
import Learning from "../assets/heading/learning.svg";

function Header() {
  return (
    <header className="relative w-full overflow-hidden">
      {/* Background overlay - fixed height and full width */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={ElipsBackground}
          className="absolute top-0 left-0 min-w-full w-full h-full object-cover"
          alt=""
        />
      </div>

      {/* Konten di atas background */}
      <div className="container mx-auto relative z-10 ">
        <div className="content py-44 px-6 md:px-28 flex flex-col md:flex-row items-center justify-between">
          <div className="header w-full md:w-1/2 flex flex-col items-start text-start gap-3">
            <p className="text-secondary text-xl font-medium">
              #BelajarInformatikaMudah
            </p>
            <p className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Tingkatkan Skillmu <br />
              Wujudkan Karier Impian
            </p>
            <p className="font-medium text-lg md:text-xl text-white">
              Pelajari keahlian baru dengan kurikulum yang <br />
              dirancang untuk dunia kerja nyata.
            </p>
            <button className="font-semibold text-center items-center flex text-lg py-3 px-6 rounded-sm text-primary bg-white mt-4">
              Coba 30 Hari, GRATIS!
            </button>
          </div>
          <div className="ilustration flex items-center justify-center mt-8 md:mt-0 mr-4">
            <img src={Learning} alt="" className="animate-bounce" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
