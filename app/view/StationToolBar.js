Ext.define('BikeStationsApp.view.StationToolBar', {// Toolbar for Home View
    extend: 'Ext.Toolbar',
	xtype:'stationToolBar',
	requires:[				
				'Ext.field.Search'
	],
	config: {	
	            docked: 'top',
                ui: 'dark',
				title:'Find Bike Locations',
                defaults: {
                    iconMask: true
                },
				items: [
                    {
                        iconCls: 'locate',					
					},
					{ xtype: 'spacer' },
					{
						xtype:'button',
                        iconCls: 'list',
						float:'right'
					}
				]
			}//config

	
});