import RSS from 'rss'
import axios from 'axios'

export default defineEventHandler(async (event) => {
    const feed = new RSS({
        title: 'Tải tiền trên mạng',
        site_url: 'https://taitientrenmang.com',
        feed_url: `https://taitientrenmang.com/feed.xml`,
        image_url: 'https://taitientrenmang.com/img/logo.png',
        copyright: '@taitientrenmang',
        language: 'vi-vn',
        ttl: 15,
        categories: ['crypto', 'otc', 'usdt', 'btc', 'eth', 'bitcoin', 'tiền điện tử','chứng khoán', 'giá vàng', 'tỷ giá', 'ngoại tệ'],
    })

    const list = (await axios.get(`https://api.taitientrenmang.com/api/posts`)).data.data;

    for (const item of list) {
        feed.item({
            title: item.title,
            url: `https://taitientrenmang.com/${item.slug}`,
            date: item.created_at,
            description: item.meta_description,
            author: 'taitientrenmang',
            guid: `https://taitientrenmang.com/${item.slug}`,
        }) 
    }

    const feedString = feed.xml({ indent: true })
    event.res.setHeader('content-type', 'text/xml')
    event.res.end(feedString)
})