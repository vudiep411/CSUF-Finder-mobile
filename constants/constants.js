export const getRouteInfo = async (originLat, originLng, destLat, destLng, apiKey) => 
{
   const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${originLat},${originLng}&destination=${destLat},${destLng}&mode=walking&key=${apiKey}`;
   const res = await fetch(url)
   const data = await res.json()
   const distance = data.routes[0].legs[0].distance.text
   const duration = data.routes[0].legs[0].duration.text
   return {
        distance: distance,
        duration: duration
   }
}