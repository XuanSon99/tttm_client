<template>
  <header>
    <div class="head">
      <div class="mowtainer align-center space">
        <router-link tag="div" to="/" class="logo" aria-label="Trang chủ">
          <div class="flex align-center">
            <nuxt-img format="webp" src="/img/mexc.svg" alt="" loading="lazy" />
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
          <div class="btn-all shadow outline" aria-label="Tài khoản">
            <span>Tài khoản</span>
          </div>
        </div>
        <input type="checkbox" id="menu" style="display: none" />
        <label class="menu-bar" for="menu"></label>
        <div class="mobile-menu">
          <div v-for="(item, index) in nav" :key="index">
            <span @click="toDetail(item.slug)" v-if="item.slug == 'tuyen-dung'">
              <i class="fas fa-angle-right"></i>
              {{ item.name }}
            </span>
            <span v-else>
              <i class="fas fa-angle-right"></i>
              {{ item.name }}
            </span>
            <div v-if="item.post">
              <div class="child-item" v-for="(item, index) in item.child" :key="index" @click="toDetail(item.slug)">
                {{ item.name }}
              </div>
            </div>
            <div v-else>
              <router-link class="child-item" v-for="(item, index) in item.child" :key="index" :to="item.slug">
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="flex mt-3">
            <a href="https://t.me/" class="btn-all outline mx-3" target="blank" aria-label="Đăng ký">
              Đăng ký
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
          slug: "/tin-tuc",
          name: "Tin tức",
        },
        {
          slug: "/lien-he",
          name: "Liên hệ",
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