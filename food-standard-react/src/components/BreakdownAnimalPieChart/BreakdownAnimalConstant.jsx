// Whole array and static values will replace with api
var SERIES_DATA = {
    "s1": {
        "weight": [
            {
                "name": "animal",
                "y": 2715378,
                "percentage": 36,
                "color": "#E35E56",
                "customdata": {
                    "hover": false,
                    "parent": null,
                    "drillDownData": 36
                }
            },
            {
                "name": "plant",
                "y": 4881261,
                "percentage": 64,
                "color": "#7BDEA2",
                "customdata": {
                    "hover": false,
                    "parent": null,
                    "drillDownData": 64
                }
            }
        ],
        "spend": [
            {
                "name": "animal",
                "y": 11407292,
                "percentage": 50,
                "color": "#E35E56",
                "customdata": {
                    "hover": false,
                    "parent": null,
                    "drillDownData": 50
                }
            },
            {
                "name": "plant",
                "y": 11319989,
                "percentage": 50,
                "color": "#7BDEA2",
                "customdata": {
                    "hover": false,
                    "parent": null,
                    "drillDownData": 50
                }
            }
        ]
    },
    "s2": {
        "weight": [
            {
                "name": "MEAT",
                "y": 763340,
                "percentage": 10,
                "dataLabels": {
                    "distance": -40
                },
                "color": "#E35E56",
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": [
                        {
                            "name": "BEEF",
                            "y": 356006,
                            "percentage": 47,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 47
                            }
                        },
                        {
                            "name": "PORK",
                            "y": 363466,
                            "percentage": 48,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 48
                            }
                        },
                        {
                            "name": "LAMB/SHEEP/GOAT",
                            "y": 13073,
                            "percentage": 2,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 2
                            }
                        },
                        {
                            "name": "OTHER MEAT",
                            "y": 30794,
                            "percentage": 4,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 4
                            }
                        }
                    ]
                }
            },
            {
                "name": "FISH & SEAFOOD",
                "y": 102744,
                "percentage": 1,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#E35E56",
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": []
                }
            },
            {
                "name": "POULTRY",
                "y": 953106,
                "percentage": 13,
                "dataLabels": {
                    "distance": -40
                },
                "color": "#E35E56",
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": [
                        {
                            "name": "CHICKEN",
                            "y": 854071,
                            "percentage": 90,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 90
                            }
                        },
                        {
                            "name": "TURKEY",
                            "y": 97379,
                            "percentage": 10,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 10
                            }
                        },
                        {
                            "name": "OTHER POULTRY",
                            "y": 1656,
                            "percentage": 0,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 0
                            }
                        }
                    ]
                }
            },
            {
                "name": "DAIRY",
                "y": 545443,
                "percentage": 7,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#E35E56",
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": [
                        {
                            "name": "LIQUID DAIRY",
                            "y": 148688,
                            "percentage": 27,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 27
                            }
                        },
                        {
                            "name": "SOLID DAIRY",
                            "y": 396756,
                            "percentage": 73,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 73
                            }
                        }
                    ]
                }
            },
            {
                "name": "EGGS",
                "y": 346093,
                "percentage": 5,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#E35E56",
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": []
                }
            },
            {
                "name": "EGGS BASED MAYO",
                "y": 4653,
                "percentage": 0,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#E35E56",
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": []
                }
            },
            {
                "name": "BEANS & LEGUMES",
                "y": 198599,
                "percentage": 3,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "TOFU/TEMPEH/SEITAN",
                "y": 66397,
                "percentage": 1,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "NUTS & SEEDS",
                "y": 35885,
                "percentage": 0,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "MEAT ANALOGUES",
                "y": 56717,
                "percentage": 1,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "GRAINS",
                "y": 1025228,
                "percentage": 13,
                "dataLabels": {
                    "distance": -40
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": [
                        {
                            "name": "INTACT WHOLE GRAINS",
                            "y": 64097,
                            "percentage": 6,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 6
                            }
                        },
                        {
                            "name": "OTHER WHOLE GRAINS",
                            "y": 82446,
                            "percentage": 8,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 8
                            }
                        },
                        {
                            "name": "OTHER GRAINS",
                            "y": 878685,
                            "percentage": 86,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 86
                            }
                        }
                    ]
                }
            },
            {
                "name": "PLANT-BASED DAIRY",
                "y": 6701,
                "percentage": 0,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "PLANT-BASED MAYO",
                "y": 0,
                "percentage": 0,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "PRODUCE",
                "y": 3154101,
                "percentage": 42,
                "dataLabels": {
                    "distance": -40
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": [
                        {
                            "name": "FRUITS",
                            "y": 452802,
                            "percentage": 14,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 14
                            }
                        },
                        {
                            "name": "VEGETABLES",
                            "y": 1917853,
                            "percentage": 61,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 61
                            }
                        },
                        {
                            "name": "POTATOES (ALL WHITE)",
                            "y": 783447,
                            "percentage": 25,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 25
                            }
                        }
                    ]
                }
            },
            {
                "name": "PLANT OIL",
                "y": 337632,
                "percentage": 4,
                "dataLabels": {
                    "distance": 10
                },
                "color": "#7BDEA2",
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": [
                        {
                            "name": "PLANT OIL (COOKING)",
                            "y": 300290,
                            "percentage": 89,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 89
                            }
                        },
                        {
                            "name": "PLANT OIL (FRY)",
                            "y": 37342,
                            "percentage": 11,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 11
                            }
                        }
                    ]
                }
            }
        ],
        "spend": [
            {
                "name": "MEAT",
                "y": 3792144,
                "percentage": 17,
                "color": "#E35E56",
                "dataLabels": {
                    "distance": -40
                },
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": [
                        {
                            "name": "BEEF",
                            "y": 1843775,
                            "percentage": 49,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 49
                            }
                        },
                        {
                            "name": "PORK",
                            "y": 1660588,
                            "percentage": 44,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 44
                            }
                        },
                        {
                            "name": "LAMB/SHEEP/GOAT",
                            "y": 128050,
                            "percentage": 3,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 3
                            }
                        },
                        {
                            "name": "OTHER MEAT",
                            "y": 159732,
                            "percentage": 4,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 4
                            }
                        }
                    ]
                }
            },
            {
                "name": "FISH & SEAFOOD",
                "y": 713451,
                "percentage": 3,
                "color": "#E35E56",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": []
                }
            },
            {
                "name": "POULTRY",
                "y": 3502896,
                "percentage": 15,
                "color": "#E35E56",
                "dataLabels": {
                    "distance": -40
                },
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": [
                        {
                            "name": "CHICKEN",
                            "y": 3029329,
                            "percentage": 86,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 86
                            }
                        },
                        {
                            "name": "TURKEY",
                            "y": 457460,
                            "percentage": 13,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 13
                            }
                        },
                        {
                            "name": "OTHER POULTRY",
                            "y": 16107,
                            "percentage": 0,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 0
                            }
                        }
                    ]
                }
            },
            {
                "name": "DAIRY",
                "y": 2300533,
                "percentage": 10,
                "color": "#E35E56",
                "dataLabels": {
                    "distance": -40
                },
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": [
                        {
                            "name": "LIQUID DAIRY",
                            "y": 845453,
                            "percentage": 37,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 37
                            }
                        },
                        {
                            "name": "SOLID DAIRY",
                            "y": 1455081,
                            "percentage": 63,
                            "color": "#E35E56",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "animal",
                                "drillDownData": 63
                            }
                        }
                    ]
                }
            },
            {
                "name": "EGGS",
                "y": 873205,
                "percentage": 4,
                "color": "#E35E56",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": []
                }
            },
            {
                "name": "EGGS BASED MAYO",
                "y": 225063,
                "percentage": 1,
                "color": "#E35E56",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "animal",
                    "drillDownData": []
                }
            },
            {
                "name": "BEANS & LEGUMES",
                "y": 236795,
                "percentage": 1,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "TOFU/TEMPEH/SEITAN",
                "y": 168943,
                "percentage": 1,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "NUTS & SEEDS",
                "y": 157558,
                "percentage": 1,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "MEAT ANALOGUES",
                "y": 400576,
                "percentage": 2,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "GRAINS",
                "y": 2120687,
                "percentage": 9,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": [
                        {
                            "name": "INTACT WHOLE GRAINS",
                            "y": 108897,
                            "percentage": 5,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 5
                            }
                        },
                        {
                            "name": "OTHER WHOLE GRAINS",
                            "y": 184440,
                            "percentage": 9,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 9
                            }
                        },
                        {
                            "name": "OTHER GRAINS",
                            "y": 1827349,
                            "percentage": 86,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 86
                            }
                        }
                    ]
                }
            },
            {
                "name": "PLANT-BASED DAIRY",
                "y": 258306,
                "percentage": 1,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "PLANT-BASED MAYO",
                "y": 26038,
                "percentage": 0,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": []
                }
            },
            {
                "name": "PRODUCE",
                "y": 7318987,
                "percentage": 32,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": -40
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": [
                        {
                            "name": "FRUITS",
                            "y": 1758150,
                            "percentage": 24,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 24
                            }
                        },
                        {
                            "name": "VEGETABLES",
                            "y": 4453719,
                            "percentage": 61,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 61
                            }
                        },
                        {
                            "name": "POTATOES (ALL WHITE)",
                            "y": 1107118,
                            "percentage": 15,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 15
                            }
                        }
                    ]
                }
            },
            {
                "name": "PLANT OIL",
                "y": 632098,
                "percentage": 3,
                "color": "#7BDEA2",
                "dataLabels": {
                    "distance": 10
                },
                "customdata": {
                    "hover": true,
                    "parent": "plant",
                    "drillDownData": [
                        {
                            "name": "PLANT OIL (COOKING)",
                            "y": 573259,
                            "percentage": 91,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": -40
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 91
                            }
                        },
                        {
                            "name": "PLANT OIL (FRY)",
                            "y": 58840,
                            "percentage": 9,
                            "color": "#7BDEA2",
                            "dataLabels": {
                                "distance": 15
                            },
                            "customdata": {
                                "hover": false,
                                "parent": "plant",
                                "drillDownData": 9
                            }
                        }
                    ]
                }
            }
        ]
    }
};
var ANIMAL_LBS = 2715378;
var PLANT_LBS = 4881261;
// Whole array will replace with api
var BREAKDOWN_SERIES_DATA = {
    "is_backward": false,
    "plant_forward_pie_data": {
        "animal": {
            "total_based_lbs": 2715378,
            "total_percentage_lbs": 36,
            "total_based_spend": 11407292,
            "total_percentage_spend": 50,
            "meat": {
                "cat": "MEAT",
                "weight": 763340,
                "weight_percentage": 10,
                "spend": 3792144,
                "spend_percentage": 17
            },
            "fish_seafood": {
                "cat": "FISH & SEAFOOD",
                "weight": 102744,
                "weight_percentage": 1,
                "spend": 713451,
                "spend_percentage": 3
            },
            "poultry": {
                "cat": "POULTRY",
                "weight": 953106,
                "weight_percentage": 13,
                "spend": 3502896,
                "spend_percentage": 15
            },
            "dairy": {
                "cat": "DAIRY",
                "weight": 545443,
                "weight_percentage": 7,
                "spend": 2300533,
                "spend_percentage": 10
            },
            "eggs": {
                "cat": "EGGS",
                "weight": 346093,
                "weight_percentage": 5,
                "spend": 873205,
                "spend_percentage": 4
            },
            "eggs_based_mayo": {
                "cat": "EGGS BASED MAYO",
                "weight": 4653,
                "weight_percentage": 0,
                "spend": 225063,
                "spend_percentage": 1
            },
            "drill_down_data": {
                "meat": {
                    "beef": {
                        "cat": "BEEF",
                        "weight": 356006,
                        "weight_percentage": 47,
                        "spend": 1843775,
                        "spend_percentage": 49
                    },
                    "pork": {
                        "cat": "PORK",
                        "weight": 363466,
                        "weight_percentage": 48,
                        "spend": 1660588,
                        "spend_percentage": 44
                    },
                    "lamb": {
                        "cat": "LAMB/SHEEP/GOAT",
                        "weight": 13073,
                        "weight_percentage": 2,
                        "spend": 128050,
                        "spend_percentage": 3
                    },
                    "other_meat": {
                        "cat": "OTHER MEAT",
                        "weight": 30794,
                        "weight_percentage": 4,
                        "spend": 159732,
                        "spend_percentage": 4
                    }
                },
                "poultry": {
                    "checken": {
                        "cat": "CHICKEN",
                        "weight": 854071,
                        "weight_percentage": 90,
                        "spend": 3029329,
                        "spend_percentage": 86
                    },
                    "turkey": {
                        "cat": "TURKEY",
                        "weight": 97379,
                        "weight_percentage": 10,
                        "spend": 457460,
                        "spend_percentage": 13
                    },
                    "other_poultry": {
                        "cat": "OTHER POULTRY",
                        "weight": 1656,
                        "weight_percentage": 0,
                        "spend": 16107,
                        "spend_percentage": 0
                    }
                },
                "dairy": {
                    "liquid_dairy": {
                        "cat": "LIQUID DAIRY",
                        "weight": 148688,
                        "weight_percentage": 27,
                        "spend": 845453,
                        "spend_percentage": 37
                    },
                    "solid_dairy": {
                        "cat": "SOLID DAIRY",
                        "weight": 396756,
                        "weight_percentage": 73,
                        "spend": 1455081,
                        "spend_percentage": 63
                    }
                }
            }
        },
        "plant": {
            "total_based_lbs": 4881261,
            "total_percentage_lbs": 64,
            "total_based_spend": 11319989,
            "total_percentage_spend": 50,
            "beans_legumes": {
                "cat": "BEANS & LEGUMES",
                "weight": 198599,
                "weight_percentage": 3,
                "spend": 236795,
                "spend_percentage": 1
            },
            "tofu_tempeh_seitan": {
                "cat": "TOFU/TEMPEH/SEITAN",
                "weight": 66397,
                "weight_percentage": 1,
                "spend": 168943,
                "spend_percentage": 1
            },
            "nuts_seed": {
                "cat": "NUTS & SEEDS",
                "weight": 35885,
                "weight_percentage": 0,
                "spend": 157558,
                "spend_percentage": 1
            },
            "meat_analugues": {
                "cat": "MEAT ANALOGUES",
                "weight": 56717,
                "weight_percentage": 1,
                "spend": 400576,
                "spend_percentage": 2
            },
            "grains": {
                "cat": "GRAINS",
                "weight": 1025228,
                "weight_percentage": 13,
                "spend": 2120687,
                "spend_percentage": 9
            },
            "plant_based_dairy": {
                "cat": "PLANT-BASED DAIRY",
                "weight": 6701,
                "weight_percentage": 0,
                "spend": 258306,
                "spend_percentage": 1
            },
            "plant_based_mayo": {
                "cat": "PLANT-BASED MAYO",
                "weight": 0,
                "weight_percentage": 0,
                "spend": 26038,
                "spend_percentage": 0
            },
            "produce": {
                "cat": "PRODUCE",
                "weight": 3154101,
                "weight_percentage": 42,
                "spend": 7318987,
                "spend_percentage": 32
            },
            "plant_oil": {
                "cat": "PLANT OIL",
                "weight": 337632,
                "weight_percentage": 4,
                "spend": 632098,
                "spend_percentage": 3
            },
            "drill_down_data": {
                "grains": {
                    "intact_whole_grains": {
                        "cat": "INTACT WHOLE GRAINS",
                        "weight": 64097,
                        "weight_percentage": 6,
                        "spend": 108897,
                        "spend_percentage": 5
                    },
                    "other_whole_grains": {
                        "cat": "OTHER WHOLE GRAINS",
                        "weight": 82446,
                        "weight_percentage": 8,
                        "spend": 184440,
                        "spend_percentage": 9
                    },
                    "other_grains": {
                        "cat": "OTHER GRAINS",
                        "weight": 878685,
                        "weight_percentage": 86,
                        "spend": 1827349,
                        "spend_percentage": 86
                    }
                },
                "produce": {
                    "fruits": {
                        "cat": "FRUITS",
                        "weight": 452802,
                        "weight_percentage": 14,
                        "spend": 1758150,
                        "spend_percentage": 24
                    },
                    "vegitable": {
                        "cat": "VEGETABLES",
                        "weight": 1917853,
                        "weight_percentage": 61,
                        "spend": 4453719,
                        "spend_percentage": 61
                    },
                    "potatoes": {
                        "cat": "POTATOES (ALL WHITE)",
                        "weight": 783447,
                        "weight_percentage": 25,
                        "spend": 1107118,
                        "spend_percentage": 15
                    }
                },
                "plant_oil": {
                    "plant_oil_cooking": {
                        "cat": "PLANT OIL (COOKING)",
                        "weight": 300290,
                        "weight_percentage": 89,
                        "spend": 573259,
                        "spend_percentage": 91
                    },
                    "plant_oil_fry": {
                        "cat": "PLANT OIL (FRY)",
                        "weight": 37342,
                        "weight_percentage": 11,
                        "spend": 58840,
                        "spend_percentage": 9
                    }
                }
            }
        }
    }
};

export {
  SERIES_DATA,
  ANIMAL_LBS,
  PLANT_LBS,
  BREAKDOWN_SERIES_DATA,
};