<template>
  <footer class="relative">
    <div class="mowtainer">
      <div class="mowgrid foot align-center">
        <div class="flex logo-bot">
          <nuxt-img format="webp" src="/img/logo.svg" alt="" loading="lazy" style="width: 100px" />
        </div>
        <div class="flex justify-center">
          <span>© 2025 taitientrenmang.com. All rights reserved</span>
        </div>
        <div class="flex justify-end">
          <v-btn icon size="35" variant="text" href="https://t.me/taitientrenmang" target="_blank"
            aria-label="Telegram">
            <v-icon size="22">fa-brands fa-telegram</v-icon>
          </v-btn>
          <v-btn icon size="35" variant="text" href="https://x.com/iamnxa" target="_blank" aria-label="Twitter">
            <v-icon size="22">fa-brands fa-twitter</v-icon>
          </v-btn>
          <v-btn icon size="35" variant="text" href="" target="_blank" aria-label="Facebook">
            <v-icon size="22">fa-brands fa-facebook</v-icon>
          </v-btn>
          <v-btn icon size="35" variant="text" href="" target="_blank" aria-label="Tiktok">
            <v-icon size="22">fa-brands fa-tiktok</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <!-- <div class="foot-bgr"></div> -->
    <div class="cold-6"></div>
  </footer>
</template>

<script>
export default {
  jsonld() {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        url: "https://chootc.com",
        logo: "https://chootc.com/img/logo.png",
      },
    ];
  },
  data() {
    return {
      nav: [{ child: [] }, { child: [] }],
    };
  },
  mounted() {
    this.getCateList();
  },
  methods: {
    getCateList() {
      this.$callAPI("get", "categories", {}, (res) => {
        res.data.forEach((item) => {
          if (item.parent_slug == "news") {
            this.nav[0].child.push(item);
          }
          if (item.parent_slug == "tutorial") {
            this.nav[1].child.push(item);
          }
        });
      });
    },
    toDetail(slug) {
      this.$router.push("/danh-muc/" + slug);
    },
  },
};
</script>

<style>
footer {
  padding-top: 100px;
}

.grid-footer {
  grid-gap: 32px;
  grid-template-columns: 2fr 1fr 1fr 1fr;
}

.foot {
  grid-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 50px 0;
  border-top: 1px solid #ffffff20;
  margin-top: 25px;
}

.foot span {
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 14px;
}

.foot a {
  color: #fff !important;
  font-size: 14px;
}

footer h2 {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 25px;
}

footer p {
  color: hsla(0, 0%, 100%, 0.6);
  margin-bottom: 25px !important;
  cursor: pointer;
  transition: all 200ms;
}

footer p:hover {
  color: #fff;
}

.foot-logo h1 {
  position: absolute;
  top: 50%;
  transform: translateY(-20px);
  left: 65px;
}

.foot-bgr {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1800px;
  height: 100%;
  background-image: url("/img/home/footer.svg");
  background-repeat: no-repeat;
  mask-image: radial-gradient(closest-side,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 100%);
  z-index: -1;
  background-size: cover;
}

.cold-6 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1800px;
  height: 100%;
  background-image: url("/img/home/cold-6.png");
  background-repeat: no-repeat;
  z-index: -1;
}

.contact a {
  color: hsla(0, 0%, 100%, 0.6) !important;
  transition: all 200ms;
  font-size: 14px;
  font-style: italic;
}

.contact a:hover {
  color: #fff !important;
}

.contact .v-icon {
  color: hsla(0, 0%, 100%, 0.6) !important;
}
</style>