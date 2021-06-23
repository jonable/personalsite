import React from "react"
import { connect } from 'react-redux';

import * as photog_selectors from '../store/photog/reducers';
import * as photog_actions from '../store/photog/actions';
// import _photo_set from '../store/photog/_photo_set'
import _photo_cats from '../store/photog/_photo_cats'
import PhotoCardCategory from '../components/photog/PhotoCardCategory'


export class PhotogCategories extends React.Component {
    handleCardClick(slug) {
        // figure out how to handle this...
        this.props.dispatch(photog_actions.openGallery(slug, () => { this.props.history.push(`/photography/${slug}/`)}))
        
    }
    render() {
        return (
            <section className="page--section p-3 p-lg-3 d-flex flex-column" id="photography">
                <h2 className="pl-4">Photography</h2>
                <div className="d-flex row  m-2 my-auto">
                    {_photo_cats.map((card, index) => {
                            return this.renderCategory(card, index)
                        })
                    }
                </div>
            </section>
        )
    }
    renderCategory(card, index){
        return (
            <PhotoCardCategory
                key={index}
                card={card}
                onCardClick={() => this.handleCardClick(card.slug)}
            />
        )
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        gallary_id: photog_selectors.getCurrentGallery(state)
    };
}
export default connect(mapStateToProps)(PhotogCategories);