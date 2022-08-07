import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './MySwiper.css';
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
  } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const posts = [
    {
      id:1,
      title: "A bor, mint életelixír.",
      cover: "//unsplash.it/500/250",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut, vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.",
    },
    {
      id:2,
      title: "Bor szerdák ajándék borral minden fogáshoz.",
      date: "2021. 04. 21. 18.00",
      cover: "//unsplash.it/1000/500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut, vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.",
    },
    {
      id:3,
      title: "Egy harmadik esemény",
      date: "2021. 05. 01. 14.00",
      cover: "//unsplash.it/800/400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum luctus felis eget tempor. Quisque nunc enim, tristique ut gravida ut, vulputate lacinia quam. Morbi et leo nec tortor suscipit tristique.",
    }
  ]
export default function MySwiper(){
    return(
        <div className={"swiperContainer"}>
            <Swiper
                 spaceBetween={16}
                 slidesPerView={1}
                 slidesPerGroup={1}
                 pagination={{ dynamicBullets: true, clickable: true }}
                 scrollbar={{ draggable: true }}
                 loop
                 modules={[Pagination, Navigation]}
                 breakpoints={{
                  1200:{
                    slidesPerView:3
                  },
                  768:{
                    slidesPerView:2
                  }
                 }}
            >
                {posts.map((posts)=>(
                    <SwiperSlide key={posts.id}>
                      <div className={"content"}>
                        <h3 className={"title"}>
                        {posts.title}
                        </h3>
                        <p className="date">{posts.date}</p>
                        <p style={{ margin: "1rem 0", fontSize: 18, lineHeight: "1.667" }}>
                        {posts.description}
                        </p>
                      </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}