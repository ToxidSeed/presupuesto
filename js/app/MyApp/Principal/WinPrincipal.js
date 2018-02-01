/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('MyApp.Principal.WinPrincipal',{
    extend:'Ext.panel.Panel',    
    title:'Controlate',
    //id:'idWinPrincipal',
    //UsuarioId:null,
    requires:[        
        'MyApp.Principal.TabPanelContenido'
    ],
    constructor:function(){
        
        var main = this;

         var toolbar = Ext.create('Ext.toolbar.Toolbar', {            
            items: [
                {
                    text:'Transacciones',
                    handler:function(){
                        main.addTab({
                            title:'Transacciones',
                            panel:'MyApp.Transaccion.MainTransaccion'
                        });
                    }                    
                },{
                    text:'Inversiones',
                    menu:{
                        items:[
                            {
                                text:'Fondos Mutuos',
                                handler:function(){
                                    main.addTab({
                                        title:'Fondos Mutuos',
                                        panel:'MyApp.FondoMutuo.MainFondoMutuo'
                                    });
                                }
                            },{
                                text:'Bolsa de Valores'
                            }
                        ]
                    }
                },{
                    text:'Presupuesto'
                },{
                    text:'Prestamos'
                },
                '-',
                {
                    text:'Cuentas'
                },{
                    text:'Categorias'
                },{
                    text:'Monedas'
                },{
                    text:'Configuracion'  
                },{
                    text:'Ayuda'
                }
            ]
        });

        //var mainTransaccion = Ext.create('MyApp.Transaccion.MainTransaccion');     
         main.TabPanelContenido = Ext.create('MyApp.Principal.TabPanelContenido',{
             height:600,
             border:false,
             tabPosition:'bottom'
         })   

        Ext.apply(this,{        
            tbar:toolbar,       
            width:1000,
            height:700,         
            floating:true,
            //layout:'auto',
            maximized:true,
            items:[
                //mainTransaccion
                main.TabPanelContenido
            ]
        })                        
        this.callParent(arguments);
    },
    addTab:function(object){
        var main = this;
        var panel = Ext.create(object.panel);
        main.TabPanelContenido.add(panel);
    }    
});