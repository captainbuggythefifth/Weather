# Weather

Weather App is made out of React Native Web with a lil bit of ContextAPI. A very challenging piece of art to work on 😩

## Installation

First of all, mind you that this version is not stable. To get this to work, I have to edit files directly from node_modules namely:

```code
@react-navigation/bottom-tabs/lib/module/views/ResourceSavingScene.js

replace with import { Screen, screensEnabled } from 'react-native-screens';
```


```code
react-native-auth0/src/auth/authError.js

const handleInvalidToken = response => {
  if (response && response.headers && 
  response.headers.get('www-authenticate') && 
  response.headers.get('www-authenticate').match(/error="invalid_token"/g)) {
    return 'invalid_token'
  }

  return null
}
```

I know, I know. This is considered a crime. But just to finish this, I have to turn myself into a criminal 😭😔🥺

Nah. Kidding. But seriously, this is the only workaround I can see. I will probably go back to this project to update it.

Please follow the steps below to successfully install and run the app

Clone the repository
```bash
git clone https://github.com/captainbuggythefifth/Weather.git
```

Go to the project and install dependencies
```bash
cd Weather && yarn
```

Go to ios folder to install Pod dependencies
```code
cd ios && pod install && cd ..
```

Better get credentials from [Auth0](https://auth0.com/), and [WeatherAPI](https://openweathermap.org/forecast16#geo16)

Create envs folder from root directory and put files namely: development.json, staging.json, production.json

```code
{
    "AUTH0_DOMAIN": "YOUR_AUTH0_DOMAIN",
    "AUTH0_DOMAIN_CLIENT_ID": "YOUR_AUTH0_DOMAIN_CLIENT_ID",
    "GITHUB_USER_DETAILS_URL": "https://api.github.com/users/",
    "WEATHER_API_URL": "https://api.openweathermap.org/data/2.5/weather",
    "WEATHER_API_KEY": "YOUR_WEATHER_API_KEY"
}
```

Start the app
```code
yarn start
```

Run web, ios or android
```code
yarn web || yarn ios || yarn android
```



```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)