import React, { Component } from 'react';
import './MemePreview.css';



class MemePreview extends Component {
    render() {
        const {bottomText, topText, selectedImage} = this.props;
        var imgStyle = {
            backgroundSize: "contain",
            backgroundImage: `url(${selectedImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
        }
        return (
            <div id="MemePreview" style= {imgStyle}>


        
                <p>{topText}</p>
              <p>{bottomText}</p>
            </div>
        );
    }
}

export default MemePreview;