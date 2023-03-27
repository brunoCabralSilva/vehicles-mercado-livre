import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { getVehicles } from "../services";

export default function Catalog() {
  const navigate = useNavigate();
  const [listVehicles, setListVehicles] = useState([]);
  useEffect(() => {
    const query = async () => {
      const list = await getVehicles();
      setListVehicles(list);
    };
    query();
  }, []);

  const returnTitle = (title) => {
    let item = '';
    for (let i = 0; i < 24; i += 1) {
      item += title[i];
    }
    return item + '...';
  };

  return(
    <div className="h-screen w-full bg-cover bg-fixed relative">
      <img
        src={require('../images/car_wallpaper.jpg')}
        alt="fusca"
        className="fixed w-full h-full object-cover z-10 opacity-50"
      />
      <Nav />
      <div className="grid grid-cols-3 gap-3 m-3 relative z-20">
        {
          listVehicles.length > 0 && listVehicles.map((item, index) => (
            <div
              onClick={() => navigate(`/details/${item.id}`)}
              key={ index } className="bg-white border flex flex-col justify-center items-center rounded font-bold hover:border-black cursor-pointer relative"
            > 
              <div className="flex w-full px-4 items-center">
                <img src={ item.thumbnail } alt={ item.title } className="w-5/12 h-full object-cover z-20 rounded"
                />
              <div className="w-full flex flex-col p-3">
                <p className="w-full text-left pb-2">{ item.title } {` - ${ item.condition === 'used' ? 'Usado' : "Novo" }`}</p>
                <p className="w-full">R$ { Number(item.price) },00</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}