Vue.createApp({
  data() {
    return {
      product: {
        id: 1,
        name: "Fall Limited Edition Sneakers",
        description:
          "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 250.0,
        discount: 50,
        brand: "Sneaker Company",
        images: [
          { id: 1, url: "./images/image-product-1.jpg" },
          { id: 2, url: "./images/image-product-2.jpg" },
          { id: 3, url: "./images/image-product-3.jpg" },
          { id: 4, url: "./images/image-product-4.jpg" },
        ],
        thumbnails: [
          { id: 1, url: "./images/image-product-1-thumbnail.jpg" },
          { id: 2, url: "./images/image-product-2-thumbnail.jpg" },
          { id: 3, url: "./images/image-product-3-thumbnail.jpg" },
          { id: 4, url: "./images/image-product-4-thumbnail.jpg" },
        ],
      },
      lightbox: false,
      mobileNav: false,
      quantity: 0,
      cart: [],
      selectedImg: 1,
      showCart: false,
    };
  },
  methods: {
    addToCart() {
      if (this.quantity === 0) return;
      if (this.cart.length != 0) {
        this.cart.forEach((item) => {
          if (item.product.id === item.product.id) {
            item.quantity += this.quantity;
            return;
          }
        });
      } else {
        this.cart.push({ product: this.product, quantity: this.quantity });
      }
      this.quantity = 0;
    },
    getPrice(price, discount) {
      if (!discount) {
        return price;
      } else {
        return (price * discount) / 100 + ".00";
      }
    },
    getTotal(price, qty) {
      return price * qty + ".00";
    },
    deleteProduct(index) {
      this.cart.splice(index, 1);
    },
    getImg(id) {
      this.product.images.forEach((item) => {
        if (item.id === id) {
          this.selectedImg = item;
          return;
        }
      });
    },
    changeBox(side, id) {
      if (side === ">") {
        id++;
        if (id > 4) {
          id = 1;
        }
      } else {
        id--;
        if (id < 1) {
          id = 4;
        }
      }
      this.getImg(id);
    },
    triggerBox() {
      if (window.innerWidth < 1000) return;
      this.lightbox = !this.lightbox;
    },
    triggerMobileNav() {
      if (this.showCart) this.showCart = !this.showCart;
      this.mobileNav = !this.mobileNav;
    },
    triggerShowCart() {
      this.showCart = !this.showCart;
      //window.addEventListener("click", this.checkFocusCart);
    },
    checkFocusCart() {
      console.log("trigger");
      console.log(event.target.closest("div"));
      let cartHtml = document.querySelector(".cart-mobile");
      //if (!cartHtml.contains(event.target)) this.showCart = !this.showCart;
    },
  },
  computed: {
    cartQty() {
      let sum = 0;
      this.cart.forEach((item) => {
        sum += item.quantity;
      });
      return sum;
    },
    controledQty() {
      if (this.quantity < 0) {
        this.quantity = 0;
      }
      return this.quantity;
    },
  },
  mounted() {
    this.getImg(1);
  },
  created() {},
}).mount("#app");
