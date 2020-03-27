const DEFAULT_MEASUREMENTS = [{
    "formula": "FN",
    "station_number": "NL01487",
    "timestamp_measured": "2020-03-21T12:00:00+00:00",
    "value": 0
}, {
    "formula": "NO",
    "station_number": "NL01487",
    "timestamp_measured": "2020-03-21T12:00:00+00:00",
    "value": 0
}, {
    "formula": "NO2",
    "station_number": "NL01487",
    "timestamp_measured": "2020-03-21T12:00:00+00:00",
    "value": 0
}, {
    "formula": "O3",
    "station_number": "NL01487",
    "timestamp_measured": "2020-03-21T11:00:00+00:00",
    "value": 0
}, {
    "formula": "PM10",
    "station_number": "NL01487",
    "timestamp_measured": "2020-03-21T12:00:00+00:00",
    "value": 0
}, {"formula": "PM25", "station_number": "NL01487", "timestamp_measured": "2020-03-21T12:00:00+00:00", "value": 0}];

const DEFAULT_POLLUTANTS =
    {
        "C6H6": [
            {
                "formula": "C6H6",
                "name": {
                    "nl": "Benzeen",
                    "en": "Benzene"
                }
            }
        ],
        "C7H8": [
            {
                "formula": "C7H8",
                "name": {
                    "nl": "Tolueen",
                    "en": "Toluene"
                }
            }
        ],
        "C8H10": [
            {
                "formula": "C8H10",
                "name": {
                    "nl": "Xyleen",
                    "en": "Xylene"
                }
            }
        ],
        "CO": [
            {
                "formula": "CO",
                "name": {
                    "nl": "Koolmonoxide (CO)",
                    "en": "Carbon monoxide (CO)"
                }
            }
        ],
        "H2S": [
            {
                "formula": "H2S",
                "name": {
                    "nl": "Waterstofsulfide (H2S)",
                    "en": "Hydrogen Sulfide (H2S)"
                }
            }
        ],
        "NH3": [
            {
                "formula": "NH3",
                "name": {
                    "nl": "Ammoniak (NH3)",
                    "en": "Ammonia (NH3)"
                }
            }
        ],
        "NO": [
            {
                "formula": "NO",
                "name": {
                    "nl": "Stikstofmonoxide (NO)",
                    "en": "Nitrogen monoxide (NO)"
                }
            }
        ],
        "NO2": [
            {
                "formula": "NO2",
                "name": {
                    "nl": "Stikstofdioxide (NO2)",
                    "en": "Nitrogen dioxide (NO2)"
                }
            }
        ],
        "PM10": [
            {
                "formula": "PM10",
                "name": {
                    "nl": "Fijn stof (PM10)",
                    "en": "Particulate matter (PM10)"
                }
            }
        ],
        "PM25": [
            {
                "formula": "PM25",
                "name": {
                    "nl": "Fijn stof (PM2.5)",
                    "en": "Particulate matter (PM2.5)"
                }
            }
        ],
        "PS": [
            {
                "formula": "PS",
                "name": {
                    "nl": "Ultra fine particles (UFP)",
                    "en": "Ultra fine particles (UFP)"
                }
            }
        ],
        "SO2": [
            {
                "formula": "SO2",
                "name": {
                    "nl": "Zwaveldioxide (SO2)",
                    "en": "Sulphur dioxide (SO2)"
                }
            }
        ],
        "FN": [
            {
                "formula": "FN",
                "name": {
                    "nl": "Zwarte rook (FN)",
                    "en": "Soot (FN)"
                }
            }
        ],
        "O3": [
            {
                "formula": "O3",
                "name": {
                    "nl": "Ozoon (O3)",
                    "en": "Ozone (O3)"
                }
            }
        ]
    };

const DEFAULT_MEASUREMENT_STATION = {
    "location": "Rotterdam-Pleinweg",
    "number": "NL01487"
};

class MockData {

    static getInitMeasurements() {
        return DEFAULT_MEASUREMENTS;
    }

    static getDefaultPollutants() {
        return DEFAULT_POLLUTANTS;
    }

    static getDefaultMeasurementStation() {
        return DEFAULT_MEASUREMENT_STATION;
    }

}

export default MockData