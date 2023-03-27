import { Link } from 'react-router-dom';

export default function Nav() {
  return(
    <nav className="w-full flex text-black p-3 items-center justify-center z-40 border-b-white border">
      <Link
        to="/vehicles"
        className="px-4 hover:text-green-400 font-bold transition-colors duration-500 z-40"
      >
        Home
      </Link>
      <Link
        to="/catalog"
        className="px-4 hover:text-green-400 font-bold transition-colors duration-500 z-40"
      >
        Catálogo
      </Link>
    </nav>
  );
}