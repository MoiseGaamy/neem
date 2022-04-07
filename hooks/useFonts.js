import * as Font from "expo-font";


const useFonts = async () =>
{
    await Font.loadAsync({
        // openS: require('../assets/fonts/OpenSans/OpenSans-Light.ttf'),
        robo: require('../assets/fonts/Roboto/Roboto-Thin.ttf'),
        inconsolata: require('../assets/fonts/Inconsolata/Inconsolata-Regular.ttf'),
        roboto: require('../assets/fonts/Roboto/Roboto-Light.ttf')
    })
}

export default useFonts;