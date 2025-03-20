import { Review } from "../types/review";

const reviews : Review[] = [
    {
        'id': '1',
        'comment': 'Super Good!',
        'date': '2023-06-29T21:00:00.465Z',
        'rating': 4,
        'user': {
            'name': 'Isaac',
            'avatarUrl': 'public/img/avatar-max.jpg',
            'isPro': true
        }
    },
    {
        'id': '2',
        'comment': 'Super Good!',
        'date': '2023-06-29T21:00:00.465Z',
        'rating': 4,
        'user': {
            'name': 'Isaac',
            'avatarUrl': 'public/img/avatar-max.jpg',
            'isPro': true
        }
    }
];

export { reviews }