(function() {
  var app = angular.module('store2', []);
  app.controller('StoreController2', function() {
    this.products = myShop;
  });
  var myShop = [
    {
      categoria: "Sillas",
      subcategorias: [
        {
          nombre: "alumnio",
          subSubCategoria: [
            {
              tipo: "baratas",
              productos: [
                {
                  "name": "Sillas malillas",
                  "precio": 10,
                  "src": "img/aluminio1.JPG",
                  "desc": "Sillas de aluminio baratas",
                  canPurchase: true,
                  soldOut: false
                },
                {
                  "name": "Sillas de aluminio menos malas",
                  "precio": 30,
                  "src": "img/aluminio1.JPG",
                  "desc": "Sillas de aluminio baratas malas",
                  canPurchase: true,
                  soldOut: false
                },
              ]
            },
            {
              tipo: "asequibles",
              productos: [
                {
                  "name": "Sillas malillas asequibles",
                  "precio": 10,
                  "src": "img/aluminio1.JPG",
                  "desc": "Sillas de aluminio asequibles baratas",
                  canPurchase: true,
                  soldOut: false
                },
                {
                  "name": "Sillas de aluminio asequibles menos malas",
                  "precio": 30,
                  "src": "img/aluminio1.JPG",
                  "desc": "Sillas de aluminio asequibles baratas y malas",
                  canPurchase: true,
                  soldOut: false
                },
              ]
            }
          ]
        },
        {
          nombre: "Madera",
          subSubCategoria: [
            {
              tipo: "Plegables",
              productos:[
              {
                "precio": 20,
                "src": "img/madera1.jpg",
                "name": "Sillas de bambú",
                canPurchase: true,
                soldOut: false
              },
              {
                "precio": 40,
                "src": "img/madera2.jpg",
                "name": "Sillas de madera Comodas",
                canPurchase: true,
                soldOut: false
              }
            ]
          }
        ]
      }
  ]
},
{
  categoria: "Sofas",
  subcategorias: [
    {
      nombre: "alumnio",
      subSubCategoria: [
        {
          tipo: "baratas",
          productos: [
            {
              "name": "Sofas malillos",
              "precio": 10,
              "src": "img/aluminio1.JPG",
              "desc": "Sillas de aluminio baratas",
              canPurchase: true,
              soldOut: false
            },
            {
              "name": "Sofas de aluminio menos malos",
              "precio": 30,
              "src": "img/aluminio1.JPG",
              "desc": "Sillas de aluminio baratas malas",
              canPurchase: true,
              soldOut: false
            },
          ]
        },
        {
          tipo: "asequibles",
          productos: [
            {
              "name": "Sofas malillos asequibles",
              "precio": 10,
              "src": "img/aluminio1.JPG",
              "desc": "Sofas de aluminio baratos",
              canPurchase: true,
              soldOut: false
            },
            {
              "name": "Sofas de aluminio asequibles menos malos",
              "precio": 30,
              "src": "img/aluminio1.JPG",
              "desc": "Sofas de aluminio baratas malos",
              canPurchase: true,
              soldOut: false
            },
          ]
        }
      ]
    },
    {
      nombre: "Madera",
      subSubCategoria: [
        {
          tipo: "Plegables",
          productos:[
          {
            "precio": 20,
            "src": "img/madera1.jpg",
            "name": "Sofas de bambú",
            canPurchase: true,
            soldOut: false
          },
          {
            "precio": 40,
            "src": "img/madera2.jpg",
            "name": "Sofas de madera bonitos",
            canPurchase: true,
            soldOut: false
          }
        ]
      }
    ]
  }
]
}];

})();

  /*
  "Sillas": {
    "Aluminio": [{
      "Baratas": [{

      }]
    }, {
      "Asequibles": {
        "precio": 30,
        "src": "img/aluminio2.JPG",
        "desc": "Sillas de aluminio Asequibles",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Caras": {
        "precio": 50,
        "src": "img/aluminio3.JPG",
        "desc": "Sillas de aluminio Caras",
        canPurchase: true,
        soldOut: false
      }
    }, ],

    ,



    "Plastico": [{
      "Blancas": {
        "precio": 20,
        "src": "img/plastico1.jpg",
        "desc": "Sillas de plastico Blancas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Rojas": {
        "precio": 20,
        "src": "img/plastico2.jpg",
        "desc": "Sillas de plastico Rojas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Amarillas": {
        "precio": 20,
        "src": "img/plastico3.jpg",
        "desc": "Sillas de plastico Amarillas",
        canPurchase: true,
        soldOut: false
      }
    }]
  },
  "Mesas": {
    "Piedra": [{
      "Caliza": {
        "precio": 60,
        "src": "img/piedra1.jpg",
        "desc": "Sillas de aluminio baratas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Pizarra": {
        "precio": 90,
        "src": "img/piedra2.jpg",
        "desc": "Sillas de aluminio Asequibles",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Marmol": {
        "precio": 120,
        "src": "img/piedra3.jpg",
        "desc": "Sillas de aluminio Caras",
        canPurchase: true,
        soldOut: false
      }
    }],

    "Madera": [{
      "Roble+": {
        "precio": 300,
        "src": "img/mesamadera1.jpg",
        "desc": "Sillas de madera plegables",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Pino": {
        "precio": 200,
        "src": "img/mesamadera2.jpg",
        "desc": "Sillas de madera Comodas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Caoba": {
        "precio": 600,
        "src": "img/mesamadera3.jpg",
        "desc": "Sillas de madera de Promocion",
        canPurchase: true,
        soldOut: false
      }

    }],

    "Hierro": [{
      "Aluminio": {
        "precio": 100,
        "src": "img/mesahierro1.jpg",
        "desc": "Sillas de plastico Blancas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Acero": {
        "precio": 200,
        "src": "img/mesahierro2.jpg",
        "desc": "Sillas de plastico Rojas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Bibranium": {
        "precio": 2000,
        "src": "img/mesahierro3.jpg",
        "desc": "Sillas de plastico Amarillas",
        canPurchase: true,
        soldOut: false
      }
    }]
  },

  "Sofas": {
    "Individual": [{
      "Sintetico": {
        "precio": 10,
        "src": "img/individual1.jpg",
        "desc": "Sillas de aluminio baratas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Espuma": {
        "precio": 30,
        "src": "img/individual2.jpg",
        "desc": "Sillas de aluminio Asequibles",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Tela": {
        "precio": 50,
        "src": "img/individual3.jpg",
        "desc": "Sillas de aluminio Caras",
        canPurchase: true,
        soldOut: false
      }
    }],

    "DosPersonas": [{
      "Cuero": {
        "precio": 20,
        "src": "img/dospersonas1.jpg",
        "desc": "Sillas de madera plegables",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Pluma": {
        "precio": 40,
        "src": "img/dospersonas2.jpg",
        "desc": "Sillas de madera Comodas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Poliester": {
        "precio": 300,
        "src": "img/dospersonas3.jpg",
        "desc": "Sillas de madera de Promocion",
        canPurchase: true,
        soldOut: false
      }

    }],

    "SofaCama": [{
      "Hibridos": {
        "precio": 20,
        "src": "img/sofacama1.jpg",
        "desc": "Sillas de plastico Blancas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Sintetico": {
        "precio": 20,
        "src": "img/sofacama2.jpg",
        "desc": "Sillas de plastico Rojas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Cuero": {
        "precio": 20,
        "src": "img/sofacama3.jpg",
        "desc": "Sillas de plastico Amarillas",
        canPurchase: true,
        soldOut: false
      }

    }]
  },

  "Cortinas": {
    "Cortas": [{
      "Pokemon": {
        "precio": 10,
        "src": "img/cortas1.jpg",
        "desc": "Sillas de aluminio baratas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Pocoyo": {
        "precio": 30,
        "src": "img/cortas2.jpg",
        "desc": "Sillas de aluminio Asequibles",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "PeppaPig": {
        "precio": 50,
        "src": "img/cortas3.jpg",
        "desc": "Sillas de aluminio Caras",
        canPurchase: true,
        soldOut: false
      }
    }],

    "Medias": [{
      "Valencia": {
        "precio": 200,
        "src": "img/medias1.jpg",
        "desc": "Sillas de madera plegables",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Madrid": {
        "precio": 40,
        "src": "img/medias2.jpg",
        "desc": "Sillas de madera Comodas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Barcelona": {
        "precio": 300,
        "src": "img/medias3.jpg",
        "desc": "Sillas de madera de Promocion",
        canPurchase: true,
        soldOut: false
      }
    }],

    "Largas": [{
      "Rosas": {
        "precio": 20,
        "src": "img/largas1.jpg",
        "desc": "Sillas de plastico Blancas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Grises": {
        "precio": 20,
        "src": "img/largas2.jpg",
        "desc": "Sillas de plastico Rojas",
        canPurchase: true,
        soldOut: false
      }
    }, {
      "Moradas": {
        "precio": 20,
        "src": "img/largas3.jpg",
        "desc": "Sillas de plastico Amarillas",
        canPurchase: true,
        soldOut: false
      }
    }]

    //La llave de abajo cierra el ejercicio entero
  }
};

  var app2 = angular.module('store', []);
  app2.controller('StoreController', function() {
    this.products = tienda;
  });


  var tienda = [{
 name: "Pantalla lcd",
 price: 200,
 description: "Pantalla bonita de lcd",
 canPurchase: true
 },
 {
 name: "Teclado mecanico",
 price: 100,
 description: "teclado de buena categoria",
 canPurchase: true
 },
 {
 name: "Raton laser",
 price: 5.95,
 description: "Raton de los chinos",
 canPurchase: false
 },
 {
 name: "Torre de pisa",
 price: 600,
 description: ". . .",
 canPurchase: true
 }
];
})();
*/
/*(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.products = gems;
  });
  var gems = [
      {
      name: 'Dodecahedron',
      price: 17,
      description: 'Dodecahedron is a nice piece of gem to work with!!',
      canPurchase: true,
      images: [{
        full: "im/gem-01.gif",
        small: "im/gem-01.gif"
      }]
    }, {
      name: 'Hex',
      price: 4.95,
      description: 'Triangle is nice!!',
      canPurchase: true,
      images: [ {
        full: "im/gem-03.gif",
        small: "im/gem-01.gif"
      }]
    }, {
      name: 'TriangleHex',
      price: 3.95,
      description: 'TriangleHEx is like JF!!',
      canPurchase: true,
      images: [{
        full: "im/gem-03.gif",
        small: "im/gem-03.gif",
      }]
    }, {
      name: 'Tri Tri',
      price: 4.95,
      description: 'Triangle is nice!!',
      canPurchase: true,
      images: [{
        full: "im/gem-04.gif",
        small: "im/gem-04.gif",
      }]
    }, {
      name: 'Cube',
      price: 9.95,
      description: 'Triangle is nice!!',
      canPurchase: true,
      images: [{
        full: "im/gem-05.gif",
        small: "im/gem-05.gif",
      }]
    }, {
      name: 'Star',
      price: 9.95,
      description: 'Triangle is nice!!',
      canPurchase: true,
      images: [{
        full: "im/gem-06.gif",
        small: "im/gem-06.gif",
      }]
    }];

})();
*/
