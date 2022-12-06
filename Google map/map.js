function initMap() {
    let location = {lat: 42.709400, lng: 18.345301 };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });

    let marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
