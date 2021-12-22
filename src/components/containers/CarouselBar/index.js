import { Carousel } from "antd";
import styled from "styled-components";
const CalouselBar = () => {
  return (
    <>
      <Carousel autoplay>
        <CustomCarousel>
          <h1>Slide Img1</h1>
        </CustomCarousel>
        <CustomCarousel>
          <h1>Slide Img2</h1>
        </CustomCarousel>
        <CustomCarousel>
          <h1>Slide Img3</h1>
        </CustomCarousel>
        <CustomCarousel>
          <h1>Slide Img1</h1>
        </CustomCarousel>
        <CustomCarousel>
          <h1>Slide Img4</h1>
        </CustomCarousel>
      </Carousel>
    </>
  );
};

export default CalouselBar;

const CustomCarousel = styled.div`
  height: 400px;
  color: ;
  line-height: 400px;
  text-align: center;
  background: #364d79;
  margin-top: 70px;
`;
