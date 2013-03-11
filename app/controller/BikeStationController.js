Ext.define('BikeStationsApp.controller.BikeStationController', { //main controller for the app
    extend: 'Ext.app.Controller',
    init: function() { console.log("BikeStationController init():"); },
    config: {
        refs: {	//defines reference to the views			
				stationHomeView:'stationHomeView',
				stationMap: 'Map',
				stationInfoView:'stationInfoView'
        },
        control: {//defines actions to the corresponding views 
			 stationMap: {                
                maprender: "onMapRender"				
            },
			stationInfoView:{
				backButton: "OnBackTap"
			}
        }
    },
		
    // For debuging the app
    // launch: function(app) {        		
		// console.log("BikeStationController: launch(): stationHomeView = " + this.getStationHomeView());
		// console.log("BikeStationController: launch(): stationInfoView = " + this.getStationInfoView());
		// console.log("BikeStationController: launch(): stationMap = " + this.getStationMap());
    // },
	OnBackTap: function ()// handles back button action in station info view 
	{
		console.log("BikeStationController: OnBackTap()")
		Ext.Viewport.animateActiveItem(this.getStationHomeView(), this.slideRightTransition);
	},
	
	
	onMapRender: function(map, gmap, options) {// handles Callback method for maprender event
		console.log("BikeStationController: onMapMaprender() ");
		var stationMapObj = this.getStationMap();
		var stationStore = Ext.getStore('stationStore');
		console.log("BikeStationController Store:"+stationStore);
		stationStore.load(function(records, operation, success) {// handle store load event to ploat stations on map
			
				this.plotBikeStations(stationMapObj, gmap, records,true);
				this.getStationHomeView().unmask();
		}, this);			
		console.log("BikeStationController: onMapMaprender() Store Load " +stationStore.isLoaded());
	},
	
	plotBikeStations :function (stationMapObj,stationGeoMap,bikeLocationRecords){
				console.log("BikeStationController: plotBikeStations");
				
				var LOCATION_NEW_IMAGE = "resources/images/pointCu.png";
				
				bikeLocationRecords.forEach(function(bikeLocation){		
					var plotBikePosition = new google.maps.LatLng(bikeLocation.get("l"),
					bikeLocation.get("l2"));
					
					var bikeMarkerImageSize = new google.maps.Size(34, 31);
					
					var bikeMarkerImage = new google.maps.MarkerImage(LOCATION_NEW_IMAGE, null,
					null, null, bikeMarkerImageSize);
					
					var bikeMarker = new google.maps.Marker({
						position:  plotBikePosition,
						icon:bikeMarkerImage,
						map: stationGeoMap,
						draggable: false,
						animation: google.maps.Animation.DROP
					});		
					
					google.maps.event.addListener(bikeMarker, 'click', function() {
						var stationInfoViewObj = Ext.getCmp('stationInfoView');	
						Ext.Viewport.animateActiveItem(stationInfoViewObj, {type: 'slide', direction: 'left' });										
							// var infowindow = new google.maps.InfoWindow({
								// content: bikeLocation.get("n")
							// });
							// infowindow.open(stationGeoMap, bikeMarker);							
						});					
				});
		},			
	
});