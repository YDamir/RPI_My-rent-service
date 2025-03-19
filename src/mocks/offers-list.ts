import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
    {
        'id': '1',
        'title': 'Wood and stone place',
        'type': 'apartment',
        'price': 370,
        'previewImage': '/img/2.jpg',
        'city': {
            'name': 'Paris',
            'location': {
                'latitude': 48.85661,
                'longitude': 2.351499,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 48.868610000000004,
            'longitude': 2.342499,
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
            'name': 'Cologne',
            'location': {
                'latitude': 50.937531,
                'longitude': 6.960279,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.937531,
            'longitude': 6.960279,
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
            'name': 'Brussels',
            'location': {
                'latitude': 50.85034,
                'longitude': 4.35171,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 50.85034,
            'longitude': 4.35171,
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
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 16
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 5.0
    }
];