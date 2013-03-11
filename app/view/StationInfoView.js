Ext.define('BikeStationsApp.view.StationInfoView', {//define Station Info View for screen 2
    extend: 'Ext.Panel',
    xtype: 'stationInfoView',
	id:'stationInfoView',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
           fullscreen: true,
            layout: 'vbox',
            padding: 30,
            style: 'background-color: #c4e1ed;',
		listeners: [
            { // event tap handler for back button
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            }
        ],
       items: [  						
				 {// top toolbar with back button
                xtype: 'toolbar',
                docked: 'top',
                itemId: 'mapToolbar',
                title: 'DogTag',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        itemId: 'backButton',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'nearButton',
                        text: 'Near Me'
                    }
                ]
            },
				{ // middle number page section
					xtype: 'container',   
					layout: 'hbox',
					height: 48,
					items: [

							{
								xtype: 'image',
								src: 'resources/images/b-28.jpg',
								flex: 1,
								height: 64,
								width: 64,
								style: 'background-color: #c4e1ed;color:#09384c;',
						},
						{
							html: 'Whitehall, Praliment Street Greater London',
							style: 'background-color: #c4e1ed;color:#09384c;font-weight: bold;',
							flex: 4
						}
					]
				},
				{// middle location info section
					xtype:'container',
					layout: 'hbox',
					height: 30,
					items: [
							{

								flex: 1,
								height: 20,
								width: 64,
								style: 'color:#09384c;',
							},
							{
								html: '1.2 mles east of current location',
								style: 'font-size: 13px;color: #a9b8bf;',
								flex: 4
							}
					]
				},
				{	//middle 2 images with colour		
					xtype:'container',
					layout:'hbox',
					pack:'center',
					height: 170,					
					items: [							
							{   	
								padding: '20 10 10 33',
								height: 150,
								width: 150,
								html: '28',
								style: 'font-size: 75px;color: #ffffff;background-color: #1583b2;border : 0px solid #1583b2;border-radius: 6px;',
								items: [				
											{
												xtype: 'image',
												src: 'resources/images/by.png',
												flex: 1,
												height: 32,
												width: 48,
												bottom: 10,
												margin: '0 0 0 53',
												style: 'background-color: #c4e1ed;color:#09384c;',
										},
									],
							},
							{
								height: 150,
								width: 15,									
							},							
							{
								padding: '20 10 10 53',
								height: 150,
								width: 150,
								html: '2',
								//padding: 20 ,
								style: 'font-size: 75px;color: #ffffff;background-color: #15b245;border : 0px solid #afafaf;border-radius: 6px;',
								items: [
										
										{
											xtype: 'image',
											src: 'resources/images/p.png',
											flex: 1,
											height: 38,
											width: 40,
											bottom: 10,
											margin: '0 0 0 53',
											style: 'background-color: #c4e1ed;color:#09384c;',
									},
								]
							}
					]
				},
				{// data publish section
					xtype:'container',
					layout: 'vbox',
					height: 50,
					items: [

							{
								html: 'Data published by TFL 3 minutes ago',
								style: 'font-size: 17px;color: #09384c;font-weight: bold;',
								flex: 1
							},
							{
								html: 'Last checked 30s ago',
								style: 'font-size: 13px;color: #a9b8bf;',
								flex: 1
							}
					]
				},
				{ //bottom toolbar
					xtype:'toolbar',
					docked: 'top',
					bottom: 0,
					
					width: 400,
					ui: 'light',
					style: 'background-color: #09384c;',
					defaults: {
						iconMask: true
					},
					items: [
						
					]
				},
				{  //bottom list
					xtype:'list',
					fullscreen: true,
					top: 350,
					height: 95,
					width: 300,
					margin:'0 0 0 50',
					style: 'border : 0px solid #1583b2;border-radius: 5px;',
					itemTpl: '{title}',
					data: [
						{ title: 'Route Planning' },
						{ title: 'Add to favourites' }

					]
			    }
			 	   
			]
	},
	 onBackButtonTap: function () {// handles back button event and fire it in controller
	 console.log("StationInfoView: OnBackTap()")
        this.fireEvent("backButton", this);
    },
});
