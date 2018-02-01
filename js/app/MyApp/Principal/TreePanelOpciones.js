Ext.define('MyApp.Principal.TreePanelOpciones',{
    extend:'Ext.tree.Panel',
    title:'Opcionesx',
    region:'west',
    split:true,
    rootVisible:false,
    collapsible:true,  
    width:300,  
    height:300,    
    initComponent:function(){
        var main = this;

        var store = Ext.create('Ext.data.TreeStore',{
            root:{
                expanded:true,
                children:[
                    {
                        text:'Ingresos',leaf:true
                    },{
                        text:'Gastos',leaf:true
                    }
                ]
            }
        });
        
        Ext.apply(this,{               
            store:store
        })
                        
        this.callParent(arguments);
    }
});