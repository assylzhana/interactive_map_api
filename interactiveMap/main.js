//[43.20814, 76.66990]
let num = 1;

DG.then(function() {
    var map;

    map = DG.map('map', {
        center: [43.20814, 76.66990],
        zoom: 16
    });

    DG.control.location({position: 'bottomright'}).addTo(map);

    map.on('click', function(e) {
        
        console.log(e.latlng.lat + " " + e.latlng.lng); 
        DG.marker([e.latlng.lat, e.latlng.lng]).addTo(map).bindPopup(`marker #${num}`);
        num++;
    });
});