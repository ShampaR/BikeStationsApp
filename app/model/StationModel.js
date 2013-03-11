 Ext.define('BikeStationsApp.model.StationModel', {//define model for storing bike station info from JSON response
	extend: 'Ext.data.Model',
	config: {
			fields: [ 'i',  'n',  'l',  'l2', 'b', 'e', 'd'	]
		}	   
});
