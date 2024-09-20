document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo');
    logo.addEventListener('click', function () {
        alert('Je hebt op het logo geklikt!');
    });
});

function initMap() {
    var locatie = {lat: 52.3676, lng: 4.9041};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: locatie
    });
    var marker = new google.maps.Marker({
        position: locatie,
        map: map
    });
}