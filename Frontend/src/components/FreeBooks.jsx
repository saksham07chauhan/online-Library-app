import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Crads from "./Crads";

const FreeBooks = () => {
  const filterData = list.filter((data) => data.category === "paid");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2">Checkout Our Free Books</h1>
        <p>
          Explore the "free" category or search by "free ebooks" on the store's
          website to discover your{" "}
          <span className="text-pink-600">next great read !!</span>
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Crads key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FreeBooks;
