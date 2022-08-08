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
      title: "Naturally",
      description: "\"자연스러운 디자인\""
    },
    {
      id:2,
      title: "Lively",
      description: "\"생동감 있는 디자인\""
    },
    {
      id:3,
      title: "Sensual",
      description: "\"감각적인 디자인\""
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
                  576:{
                    slidesPerView:2,
                  },
                  768:{
                    slidesPerView:3,
                  }
                }}
            >
                {posts.map((posts)=>(
                    <SwiperSlide key={posts.id}>
                      <div className={"content"}>
                        <img src={process.env.PUBLIC_URL+`/imgs/slide${posts.id}.jpg`}/>
                        <h3>
                          <i>{posts.title}</i>
                        </h3>
                        <p>
                          {posts.description}
                        </p>
                      </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}