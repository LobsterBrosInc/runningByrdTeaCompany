(function(){
	var locations = [
		{
		  title: "Each Peach Market, Columbia Heights",
		  address: "3068 Mt. Pleasant St NW, Washington, DC",
		  link: 'http://www.eachpeachmarket.com/'
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
		  link: 'http://www.yesorganicmarket.com/locations/'
		},
		{
		  title: "Yes! Hyattsville",
		  address: "5331 Baltimore Ave Ste 101 Hyattsville, MD 20781",
		  link: 'http://www.yesorganicmarket.com/locations/'
		},
		{
		  title: "Yes! U St. Corridor",
		  address: "2123 14th St NW Washington, DC 20009",
		  link: 'http://www.yesorganicmarket.com/locations/'
		},
		{
		  title: "Yes! Brookland",
		  address: "3809 12th St NE Washignton, DC 20017",
		  link: 'http://www.yesorganicmarket.com/locations/'
		},
		{
		  title: "Yes! Capitol Hill",
		  address: "410 8th St SE Capitol Hill, DC 20003",
		  link: 'http://www.yesorganicmarket.com/locations/'
		},
		{
		  title: "Red Truck Bakery and Market",
		  address: "122 Waterloo St Warrenton, VA 20186",
		  link: 'http://www.redtruckbakery.com/'
		},
		{
		  title: "Takorean Yards Park",
		  address: "1212 4th St SE Washington, DC 20003",
		  link: "http://takorean.com/theyards/"
		},
		{
		  title: "Takorean Union Market",
		  address: "1309 5th St NE Washington, DC 20002",
		  link: "http://takorean.com/union-market/"
		},
		{
		  title: "Takorean Metro Center",
		  address: "National Place Food Hall F St NW, Washington, DC 20045",
		  link: "http://takorean.com/nationalplace/"
		},
		{
		  title: "Pinch Dumplings Mt. Vernon Marketplace",
		  address: "520 Park Ave Baltimore, MD 21201",
		  link: "http://pinchdumplings.com/#about"
		},
		{
		  title: "Yoga Heights",
		  address: "3506 Georgia Ave NW, Washington, DC 20010",
		  link: "http://yogaheightsdc.com/"
		},
		{
		  title: "Sudhouse",
		  address: "1340 U St NW, Washington, DC 20009",
		  link: "http://www.sudhousedc.com/"
		},
		{
		  title: "Civil Lounge",
		  address: "Chevy Chase Pavilion, 5335 Wisconsin Ave NW, Washington, DC 20015",
		  link: "http://civillounge.com/"
		},
		{
		  title: "RareSweets",
		  address: "963 Palmer Alley NW, Washington, DC 20268",
		  link: "http://www.raresweets.com/"
		},
		{
		  title: "The Italian Store Lyon Village",
		  address: "3123 Lee Hwy, Arlington, VA 22201",
		  link: "http://www.italianstore.com/"
		},
		{
		  title: "Uncommon Grounds",
		  address: "1324 Levy Center, Georgetown University, DC 20007",
		  link: "http://thecorp.org/uncommon-grounds/"
		},
		{
		  title: "Vital Vittles",
		  address: "1324 Levy Center, Georgetown University, DC 20007",
		  link: "http://thecorp.org/about/storefronts-services-2/vital-vittles/"
		},
		{
		  title: "The Hilltoss",
		  address: "1324 Levy Center, Georgetown University, DC 20007",
		  link: "http://thecorp.org/services/hilltoss/"
		},
		{
		  title: "Bump 'N Grind",
		  address: "1200 East West Highway Silver Spring, MD 20910",
		  link: "http://bumpngrind.co/"
		},
		{
			title: "McLean Pharmacy",
			address: "1392 Chain Bridge Road McLean Virginia 22101",
			link: "http://www.mcleanrx.com/"
		},
		{
		  title: "The Italian Store Westover",
		  address: "5837 Washington Blvd Arlington, Virginia 22205",
		  link: "http://www.italianstore.com/"
		},
		{
		  title: "Whole Foods Kentlands",
		  address: "316 Kentlands Blvd, Gaithersburg, MD 20878",
		  link: 'http://www.wholefoodsmarket.com/stores/kentlands'
		},
		{
		  title: "Whole Foods Ashburn",
		  address: "19800 Belmont Chase Drive Unit 160, Ashburn, VA 20147",
		  link: 'http://www.wholefoodsmarket.com/stores/ashburn'
		},
		{
		  title: "Whole Foods Fairlakes",
		  address: "4501 Market Commons Dr, Fairfax, VA 22033",
		  link: 'http://www.wholefoodsmarket.com/stores/fairlakes'
		},
		{
		  title: "Whole Foods Friendship Heights",
		  address: "4420 Willard Ave, Chevy Chase, MD 20815",
		  link: 'http://www.wholefoodsmarket.com/stores/friendshipheights'
		},
		{
		  title: "Veloce",
		  address: "1828 L St NW, Washington, DC 20036",
		  link: 'http://www.eatatveloce.com/'
		},
		{
		  title: "&pizza, Bethesda",
		  address: "7614 Old Georgetown Rd Bethesda, MD 20814",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, North Bethesda",
		  address: "11626 Old Georgetown Rd, North Bethesda, MD 20852",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Brookland",
		  address: "666 Monroe St NE, Washington DC 20017",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Dupont South",
		  address: "1215 Connecticut Ave NW Washington, DC 20036",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, E Street",
		  address: "1005 E St NW Washington, DC 20004",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Fed Hill",
		  address: "1201 South Charles St Baltimore, MD 21230",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Gaithersburg",
		  address: "258 Crown Park Ave Gaithersburg, MD 20878",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Germantown",
		  address: "19823 Century Blvd, Germantown, MD 20874",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, H Street",
		  address: "1118 H Street NE, Washington, DC 20002",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, K Street",
		  address: "1400 K St NW, Washington DC 20006",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Springfield",
		  address: "6801 Spring Mall Dr, Springfield, VA 22150",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, U Street",
		  address: "1250 U Street NW, Washington, DC 20009",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Dulles",
		  address: "Dulles International Airport",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Reagan",
		  address: "Arlington, VA 22202",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Barracks Row",
		  address: "405 8th St SE, Washington, DC 20003",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Columbia Heights",
		  address: "1375 Kenyon St NW Washington, DC 20010",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Chinatown",
		  address: "705 H St NW Washington, DC 20001",
		  link: 'http://andpizza.com/'
		},
		{
		  title: "&pizza, Walnut",
		  address: "1430 Walnut St Philadelphia, PA 19102",
		  link: 'http://andpizza.com/'
		},
		{
			title: "Lokl Gourmet",
			address: "8100 OLD DOMINION DRIVE, SUITE E, MCLEAN, VA 22102",
			link: 'http://www.eatlokl.com/'
		},
		{
			title: "Taylor Gourmet, Atlas District",
			address: "1116 H St. NE Washington DC",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, City Vista",
			address: "485 K St NW Washington DC",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, 14th Street NW",
			address: "1908 14th St NW Washington DC",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, Dupont Circle",
			address: "1200 19th St NW Washington DC",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, Penn Quarter",
			address: "624 E St NW Washington DC",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, Pennsylvania Ave",
			address: "1750 Pennsylvania Ave NW Washington DC",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, Merrifield",
			address: "2905 District Ave. #160 Fairfax, VA",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, Ballston",
			address: "4000 Wilson Blvd Arlington VA 22209",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, Reagan National Airport",
			address: "Ronald Reagan Airport Terminal B/C Arlington, VA 22202",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "Taylor Gourmet, Bethesda",
			address: "7280 Woodmont Ave Bethesda MD",
			link: "http://www.taylorgourmet.com/"
		},
		{
			title: "The Board and Brew",
			address: "8150 Baltimore Ave, College Park, MD 20740",
			link: "http://www.theboardandbrew.com/"
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
					console.log(location);
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