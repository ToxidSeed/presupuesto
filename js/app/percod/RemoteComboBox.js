Ext.define('Per.RemoteComboBox',{
    extend:'Ext.form.field.ComboBox',
    constructor:function(args){

        var fields = [
            args.displayField,
            args.valueField
        ]

        var store = Ext.create('Per.JsonStore',{
            url:args.url,
            fields:fields
        });

        Ext.apply(this,{
            store:store,
            queryMode:'remote',
            displayField:args.displayField,
            valueField:args.valueField
        });
        this.callParent(arguments);
    }
});