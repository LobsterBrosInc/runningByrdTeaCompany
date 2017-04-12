var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
if (window.ShopifyBuy) {
  if (window.ShopifyBuy.UI) {
    ShopifyBuyInit();
  } else {
    loadScript();
  }
} else {
  loadScript();
}

function loadScript() {
  var script = document.createElement('script');
  script.async = true;
  script.src = scriptURL;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = ShopifyBuyInit;
}

function ShopifyBuyInit() {
  var client = ShopifyBuy.buildClient({
    domain: 'adrian-test-store.myshopify.com',
    apiKey: 'a34f449fa755290f5441c327c17f0338',
    appId: '6',
  });

  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
      id: [9891387715],
      node: document.getElementById('product-component-e67eb8e52c0'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: {
"product": {
  "variantId": "all",
  "width": "180px",
  "contents": {
    "img": false,
    "imgWithCarousel": false,
    "title": false,
    "variantTitle": false,
    "price": false,
    "description": false,
    "buttonWithQuantity": false,
    "quantity": false
  },
  "styles": {
    "product": {
      "text-align": "left",
      "@media (min-width: 601px)": {
        "max-width": "calc(25% - 20px)",
        "margin-left": "20px",
        "margin-bottom": "50px"
      }
    },
    "button": {
      "background-color": "#ffffff",
      "color": "#000000",
      "font-family": "Crimson Text, serif",
      ":hover": {
        "background-color": "#e6e6e6",
        "color": "#000000"
      },
      ":focus": {
        "background-color": "#e6e6e6"
      },
      "font-weight": "bold"
    },
    "variantTitle": {
      "font-weight": "bold"
    },
    "description": {
      "font-weight": "bold"
    },
    "price": {
      "font-weight": "bold"
    },
    "compareAt": {
      "font-family": "Helvetica Neue, sans-serif",
      "font-weight": "bold"
    }
  },
  "googleFonts": [
    "Crimson Text"
  ]
},
"cart": {
  "contents": {
    "button": true
  },
  "styles": {
    "button": {
      "background-color": "#ffffff",
      "color": "#000000",
      "font-family": "Crimson Text, serif",
      ":hover": {
        "background-color": "#e6e6e6",
        "color": "#000000"
      },
      ":focus": {
        "background-color": "#e6e6e6"
      },
      "font-weight": "bold"
    },
    "footer": {
      "background-color": "#ffffff"
    }
  },
  "googleFonts": [
    "Crimson Text"
  ]
},
"modalProduct": {
  "contents": {
    "img": false,
    "imgWithCarousel": true,
    "variantTitle": false,
    "buttonWithQuantity": true,
    "button": false,
    "quantity": false
  },
  "styles": {
    "product": {
      "@media (min-width: 601px)": {
        "max-width": "100%",
        "margin-left": "0px",
        "margin-bottom": "0px"
      }
    },
    "button": {
      "background-color": "#ffffff",
      "color": "#000000",
      "font-family": "Crimson Text, serif",
      ":hover": {
        "background-color": "#e6e6e6",
        "color": "#000000"
      },
      ":focus": {
        "background-color": "#e6e6e6"
      },
      "font-weight": "bold"
    },
    "variantTitle": {
      "font-weight": "bold"
    },
    "description": {
      "font-weight": "bold"
    },
    "price": {
      "font-weight": "bold"
    },
    "compareAt": {
      "font-family": "Helvetica Neue, sans-serif",
      "font-weight": "bold"
    }
  },
  "googleFonts": [
    "Crimson Text"
  ]
},
"toggle": {
  "styles": {
    "toggle": {
      "font-family": "Crimson Text, serif",
      "background-color": "#ffffff",
      ":hover": {
        "background-color": "#e6e6e6"
      },
      ":focus": {
        "background-color": "#e6e6e6"
      },
      "font-weight": "bold"
    },
    "count": {
      "color": "#000000",
      ":hover": {
        "color": "#000000"
      }
    },
    "iconPath": {
      "fill": "#000000"
    }
  },
  "googleFonts": [
    "Crimson Text"
  ]
},
"option": {
  "styles": {
    "label": {
      "font-weight": "bold"
    },
    "select": {
      "font-weight": "bold"
    }
  }
},
"productSet": {
  "styles": {
    "products": {
      "@media (min-width: 601px)": {
        "margin-left": "-20px"
      }
    }
  }
}
}
    });
  });
}
