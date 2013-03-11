Ext.define('BikeStationsApp.view.StationHomeView', {    //Home main view of the app
    extend: 'Ext.Panel',
    xtype: 'stationHomeView',
	id:'stationHomeView',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
         tabBarPosition: 'top',
		 fullscreen: true,
         layout: 'fit',
		 masked: {
					   xtype: 'loadmask',
					   message: 'Loading... \nBike Stations',
					   indicator: true
				}
				,
        items: [				
			   { // bind map to home view
				xtype:'Map'
               },
			   {// bind top toolbar with search field to home view
			   xtype:'stationToolBar'
			   },{
						xtype: 'toolbar',
						docked: 'top',
						items: [
							
							{
								xtype: 'searchfield',
								width: '98%',
								placeHolder: ' Enter a place or postcode',
							}
						]
					}
        ]
    }
});
