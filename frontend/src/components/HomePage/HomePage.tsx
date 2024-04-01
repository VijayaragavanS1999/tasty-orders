import burger from "../../assets/burger.jpg";
import foods from "../../assets/foods.avif";
import delivery from "../../assets/delivery.png";

const HomePage = () => {
  return (
    <div className="mt-16">
      <div className="relative w-10/12 m-auto mt-3">
        <img
          className="w-full h-52 rounded-lg opacity-90"
          src={burger}
          alt="banner"
        />
        <div className="absolute inset-0 flex flex-col ml-2 mt-2"></div>
      </div>
      <h1 className="text-center text-3xl font-extrabold text-orange-500 font-serif mt-2">
        We Deliver at your DOORSTEP!
      </h1>
      <div className=" flex w-10/12 m-auto justify-center mt-3 items-center flex-col md:flex-row sm:flex-col">
        <form className="max-w-2xl ">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-full sm:w-96 md:w-96 lg:w-96 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" // Removed fixed width (w-200)
              placeholder="Search By City or Town.."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-orange-300 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col md:flex-row sm:flex-row w-10/12 m-auto my-4">
        <img
          className="w-1/2 h-96 rounded-lg opacity-90 sm:w-full w-6/12"
          src={foods}
          alt="banner"
        />
        <div className="flex flex-col sm:w-full w-6/12 items-center justify-between">
          <div className="flex items-center flex-col">
          <h1 className="font-bold text-2xl font-thin">Free and Faster Delivery!</h1>
          <h1 className="font-extrabold text-2xl text-orange-500">" Your Vision,</h1>
          <h1 className="font-extrabold text-2xl text-orange-500">We Delivered! "</h1>
          </div>
          <img
          className="size-4/6 rounded-lg opacity-90 w-6/12 -mt-2"
          src={delivery}
          alt="banner"
        />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
