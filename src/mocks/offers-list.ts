import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
    {
        'id': '1',
        'title': 'Wood and stone place',
        'type': 'apartment',
        'price': 370,
        'previewImage': '/img/2.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.85309666406198,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.9
    },
    {
        'id': '2',
        'title': 'Cozy Cottage in the Countryside',
        'type': 'house',
        'price': 520,
        'previewImage': '/img/7.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.3609553943508,
            'longitude': 4.85309666406198,
            'zoom': 16
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.7
    },
    {
        'id': '3',
        'title': 'Modern Loft with City View',
        'type': 'loft',
        'price': 450,
        'previewImage': '/img/15.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.3909553943508,
            'longitude': 4.929309666406198,
            'zoom': 16
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.8
    },
    {
        'id': '4',
        'title': 'Luxury Penthouse with Pool',
        'type': 'penthouse',
        'price': 800,
        'previewImage': '/img/16.jpg',
        'city': {
            'name': 'Amsterdam',
            'location': {
                'latitude': 52.370216,
                'longitude': 4.895168,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.3809553943508,
            'longitude': 4.939309666406198,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 5.0
    }
];