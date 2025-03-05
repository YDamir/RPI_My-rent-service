const Setting ={
    rentalOffersCount: 312,
} as const;

const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer/:id',
    NotFound : '*',
} as const;

const AuthorizationStatus = {
    Auth : 'AUTH',
    NoAuth : 'NO_AUTH',
    Unknown : 'UNKNOWN',
}

export {Setting, AppRoute, AuthorizationStatus};