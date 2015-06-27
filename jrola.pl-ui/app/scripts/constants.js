var common = {
    DATE_FORMAT_FULL : "YYYY-MM-DD",
    DATE_FORMAT_YEAR_MONTHS : "YYYY-MM"
};

var prodConfig = {
    mocked : false,
    prefs : common
};

var devConfig = {
    mocked : true,
    prefs : common
};


myAppConfigModule
    .constant('config', devConfig);