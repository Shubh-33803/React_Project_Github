export const ProductCart = ({products}) => {

    const { id, name, price , image} = products;
    // const img = `https://picsum.photos/id/237/300/300`;

  return (
    <>
        <div className="flex justify-between items-center shadow p-2 shadow-black w-5xl lg:w-6xl m-auto mb-2.5" key={id}>
                <img src={image} className="w-24"/>
                <span className="font-semibold">{name}</span>
                <span className="font-semibold">${price}</span>
                <button className="bg-red-500 p-2 rounded-sm cursor-pointer text-white">Remove</button>
              </div>
    </>
  )
}
