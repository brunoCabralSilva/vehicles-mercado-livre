import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  return(
    <div className="h-screen w-full bg-cover bg-fixed relative pt-4">
      <img
        src={require('../images/car_wallpaper.jpg')}
        alt="fusca"
        className="fixed w-full h-full object-cover z-10 opacity-50 top-0"
      />
      <h1 className="bg-white mx-3 mb-3 py-3 rounded text-center z-40 text-4xl font-bolder relative">Lista de Veículos - Mercado Livre</h1>
      <div className="grid grid-cols-3 gap-3 m-3 relative z-40">
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