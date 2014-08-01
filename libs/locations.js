(function(){
	var locations = [
		{
		  position: new google.maps.LatLng(38.928543, -77.037402),
		  title: "Each Peach Market, Columbia Heights",
		  content: "<a class='location-link' target='_blank' href='http://www.eachpeachmarket.com/'>Each Peach Market<h4>3068 Mt. Pleasant St NW, Washington, DC</h4></a>"
		},
		{
		  position: new google.maps.LatLng(38.952609, -77.225532),
		  title: "Nourish Market, Mclean",
		  content: "<a class='location-link' target='_blank' href='http://www.nourishmarket.com/'>Nourish Market, Mclean<h4>8100 Old Dominion Dr, Mclean, VA</h4></a>"
		},
		{
		  position: new google.maps.LatLng(38.891377, -77.185371),
		  title: "Nourish Market, Falls Church",
		  content: "<a class='location-link' target='_blank' href='http://www.nourishmarket.com/'>Nourish Market, Falls Church<h4>1053 W Broad St, Falls Church, VA</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.933628, -77.175796),
		  title: "The Organic Butcher of Mclean",
		  content: "<a class='location-link' target='_blank' href='http://www.theorganicbutcher.com/ml_home.html'>The Organic Butcher of Mclean<h4>6712 Old Dominion Dr  McLean, VA 22101</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.955930, -77.069808),
		  title: "Little Red Fox",
		  content: "<a class='location-link' target='_blank' href='http://www.littleredfoxdc.com/'>Little Red Fox<h4>5035 Connecticut Ave. NW Washington, DC 20008</h4></a>"
		},
		{
		  position: new google.maps.LatLng(38.758980, -77.160940),
		  title: "Nalls Produce",
		  content: "<a class='location-link' target='_blank' href='http://www.nallsproduce.com/'>Nalls Produce of Alexandria, VA<h4>7310 Beulah Street, Franconia, Virginia 22315</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.658985, -78.225428),
		  title: "Heritage Hallow Farms",
		  content: "<a class='location-link' target='_blank' href='http://heritagehollowfarms.net/'>Heritage Hallow at Mount Vernon Farm, VA<h4>12018B Lee Highway, Sperryville, Virginia 22740</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.857712, -77.390108),
		  title: "Mrs. Green's Natural Market",
		  content: "<a class='location-link' target='_blank' href='http://mrsgreens.com/locations/fairfax/'>Mrs. Green's Natural Market Fairfax, VA<h4>12995 Fairlakes Shopping Center Fairfax VA, 22033</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.909651, -77.034557),
		  title: "DC Meet Market",
		  content: "<a class='location-link' target='_blank' href='http://www.dcmeetmarket.com/'>DC Meet Market, DC<h4>P St NW & 15th St NW Washington, DC 20005</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.885129, -76.996334),
		  title: "Sona Creamery and Wine Bar",
		  content: "<a class='location-link' target='_blank' href='http://www.sonacreamery.com/'>Sona Creamery and Wine Bar<h4>660 Pennsylvania Ave. SE Washington, D.C. 20003</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.886299, -77.162298),
		  title: "Urban Pantry, Falls Church",
		  content: "<a class='location-link' target='_blank' href='https://www.facebook.com/LittleCityGourmet'>Urban Pantry, Falls Church<h4>2121 N Westmoreland Street, Arlington, Virginia 22213</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.899075, -77.117438),
		  title: "Lebanese Taverna Market",
		  content: "<a class='location-link' target='_blank' href='http://www.lebanesetaverna.com/market-lebanese-grocery.html'>Lebanese Taverna<h4>4400 Old Dominion Dr. Arlington, VA, 22207</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.900959, -77.049079),
		  title: "Whole Foods Foggy Bottom",
		  content: "<a class='location-link' target='_blank' href='http://www.wholefoodsmarket.com/stores/foggybottom'>Whole Foods Foggy Bottom<h4>2201 I St NW Washington, DC 20037</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.941082, -77.025509),
		  title: "Yes! Petworth",
		  content: "<a class='location-link' target='_blank' href='http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'>Yes! Petworth<h4>4100 Georgia Ave NW Washington, DC 20011</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.955135, -76.939997),
		  title: "Yes! Hyattsville",
		  content: "<a class='location-link' target='_blank' href='http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'>Yes! Hyattsville<h4>5331 Baltimore Ave Ste 101 Hyattsville, MD 20781</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.918523, -77.031597),
		  title: "Yes! U St. Corridor",
		  content: "<a class='location-link' target='_blank' href='http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'>Yes! U St. Corridor<h4>2123 14th St NW Washington, DC 20009</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.936820, -76.990317),
		  title: "Yes! Brookland",
		  content: "<a class='location-link' target='_blank' href='http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'>Yes! Brookland<h4>3809 12th St NE Washignton, DC 20017</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.883398, -76.994955),
		  title: "Yes! Capitol Hill",
		  content: "<a class='location-link' target='_blank' href='http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'>Yes! Brookland<h4>410 8th St SE Capitol Hill, DC 20003</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.935166, -77.057755),
		  title: "Yes! Cleveland Park",
		  content: "<a class='location-link' target='_blank' href='http://www.yesorganicmarket.com/retailer/store_templates/shell_id_1.asp?storeID=626D898C04BE4BDF91F7DE5E80E4133D'>Yes! Cleveland Park<h4>3425 Connecticut Ave NW	Cleveland Park, DC 20008</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.952445, -76.940896),
		  title: "Vigilante Coffee Roastery",
		  content: "<a class='location-link' target='_blank' href='http://vigilantecoffee.com/'>Vigilante Coffee Roastery<h4>4327 Gallatin St Hyattsville, MD 20781</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.866956, -76.987674),
		  title: "Nurish Food and Drink",
		  content: "<a class='location-link' target='_blank' href='http://nurishfoodanddrink.com/wordpress1/'>Nurish Food and Drink<h4>1231 Good Hope Rd SE Washington, DC 20020</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.713683, -77.796367),
		  title: "Red Truck Bakery and Market",
		  content: "<a class='location-link' target='_blank' href='http://www.redtruckbakery.com/'>Red Truck Bakery and Market<h4>122 Waterloo St Warrenton, VA 20186</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.883775, -77.172979),
		  title: "The Local Market",
		  content: "<a class='location-link' target='_blank' href='http://thelocalmarketva.com/index.html'>The Local Market<h4>246 W Broad St Falls Church, VA 22046</h4></a>"	
		},
		{
		  position: new google.maps.LatLng(38.967152, -77.555776),
		  title: "Willowsford Virginia",
		  content: "<a class='location-link' target='_blank' href='http://www.willowsford.com/home/'>Willowsford Virginia<h4>23595 Founders Drive Ashburn, VA 20148</h4></a>"	
		}
	];

	$(document).ready(function(){
		var map_canvas = $('.map-container').get(0);
		var mapOptions = {
			center: new google.maps.LatLng(38.899075, -77.117438),
			zoom: 10,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		}
		var map = new google.maps.Map(map_canvas, mapOptions);

			var infowindow = new google.maps.InfoWindow({
					maxWidth: 800
			});

		_.each(locations, function(location){
			var marker = new google.maps.Marker({
				title: location.title,
				position: location.position,
				map: map,
				icon: 'pics/location-pin.png'
			});


			google.maps.event.addListener(marker, "click", function() { 
				infowindow.close();
				infowindow.setContent(location.content);
				infowindow.open(map, marker);
			});
		});
	});
})();