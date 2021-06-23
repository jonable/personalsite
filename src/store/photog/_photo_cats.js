import _photo_set from './_photo_set'

const photo_cards = [
    {
        ..._photo_set['sports'][0],
        'name': 'Sports',
        'slug': 'sports',
        'absolute_uri': '/photography/sports/',
        'text_color': 'rainbow-text-1',
        'background_color': 'border-yellow'
    },
    {
        ..._photo_set['special-events'][0],
        'name': 'Special Events',
        'slug': 'special-events',
        'absolute_uri': '/photography/special-events/',
        'text_color': 'rainbow-text-2',
        'background_color': 'border-purple'
    },
    {
        ..._photo_set['lifestyle'][0],
        'name': 'Lifestyle',
        'slug': 'lifestyle',
        'absolute_uri': '/photography/lifestyle/',
        'text_color': 'rainbow-text-3',
        'background_color': 'border-red'
    },
]
export default photo_cards