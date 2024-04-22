var app = new Vue({
  el: ".content",
  data: {
    products: [
      {
        id: 1,
        title: "Classic Beetroot Seeds",
        short_text:
          "Delight in the tender sweetness of baby beetroots grown from our seeds",
        image: "beetroot-687251_1280.jpg",
        desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Strong vigor that provides good leaf coverage.</li><li>Very high productivity with good fruit setting.</li><li>Early matured variety.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Long shelf life on plant and post harvest.</li><li>Nice shiny attractive deep red color.</li><li>Average fruit size: 140 – 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Spring</li><li>Fall</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Red</li></ul></div>",
      },
      {
        id: 2,
        title: "Golden Beetroot Seeds",
        short_text: " Perfect for beginners and seasoned gardeners alike",
        image: "golden-beets-2409608_1280.jpg",
        desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Strong vigor that provides good leaf coverage.</li><li>Very high productivity with good fruit setting.</li><li>Early matured variety.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Long shelf life on plant and post harvest.</li><li>Nice shiny attractive deep red color.</li><li>Average fruit size: 140 – 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Spring</li><li>Fall</li><li>Winter</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Yellow</li></ul></div>",
      },
      {
        id: 3,
        title: "Organic Beetroot Seeds",
        short_text:
          "Grow your beets the natural way with our organic beetroot seeds",
        image: "vegetable-2485059_1280.jpg",
        desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Strong vigor that provides good leaf coverage.</li><li>Very high productivity with good fruit setting.</li><li>Early matured variety.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Long shelf life on plant and post harvest.</li><li>Nice shiny attractive deep red color.</li><li>Average fruit size: 140 – 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Spring</li><li>Fall</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Red</li></ul></div>",
      },
      {
        id: 4,
        title: "High-Yield Beetroot Seeds",
        short_text: "Maximize your harvest with our high-yield beetroot seeds",
        image: "rasa-kasparaviciene-kmaHZV6MNQI-unsplash.jpg",
        desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Strong vigor that provides good leaf coverage.</li><li>Very high productivity with good fruit setting.</li><li>Early matured variety.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Long shelf life on plant and post harvest.</li><li>Nice shiny attractive deep red color.</li><li>Average fruit size: 140 – 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Spring</li><li>Fall</li><li>Winter</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Red</li></ul></div>",
      },
      {
        id: 5,
        title: "Dwarf Beetroot Seeds",
        short_text:
          "Grow delicious beetroots in small spaces with our dwarf beetroot seeds",
        image: "vegetable-6137329_1280.jpg",
        desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Strong vigor that provides good leaf coverage.</li><li>Very high productivity with good fruit setting.</li><li>Early matured variety.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Long shelf life on plant and post harvest.</li><li>Nice shiny attractive deep red color.</li><li>Average fruit size: 140 – 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Spring</li><li>Fall</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Red</li></ul></div>",
      },
    ],
    product: [],
    btnVisible: 0,
    cart: [],
    contactFields: {
      name: "",
      company: "",
      position: "",
      city: "",
      country: "",
      telephone: "",
      email: "",
      profession: "",
      other_profession: "",
      interests: "",
    },
    orderMade: false,
  },
  mounted: function () {
    this.getProduct();
    this.checkInCart();
    this.getCart();
  },
  methods: {
    getProduct: function () {
      if (window.location.hash) {
        var id = window.location.hash.replace("#", "");
        if (this.products && this.products.length > 0) {
          for (i in this.products) {
            if (
              this.products[i] &&
              this.products[i].id &&
              id == this.products[i].id
            )
              this.product = this.products[i];
          }
        }
      }
    },
    addToCart: function (id) {
      var cart = [];
      if (window.localStorage.getItem("cart")) {
        cart = window.localStorage.getItem("cart").split(",");
      }
      if (cart.indexOf(String(id)) == -1) {
        cart.push(id);
        window.localStorage.setItem("cart", cart.join());
        this.btnVisible = 1;
      }
    },
    checkInCart: function () {
      if (
        this.product &&
        this.product.id &&
        window.localStorage
          .getItem("cart")
          .split(",")
          .indexOf(String(this.product.id)) != -1
      )
        this.btnVisible = 1;
    },
    getCart: function () {
      var storedCart = window.localStorage.getItem("cart");
      if (storedCart) {
        var cartIds = storedCart.split(",");
        this.cart = this.products.filter(product => cartIds.includes(String(product.id)));
      }
    },
    removeFromCart: function (id) {
      this.cart = this.cart.filter((item) => item.id !== id);
      window.localStorage.setItem(
        "cart",
        this.cart.map((item) => item.id).join()
      );
    },
    makeOrder: function () {
      this.orderMade = true;
      this.cart = [];
      window.localStorage.removeItem("cart");
    },
  },
});
