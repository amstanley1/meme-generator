import React, { Component } from 'react';
import ImagePicker from './ImagePicker';
import MemePreview from './MemePreview';
import TextInputs from './TextInputs';
import './MemeEditor.css';

class MemeEditor extends Component {
    constructor() {
        super();
        this.state = {
            images: ['/images/The-Most-Interesting-Man-In-The-World.jpg', '/images/Brace-Yourselves-X-is-Coming.jpg', '/images/Futurama-Fry.jpg'],
            topText: "",
            bottomText: "",
            selectedImage: '/images/The-Most-Interesting-Man-In-The-World.jpg'
        };
    }

    setBottomText = (e) => {
        const bottomValue = e.target.value;
        this.setState({bottomText: bottomValue});
      }

    setTopText = (e) => {
        const topValue = e.target.value;
        this.setState({topText: topValue});
    }

    setSelectedImage = (e) => {
        const clickedImage = e.target.src;
       this.setState({selectedImage: clickedImage});
   }

    render() {
        const {bottomText, topText, images, selectedImage} = this.state;
        return (
            <div className = 'container'>
             <ImagePicker images = {images} setSelectedImage={this.setSelectedImage}/>
             <MemePreview bottomText = {bottomText} topText = {topText} selectedImage = {selectedImage}/>
             <TextInputs bottomText = {bottomText} topText = {topText} setBottomText = {this.setBottomText} setTopText = {this.setTopText} />
            </div>
        );
    }
}

export default MemeEditor;