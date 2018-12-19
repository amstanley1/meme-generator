import React, { Component } from 'react';

class TextInputs extends Component {
    render() {
        const {bottomText, topText, setTopText, setBottomText} = this.props;
        return (
            <div id="TextInputs">
                Top Text:<input type="text" value={topText}  onChange={setTopText}></input>
                Bottom Text:<input type="text" value={bottomText}  onChange={setBottomText}></input>
            </div>
        );
    }
}

export default TextInputs;