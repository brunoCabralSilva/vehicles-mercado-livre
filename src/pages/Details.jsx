import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services";

export default function Details() {
  const [data, setData] = useState('');

  const params = useParams();

  useEffect(() => {
    const query = async () => {
      const q = await getProductsById(params.id);
      setData(q);
    };
    query();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return(
      <div>
      { 
        typeof data === 'object' && 
        <div className="relative">
          <img src={ data.pictures[0].secure_url } alt="item.name" className="object-cover w-full h-screen fixed opacity-30" />
          <div className="flex items-start justify-start relative">
            <div className="w-1/2 min-h-screen">
              <img src={ data.pictures[0].secure_url } alt="item.name" className="object-cover w-full h-50vh p-4 pb-2" />
              <img src={ data.pictures[1].secure_url } alt="item.name" className="object-cover w-full h-50vh p-4 pt-2" />
              <img src={ data.pictures[2].secure_url } alt="item.name" className="object-cover w-full h-50vh p-4 pb-2" />
              <img src={ data.pictures[3].secure_url } alt="item.name" className="object-cover w-full h-50vh p-4 pt-2" />
            </div>
            <div className="w-1/2 flex flex-col justify-between items-between pt-5">
              <div className="bg-white rounded mr-4 py-4 mb-4">
                <div className="text-3xl text-center">{ data.title }</div>
                <div className="flex justify-center">
                  <span>R$ { data.price }</span>
                  <span className="px-2">{'-'}</span>
                  <span>{ data.location.city.name }</span>
                  <span className="px-2">{' - '}</span>
                  <span>{ data.location.state.name}</span>
                  <span className="px-2">{' - '}</span>
                  <span>{ data.location.country.id }</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mr-4">
                {
                  data.attributes && data.attributes.map((item, index) => (
                    <div className="w-full border rounded bg-white py-3 text-center hover:border-black" key={ index }>
                      { item.name }
                      {': '}
                      { item.value_name }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      }
      </div>
    );
  }