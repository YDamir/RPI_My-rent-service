import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
    {
        'id': '1',
        'title': 'Wood and stone place',
        'description': 'A new spacious villa, one floor. All commodities, hot water, kitchen, washing machine',
        'type': 'apartment',
        'price': 370,
        'images': [
            '/img/20.jpg',
            '/img/17.jpg',
            '/img/16.jpg',
            '/img/15.jpg',
            '/img/2.jpg',
            '/img/7.jpg',
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host': {
            'isPro': true,
            'name': 'Angelina',
            'avatarUrl': '/img/avatar-angelina.jpg'
        },
        'isPremium': true,
        'isFavorite': true,
        'rating': 4.9,
        'bedrooms': 2,
        'maxAdults': 3
    },
    {
        'id': '2',
        'title': 'Cozy Cottage in the Countryside',
        'description': 'A charming cottage surrounded by nature. Perfect for a peaceful getaway.',
        'type': 'house',
        'price': 520,
        'images': [
            '/img/20.jpg',
            '/img/17.jpg',
            '/img/16.jpg',
            '/img/15.jpg',
            '/img/2.jpg',
            '/img/7.jpg',
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fireplace',
            'Laptop friendly workspace',
            'Garden',
            'Washer',
            'Towels',
            'Kitchen',
            'Washing machine',
            'Coffee machine',
            'Parking'
        ],
        'host': {
            'isPro': false,
            'name': 'John',
            'avatarUrl': '/img/avatar-john.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.7,
        'bedrooms': 3,
        'maxAdults': 5
    },
    {
        'id': '3',
        'title': 'Modern Loft with City View',
        'description': 'A stylish loft located in the heart of the city. Ideal for urban explorers.',
        'type': 'loft',
        'price': 450,
        'images': [
            '/img/20.jpg',
            '/img/17.jpg',
            '/img/16.jpg',
            '/img/15.jpg',
            '/img/2.jpg',
            '/img/7.jpg',
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Laptop friendly workspace',
            'Air conditioning',
            'Washer',
            'Towels',
            'Kitchen',
            'Washing machine',
            'Coffee machine',
            'Balcony'
        ],
        'host': {
            'isPro': true,
            'name': 'Sophia',
            'avatarUrl': '/img/avatar-sophia.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.8,
        'bedrooms': 1,
        'maxAdults': 2
    },
    {
        'id': '4',
        'title': 'Luxury Penthouse with Pool',
        'description': 'An exclusive penthouse offering stunning views and a private pool.',
        'type': 'penthouse',
        'price': 800,
        'images': [
            '/img/20.jpg',
            '/img/17.jpg',
            '/img/16.jpg',
            '/img/15.jpg',
            '/img/2.jpg',
            '/img/7.jpg',
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Laptop friendly workspace',
            'Air conditioning',
            'Private pool',
            'Washer',
            'Towels',
            'Kitchen',
            'Washing machine',
            'Coffee machine',
            'Jacuzzi',
            'Terrace'
        ],
        'host': {
            'isPro': true,
            'name': 'Michael',
            'avatarUrl': '/img/avatar-michael.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 5.0,
        'bedrooms': 4,
        'maxAdults': 6
    }
];

export { offers };

const nearbyOffers = [
    {
        id: "nearby-1",
        title: "Cozy Studio Apartment",
        type: "apartment",
        price: 120,
        previewImage: "/img/apartment-01.jpg",
        isPremium: false,
        rating: 4.5,
        location: {
            latitude: 52.3909553943508,
            longitude: 4.85309666406198,
        },
    },
    {
        id: "nearby-2",
        title: "Luxury Penthouse",
        type: "house",
        price: 300,
        previewImage: "/img/house-02.jpg", 
        isPremium: true,
        rating: 4.8,
        location: {
            latitude: 52.3609553943508,
            longitude: 4.85309666406198,
        },
    },
    {
        id: "nearby-2",
        title: "Luxury Penthouse",
        type: "house",
        price: 300,
        previewImage: "/img/house-03.jpg",
        isPremium: true,
        rating: 4.8,
        location: {
            latitude: 52.3609553943508,
            longitude: 4.85309666406198,
        },
    },
];

export { nearbyOffers };