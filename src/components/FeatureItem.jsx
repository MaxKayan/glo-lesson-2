import React from "react";

export default function FeatureItem({ text, imgPath }) {
    const styles = {
        backgroundImage: `url(${imgPath})`,
    };

    return (
        <div className="features-slider_item">
            <div className="features-img" style={styles}></div>
            <div className="features-feature">{text}</div>
        </div>
    );
}
