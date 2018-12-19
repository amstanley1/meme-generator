import React, { Component } from 'react';
import './ImagePicker.css';

class ImagePicker extends Component {
    render() {
        const {images, setSelectedImage} = this.props;
        const imageList = images.map(i => <img onClick={setSelectedImage} key={i} src={i}/>);
        return (
            <div id="ImagePicker">
                {imageList}
            </div>
        );
    }
}

export default ImagePicker;