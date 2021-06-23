import React from 'react';

import pickRandomColor from '../../utils/pickRandomColor'

// const pickRandomColor = () => {
//     const colors = [
//         "linear-gradient(45deg, rgba(254, 222, 25, .70), rgba(243, 101, 35, .70), rgba(210, 35, 52, .70))",
//         "linear-gradient(45deg, rgba(146, 39, 143, .70),rgba(33, 64, 154, .70),rgba(254, 222, 25, .70))",
//         "linear-gradient(45deg, rgba(33, 64, 154, .70),rgba(146, 39, 143, .70),rgba(210, 35, 52, .70))",
//     ]
//     return colors[Math.floor(Math.random() * colors.length)]
// }

export default class SlowLoadingImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isImageLoading: true
        }
    }
    handleCardImageLoaded(e) {
        this.setState({
            isImageLoading: false
        })
    }
    handleClick = event => {
        this.props.onClick(event, { ...this.props })
    }
    render() {
        const img_style = {
            cursor: this.props.onClick ? 'pointer' : 'default',
            "visibility": this.state.isImageLoading ? "hidden" : "visible"
        }
        return (
            <div
                style={{ margin: this.props.margin, background: pickRandomColor() }}>
                <img {...this.props.photo} onClick={this.props.onClick ? this.handleClick : null} onLoad={() => this.handleCardImageLoaded()} style={img_style} alt={""} />
            </div>
        )
    }
}