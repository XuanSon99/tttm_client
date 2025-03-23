<template>
  <main class="home">
    <div class="bannerfix"></div>
    <section class="banner" id="banner">
      <div class="mowtainer relative">
        <div class="content layer" data-speed="2">
          <div class="d-flex justify-center">
            <h1 class="text-gradient">TBACK</h1>
          </div>
          <p>Hệ thống CashBack của TTTM</p>
          <p class="d-flex justify-center slogan">
            <span>Hoàn phí tối thiểu 50% mọi giao dịch trên</span>
            <img src="/img/mexc.svg" style="width: 140px; margin-left: 10px" alt="" />
          </p>
          <div class="d-flex justify-center mt-5">
            <a class="btn-all shadow" href="https://www.mexc.com/vi-VN/register?inviteCode=mexc-tttm" target="_blank"
              aria-label="Đăng ký ngay">
              <span>ĐĂNG KÝ NGAY</span>
            </a>
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
            <div class="mexc" id="mexc">
              <img src="/img/mexc-logo.png" alt="" />
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
              <div class="space mb-2">
                <span>Điều kiện rút:</span>
                <span>Hoàn phí > 20u</span>
              </div>
              <v-text-field class="mt-5" append-inner-icon="mdi:mdi-arrow-right" variant="outlined"
                label="Nhập UID để kiểm tra hoàn phí" density="compact" v-model="uid"
                @click:append-inner="checkUser"></v-text-field>
              <p class="error-msg mb-7">{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="planet"></div>
      <div class="bgr-planet"></div> -->
    </section>
    <section class="margin-all">
      <div class="mowtainer resion">
        <h1 class="title">Tại sao chọn chúng tôi?</h1>
        <div class="mowgrid grid-resion align-center">
          <div class="image">
            <img src="/img/gif1.gif" alt="" />
          </div>
          <div class="list-resion">
            <div class="d-flex mb-5 align-start">
              <img src="/img/check.svg" alt="" class="mr-3" />
              Hoàn phí cao nhất thị trường, tối thiểu 50% mọi giao dịch trên
              MEXC
            </div>
            <div class="d-flex mb-5 align-start">
              <img src="/img/check.svg" alt="" class="mr-3" />
              Người dùng có thể rút tiền bất cứ lúc nào, mà không nhất thiết
              phải chờ hệ thống trả
            </div>
            <div class="d-flex mb-5 align-start">
              <img src="/img/check.svg" alt="" class="mr-3" />
              Được tham gia nhóm Private, với các kèo Trade có tỷ tệ thắng cực
              cao và kèo Airdrop cực hot
            </div>
            <div class="d-flex mb-5 align-start">
              <img src="/img/check.svg" alt="" class="mr-3" />
              Hỗ trợ 1:1 trực tiếp, nhanh chóng với trợ lý của sàn MEXC
            </div>
          </div>
        </div>
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
    <v-dialog v-model="dialog" max-width="600">
      <v-card prepend-icon="mdi:mdi-account" title="Thông tin tài khoản">
        <v-card-text>
          <div class="space mb-2">
            <span>User ID (UID):</span>
            <span>{{ user.uid }}</span>
          </div>
          <div class="space mb-2">
            <span>Tổng phí được hoàn:</span>
            <span>{{ formatNumber(user.refund / 2) }} USDT</span>
          </div>
          <div class="space mb-2">
            <span>Phí đã rút:</span>
            <span>{{ formatNumber(user.withdraw) }} USDT</span>
          </div>
          <div class="space mb-2">
            <span>Số dư còn lại:</span>
            <span>{{ formatNumber(balance) }} USDT</span>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-text-field variant="outlined" label="Nhập số tiền muốn rút" density="compact" v-model="amount" class="mr-2"
            v-if="tab == 2"></v-text-field>
          <v-btn class="text-none" color="#4f545c" variant="flat" :disabled="amount < 20 || amount > balance"
            v-if="tab == 2" @click="withdraw()">
            Xác nhận
          </v-btn>
          <div v-if="tab == 3" class="success-msg">
            <v-icon size="18" class="mr-2 mb-1">mdi:mdi-check-bold</v-icon>
            <span>Yêu cầu rút tiền thành công!</span>
          </div>
          <v-spacer v-if="tab != 2"></v-spacer>
          <v-btn class="text-none" color="#4f545c" variant="flat" :disabled="balance < 20" v-if="tab == 1"
            @click="tab = 2">
            Rút tiền
          </v-btn>
          <v-btn class="text-none" variant="text" border @click="dialog = false; tab = 1">
            Thoát
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        url: "",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 7,
            name: "Hướng dẫn người mới",
            description:
              "Bộ kiến thức đầu tư Crypto cho người mới sẽ giúp bạn hiểu rõ về thị trường Crypto, bật mí chiến lược, cách đầu tư Crypto đơn giản hiệu quả.",
            url: "https://taitientrenmang.com/danh-muc/huong-dan-nguoi-moi",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "CreativeWorkSeries",
        name: "Tải Tiền Trên Mạng - Hoàn phí tối thiểu 50% mọi giao dịch trên MEXC",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          bestRating: "5",
          ratingCount: 3916,
        },
      },
    ];
  },
  data() {
    return {
      tutorial_post: [],
      market_post: [],
      dialog: false,
      uid: "",
      error: "",
      user: "",
      balance: 0,
      tab: 1,
      amount: 0
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
        this.tutorial_post = res.data.data.reverse().slice(0, 3);
      });
      this.$callAPI("get", "categories/tin-tuc-thi-truong", {}, (res) => {
        this.market_post = res.data.data;
      });
    },
    checkUser() {
      if (!this.uid) return;
      if (this.uid.length != 8) {
        this.error = "UID không chính xác!"
        return;
      }
      this.$callAPI("get", "check/" + this.uid, {}, (res) => {
        if (!res.data[0]) {
          this.error = "Tài khoản này chưa phải là đối tác của TTTM"
          return
        }
        this.user = res.data[0]
        this.balance = this.user.refund / 2 - this.user.withdraw
        this.dialog = true
      });
    },
    withdraw() {
      let data = {
        uid: this.user.uid,
        amount: this.amount
      }
      this.$callAPI("post", "history", data, (res) => {
        this.tab = 3
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