import { Cards } from "../components/Cards"
import  useTitle from "../hooks/useTitle";

export const Home = () => {

  const digitalAssets = [
   
    {
      id: 2,
      name: "Bose QuietComfort 45",
      price: 279.99,
      image: "https://images.pexels.com/photos/4127511/pexels-photo-4127511.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 3,
      name: "Apple AirPods Max",
      price: 549.00,
      image: "https://images.pexels.com/photos/31233917/pexels-photo-31233917.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 4,
      name: "Sennheiser Momentum 4 Wireless",
      price: 349.95,
      image: "https://images.pexels.com/photos/27535889/pexels-photo-27535889.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 5,
      name: "JBL Tour One M2",
      price: 299.95,
      image: "https://images.pexels.com/photos/4127406/pexels-photo-4127406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
   
    {
      id: 8,
      name: "Anker Soundcore Life Q35",
      price: 129.99,
      image: "https://images.pexels.com/photos/4127511/pexels-photo-4127511.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 9,
      name: "AKG N700NC M2",
      price: 199.95,
      image: "https://images.pexels.com/photos/31233917/pexels-photo-31233917.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 10,
      name: "Shure AONIC 50",
      price: 299.00,
      image: "https://images.pexels.com/photos/27535889/pexels-photo-27535889.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 11,
      name: "Shure AONIC 50",
      price: 199.00,
      image: "https://images.pexels.com/photos/27535889/pexels-photo-27535889.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    },
    {
      id: 13,
      name: "Shure AONIC 50",
      price: 29.00,
      image: "https://images.pexels.com/photos/27535889/pexels-photo-27535889.jpeg?auto=compress&cs=tinysrgb&w=300&h=300"
    }
  ];
  
  

  useTitle("ShopMe - Home");

  return (
    <>
        <main className="max-w-7xl m-auto flex flex-wrap">
            <div className="flex justify-center flex-wrap">

              {digitalAssets.map((pro) => (
                <Cards key={pro.id} products={pro}/>
              ))}
            
            </div>
            
        </main>
    
    </>
  )
}
