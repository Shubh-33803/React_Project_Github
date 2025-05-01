import { ProductCart } from "../components/productCart";
import useTitle from "../hooks/useTitle";

export const Cart = () => {
    useTitle("ShopMate - Cart");

    const digitalAssets = [
      {
        id: 2,
        name: "Bose QuietComfort 45",
        price: 279.99,
        image: "https://images.pexels.com/photos/27535889/pexels-photo-27535889.jpeg"
      },
      {
        id: 3,
        name: "Apple AirPods Max",
        price: 549.00,
        image: "https://images.pexels.com/photos/18018779/pexels-photo-18018779.jpeg"
      },
      
      {
        id: 5,
        name: "JBL Tour One M2",
        price: 299.95,
        image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg"
      },
      {
        id: 6,
        name: "Beats Studio Pro",
        price: 349.99,
        image: "https://images.pexels.com/photos/4127511/pexels-photo-4127511.jpeg"
      },
      {
        id: 8,
        name: "Anker Soundcore Life Q35",
        price: 129.99,
        image: "https://images.pexels.com/photos/31233917/pexels-photo-31233917.jpeg"
      },
     
    ]

  return (
    <>
        <main className="max-w-7xl m-auto flex flex-wrap justify-center">
            <section>
              <h3 className="text-center font-semibold mb-8">Cart items : 2</h3>

                {digitalAssets.map((pro) => (
                  <ProductCart key={pro.id} products={pro}/>
                ))}
            </section>
        </main>
    </>
  )
}
