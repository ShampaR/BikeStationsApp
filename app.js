//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'BikeStationsApp': 'app'
});
//</debug>

Ext.application({
    controllers: ["BikeStationController"],
	
	name: 'BikeStationsApp',  
	
	models:['StationModel'],//declear models in the App
	
	stores:['StationStore'],//declear models in the stores   

    views: ['StationHomeView','StationInfoView','StationMap','StationToolBar'],//declear views in the App

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png',
		'list': 'resources/images/list.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

   
	 launch: function() {	
        var stationHomeView = {
            xtype: 'stationHomeView'
        };
		
		var stationInfoView = {
            xtype: 'stationInfoView'
        };  
		
	   Ext.Viewport.add([stationHomeView,stationInfoView]);//Add the two main views to the viewport
    }
});
