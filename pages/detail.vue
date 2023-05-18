<template>
  <main class="news detail">
    <div class="mowtainer">
      <div class="space mowpad">
        <div class="main-content">
          <div v-if="info.title">
            <h1>
              {{ info.title }}
            </h1>
            <p class="author">
              <span>
                <i class="fas fa-user-edit"></i>
                {{ info.author || "Admin" }}
              </span>
              <span>
                <i class="far fa-calendar-alt"></i>
                {{ formatTime(info.created_at) }}
              </span>
            </p>
            <div class="details">
              <div v-html="info.body"></div>
            </div>
          </div>
          <div class="details loader" v-else></div>
        </div>
        <div class="feature" v-if="post_list.data[0]">
          <h1>Bài viết mới nhất</h1>
          <div class="space" v-for="(item, index) in post_list.data" :key="index">
            <img :src="$image(item.image)" alt="" />
            <div class="title">
              <h3 @click="toDetail(item.slug)">{{ formatTitle(item.title) }}</h3>
              <p class="space">
                <span>
                  <i class="far fa-calendar-alt"></i>
                  {{ formatTime(item.created_at) }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="feature" v-else>
          <h1>Bài viết mới nhất</h1>
          <div class="loader" v-for="i in 6" :key="i"></div>
        </div>
      </div>
      <div v-if="related_list.data[0]">
        <div class="mowtit big-title">
          Bài viết liên quan
        </div>
        <div class="mowgrid">
          <div class="item" v-for="(item, index) in related_list.data" :key="index">
            <div class="image">
              <img :src="$image(item.image)" @click="toDetail(item.slug)" :alt="item.title" />
            </div>
            <div class="content">
              <h2 @click="toDetail(item.slug)">{{ item.title }}</h2>
              <div class="space">
                <p class="author">
                  <i class="fas fa-user-edit"></i>
                  <span>{{ item.author || "Admin" }}</span>
                </p>
                <p class="time">
                  <i class="far fa-calendar-alt"></i>
                  <span>{{ formatTime(item.created_at) }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <router-link tag="div" class="btn-all shadow" :to="'/danh-muc/' + info.category">
          Đọc thêm
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import moment from "moment";

const api_url = 'https://api.chootc.com/api'
const { id } = useRoute().params

const { data: info } = await useFetch(`${api_url}/posts/${id}`)

const { data: post_list } = await useFetch(`${api_url}/posts`)

const { data: related_list } = await useFetch(`${api_url}/categories/${info.value.category}`)

const formatTitle = (value) => {
  if (!value) return
  let array = value.split(" ")
  if (array.length <= 10) {
    return value
  }
  return array.slice(0, 10).join(" ") + "..."
}

const formatTime = (date) => {
  var value = new Date(date);
  if (!date) return;
  return moment(value).format("MMMM D, YYYY");
}

const toDetail = (slug) => {
  const router = useRouter();
  router.push("/" + slug);
}

const default_keywords = 'mua bán usdt, bitcoin, btc, eth, otc, crypto, tỷ giá, ngoại tệ, giá vàng, chứng khoán'
const keywords = info.value.meta_keywords ? info.value.meta_keywords.replaceAll("\r\n", ", ") : default_keywords

useHead({
  title: info.value.title,
  meta: [
    { hid: 'og:title', property: 'og:title', content: info.value.title },
    { hid: 'og:description', property: 'og:description', content: info.value.meta_description },
    { name: 'keywords', content: keywords },
    { name: 'news_keywords', content: keywords },
    { hid: 'og:image', property: 'og:image', content: `https://api.chootc.com/storage${info.value.image}` },
    { name: 'twitter:title', content: info.value.title },
    { name: 'twitter:description', property: 'og:description', content: info.value.meta_description },
    { name: 'twitter:image', content: `https://api.chootc.com/storage${info.value.image}` },
    { name: 'twitter:url', content: `https://chootc.com/${info.value.slug}` },
  ],
  link: [
    { rel: 'canonical', href: `https://chootc.com/${info.value.slug}` },
    { rel: 'alternate', href: `https://chootc.com/${info.value.slug}` }
  ],
})

</script>

<style></style>