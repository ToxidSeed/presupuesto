Ext.define('MyApp.Principal.TabPanelContenido',{
    extend:'Ext.tab.Panel',
    id:'IDPanelCentral',
    frame:true,
    //region:'center',
    //split:true           
    constructor:function(){
        var main = this;
        
        this.callParent(arguments);
    }
});