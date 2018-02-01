Ext.define('MyApp.Transaccion.PanelStatsContenedor',{
    extend:'Ext.panel.Panel',
    title:'Estadisticas',
    width:300,
    height:300,
    layout:{
        type:'accordion'
    },
    requires:[
        'MyApp.Transaccion.PanelGastoPorCategoria',
        'MyApp.Transaccion.PanelTendenciaGasto'
    ],
    constructor:function(){

        var main = this;
        var PanelGastoPorCategoria = new MyApp.Transaccion.PanelGastoPorCategoria();
        var PanelTendenciaGasto    = new MyApp.Transaccion.PanelTendenciaGasto();

        Ext.apply(this,{
            items:[
                PanelGastoPorCategoria,
                PanelTendenciaGasto
            ]
        })
        this.callParent(arguments);
    }
});