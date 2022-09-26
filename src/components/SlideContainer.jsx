import { Slide } from "react-slideshow-image";
import PropTypes from "prop-types";
import "./css/slide.scss";

SlideContainer.propTypes = {
    children: PropTypes.array.isRequired
}

const responsiveSettings = [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]

function SlideContainer(props) {
    const { children } = props;
    const childs = Array.isArray(children) ? children : [children];
    
    return (
        <div style={{
            marginTop: "95px"
        }}>
            <Slide slidesToScroll={3} slidesToShow={3} indicators={true} cssClass="item-center">
                {childs.map(child => (
                    child
                ))}
            </Slide>
        </div>
    )
}

export default SlideContainer;