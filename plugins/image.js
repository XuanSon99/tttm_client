export default (context, inject) => {
    const image = (url) => {
        return "https://api.taitientrenmang.com/storage/" + url;
    }
    inject('image', image)
}