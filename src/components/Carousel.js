import React from 'react';
import Carousel from 'nuka-carousel';

export default class Samplecarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel autoplay={true} autoplayReverse={true} height={"300px"}>
                    <img src="https://gfimages.azureedge.net/mhp/MHP_Cheese_1216.jpg" alt={"sample1"}/>
                    <img src="https://www.thespruceeats.com/thmb/2mRgKVH2Aap38UcjfDzU6JyKiJc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-480379752-588cb5de3df78caebc869bcf.jpg" alt={"sample2"}/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHO2lrFj3lfw18EbYM-4ucwph8HS2m-a8Qw&usqp=CAU" alt={"sample3"}/>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/00000090072-0-1539978239.jpg?crop=1.00xw:0.502xh;0,0.125xh&resize=640:*" alt={"sample4"}/>
                </Carousel>
            </div>
        );
    }
}
