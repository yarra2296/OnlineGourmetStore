import React from 'react';
import Carousel from 'nuka-carousel';

export default class Samplecarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel autoplay={true} autoplayReverse={true}>
                    <img src="https://cdn11.bigcommerce.com/s-6yfyhv23lh/product_images/uploaded_images/1534728786.jpeg" alt={"sample1"}/>
                    <img src="https://cdn11.bigcommerce.com/s-6yfyhv23lh/product_images/uploaded_images/1564174552.jpeg" alt={"sample2"}/>
                    <img src="https://cdn11.bigcommerce.com/s-6yfyhv23lh/product_images/uploaded_images/1566231011.jpeg" alt={"sample3"}/>
                    <img src="https://cdn11.bigcommerce.com/s-6yfyhv23lh/product_images/uploaded_images/adobestock-357377766.jpeg" alt={"sample4"}/>
                </Carousel>
            </div>
        );
    }
}
