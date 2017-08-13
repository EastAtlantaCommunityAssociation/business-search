types = [
  'accounting', 'airport', 'amusement_park', 'aquarium', 'art_gallery', 'atm', 'bakery', 'bank', 'bar', 'beauty_salon', 'bicycle_store', 'book_store', 'bowling_alley', 'bus_station', 'cafe', 'campground', 'car_dealer', 'car_rental', 'car_repair', 'car_wash', 'casino', 'cemetery', 'church', 'city_hall', 'clothing_store', 'convenience_store', 'courthouse', 'dentist', 'department_store', 'doctor', 'electrician', 'electronics_store', 'embassy', 'fire_station', 'florist', 'funeral_home', 'furniture_store', 'gas_station', 'gym', 'hair_care', 'hardware_store', 'health (deprecated)', 'hindu_temple', 'home_goods_store', 'hospital', 'insurance_agency', 'jewelry_store', 'laundry', 'lawyer', 'library', 'liquor_store', 'local_government_office', 'locksmith', 'lodging', 'meal_delivery', 'meal_takeaway', 'mosque', 'movie_rental', 'movie_theater', 'moving_company', 'museum', 'night_club', 'painter', 'park', 'parking', 'pet_store', 'pharmacy', 'physiotherapist', 'plumber', 'police', 'post_office', 'real_estate_agency', 'restaurant', 'roofing_contractor', 'rv_park', 'school', 'shoe_store', 'shopping_mall', 'spa', 'stadium', 'storage', 'store', 'subway_station', 'synagogue', 'taxi_stand', 'train_station', 'transit_station', 'travel_agency', 'university', 'veterinary_care', 'zoo'
];


function processPlaces(results) {
  for (var i = 0, len = results.length; i < len; i++) {
    $('#places').append('<p>' + formatPlace(results[i]) + '</p>');
  }
}

function formatPlace(place) {
  return place.name + '|' + place.vicinity + '|' + place.types.join(',')
}

function requestData(type, location) {
  var request = {
    location: location,
    radius: 4830,
    name: '*',
    type: type
  };
  service.nearbySearch(request, function(results, status, pagination) {
    if (results == null) {
      debugger
    }
    processPlaces(results);
    if (pagination.hasNextPage) {
      //debugger;
      //pagination.nextPage();
    }
  });
};

joesCoffee = new google.maps.LatLng({
  lat: 33.740383,
  lng: -84.345467
});

map = new google.maps.Map(document.getElementById('map'), {
  center: joesCoffee,
  zoom: 15
});

service = new google.maps.places.PlacesService(map);

for (var i = 0, len = types.length; i < len; i++) {
  //;
  (function(ind) {
    setTimeout(function() {
      //requestData(types[ind], joesCoffee)
    }, ind * 2200)
  })(i)
}
setTimeout(function() {
  console.log('done')
}, types.length * 2200)
