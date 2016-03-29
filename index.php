<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="css/styles.css" >
    <script type="text/javascript" src="js/jquery_1.11.0/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyB4l8S00eeb89-ZEOe400JRwtjX4iJSS9A&sensor=false"></script>

    <script type="text/javascript">
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
            }
        });
    </script>

</head>
<body>

<div id="google_map"></div>
<div id="menu">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
</div>

</body>
</html>