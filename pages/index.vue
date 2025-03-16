<template>
  <main class="home">
    <div class="bannerfix"></div>
    <section class="banner" id="banner">
      <div class="mowtainer relative">
        <div class="content layer" data-speed="2">
          <div class="d-flex justify-center">
            <h1 class="text-gradient">TBACK</h1>
          </div>
          <p>
            Hệ thống CashBack của TTTM

          </p>
          <p class="d-flex justify-center slogan">
            <span>Hoàn phí tối thiểu 50% mọi giao dịch trên</span>
            <img src="/img/mexc.svg" style="width: 140px; margin-left: 10px;" alt="">
          </p>
          <div class="d-flex justify-center mt-5">
            <div class="btn-all shadow" aria-label="Đăng ký ngay">
              <span>ĐĂNG KÝ NGAY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative mt-16">
      <div class="mowtainer">
        <div>
          <div class="mowgrid grid-bot mt-8">
            <div class="vertical-news">
              <div class="space mb-6">
                <div class="mowtit">
                  <span>Hướng dẫn người mới</span>
                </div>
                <!-- <v-btn icon size="35" variant="text" color="primary" to="/danh-muc/huong-dan-nguoi-moi"
                  aria-label="Hướng dẫn người mới">
                  <v-icon size="25">mdi:mdi-arrow-right</v-icon>
                </v-btn> -->
              </div>
              <div class="item-news mt-5" v-for="(item, index) in tutorial_post" :key="index">
                <div class="image" @click="toDetail(item.slug)">
                  <nuxt-img format="webp" :src="$image(item.image)" alt="" loading="lazy" />
                </div>
                <div class="content">
                  <h3 @click="toDetail(item.slug)">{{ item.title }}</h3>
                  <span><i class="far fa-calendar-alt"></i>
                    {{ formatTime(item.created_at) }}
                  </span>
                </div>
              </div>
            </div>
            <div class="mexc">
              <img src="/img/mexc-logo.png" alt="">
              <div class="space mb-2">
                <span>Mã giới thiệu:</span>
                <span>mexc-tttm</span>
              </div>
              <div class="space mb-2">
                <span>Hoàn phí spot & futures:</span>
                <span>50%</span>
              </div>
              <div class="space mb-2">
                <span>Thể thức:</span>
                <span>User tự động rút</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="planet"></div>
      <div class="bgr-planet"></div> -->
    </section>
    <section class="margin-all">
      <div class="mowtainer">
          <h1 class="title">Tại sao chọn <span class="text-gradient">TBACK</span></h1>
      </div>
    </section>

    <section class="news relative mt-16">
      <div class="mowtainer">
        <div class="space mb-6">
          <div class="mowtit">
            <span>Tin tức thị trường</span>
          </div>
          <v-btn icon color="primary" size="35" variant="text" to="/danh-muc/tin-tuc-thi-truong"
            aria-label="Tin tức thị trường">
            <v-icon size="25">mdi:mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <div class="mowgrid" v-if="market_post[0]">
          <div class="item" v-for="(item, index) in market_post.slice(0, 3)" :key="index">
            <div class="image">
              <nuxt-img format="webp" :src="$image(item.image)" @click="toDetail(item.slug)" :alt="item.title"
                loading="lazy" />
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
        <div class="mowgrid" v-else>
          <div class="item loader" v-for="i in 6" :key="i"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import moment from "moment";

export default {
  jsonld() {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://chootc.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://chootc.com/tim-kiem/{search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Về chúng tôi",
            "description": "Cộng đồng Chợ OTC Việt Nam được ra mắt nhằm tập trung tất cả các luồng giao dịch OTC hiện có trên thị trường.",
            "url": "https://chootc.com/ve-chung-toi"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Tỷ giá ngoại tệ",
            "description": "Cập nhật tỷ giá ngoại tệ ngân hàng, thế giới. Lực mua bán thị trường.",
            "url": "https://chootc.com/ngoai-te"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Giá vàng",
            "description": "Cập nhật giá vàng trong nước và thế giới. Tin tức giá vàng mới nhất.",
            "url": "https://chootc.com/gia-vang"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "Tiền điện tử",
            "description": "Giá BTC, ETH, BNB, XRP, ADA, ... Tin tức crypto mới nhất.",
            "url": "https://chootc.com/tien-dien-tu"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 6,
            "name": "Chứng khoán",
            "description": "Thông tin bảng giá thị trường chứng khoán trực tuyến hôm nay. Tìm hiểu cách chơi, cách đầu tư, giá cổ phiếu, tin nhanh chứng khoán.",
            "url": "https://chootc.com/chung-khoan"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Tin tức tài chính",
            "description": "Tin tức cập nhật thị trường tài chính Việt Nam, tài chính quốc tế, chính sách tiền tệ của ngân hàng nhà nước, tỷ giá, lãi suất, giá vàng, thị trường ngoại hối.",
            "url": "https://chootc.com/tin-tuc"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 7,
            "name": "Hướng dẫn người mới",
            "description": "Bộ kiến thức đầu tư Crypto cho người mới sẽ giúp bạn hiểu rõ về thị trường Crypto, bật mí chiến lược, cách đầu tư Crypto đơn giản hiệu quả.",
            "url": "https://chootc.com/danh-muc/huong-dan-nguoi-moi"
          },
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "CreativeWorkSeries",
        "name": "Chợ OTC Việt Nam - Mua bán USDT giá rẻ, uy tín số 1 Việt Nam",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "ratingCount": 3916
        }
      },
    ]
  },
  data() {
    return {
      tutorial_post: [],
      market_post: [],
    };
  },
  mounted() {
    this.getPost();
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px`;
      });
    }
  },
  methods: {
    getPost() {
      this.$callAPI("get", "categories/huong-dan-nguoi-moi", {}, (res) => {
        this.tutorial_post = res.data.data.reverse().slice(0, 4);
      });
      this.$callAPI("get", "categories/tin-tuc-thi-truong", {}, (res) => {
        this.market_post = res.data.data;
      });
    },
    formatNumber(value) {
      if (Number.isInteger(value)) return value;
      return value.toFixed(2);
    },
    formatTime(date) {
      var value = new Date(date);
      if (!date) return;
      return moment(value).format("MMMM D, YYYY");
    },
    toDetail(slug) {
      this.$router.push("/" + slug);
    },
  },
};
</script>

<style></style>