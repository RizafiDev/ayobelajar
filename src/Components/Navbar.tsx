function Navbar() {
  return (
    <nav className="fixed flex w-full justify-between bg-transparent items-center py-8 px-12 z-50">
      <div className="brand text-2xl font-semibold text-white">BelajarYuk!</div>
      <div className="nav-items text-white">
        <ul className="flex items-center gap-6">
          <li className="font-medium text-base">
            <a href="#">Kelas</a>
          </li>
          <li className="font-medium text-base">
            <a href="#">Benefit</a>
          </li>
          <li className="font-medium text-base">
            <a href="#">Harga</a>
          </li>
          <li className="font-medium text-base">
            <a href="#">Rating</a>
          </li>
          <li className="font-medium text-base">
            <a href="#">FAQ</a>
          </li>
          <li className="font-medium text-base">
            <a href="#">Tentang Kami</a>
          </li>
        </ul>
      </div>
      <div className="cta flex items-center gap-4">
        <button className="border-2 rounded-md py-2 px-6 text-white border-white">
          Login
        </button>
        <button className="rounded-md py-2 px-6 text-primary bg-white">
          Register
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
