(function(){
	var locations = [
		{
		  title: "Each Peach Market, Columbia Heights",
		  address: "3068 Mt. Pleasant St NW, Washington, DC",
		  link: 'http://www.eachpeachmarket.com/'
		},
		{
		  title: "Nourish Market, Mclean",
		  address: "8100 Old Dominion Dr, Mclean, VA",
		  link: 'http://www.nourishmarket.com/'
		},
		{
		  title: "Nourish Market, Falls Church",
		  address: "1053 W Broad St, Falls Church, VA",
		  link: 'http://www.nourishmarket.com/'
		},
		{
		  title: "The Organic Butcher of Mclean",
		  address: "6712 Old Dominion Dr  McLean, VA 22101",
		  link: 'http://www.theorganicbutcher.com/ml_home.html'
		},
		{
		  title: "Little Red Fox",
		  address: "5035 Connecticut Ave. NW Washington, DC 20008",
		  link: 'http://www.littleredfoxdc.com/'
		},
		{
		  title: "Nalls Produce",
		  address: "7310 Beulah Street, Franconia, Virginia 22315",
		  link: 'http://www.nallsproduce.com/'
		},
		{
		  title: "Heritage Hallow Farms",
		  address: "12018B Lee Highway, Sperryville, Virginia 22740",
		  link: 'http://heritagehollowfarms.net/'
		},
		{
		  title: "Mrs. Green's Natural Market",
		  address: "12995 Fairlakes Shopping Center Fairfax VA, 22033",
		  link: 'http://mrsgreens.com/locations/fairfax/'
		},
		{
		  title: "DC Meet Market",
		  address: "P St NW & 15th St NW Washington, DC 20005",
		  link: 'http://www.dcmeetmarket.com/'
		},
		{
		  title: "Sona Creamery and Wine Bar",
		  address: "660 Pennsylvania Ave. SE Washington, D.C. 20003",
		  link: 'http://www.sonacreamery.com/'
		},
		{
		  title: "Urban Pantry, Falls Church",
		  address: "2121 N Westmoreland Street, Arlington, Virginia 22213",
		  link: 'https://www.facebook.com/LittleCityGourmet'
		},
		{
		  title: "Lebanese Taverna Market",
		  address: "4400 Old Dominion Dr. Arlington, VA, 22207",
		  link: 'http://www.lebanesetaverna.com/market-lebanese-grocery.html'
		},
		{
		  title: "Whole Foods Foggy Bottom",
		  address: "2201 I St NW Washington, DC 20037",
		  link: 'http://www.wholefoodsmarket.com/stores/foggybottom'
		},
		{
		  title: "Yes! Petworth",
		  address: "4100 Georgia Ave NW Washington, DC 20011",
		  link: 'http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'
		},
		{
		  title: "Yes! Hyattsville",
		  address: "5331 Baltimore Ave Ste 101 Hyattsville, MD 20781",
		  link: 'http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'
		},
		{
		  title: "Yes! U St. Corridor",
		  address: "2123 14th St NW Washington, DC 20009",
		  link: 'http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'
		},
		{
		  title: "Yes! Brookland",
		  address: "3809 12th St NE Washignton, DC 20017",
		  link: 'http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'
		},
		{
		  title: "Yes! Capitol Hill",
		  address: "410 8th St SE Capitol Hill, DC 20003",
		  link: 'http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'
		},
		{
		  title: "Yes! Cleveland Park",
		  address: "3425 Connecticut Ave NW	Cleveland Park, DC 20008",
		  link: 'http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'
		},
		{
		  title: "Vigilante Coffee Roastery",
		  address: "4327 Gallatin St Hyattsville, MD 20781",
		  link: 'http://vigilantecoffee.com/'
		},
		{
		  title: "Nurish Food and Drink",
		  address: "1231 Good Hope Rd SE Washington, DC 20020",
		  link: 'http://nurishfoodanddrink.com/wordpress1/'
		},
		{
		  title: "Red Truck Bakery and Market",
		  address: "122 Waterloo St Warrenton, VA 20186",
		  link: 'http://www.redtruckbakery.com/'
		},
		{
		  title: "The Local Market",
		  address: "246 W Broad St Falls Church, VA 22046",
		  link: 'http://thelocalmarketva.com/index.html'
		},
		{
		  title: "Willowsford Virginia",
		  address: "23595 Founders Drive Ashburn, VA 20148",
		  link: 'http://www.willowsford.com/home/'
		},
		{
		  title: "Lebanese Taverna Congressional Plaza",
		  address: "1605 Rockville Pike Congressional Plaza Rockville, MD 20852",
		  link: "http://www.lebanesetaverna.com/lebanese-cafe-congressional-plaza-rockville-maryland.html"
		},
		{
		  title: "Lebanese Taverna Town Square Plaza",
		  address: "115 A Gibbs St Rockville, MD 20850",
		  link: "http://www.lebanesetaverna.com/lebanese-cafe-rockville-town-square-plaza.html"
		},
		{
		  title: "Lebanese Taverna Silver Spring",
		  address: "933 Ellsworth Dr Silver Spring, MD 20910",
		  link: "http://www.lebanesetaverna.com/lebanese-cafe-silver-spring-md.html"
		},
		{
		  title: "Lebanese Taverna Annapolis Harbour Center",
		  address: "2478 Solomons Island Rd, Annapolis Harbour Center, Annapolis, MD 21401",
		  link: "http://www.lebanesetaverna.com/lebanese-cafe-annapolis-harbour-center.html"
		},
		{
		  title: "Takorean Yards Park",
		  address: "1212 4th St SE Washington, DC 20003",
		  link: "http://takorean.com/"
		}
	];

	$(document).ready(function(){
		var map_canvas = $('.map-container').get(0);
		var mapOptions = {
			center: new google.maps.LatLng(38.899075, -77.117438),
			zoom: 9,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		}
		var map = new google.maps.Map(map_canvas, mapOptions);
		var markerClusteredMap = new MarkerClusterer(map, [], {gridSize: 35});

		var infowindow = new google.maps.InfoWindow({
				maxWidth: 800
		});

		//Google Maps API only allows 10 requests per second
		var rateLimitSetMarkers = rateLimit(5, setMarkers);
		_.each(locations, function(location){
			rateLimitSetMarkers(map, markerClusteredMap, infowindow, location);
		});
	});

	var setMarkers = function(map, markerClusteredMap, infowindow, location){
		$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + location.address)
			.then(function (json) {
				if(!json.results[0]){
					throw new Error(json.error_message);
				}
			    var position = json.results[0].geometry.location
			    var latLong = new google.maps.LatLng(position.lat, position.lng);

			    var marker = new google.maps.Marker({
			    	title: location.title,
			    	position: latLong,
			    	icon: 'pics/location-pin.png'
			    });

			    google.maps.event.addListener(marker, "click", function() {
			    	infowindow.setContent("<a class='location-link' target='_blank' href='"
			    							+ location.link + "'>"
			    							+ location.title + "<h4>"
			    							+ location.address
			    							+ "</h4></a>");
			    	infowindow.open(map, marker);
			    });

			    markerClusteredMap.addMarker(marker);
		});
	}

	var rateLimit = function(perSecondLimit, fn) {
	    var callsInLastSecond = 0;
	    var queue = [];
	    return function limited() {
	        if(callsInLastSecond >= perSecondLimit) {
	            queue.push([this,arguments]);
	            return;
	        }

	        callsInLastSecond++;
	        setTimeout(function() {
	            callsInLastSecond--;
	            var parms;
	            if(parms = queue.shift()) {
	                limited.apply(parms[0], parms[1]);
	            }
	        }, 1010);

	        fn.apply(this, arguments);
	    };
	}
})();
