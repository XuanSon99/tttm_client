export default (context, inject) => {
    const image = (url) => {
        return "https://chootc.com/storage/" + url;
    }
    inject('image', image)
}