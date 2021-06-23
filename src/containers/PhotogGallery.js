import React from "react"
import { connect } from 'react-redux';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import * as photog_selectors from '../store/photog/reducers';
// import * as photog_types from '../store/photog/action_types';
import * as photog_actions from '../store/photog/actions';
import _photo_set from '../store/photog/_photo_set'
import _photo_cats from '../store/photog/_photo_cats'
import { Link } from "react-router-dom"

import TinyPhotoCategory from '../components/photog/TinyPhotoCategory'
import SlowLoadingImage from '../components/photog/SlowLoadingImage'
import ImageBoxFullScreen from '../components/photog/ImageBoxFullScreen'
import LightBoxTheme from '../components/photog/LightBoxTheme'



class PhotogGallery extends React.Component{

    componentDidMount() {
        if (this.props.match.params.category && this.props.gallery_id === null) {
            // this.handleCardClick(this.props.match.params.category)
            this.props.dispatch(photog_actions.openGallery(this.props.match.params.category, ()=>{}))
        }
        if (this.props.match.params.id && this.props.current_image_id === null) {
            this.props.dispatch(photog_actions.openImage(parseInt(this.props.match.params.id, 10), () => {}))
        }        
    }    
    handleCardClick(category) {
        const callback = (category) => { this.props.history.push(`/photography/${category}/`) }
        this.props.dispatch(photog_actions.openGallery(category, callback))
    }   
    handleOpenImage(event, obj){
        const callback = (current_image_id) => {
            const new_link = `/photography/${this.props.match.params.category}/${current_image_id}/`
            this.props.history.push(new_link)
        }
        this.props.dispatch(photog_actions.openImage(obj.index, callback))
    }
    handleCloseImage(event){
        const callback = () => {
            const new_link = `/photography/${this.props.match.params.category}/`
            this.props.history.push(new_link)
        }
        this.props.dispatch(photog_actions.closeImage(callback))
    }
    handleNextImage(event){        
        const callback = (next_image_id) => {
            const new_link = `/photography/${this.props.match.params.category}/${next_image_id}/`
            this.props.history.push(new_link)
        }
        this.props.dispatch(photog_actions.viewNextImage(this.props.current_image_id, callback))
    }
    handlePrevImage(event){        
        const callback = (prev_image_id) => {
            const new_link = `/photography/${this.props.match.params.category}/${prev_image_id}/`
            this.props.history.push(new_link)
        }
        this.props.dispatch(photog_actions.viewPrevImage(this.props.current_image_id, callback))
    }
    handleFullScreenClick(event){        
        this.props.dispatch(
            photog_actions.toggleFullScreen(this.props.is_full_screen)
        )
    }
    render(){
        const map_uriparam_to_cssclass = {
            'sports': 'rainbow-text-1',
            'special-events': 'rainbow-text-2',
            'lifestyle': 'rainbow-text-3'
        }
        const current_photoset = this.props.gallery_id !== null ? _photo_set[this.props.gallery_id] : null
        // show a spinner or something, but no reason to load anything...
        if (current_photoset === null){return <div></div>}
        return(
            <div>
                <section className="" id="photography">
                    <div className="d-flex row m-2 ">
                        {_photo_cats.map((card, index) => {
                            return this.renderTinyCategories(card, index)
                        })
                        }
                    </div>
                </section>
                <h2 className={"pl-4 " + map_uriparam_to_cssclass[this.props.gallery_id]}>
                    <Link to="/photography/">Photography | </Link>
                    {this.props.gallery_id}
                </h2>
                {this.renderGallery(current_photoset)}
                {this.renderLightBox(current_photoset, this.props.current_image_id)}
            </div>
        )
    }
    renderTinyCategories(card, index){
        const is_active = (this.props.gallery_id === card.slug || this.props.match.params.category === card.slug)
        return <TinyPhotoCategory 
            key={index}
            card={card}
            is_active={is_active}
            onCardClick={() => this.handleCardClick(card.slug)} />
    }
    renderGallery(current_photoset){
        return (
            <Gallery
                photos={current_photoset}
                onClick={this.handleOpenImage.bind(this)}
                margin={5}
                columns={3}
                ImageComponent={SlowLoadingImage}
            />
        )
    }
    renderLightBox(current_photoset, current_image_id){
        return (
            <Lightbox 
                images={current_photoset}
                currentImage={current_image_id}
                onClose={this.handleCloseImage.bind(this)}
                onClickPrev={this.handlePrevImage.bind(this)}
                onClickNext={this.handleNextImage.bind(this)}
                isOpen={(current_image_id !== null)}
                showCloseButton={true}
                showImageCount={false}
                rightArrowTitle=""
                backdropClosesModal={true}
                theme={LightBoxTheme}
                spinnerColor={"rgb(210, 35, 52)"}
                customControls={[
                    <ImageBoxFullScreen 
                        key={1} 
                        getElement={() => document.getElementById("lightboxBackdrop")}
                        onFullScreenClick={this.handleFullScreenClick.bind(this)}
                        is_full_screen={this.props.is_full_screen}
                    />
                    ]}
            />
        )
    }
}


// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        gallery_id: photog_selectors.getCurrentGallery(state),
        current_image_id: photog_selectors.getCurrentImage(state),
        is_full_screen: photog_selectors.getIsFullScreen(state),
    };
}
export default connect(mapStateToProps)(PhotogGallery);