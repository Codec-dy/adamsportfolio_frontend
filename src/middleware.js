export async function onRequest (context, next) {
    // intercept data from a request
    // optionally, modify the properties in `locals`
    context.locals.title = "New title";
    context.locals.api = "https://adamsportfolio-backend.onrender.com/api/collection";
    // return a Response or the result of calling `next()`
    return next();
};