/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('MyApp.Transaccion.MainTransaccion',{
    extend:'Ext.panel.Panel',  
    title:'Transacciones',
    requires:[
        'MyApp.Transaccion.PanelTransaccion',
        'MyApp.Transaccion.GridTransacciones',
        'MyApp.Transaccion.PanelStatsContenedor'
    ],
    initComponent:function(){        
        var main = this;


        var panelTransaccion  = Ext.create('MyApp.Transaccion.PanelTransaccion',{
            region:'north'
        });
        var gridTransacciones = Ext.create('MyApp.Transaccion.GridTransacciones',{
            region:'south'
        });

        

        var panelWestLayout   = Ext.create('Ext.panel.Panel',{
            width:750,
            height:875,     
            region:'west',
            layout:'border',
            items:[                
                panelTransaccion,
                gridTransacciones
            ]
        })

        var PanelStatsContenedor = Ext.create('MyApp.Transaccion.PanelStatsContenedor',{
            height:500, 
            region:'center'            
        }) ;


        Ext.apply(this,{      
            //tbar:toolbar,      
            border:false,   
            width:1500,
            height:500,         
            //floating:true,
            layout:'border',
            //maximized:true,
            items:[
                panelWestLayout,
                PanelStatsContenedor    
            ]
        })        
        
        this.callParent(arguments);
    }    
});