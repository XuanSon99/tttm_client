<template>
  <header>
    <div class="head">
      <div class="mowtainer align-center space">
        <router-link tag="div" to="/" class="logo" aria-label="Trang chủ">
          <div class="flex align-center">
            <nuxt-img format="webp" src="/img/logo.svg" alt="" loading="lazy" />
          </div>
        </router-link>
        <div class="menu">
          <div class="align-center justify-center">
            <div class="menu">
              <div class="main-menu">
                <router-link to="/" class="menu-item" aria-label="Trang chủ">Trang chủ</router-link>
              </div>
              <div class="main-menu">
                <router-link to="/tin-tuc" class="menu-item" aria-label="Trang chủ">Tin tức</router-link>
              </div>
              <div class="main-menu">
                <a class="menu-item" href="https://t.me/iamnxa" target="_blank" aria-label="Liên hệ">Hỗ trợ</a>
              </div>
            </div>
          </div>
          <div class="btn-all shadow outline" aria-label="Tài khoản" @click="scrollTo('mexc')">
            <span>Tài khoản</span>
          </div>
        </div>
        <input type="checkbox" id="menu" style="display: none" />
        <label class="menu-bar" for="menu"></label>
        <div class="mobile-menu">
          <div v-for="(item, index) in nav" :key="index">
            <router-link class="child-item" :to="item.slug" v-if="item.slug">
              <v-icon size="18" class="mr-2 mb-1">mdi:mdi-check-bold</v-icon>
              {{ item.name }}
            </router-link>
            <a class="child-item" :href="item.href" target="_blank" v-if="item.href">
              <v-icon size="18" class="mr-2 mb-1">mdi:mdi-check-bold</v-icon>
              {{ item.name }}
            </a>
            <a class="child-item" v-if="item.id" @click="scrollTo('mexc')">
              <v-icon size="18" class="mr-2 mb-1">mdi:mdi-check-bold</v-icon>
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      language: [
        {
          img: "/img/flag/en.png",
          text: "English",
          value: "en",
        },
        {
          img: "/img/flag/vi.png",
          text: "Tiếng Việt",
          value: "vi",
        },
      ],
      lang: {
        img: "/img/flag/en.png",
        text: "English",
        value: "en",
      },
      nav: [
        {
          slug: "/",
          name: "Trang chủ"
        },
        {
          id: "mexc",
          name: "Kiểm tra tài khoản"
        },
        {
          slug: "/tin-tuc",
          name: "Tin tức",
        },
        {
          href: "https://t.me/iamnxa",
          name: "Liên hệ",
        },
        {
          href: "https://www.mexc.com/vi-VN/register?inviteCode=mexc-tttm",
          name: "Đăng ký ngay",
        },
      ],
      query: "",
    };
  },
  mounted() {
    window.onscroll = function (e) {
      document.querySelector("#menu").checked = false;
    };
    this.getCateList();
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView(true);
    },
    changeLanguage(item) {
      this.$i18n.locale = item.value;
      this.lang = item;
    },
    getCateList() {
      this.$callAPI("get", "categories", {}, (res) => {
        res.data.forEach((item) => {
          if (item.parent_slug == "news") {
            this.nav[2].child.push(item);
          }
          if (item.parent_slug == "tutorial") {
            this.nav[3].child.push(item);
          }
        });
      });
    },
    searchHandle() {
      if (!this.query) return;
      this.$router.push("/tim-kiem/" + this.query);
    },
    toDetail(slug) {
      this.$router.push("/danh-muc/" + slug);
    },
  },
  watch: {
    $route() {
      document.querySelector("#menu").checked = false;
      window.onscroll = function (e) {
        document.querySelector("#menu").checked = false;
      };
    },
  },
};
</script>

<style></style>