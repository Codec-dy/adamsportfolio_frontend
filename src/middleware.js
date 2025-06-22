export async function onRequest (context, next) {
    // intercept data from a request
    // optionally, modify the properties in `locals`
    context.locals.title = "New title";
    context.locals.api = "http://52.15.59.206/api/collection";
    // return a Response or the result of calling `next()`
    return next();
};