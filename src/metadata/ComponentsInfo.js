const ALL = {
    "O3": {
        "description": {
            "en": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"Ozone is not emitted directly into the atmosphere but is a secondary pollutant produced by reaction between nitrogen dioxide (NO2), hydrocarbons and sunlight. The ozone concentration is mainly weather dependent. In Europe citizens are warned if concentrations exceed 180 (μg/m3). The European alarm threshold is 240 (μg/m3).  \",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}}",
            "nl": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"Ozon wordt niet rechtstreeks uitgestoten, maar wordt gevormd uit stikstofoxiden, vluchtige organische stoffen en koolmonoxide. De concentratie ozon (O3) is vooral afhankelijk van het weer. In heel Europa wordt de bevolking gewaarschuwd bij ozonconcentraties boven 180 (μg/m3). Een concentratie van 240 (μg/m3) is de Europese alarmdrempel.\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}}"
        },
        "formula": "O3",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 15
        }, {"color": "#ffffc8", "lowerband": 15, "rating": 2, "type": "website", "upperband": 30}, {
            "color": "#ffc800",
            "lowerband": 30,
            "rating": 3,
            "type": "website",
            "upperband": 40
        }, {"color": "#ff6464", "lowerband": 40, "rating": 4, "type": "website", "upperband": 60}, {
            "color": "#ffffc8",
            "lowerband": 60,
            "rating": 5,
            "type": "website",
            "upperband": 80
        }, {"color": "#ffffc8", "lowerband": 80, "rating": 6, "type": "website", "upperband": 100}, {
            "color": "#ffc800",
            "lowerband": 100,
            "rating": 7,
            "type": "website",
            "upperband": 140
        }, {
            "color": "#ffc800",
            "lowerband": 140,
            "rating": 8,
            "type": "website",
            "upperband": 180
        }, {
            "color": "#ff6464",
            "lowerband": 180,
            "rating": 9,
            "type": "website",
            "upperband": 200
        }, {
            "color": "#ff6464",
            "lowerband": 200,
            "rating": 10,
            "type": "website",
            "upperband": 240
        }, {"color": "#c864ff", "lowerband": 240, "rating": 11, "type": "website", "upperband": 10000}],
        "name": {"en": "Ozone (O3)", "nl": "Ozon (O3)"}
    },
    "FN": {
        "description": {
            "en": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"The concentration of black smoke is higher around the morning and evening rush hour. This substance is released when trucks, ships and industry burn fuel. The concentration of black smoke is an indicator of the number of soot particles in the air. Soot is the smallest particulate matter (PM2.5). There is no set legal limit value yet. As soot is even smaller than PM2.5, particles are able to penetrate even deeper into the lungs and are therefore more harmful from a health perspective.\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}}",
            "nl": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"De concentratie zwarte rook is rond de ochtend- en avondspits hoger. Deze stof komt vrij bij het verbranden van brandstof door vrachtauto's, schepen en de industrie. De concentratie zwarte rook is een maat voor het aantal roetdeeltjes in de lucht. Roet is het kleinste deel van fijn stof (PM2.5). Er is nog geen wettelijke norm. Doordat roet nog kleiner is dan PM2.5 kunnen deze deeltjes nog dieper doordringen in de longen en zijn dan ook schadelijker voor de gezondheid.\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}}"
        },
        "formula": "FN",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 1
        }, {"color": "#ffffc8", "lowerband": 1, "rating": 2, "type": "website", "upperband": 3}, {
            "color": "#ffc800",
            "lowerband": 3,
            "rating": 3,
            "type": "website",
            "upperband": 4
        }, {"color": "#ff6464", "lowerband": 4, "rating": 4, "type": "website", "upperband": 6}, {
            "color": "#ffffc8",
            "lowerband": 6,
            "rating": 5,
            "type": "website",
            "upperband": 8
        }, {"color": "#ffffc8", "lowerband": 8, "rating": 6, "type": "website", "upperband": 10}, {
            "color": "#ffc800",
            "lowerband": 10,
            "rating": 7,
            "type": "website",
            "upperband": 15
        }, {"color": "#ffc800", "lowerband": 15, "rating": 8, "type": "website", "upperband": 20}, {
            "color": "#ff6464",
            "lowerband": 20,
            "rating": 9,
            "type": "website",
            "upperband": 100
        }, {"color": "#ff6464", "lowerband": 100, "rating": 10, "type": "website", "upperband": 500}, {
            "color": "#c864ff",
            "lowerband": 500,
            "rating": 11,
            "type": "website",
            "upperband": 10000
        }],
        "name": {"en": "Smoke", "nl": "Roet (BC)"}
    },
    "NO": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"The concentration of nitrogen monoxide (NO) is higher around the morning and evening rush hour. This compound is released in the combustion of fuel for cars, central heating systems, industry and power plants. Once released into the air, a chemical process takes place and nitrogen monoxide is converted to nitrogen dioxide. There are no legal limit values for nitrogen monoxide.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"De concentratie stikstofmonoxide (NO) is rond de ochtend- en avondspits hoger. Deze stof komt vrij bij het verbranden van brandstof door auto's, cv-installaties, de industrie en elektriciteitscentrales. Eenmaal in de lucht vindt er een chemisch proces plaats. stikstofmonoxide wordt dan omgezet in stikstofdioxide. Voor stikstofmonoxide bestaan geen wettelijke normen.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "NO",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 10
        }, {"color": "#ffffc8", "lowerband": 10, "rating": 2, "type": "website", "upperband": 25}, {
            "color": "#ffc800",
            "lowerband": 25,
            "rating": 3,
            "type": "website",
            "upperband": 50
        }, {"color": "#ff6464", "lowerband": 50, "rating": 4, "type": "website", "upperband": 100}, {
            "color": "#ffffc8",
            "lowerband": 100,
            "rating": 5,
            "type": "website",
            "upperband": 150
        }, {"color": "#ffffc8", "lowerband": 150, "rating": 6, "type": "website", "upperband": 200}, {
            "color": "#ffc800",
            "lowerband": 200,
            "rating": 7,
            "type": "website",
            "upperband": 400
        }, {"color": "#ffc800", "lowerband": 400, "rating": 8, "type": "website", "upperband": 600}, {
            "color": "#ff6464",
            "lowerband": 600,
            "rating": 9,
            "type": "website",
            "upperband": 1000
        }, {"color": "#ff6464", "lowerband": 1000, "rating": 10, "type": "website", "upperband": 5000}, {
            "color": "#c864ff",
            "lowerband": 5000,
            "rating": 11,
            "type": "website",
            "upperband": 10000
        }],
        "name": {"en": "Nitrogen monoxide (NO)", "nl": "Stikstofmonoxide (NO)"}
    },
    "NO2": {
        "description": {
            "en": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"The highest concentrations of NO2 exist during the morning and evening rush hour. NOx is emitted when fuel is being burned e.g. in transport, industrial processes and power generation. NO2 is formed in a reaction between nitric oxide (NO) and ozone (O3). The weather and traffic influence the concentrations substantially. The yearly average limit value is 40 (μg/m3).\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}}",
            "nl": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"De hoogste concentraties stikstofdioxide (NO2) komen voor tijdens de ochtend- en avondspits. Deze stof komt vrij door het (weg)verkeer, energieproductie en industrie. Daarnaast ontstaat NO2 uit een reactie tussen stikstofmonoxide en ozon. Het weer en de verkeersdrukte hebben grote invloed op de concentratie. De wettelijke norm is een jaargemiddelde van 40 (μg/m3)\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}}"
        },
        "formula": "NO2",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 10
        }, {"color": "#ffffc8", "lowerband": 10, "rating": 2, "type": "website", "upperband": 20}, {
            "color": "#ffc800",
            "lowerband": 20,
            "rating": 3,
            "type": "website",
            "upperband": 30
        }, {"color": "#ff6464", "lowerband": 30, "rating": 4, "type": "website", "upperband": 45}, {
            "color": "#ffffc8",
            "lowerband": 45,
            "rating": 5,
            "type": "website",
            "upperband": 60
        }, {"color": "#ffffc8", "lowerband": 60, "rating": 6, "type": "website", "upperband": 75}, {
            "color": "#ffc800",
            "lowerband": 75,
            "rating": 7,
            "type": "website",
            "upperband": 100
        }, {"color": "#ffc800", "lowerband": 100, "rating": 8, "type": "website", "upperband": 125}, {
            "color": "#ff6464",
            "lowerband": 125,
            "rating": 9,
            "type": "website",
            "upperband": 150
        }, {"color": "#ff6464", "lowerband": 150, "rating": 10, "type": "website", "upperband": 200}, {
            "color": "#c864ff",
            "lowerband": 200,
            "rating": 11,
            "type": "website",
            "upperband": 10000
        }],
        "name": {"en": "Nitrogen dioxide (NO2)", "nl": "Stikstofdioxide (NO2)"}
    },
    "PM10": {
        "description": {
            "en": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"The daily concentration of particulate matter (PM10) depends on the weather. In the cities, concentrations during the day are on average slightly higher than at night, mainly due to the traffic contribution. PM10 is a collective name for floating, inhalable particles with a maximum diameter of 0.01 millimeter. The legal standard is an annual average of 40 (μg / m3). In addition, the daily average may be a maximum of 35 times higher than 50 (μg / m3) annually.\",\"marks\":[]}]}]}}",
            "nl": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"De dagelijkse concentratie fijn stof (PM10) is afhankelijk van het weer. In de steden zijn de concentraties overdag gemiddeld iets hoger dan 's nachts, vooral door de verkeersbijdrage. PM10 is een verzamelnaam voor zwevende, inhaleerbare deeltjes met een maximale doorsnede van 0,01 milimeter. De wettelijke norm is een jaargemiddelde van 40 (μg/m3). Daarnaast mag het daggemiddelde jaarlijks maximaal 35 keer hoger zijn dan 50 (μg/m3).\",\"marks\":[]}]}]}}"
        },
        "formula": "PM10",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 10
        }, {"color": "#ffffc8", "lowerband": 10, "rating": 2, "type": "website", "upperband": 20}, {
            "color": "#ffc800",
            "lowerband": 20,
            "rating": 3,
            "type": "website",
            "upperband": 30
        }, {"color": "#ff6464", "lowerband": 30, "rating": 4, "type": "website", "upperband": 45}, {
            "color": "#ffffc8",
            "lowerband": 45,
            "rating": 5,
            "type": "website",
            "upperband": 60
        }, {"color": "#ffffc8", "lowerband": 60, "rating": 6, "type": "website", "upperband": 75}, {
            "color": "#ffc800",
            "lowerband": 75,
            "rating": 7,
            "type": "website",
            "upperband": 100
        }, {"color": "#ffc800", "lowerband": 100, "rating": 8, "type": "website", "upperband": 125}, {
            "color": "#ff6464",
            "lowerband": 125,
            "rating": 9,
            "type": "website",
            "upperband": 150
        }, {"color": "#ff6464", "lowerband": 150, "rating": 10, "type": "website", "upperband": 200}, {
            "color": "#c864ff",
            "lowerband": 200,
            "rating": 11,
            "type": "website",
            "upperband": 100000
        }],
        "name": {"en": "Particulate matter (PM10)", "nl": "Fijn stof (PM10)"}
    },
    "PM25": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"The daily concentration of PM2,5 is greatly influenced by the weather. In cities the concentrations are slightly higher during the day than at night, due to traffic. PM2,5 is a collective term for suspended particles that can be inhaled and have a maximum diameter of 0,0025 millimetres. The yearly average limit value is 25 (\\u03bcg/m3). Is PM2,5 is even smaller than PM10 it can penetrate even deeper into the lungs and causes even more significant health risks.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"De dagelijkse concentratie fijn stof (PM2.5) is afhankelijk van het weer. In de steden zijn de concentraties overdag gemiddeld iets hoger dan 's nachts, vooral door de verkeersbijdrage. PM2.5 is een verzamelnaam voor zwevende, inhaleerbare deeltjes met een maximale doorsnede van 0,0025 millimeter. De wettelijke norm is een jaargemiddelde van 25 (\\u03bcg/m3). Doordat PM2.5 nog kleiner is dan PM10 kunnen deze deeltjes dieper doordringen in de longen en zijn ze schadelijker voor de gezondheid.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "PM25",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 10
        }, {"color": "#ffffc8", "lowerband": 10, "rating": 2, "type": "website", "upperband": 15}, {
            "color": "#ffc800",
            "lowerband": 15,
            "rating": 3,
            "type": "website",
            "upperband": 20
        }, {"color": "#ff6464", "lowerband": 20, "rating": 4, "type": "website", "upperband": 30}, {
            "color": "#ffffc8",
            "lowerband": 30,
            "rating": 5,
            "type": "website",
            "upperband": 40
        }, {"color": "#ffffc8", "lowerband": 40, "rating": 6, "type": "website", "upperband": 50}, {
            "color": "#ffc800",
            "lowerband": 50,
            "rating": 7,
            "type": "website",
            "upperband": 70
        }, {"color": "#ffc800", "lowerband": 70, "rating": 8, "type": "website", "upperband": 90}, {
            "color": "#ff6464",
            "lowerband": 90,
            "rating": 9,
            "type": "website",
            "upperband": 100
        }, {
            "color": "#ff6464",
            "lowerband": 100,
            "rating": 10,
            "type": "website",
            "upperband": 140
        }, {"color": "#c864ff", "lowerband": 140, "rating": 11, "type": "website", "upperband": 10000}],
        "name": {"en": "Particulate matter (PM2.5)", "nl": "Fijn stof (PM2.5)"}
    },
    "PS": {
        "description": {
            "en": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"Ultra fine particles (UFP) are very small particles in the air. They are smaller than 0.1 micrometer. UFP is expressed as the number of particles per cubic centimeter (cm3). Sources of UFP are a.o. road traffic, shipping, air traffic, industry and wood burning. Levels: within the city with low traffic density about 10,000/cm3; with high traffic density or close to another source over 100,000/cm3. There is no legal limit value for UFP. Currently, no conclusion about health risks can be drawn from the reported levels of UFP. \",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}}",
            "nl": "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"Ultra fine particles (UFP) zijn zeer kleine deeltjes fijn stof (<0,1 micrometer). UFP wordt uitgedrukt als het aantal deeltjes per kubieke centimeter (cm3). Bronnen van UFP zijn o.a. wegverkeer, scheepvaart, luchtvaart, industrie en houtverbranding. Niveaus: in de stad met weinig verkeer ca. 10.000/cm3; met veel verkeer of dicht bij een andere bron tot boven 100.000/cm3. Er is geen wettelijke norm voor UFP. Er kan nu geen gezondheidskundige betekenis aan de UFP niveaus worden ontleend.  \",\"marks\":[]},{\"object\":\"inline\",\"type\":\"link\",\"data\":{\"href\":\"http://bit.ly/ufsrivm\"},\"nodes\":[{\"object\":\"text\",\"text\":\"Meer informatie\",\"marks\":[]}]},{\"object\":\"text\",\"text\":\".\",\"marks\":[]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"data\":{},\"nodes\":[{\"object\":\"text\",\"text\":\"\",\"marks\":[]}]}]}}"
        },
        "formula": "PS",
        "limits": [],
        "name": {"en": "Ultra fine particles (UFP)", "nl": "Ultra fine particles (UFP)"}
    },
    "SO2": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"The concentration of SO2 is generally low. Occasionally the concentrations will increase temporarily. The cause is usually a ship that uses poor quality fuel. The concentration may not exceed a 125 (\\u03bcg/m3) average over the course of one day. The public will be informed if the concentration exceeds 500 (\\u03bcg/m3) for a period of three hours. \", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"De concentratie zwaveldioxide (SO2) is in het algemeen laag. Af en toe zijn de concentraties tijdelijk wat hoger. Gemiddeld over \\u00e9\\u00e9n dag mag de concentratie niet hoger zijn dan 125 (\\u03bcg/m3). Als gedurende drie uur de concentratie hoger is dan 500 (\\u03bcg/m3) zal de bevolking ge\\u00efnformeerd worden.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "SO2",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 10
        }, {"color": "#ffffc8", "lowerband": 10, "rating": 2, "type": "website", "upperband": 15}, {
            "color": "#ffc800",
            "lowerband": 15,
            "rating": 3,
            "type": "website",
            "upperband": 20
        }, {"color": "#ff6464", "lowerband": 20, "rating": 4, "type": "website", "upperband": 100}, {
            "color": "#ffffc8",
            "lowerband": 100,
            "rating": 5,
            "type": "website",
            "upperband": 200
        }, {
            "color": "#ffffc8",
            "lowerband": 200,
            "rating": 6,
            "type": "website",
            "upperband": 350
        }, {
            "color": "#ffc800",
            "lowerband": 350,
            "rating": 7,
            "type": "website",
            "upperband": 375
        }, {
            "color": "#ffc800",
            "lowerband": 375,
            "rating": 8,
            "type": "website",
            "upperband": 400
        }, {
            "color": "#ff6464",
            "lowerband": 400,
            "rating": 9,
            "type": "website",
            "upperband": 500
        }, {
            "color": "#ff6464",
            "lowerband": 500,
            "rating": 10,
            "type": "website",
            "upperband": 10000
        }, {"color": "#c864ff", "lowerband": 10000, "rating": 11, "type": "website", "upperband": 20000}],
        "name": {"en": "Sulphur dioxide (SO2)", "nl": "Zwaveldioxide (SO2)"}
    },
    "C6H6": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"The concentration of benzene is normally very low. The legal limit value for benzene is an annual average of 5 (\\u03bcg/m3). The GGD Rotterdam [Municipal Health Services Rotterdam] states that there is a possible risk to health at a daily averages exceeding 30 (\\u03bcg/m3). Higher concentrations are measured occasionally. This is usually only temporary and the daily average value remains well below 30 (\\u03bcg/m3).\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"De concentratie benzeen is normaal zeer laag. De wettelijke norm voor benzeen is een jaargemiddelde van 5 (\\u03bcg/m3). Bij een daggemiddelde van meer dan 30 (\\u03bcg/m3) is er volgens de GGD Rotterdam sprake van een mogelijk gezondheidsrisico. Soms worden hogere concentraties gemeten. Het betreft dan meestal een kortdurende situatie en de daggemiddelde waarde zal dan ruim onder de 30 (\\u03bcg/m3) blijven.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "C6H6",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 2
        }, {"color": "#ffffc8", "lowerband": 2, "rating": 2, "type": "website", "upperband": 4}, {
            "color": "#ffc800",
            "lowerband": 4,
            "rating": 3,
            "type": "website",
            "upperband": 5
        }, {"color": "#ff6464", "lowerband": 5, "rating": 4, "type": "website", "upperband": 10}, {
            "color": "#ffffc8",
            "lowerband": 10,
            "rating": 5,
            "type": "website",
            "upperband": 15
        }, {"color": "#ffffc8", "lowerband": 15, "rating": 6, "type": "website", "upperband": 20}, {
            "color": "#ffc800",
            "lowerband": 20,
            "rating": 7,
            "type": "website",
            "upperband": 30
        }, {"color": "#ffc800", "lowerband": 30, "rating": 8, "type": "website", "upperband": 50}, {
            "color": "#ff6464",
            "lowerband": 50,
            "rating": 9,
            "type": "website",
            "upperband": 100
        }, {
            "color": "#ff6464",
            "lowerband": 100,
            "rating": 10,
            "type": "website",
            "upperband": 500
        }, {"color": "#c864ff", "lowerband": 500, "rating": 11, "type": "website", "upperband": 10000}],
        "name": {"en": "Benzene", "nl": "Benzeen"}
    },
    "C7H8": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"The concentration of toluene is normally around 5 (\\u03bcg/m3). There is no legal limit values for toluene. Toluene is similar to benzene, but is less dangerous. Elevated concentrations could be a sign of industrial leakage or of the incorrect use of a solvent.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"De concentratie tolueen is normaal rond de 5 (\\u03bcg/m3). Er is geen wettelijke norm voor tolueen. Tolueen lijkt op benzeen, maar is minder gevaarlijk. Verhoogde concentraties kunnen een teken zijn van lekkages bij de industrie of van een verkeerd gebruik van oplosmiddelen.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "C7H8",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 2
        }, {"color": "#ffffc8", "lowerband": 2, "rating": 2, "type": "website", "upperband": 4}, {
            "color": "#ffc800",
            "lowerband": 4,
            "rating": 3,
            "type": "website",
            "upperband": 5
        }, {"color": "#ff6464", "lowerband": 5, "rating": 4, "type": "website", "upperband": 10}, {
            "color": "#ffffc8",
            "lowerband": 10,
            "rating": 5,
            "type": "website",
            "upperband": 20
        }, {"color": "#ffffc8", "lowerband": 20, "rating": 6, "type": "website", "upperband": 40}, {
            "color": "#ffc800",
            "lowerband": 40,
            "rating": 7,
            "type": "website",
            "upperband": 60
        }, {"color": "#ffc800", "lowerband": 60, "rating": 8, "type": "website", "upperband": 75}, {
            "color": "#ff6464",
            "lowerband": 75,
            "rating": 9,
            "type": "website",
            "upperband": 100
        }, {
            "color": "#ff6464",
            "lowerband": 100,
            "rating": 10,
            "type": "website",
            "upperband": 500
        }, {"color": "#c864ff", "lowerband": 500, "rating": 11, "type": "website", "upperband": 10000}],
        "name": {"en": "Toluene", "nl": "Tolueen"}
    },
    "C8H10": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"The concentration of xylene is normally around 2 (ug/m3). There is no legal standard for xylene. Xylene is similar to benzene, but is less dangerous. Elevated levels may be a sign of leaks at an industrial installation or the misuse of solvents. Just as benzene and toluene, xylene is also emitted by road traffic.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"De concentratie xyleen is normaal rond de 2 (\\u03bcg/m3). Er is geen wettelijke norm voor xyleen. Xyleen lijkt op benzeen, maar is minder gevaarlijk. Verhoogde concentraties kunnen een teken zijn van lekkages bij de industrie of van een verkeerd gebruik van oplosmiddelen. Net als benzeen en tolueen wordt xyleen ook door het wegverkeer uitgestoten.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "C8H10",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 2
        }, {"color": "#ffffc8", "lowerband": 2, "rating": 2, "type": "website", "upperband": 4}, {
            "color": "#ffc800",
            "lowerband": 4,
            "rating": 3,
            "type": "website",
            "upperband": 5
        }, {"color": "#ff6464", "lowerband": 5, "rating": 4, "type": "website", "upperband": 10}, {
            "color": "#ffffc8",
            "lowerband": 10,
            "rating": 5,
            "type": "website",
            "upperband": 20
        }, {"color": "#ffffc8", "lowerband": 20, "rating": 6, "type": "website", "upperband": 40}, {
            "color": "#ffc800",
            "lowerband": 40,
            "rating": 7,
            "type": "website",
            "upperband": 60
        }, {"color": "#ffc800", "lowerband": 60, "rating": 8, "type": "website", "upperband": 75}, {
            "color": "#ff6464",
            "lowerband": 75,
            "rating": 9,
            "type": "website",
            "upperband": 100
        }, {
            "color": "#ff6464",
            "lowerband": 100,
            "rating": 10,
            "type": "website",
            "upperband": 500
        }, {"color": "#c864ff", "lowerband": 500, "rating": 11, "type": "website", "upperband": 10000}],
        "name": {"en": "Xylene", "nl": "Xyleen"}
    },
    "CO": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"The concentration of carbon monoxide (CO) in the air is normally around 300 (\\u03bcg/m3). This compound is formed when a substance is burned at low oxygen levels. Traffic and wood heating are a main source of carbon monoxide in the air. The legal limit is an average of 10,000 (\\u03bcg/m3) over eight hours. In ambient air this level is normally not reached.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"De concentratie koolmonoxide (CO) is in de buitenlucht normaal rond de 300 (\\u03bcg/m3). Deze stof ontstaat als er iets verbrandt met te weinig zuurstof. In de buitenlucht zijn vooral het verkeer en houtstook bronnen van koolmonoxide. De wettelijke norm in buitenlucht is 10.000 (\\u03bcg/m3) gemiddeld over acht uur. Dit niveau wordt in de buitenlucht normaal gesproken niet bereikt.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "CO",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 250
        }, {
            "color": "#ffffc8",
            "lowerband": 250,
            "rating": 2,
            "type": "website",
            "upperband": 500
        }, {
            "color": "#ffc800",
            "lowerband": 500,
            "rating": 3,
            "type": "website",
            "upperband": 1000
        }, {
            "color": "#ff6464",
            "lowerband": 1000,
            "rating": 4,
            "type": "website",
            "upperband": 1500
        }, {
            "color": "#ffffc8",
            "lowerband": 1500,
            "rating": 5,
            "type": "website",
            "upperband": 2000
        }, {
            "color": "#ffffc8",
            "lowerband": 2000,
            "rating": 6,
            "type": "website",
            "upperband": 3000
        }, {
            "color": "#ffc800",
            "lowerband": 3000,
            "rating": 7,
            "type": "website",
            "upperband": 5000
        }, {
            "color": "#ffc800",
            "lowerband": 5000,
            "rating": 8,
            "type": "website",
            "upperband": 10000
        }, {
            "color": "#ff6464",
            "lowerband": 10000,
            "rating": 9,
            "type": "website",
            "upperband": 25000
        }, {
            "color": "#ff6464",
            "lowerband": 25000,
            "rating": 10,
            "type": "website",
            "upperband": 50000
        }, {"color": "#c864ff", "lowerband": 50000, "rating": 11, "type": "website", "upperband": 100000}],
        "name": {"en": "Carbon monoxide (CO)", "nl": "Koolmonoxide (CO)"}
    },
    "H2S": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"The concentrations of hydrogen Sulfide ( H2S) are generally very low . H2S is a strong smelling gas which is best known as the cause of the smell of rotten eggs. Occasionally  the concentrations are temporarily higher, often in combination with Sulpher Dioxide (SO2). The cause is usually local industry.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"De concentraties Waterstofsulfide (H2S) zijn over het algemeen heel laag. H2S is een sterk ruikend gas dat het meest gekend is als de oorzaak van de geur van rotte eieren. Af en toe zijn de concentraties, vaak in combinatie met Zwaveldioxide (SO2), tijdelijk wat hoger. De oorzaak hiervan is meestal lokale industrie.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "H2S",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 0
        }, {"color": "#ffffc8", "lowerband": null, "rating": 2, "type": "website", "upperband": 0}, {
            "color": "#ffc800",
            "lowerband": null,
            "rating": 3,
            "type": "website",
            "upperband": 0
        }, {"color": "#ff6464", "lowerband": null, "rating": 4, "type": "website", "upperband": 0}, {
            "color": "#ffffc8",
            "lowerband": null,
            "rating": 5,
            "type": "website",
            "upperband": 0
        }, {"color": "#ffffc8", "lowerband": null, "rating": 6, "type": "website", "upperband": 0}, {
            "color": "#ffc800",
            "lowerband": null,
            "rating": 7,
            "type": "website",
            "upperband": 0
        }, {"color": "#ffc800", "lowerband": null, "rating": 8, "type": "website", "upperband": 0}, {
            "color": "#ff6464",
            "lowerband": null,
            "rating": 9,
            "type": "website",
            "upperband": 0
        }, {
            "color": "#ff6464",
            "lowerband": null,
            "rating": 10,
            "type": "website",
            "upperband": 0
        }, {"color": "#c864ff", "lowerband": null, "rating": 11, "type": "website", "upperband": 0}],
        "name": {"en": "Hydrogen Sulfide (H2S)", "nl": "Waterstofsulfide (H2S)"}
    },
    "NH3": {
        "description": {
            "en": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"Ammonia is a gaseous component. It is for the most part come from the agricultural sector. Ammonia creates eutrophication and acidification of soil and groundwater. In the atmosphere, ammonia can be converted into fine particles which can lead to health problems.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}",
            "nl": "{\"object\": \"value\", \"document\": {\"object\": \"document\", \"data\": {}, \"nodes\": [{\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"Ammoniak is een gasvormige component. Het is voor het grootste deel afkomstig uit de agrarische sector. Ammoniak zorgt voor vermesting en verzuring van bodem en grondwater. In de atmosfeer kan ammoniak worden omgezet in fijnstof dat tot gezondheidsklachten kan leiden.\", \"marks\": []}]}, {\"object\": \"block\", \"type\": \"paragraph\", \"data\": {}, \"nodes\": [{\"object\": \"text\", \"text\": \"\", \"marks\": []}]}]}}"
        },
        "formula": "NH3",
        "limits": [{
            "color": "#96c8ff",
            "lowerband": null,
            "rating": 1,
            "type": "website",
            "upperband": 0
        }, {"color": "#ffffc8", "lowerband": null, "rating": 2, "type": "website", "upperband": 0}, {
            "color": "#ffc800",
            "lowerband": null,
            "rating": 3,
            "type": "website",
            "upperband": 0
        }, {"color": "#ff6464", "lowerband": null, "rating": 4, "type": "website", "upperband": 0}, {
            "color": "#ffffc8",
            "lowerband": null,
            "rating": 5,
            "type": "website",
            "upperband": 0
        }, {"color": "#ffffc8", "lowerband": null, "rating": 6, "type": "website", "upperband": 0}, {
            "color": "#ffc800",
            "lowerband": null,
            "rating": 7,
            "type": "website",
            "upperband": 0
        }, {"color": "#ffc800", "lowerband": null, "rating": 8, "type": "website", "upperband": 0}, {
            "color": "#ff6464",
            "lowerband": null,
            "rating": 9,
            "type": "website",
            "upperband": 0
        }, {
            "color": "#ff6464",
            "lowerband": null,
            "rating": 10,
            "type": "website",
            "upperband": 0
        }, {"color": "#c864ff", "lowerband": null, "rating": 11, "type": "website", "upperband": 0}],
        "name": {"en": "Ammonia (NH3)", "nl": "Ammoniak (NH3)"}
    }
};

function withinRange(element, value) {
    const lowerBand = element.lowerband ? element.lowerband : 0;

    return lowerBand <= value && value <= element.upperband;
}

class ComponentsInfo {
    static get(name) {
        return ALL[name];
    }

    static rating(name, value) {
        const component = ALL[name];
        if (component) {
            const found = component.limits.find(element => withinRange(element, value));
            return found? found.rating : 1;
        }
        return 11;
    }

    static limit(name) {
        const component = ALL[name];
        const limits = component.limits;
        return limits[limits.length - 1].lowerband;
    }
}

export default ComponentsInfo