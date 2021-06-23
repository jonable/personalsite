import React from 'react'


// Component
export default class ImageBoxFullScreen extends React.Component {
    handleFullScreenClick(){   
        if (this.props.is_full_screen) {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
            if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen()
            }
            if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            }
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            }
            if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
        }else{
            const element = this.props.getElement()
            if (element.requestFullscreen) {
                element.requestFullscreen();
            }
            else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            }
            else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
        this.props.onFullScreenClick()
    }
    render() {
        return (
            <button title={"Enter Full Screen"} 
                onClick={this.handleFullScreenClick.bind(this)} 
            className={'close d-none d-lg-block'} 
            style={{
                "color": "#fff",
                "marginRight": "10px",
                "opacity": ".75"
            }}>
                <i className='fa fa-expand'></i>
            </button>
        )
    }
}