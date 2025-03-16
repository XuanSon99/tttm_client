export default (context, inject) => {
    const image = (url) => {
        return "https://hi.muabanusdt.xyz/storage/" + url;
    }
    inject('image', image)
}