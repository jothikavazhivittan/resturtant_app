import AsyncStorage from "@react-native-async-storage/async-storage";

const main_Url=AsyncStorage.getItem('main_data')
main_Url.then((res) => {
    console.log(res, 'main url');
}).catch((err) => {
    console.log(err, 'error');
});
console.log(main_Url, 'main url');

export const BASE_URL = main_Url; 
export const URL = {
  LOGIN: 'Api/Mobile/Login',

};
