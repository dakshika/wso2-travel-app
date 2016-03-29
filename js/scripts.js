$(document).ready(function() {
    var mapCenter = new google.maps.LatLng(47.6145, -122.3418); //Google map Coordinates
    var map;

    map_initialize(); // load map

    function map_initialize(){

        //Google map option
        var googleMapOptions =
        {
            center: mapCenter,
            zoom: 17,
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            scaleControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("google_map"), googleMapOptions);

        google.maps.event.addListener(map, 'rightclick', function(event) {
            var marker = new google.maps.Marker({
                position: event.latLng, //map Coordinates where user right clicked
                map: map,
                draggable:true, //set marker draggable
                animation: google.maps.Animation.DROP, //bounce animation
                title:"Hello World!",
                icon: "images/location-icon-2.png" //custom pin icon
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
        });
    }
});