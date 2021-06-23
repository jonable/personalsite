
const theme = {
    // container: {
    //     background: 'rgba(0, 0, 0, 0.75)',
    //     gutter: {
    //         horizontal: 0,
    //         vertical: 0,
    //     },
    //     zIndex: 2001,
    // },
    container: {
        "background": 'rgba(0,0,0, 1)'
    },
    arrow: {
        background: 'none',
        fill: '#fcfdf6',
        // fill: "url(#my-cool-gradient) #fcfdf6",  
        // fill: "url(#gradient-horizontal) #fcfdf6",
        // stroke: "url(#gradient-horizontal) gray",
        opacity: 0.5,
        transition: 'opacity 200ms',
        ":hover":{
            opacity: 1,
        },
        ':hover path': {            
            // fill: "url(#gradient-horizontal) #fcfdf6",
            fill: "white",
        },
    },
    header: {
        // "display":"none"
        "padding-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
        position: "absolute",
        right: "10px",
        // top: "5px",
        color: "#ffffffc4",
    },
    close: {
        "padding": "0px",
        "fill": "#ffffffc4",
        "margin-right": "0px",
        "width": "25px"
    },
    content: {
        // "padding":"15px",
        // "background-color": "#fcfdf6"
        "max-width": "initial"
    },
    footer: {
        // "color":"#343a40"
        "padding-top": "0px",
        "padding-bottom": "0px",
        "padding-left": "0px",
        "padding-right": "0px",
        position: "absolute",
        left: "10px",
        top: "5px",
        color: "#ffffff91",
    },
    image: {
        "max-height": "100vh !important"
    }
};
const LightBoxTheme = theme
export default LightBoxTheme
