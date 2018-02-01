Ext.define('Per.JsonStore',{
    extend:'Ext.data.JsonStore',    
    constructor:function(args){
            
        Ext.apply(this,{
            proxy:{
                type:'ajax',
                url:args.url,
                reader:{
                    type:'json',
                    root:'results'
                }
            },
            fields:args.fields
        });
        this.callParent(arguments)
    }
});