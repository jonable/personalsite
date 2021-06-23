import React from 'react'

import pickRandomColor  from '../../utils/pickRandomColor'

export default class PhotoCardCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isImageLoading: true
        }
        this.card_image = React.createRef();
    }
    onCardImageLoaded(e) {
        this.setState({
            isImageLoading: false
        })
    }
    render() {
        const card = this.props.card
        return (
            <div className="col-sm-12 col-md-12 col-lg-4 my-2">
                <div className="card">
                    <div style={{ background: pickRandomColor() }} onClick={this.props.onCardClick}>
                        <img className="card-img-top" ref={this.card_image} onLoad={() => this.onCardImageLoaded()} style={{
                            "visibility": this.state.isImageLoading ? "hidden" : "visible"
                        }} src={card.src} srcSet={card.srcSet} alt="" /></div>
                    <div className={"card-body " + card.text_color}>
                        <h5 className={"card-text " + card.text_color} onClick={this.props.onCardClick}>                            
                            {card.name}                            
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}