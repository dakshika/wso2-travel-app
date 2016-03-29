$(document).ready(function() {
    var mapLocation= new google.maps.LatLng(47.6145, -122.3418); //Google map Coordinates
    var map;

    map_initialize(); // load map

    function map_initialize(){

       //Google map option
        var googleMapOptions =
        {
            center: mapLocation,
            zoom: 17,
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            scaleControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("wso2-travel-map"), googleMapOptions);


        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);


        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });

        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            var bounds = new google.maps.LatLngBounds();

            places.forEach(function(place) {
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });

            map.fitBounds(bounds);
        });


        google.maps.event.addListener(map, 'rightclick', function(event) {
            var marker = new google.maps.Marker({
                position: event.latLng, //map Coordinates where user right clicked
                map: map,
                draggable:true, //set marker draggable
                animation: google.maps.Animation.DROP, //bounce animation
                title:"Hello World!",
                icon: "images/location-icon.png" //custom pin icon
            });

            //Content structure of info Window for the Markers
            var contentString = $('<div class="marker-info-win">'+
                '<div class="marker-inner-win"><span class="info-content">'+
                '<h1 class="marker-heading">New Marker</h1>'+
                'This is a new marker infoWindow'+
                '</span>'+
                '</div></div>');

            //Create an infoWindow
            var infowindow = new google.maps.InfoWindow();

            //set the content of infoWindow
            infowindow.setContent(contentString[0]);

            //add click event listener to marker which will open infoWindow
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker); // click on marker opens info window
            });

            var removeBtn   = contentString.find('button.remove-marker')[0];
            google.maps.event.addDomListener(removeBtn, "click", function(event) {
                marker.setMap(null);
            });
        });
    }
});