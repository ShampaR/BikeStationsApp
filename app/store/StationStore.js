Ext.define('BikeStationsApp.store.StationStore', {
    extend: 'Ext.data.Store',
    xtype:'stationStore',
    requires: [
        'BikeStationsApp.model.StationModel',
		'Ext.data.proxy.JsonP'
    ],    
    config: {
        //autoLoad: true,
        storeId : 'stationStore',
        model: 'BikeStationsApp.model.StationModel',
        
       proxy: {
			type: 'jsonp',
			url: 'http://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FQIerPnRAHNxOuRNfV55Z02%22%20as%20tfl%3B%20select%20*%20from%20tfl&format=json',
			reader: {
				type: 'json',
				rootProperty: 'query.results.items.s'
			}
		}//proxy,
		
    }//config
});