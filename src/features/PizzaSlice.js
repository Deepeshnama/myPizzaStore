import { createSlice } from "@reduxjs/toolkit";

const PizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    items: [
      {
        id: 1,
        name: "CALZONE",
        description:
          "Cup fresh ricotta, parmesan, chopped basil, pepper, tomato sauce, fresh mozzarella",
        qty: 1,
          price: 199,
        image:
          "https://max-themes.net/demos/steweys/upload/calzone-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-7.6 per 100 g, Protein-7.3 per 100 g, Carbohydrate-50.1 per 100 g, Sugar-3.3 per 100 g, Calories-298 k.cal",
      },
      {
        id: 2,
        name: "FARMER",
        description:
          "Fresh mushrooms, fresh green bell peppers, tomatoes, black olives,meat, sausages",
        qty: 1,
          price: 279,
        image:
          "https://max-themes.net/demos/steweys/upload/from-farm-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-10.9 per 100 g, Protein-12.7 per 100 g, Carbohydrate-34.9 per 100 g, Sugar-0 per 100 g, Calories-288.9 k.cal",
      },
      {
        id: 3,
        name: "NEAPOLITAN",
        description:
          "Tomato, oregano, garlic, extra virgin olive oil, pepperoni,cheese, red onion, sauce, mushrooms",
        qty: 1,
          price: 219,
        image:
          "https://max-themes.net/demos/steweys/upload/napolitana-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-9.8 per 100 g, Protein-15.1 per 100 g, Carbohydrate-38.2 per 100 g, Sugar-4.9 per 100 g, Calories-301 k.cal",
      },
      {
        id: 4,
        name: "HAWAII",
        description: "Pineapple, mushrooms, black olives, tomato sauce",
        qty: 1,
        price: 239,
        image: "https://max-themes.net/demos/steweys/upload/hawaii-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-20.3 per 100 g, Protein-10.9 per 100 g, Carbohydrate-28.6 per 100 g, Sugar-0 per 100 g, Calories-340.9 k.cal",
      },
      {
        id: 5,
        name: "MEXICAN",
        description:
          "Refried beans, red enchilada sauce, blend cheese, nacho, corn, onion, salsa, chorizo",
        qty: 1,
          price: 209,
        image:
          "https://max-themes.net/demos/steweys/upload/mexican-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-10.1 per 100 g, Protein-12.1 per 100 g, Carbohydrate-32.6 per 100 g, Sugar-2.4 per 100 g, Calories-269.7k.cal",
      },
      {
        id: 6,
        name: "FRESHNESS",
        description:
          "Fresh tomatoes, garlic, red onion, cheese, minced meat, dandelion, olives",
        qty: 1,
          price: 299,
        image:
          "https://max-themes.net/demos/steweys/upload/freshness-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-14.3 per 100 g, Protein-12.6 per 100 g, Carbohydrate-39.2 per 100 g, Sugar-0 per 100 g, Calories-336 K.cal",
      },
      {
        id: 7,
        name: "FROM SEA",
        description:
          "Olive, meta, squid, shrimps, fresh mushrooms, fresh red tomatoes, cheese",
        qty: 1,
          price: 179,
        image:
          "https://max-themes.net/demos/steweys/upload/from-sea-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-8.6 per 100 g, Protein-8.7 per 100 g, Carbohydrate-25.2 per 100 g, Sugar-2 per 100 g, Calories-213 k.cal",
      },
      {
        id: 8,
        name: "MARGHERITA",
        description:
          "Pepperoni, cheese, black olives, tomatoe sauce, mushrooms, meat,onion, salad",
        qty: 1,
          price: 189,
        image: "https://max-themes.net/demos/steweys/upload/1-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-14.3 per 100 g, Protein-12.6 per 100 g,Carbohydrate-39.2 per 100 g,Sugar-0 per 100 g, Calories-336 k.cal",
      },
      {
        id: 9,
        name: "CLASSIC",
        description:
          "Pepperoni, cheese, black olives, tomatoe sauce, mushrooms, meat,onion, salad",
        qty: 1,
          price: 219,
        image:
          "https://max-themes.net/demos/steweys/upload/classic-313x220.jpg",
        type: "pizza",
        nutrition:
          "Fat-8.2 per 100 g, Protein-7.9 per 100 g, Carbohydrate-25.5 per 100 g, Sugar-2.4 per 100 g, Calories-207.4 k.cal",
      },
      {
        id: 10,
        name: "SLICE",
        description: "Box for slice pizza size",
        type: "box",
        qty: 1,
        price: 50,
      },
      {
        id: 11,
        name: "FAMILY",
        description: "Box for family pizza size",
        type: "box",
        qty: 1,
        price: 80,
      },
      {
        id: 12,
        name: "NORMAL",
        description: "Box for normal pizza size",
        type: "box",
        qty: 1,
        price: 60,
      },
      {
        id: 13,
        name: "TUNA, CHEESE, ONION, CORN",
        description: "Big portion 6 pieces",
        type: "roll",
        qty: 1,
        price: 269,
      },
      {
        id: 14,
        name: "TUNA, CHEESE, ONION, CORN",
        description: "Small portion 3 pieces",
        type: "roll",
        qty: 1,
        price: 179,
      },
      {
        id: 15,
        name: "SALAMI, CHEESE",
        description: "Big portion 6 pieces",
        type: "roll",
        qty: 1,
        price: 175,
      },
      {
        id: 16,
        name: "SALAMI, CHEESE",
        description: "Small portion 3 pieces",
        type: "roll",
        qty: 1,
        price: 119,
      },
      {
        id: 17,
        name: "CHEESE, HAM",
        description: "Big portion 6 pieces",
        type: "roll",
        qty: 1,
        price: 129,
      },
      {
        id: 18,
        name: "CHEESE, HAM",
        description: "Small portion 3 pieces",
        type: "roll",
        qty: 1,
        price: 79,
      },
      {
        id: 19,
        name: "VEGIES",
        description: "Rucola, corn, parsley, beans, tomatoes, peppers",
        type: "toping",
        qty: 1,
        price: 49,
      },
      {
        id: 20,
        name: "SAUCE",
        description: "Chilli, joghurt, italian, pelati",
        type: "toping",
        qty: 1,
        price: 29,
      },
      {
        id: 21,
        name: "CHEESE",
        description: "Nacho, cheddar, monterey, brick",
        type: "toping",
        qty: 1,
        price: 35,
      },
    ],
    item : {}
  },
  
  reducers: {
     getPizza : (state , action) => {
      state.item = state.items.filter((i) => i.id == action.payload)
     }
  },
});

export const {getPizza} = PizzaSlice.actions

export default PizzaSlice.reducer;
