// uses config module to store the configuration values
export default {
    port: 2424,
    db_uri: 'mongodb://localhost:27017/DashboardApp_wp2',
    salt: 'webprog2',
    secret: 'wp2',
    jwtsecret: 'weprog2jwtsecret',
    news_uri: 'https://newsapi.org/v2/top-headlines?country=de&apiKey=dc24498fc1fc44e485dce5d9e52ad717',
    openweather_uri: 'https://api.openweathermap.org/data/2.5/weather?lat=48.833195&lon=12.961127&appid=1c3798c62ad38097c93c54d0a2640be9&lang=de&units=metric',
    thd_sensor1_uri: 'http://shelly01.th-deg.de/rpc/Switch.GetStatus?id=0',
    thd_sensor2_uri: 'http://shelly02.th-deg.de/rpc/Switch.GetStatus?id=0',
}
