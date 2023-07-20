const API_URL = "https://ipapi.co/json/"

export default async function getUserLocation(){
    const result =  await fetch(API_URL)
    .then( data => data.json())
    .then( data => data);
    return result
}