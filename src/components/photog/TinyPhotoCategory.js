import React from 'react'
import { Link } from "react-router-dom"

export default class TinyPhotoCategory extends React.Component {
    render() {
        const background_color =  this.props.is_active ? this.props.card.background_color : ""
        const text_color = this.props.is_active ? this.props.card.text_color : ""
        return (
            <div key={this.props.index} className="col-sm-4 col-md-4 col-lg-4 my-2">
                <div className={`card ${background_color}`} onClick={() => this.props.onCardClick(this.props.card.slug)}>
                    <div className={"card-body"}>
                        <h5 className={`card-text ${text_color}`}>
                            <Link to={this.props.card.absolute_uri}>{this.props.card.name}.</Link>
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}
// export class TinyPhotoCategories extends React.Component {
//     render() {
//         return (
//             <section className="" id="photography">
//                 <div className="d-flex row m-2 ">
//                     {photo_cards.map((card, index) => {
//                         return (
//                             <div key={index} className="col-sm-4 col-md-4 col-lg-4 my-2">
//                                 <div className={"card " + (this.props.history.location.pathname === card.absolute_uri ? card.background_color : "")} onClick={() => this.props.onCardClick(card.absolute_uri)}>
//                                     {/* <img className="card-img-top" src={card.img} alt="" /> */}
//                                     <div className={"card-body"}>
//                                         <h5 className={"card-text " + (this.props.history.location.pathname === card.absolute_uri ? card.text_color : "")}>
//                                             <Link to={card.absolute_uri}>{card.name}.</Link>
//                                         </h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                     }
//                 </div>
//             </section>
//         )
//     }
// }