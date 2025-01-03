const MENU_MIX_ARRAY = [{
    id:  '1',
    name: 'Healthy',
    toolValue: 20,
    color: "#63BF87"
  }, {
    id: '2',
    name: 'between',
    toolValue: 22,
    color: "#EFEF71"
  }, {
    id: '3',
    name: 'Indulgent',
    toolValue: 58,
    color: "#E35E56"
  }, {
    id: '1.1',
    parent: '1',
    name: 'Healthy',
    value: 20,
    toolValue: '140743',
    color: "#63BF87"
  }, {
    id: '2.1',
    parent: '2',
    name: 'between',
    value: 22,
    toolValue: '151764',
    color: "#EFEF71"
  }, {
    id: '3.1',
    parent: '3',
    name: 'Indulgent',
    value: 58,
    toolValue: '397276',
    color: "#E35E56"
}];

const CARBON_IMPACT_ARRAY = [
  {
    "id": "'1'",
    "name": "Ruminant Meats",
    "co2": 99011.57426626357,
    "color": "#FA6F67"
  },
  {
    "id": "'2'",
    "name": "Other Animal-Based Foods",
    "co2": 55718.98257057663,
    "color": "#EFEF71"
  },
  {
    "id": "'3'",
    "name": "Plant Proteins",
    "co2": 7178.261147594448,
    "color": "#7BDEA2"
  },
  {
    "id": "'4'",
    "name": "Other Plant-Based Foods",
    "co2": 13818.640829153868,
    "color": "#2B97E0"
  },
  {
    "id": "'1.01'",
    "parent": "'1'",
    "name": "beef/buffalo",
    "co2": 95041.91398309771,
    "value": 54,
    "color": "#FA6F67"
  },
  {
    "id": "'1.02'",
    "parent": "'1'",
    "name": "lamb/mutton/goat",
    "co2": 3969.6602831658647,
    "value": 2,
    "color": "#FA6F67"
  },
  {
    "id": "'2.01'",
    "parent": "'2'",
    "name": "pork",
    "co2": 11331.780379318505,
    "value": 6,
    "color": "#EFEF71"
  },
  {
    "id": "'2.02'",
    "parent": "'2'",
    "name": "poultry",
    "co2": 18391.369758853805,
    "value": 10,
    "color": "#EFEF71"
  },
  {
    "id": "'2.03'",
    "parent": "'2'",
    "name": "butter",
    "co2": 2301.3917805692754,
    "value": 1,
    "color": "#EFEF71"
  },
  {
    "id": "'2.04'",
    "parent": "'2'",
    "name": "cheese",
    "co2": 14498.26707681492,
    "value": 8,
    "color": "#EFEF71"
  },
  {
    "id": "'2.05'",
    "parent": "'2'",
    "name": "cream",
    "co2": 1017.7664455687336,
    "value": 0.6,
    "color": "#EFEF71"
  },
  {
    "id": "'2.06'",
    "parent": "'2'",
    "name": "yogurt",
    "co2": 988.5934645543895,
    "value": 0.6,
    "color": "#EFEF71"
  },
  {
    "id": "'2.07'",
    "parent": "'2'",
    "name": "eggs",
    "co2": 5023.888715728807,
    "value": 3,
    "color": "#EFEF71"
  },
  {
    "id": "'2.08'",
    "parent": "'2'",
    "name": "fish (finfish)",
    "co2": 1367.2686282013674,
    "value": 0.8,
    "color": "#EFEF71"
  },
  {
    "id": "'2.09'",
    "parent": "'2'",
    "name": "crustaceans",
    "co2": 734.46581574023,
    "value": 0.4,
    "color": "#EFEF71"
  },
  {
    "id": "'3.01'",
    "parent": "'3'",
    "name": "beans & pulses (dried)",
    "co2": 2214.7647493306054,
    "value": 1,
    "color": "#7BDEA2"
  },
  {
    "id": "'3.02'",
    "parent": "'3'",
    "name": "peanuts/groundnuts",
    "co2": 104.63523781724535,
    "value": 0.1,
    "color": "#7BDEA2"
  },
  {
    "id": "'3.03'",
    "parent": "'3'",
    "name": "soybeans/tofu",
    "co2": 553.8691742352692,
    "value": 0.3,
    "color": "#7BDEA2"
  },
  {
    "id": "'3.04'",
    "parent": "'3'",
    "name": "grains/cereals (except rice)",
    "co2": 211.54290370910104,
    "value": 0.1,
    "color": "#7BDEA2"
  },
  {
    "id": "'3.05'",
    "parent": "'3'",
    "name": "oats (oatmeal)",
    "co2": 102.85452694380199,
    "value": 0.1,
    "color": "#7BDEA2"
  },
  {
    "id": "'3.06'",
    "parent": "'3'",
    "name": "wheat/rye (bread, pasta, baked goods)",
    "co2": 2649.3319275539616,
    "value": 2,
    "color": "#7BDEA2"
  },
  {
    "id": "'3.07'",
    "parent": "'3'",
    "name": "rice",
    "co2": 903.8930146142645,
    "value": 0.5,
    "color": "#7BDEA2"
  },
  {
      "id": "'3.08'",
      "parent": "'3'",
      "name": "tree nuts & seeds",
      "co2": 383.6236963126087,
      "value": 0.2,
      "color": "#7BDEA2"
  },
  {
      "id": "'4.01'",
      "parent": "'4'",
      "name": "fruits (misc)",
      "co2": 234.06201544944236,
      "value": 0.1,
      "color": "#2B97E0"
  },
  {
      "id": "'4.02'",
      "parent": "'4'",
      "name": "bananas",
      "co2": 300.9699040011644,
      "value": 0.2,
      "color": "#2B97E0"
  },
  {
      "id": "'4.03'",
      "parent": "'4'",
      "name": "berries",
      "co2": 243.4065376805092,
      "value": 0.1,
      "color": "#2B97E0"
  },
  {
      "id": "'4.04'",
      "parent": "'4'",
      "name": "vegetables (misc)",
      "co2": 1356.5032240156545,
      "value": 0.8,
      "color": "#2B97E0"
  },
  {
      "id": "'4.05'",
      "parent": "'4'",
      "name": "cabbages & other brassicas (broccoli)",
      "co2": 290.3607341475772,
      "value": 0.2,
      "color": "#2B97E0"
  },
  {
      "id": "'4.06'",
      "parent": "'4'",
      "name": "tomatoes",
      "co2": 526.3703861628708,
      "value": 0.3,
      "color": "#2B97E0"
  },
  {
      "id": "'4.07'",
      "parent": "'4'",
      "name": "root vegetables",
      "co2": 152.25065937502308,
      "value": 0.1,
      "color": "#2B97E0"
  },
  {
      "id": "'4.08'",
      "parent": "'4'",
      "name": "potatoes",
      "co2": 902.6883983514259,
      "value": 0.5,
      "color": "#2B97E0"
  },
  {
      "id": "'4.09'",
      "parent": "'4'",
      "name": "sugars & sweeteners",
      "co2": 614.2217969569887,
      "value": 0.3,
      "color": "#2B97E0"
  },
  {
      "id": "'4.1'",
      "parent": "'4'",
      "name": "vegetable oils",
      "co2": 866.2240968486861,
      "value": 0.5,
      "color": "#2B97E0"
  },
  {
      "id": "'4.11'",
      "parent": "'4'",
      "name": "soybeans oil",
      "co2": 100.1879851330677,
      "value": 0.1,
      "color": "#2B97E0"
  },
  {
      "id": "'4.12'",
      "parent": "'4'",
      "name": "rapeseed/canola oil",
      "co2": 2906.6579624419273,
      "value": 2,
      "color": "#2B97E0"
  },
  {
      "id": "'4.13'",
      "parent": "'4'",
      "name": "olives oil",
      "co2": 899.529051356166,
      "value": 0.5,
      "color": "#2B97E0"
  },
  {
      "id": "'4.14'",
      "parent": "'4'",
      "name": "cocoa",
      "co2": 90.51080322589465,
      "value": 0.1,
      "color": "#2B97E0"
  },
  {
      "id": "'4.15'",
      "parent": "'4'",
      "name": "coffee",
      "co2": 603.5471880735212,
      "value": 0.3,
      "color": "#2B97E0"
  },
  {
      "id": "'4.16'",
      "parent": "'4'",
      "name": "stimulants & spices",
      "co2": 3639.027786284686,
      "value": 2,
      "color": "#2B97E0"
  },
  null
];

export {
  MENU_MIX_ARRAY,
  CARBON_IMPACT_ARRAY
};