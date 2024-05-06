export const getAssetsUrl = (path) => {

    if(!path || path == '') return '/img//placeholder/placeholder.jpeg'

    return "https://booking.caren.is/" + path;

}