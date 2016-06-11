export let responseNowCity = {
    coord: {
        lon: 2.35,
        lat: 48.85
    },
    weather: [
        {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
        }
    ],
    base: "cmc stations",
    main: {
        temp: 18.75,
        pressure: 1009,
        humidity: 99,
        temp_min: 17.22,
        temp_max: 20
    },
    wind: {
        speed: 3.32,
        deg: 282.022
    },
    rain: {
        "3h": 1.54
    },
    clouds: {
        all: 80
    },
    dt: 1465634617,
    sys: {
        type: 3,
        id: 137218,
        message: 0.0095,
        country: "FR",
        sunrise: 1465616816,
        sunset: 1465674850
    },
    id: 2988507,
    name: "Paris",
    cod: 200
};

export let currentCity = {
    id: 2988507,
    name: "Paris",
    country: "FR"
};

export let favoritesList = [
    {
        id: 2988507,
        name: "Paris",
        country: "FR"
    },
    {
        id: 3242423,
        name: "Rim",
        country: "IT"
    },
    {
        id: 3534534,
        name: "Berlin",
        country: "GR"
    }
];

export let responseForecastCity = {
    city: {
        id: 6545158,
        name: "Trevi",
        coord: {
            lon: 12.49176,
            lat: 41.90464
        },
        country: "IT",
        population: 0,
        sys: {
            population: 0
        }
    },
    cod: "200",
    message: 0.0337,
    cnt: 36,
    list: [
        {
            dt: 1465646400,
            main: {
                temp: 25.71,
                temp_min: 24.17,
                temp_max: 25.71,
                pressure: 997.76,
                sea_level: 1027.87,
                grnd_level: 997.76,
                humidity: 68,
                temp_kf: 1.54
            },
            weather: [
                {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02d"
                }
            ],
            clouds: {
                all: 20
            },
            wind: {
                speed: 3.7,
                deg: 198.501
            },
            rain: { },
            sys: {
                pod: "d"
            },
            dt_txt: "2016-06-11 12:00:00"
        },
        {
            dt: 1465657200,
            main: {},
            weather: [],
            clouds: {},
            wind: {},
            rain: { },
            sys: {},
            dt_txt: "2016-06-11 15:00:00"
        },
        {
            dt: 1465668000,
            main: {},
            weather: [],
            clouds: {},
            wind: {},
            rain: { },
            sys: {},
            dt_txt: "2016-06-11 18:00:00"
        },
        {
            dt: 1465678800,
            main: {},
            weather: [],
            clouds: {},
            wind: {},
            rain: {},
            sys: {},
            dt_txt: "2016-06-11 21:00:00"
        },
        {
            dt: 1465689600,
            main: {},
            weather: [],
            clouds: {},
            wind: {},
            rain: { },
            sys: {},
            dt_txt: "2016-06-12 00:00:00"
        }
    ]
};


export let weatherData = {
    "2988507" : {
        now: responseNowCity
    },
    "6545158" : {
        forecast: responseForecastCity
    }
};
