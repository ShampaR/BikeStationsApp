Ext.define('BikeStationsApp.view.StationMap', {//define Google Map for HomeView 
    extend: 'Ext.Map',
	xtype:'Map',
	id:'mapObj',	
	config: {
	useCurrentLocation : false,	
		mapOptions : {
               // center : new google.maps.LatLng(51.52916347, -0.109970527),  //nearby San Fran
                zoom : 10,
                mapTypeId : google.maps.MapTypeId.ROADMAP,				
               // navigationControl: true,
				//autoUpdate :false,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.DEFAULT
                }
            },			
			plugins : [
				new Ext.plugin.google.Tracker({
                    trackSuspended: false,
                    allowHighAccuracy: true,
					autoUpdate:false,
					useCurrentLocation:false,
                    marker: new google.maps.Marker({
                        title: 'My Current Location',
                        icon: 'resources/images/point.png'
							})
						})					  
				],                       
			
            // listeners: [
                // {
                    // event: 'maprender',
					// fn: 'onMapMaprender'
                // }
            // ],
			
        }		
		// onMapMaprender: function(map, gmap, options) {		
			// console.log("StationMap: onMapMaprender " );
			// this.fireEvent("onMapRender", map, gmap, options);	
		// },
		
         
	});