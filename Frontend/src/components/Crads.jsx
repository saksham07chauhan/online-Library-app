import learn from "/learn.jpg";

function Crads({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-200">
          <figure>
            <img src={learn} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Price: ₹{item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full badge badge-outline hover:bg-pink-500 hover:text-white p-2 duration-200">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crads;
