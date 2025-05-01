export const Cards = ({products}) => {

    const {id,name,price,image} = products;
    // const img = `https://picsum.photos/id/237/300/300`;

  return (
    <>
        
        <div className="max-w-2xs gap-4 m-2 shadow shadow-gray-800">
            <img src={image} className="cursor-pointer"/>
            <h4 className="mt-1.5 mb-2 font-semibold ml-1">{name}</h4>
            <div className=" flex justify-between justify-items-center-safe">
                <h4 className="font-semibold mt-2 ml-2">${price}</h4>
                <button className="bg-blue-500 p-1 px-2 rounded-sm mr-3 text-white mb-1 cursor-pointer">Add To Cart</button>
            </div>
        </div>
    
    </>
  )
}
