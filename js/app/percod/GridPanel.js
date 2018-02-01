Ext.define('Per.GridPanel',{
    extend: 'Ext.grid.Panel',
    requires:[
        'Per.JsonStore'        
    ],
    constructor:function(args){
        var main = this;
        console.log(args);

        /*var store = new Per.JsonStore(
            url,
            fields
        );*/
        this.callParent(arguments);
    }
});