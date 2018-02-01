Ext.define('MyApp.FondoMutuo.MainFondoMutuo',{
    extend:'Ext.panel.Panel',
    title:'Suscripciones',
    constructor:function(){

        var main = this;

        main.tbar = Ext.create('Ext.toolbar.Toolbar',{
            items:[
                {
                    text:'Guardar',
                    iconCls:'icon-disk'
                }
            ]
        });

        main.txtIdSuscripcion = Ext.create('Ext.form.field.Text',{
            fieldLabel:'ID',
            value:'##',
            readOnly:true
        });

        main.cmbMonedaFondoMutuo = Ext.create('Ext.form.field.ComboBox',{
            fieldLabel:''
        });

        main.cmbFondoMutuo = Ext.create('Ext.form.field.ComboBox',{
            fieldLabel:'Fondo Mutuo',
            value:'BBVA Continental Soles',
            displayField:'FondoMutuoNombre',
            valueField:'FondoMutuoId',
            url:'http://localhost/fondo'
        });

        main.txtImporteSuscripcion = Ext.create('Ext.form.field.Text',{
            fieldLabel:'Importe',            
        });
        
        Ext.apply(this,{
            width:450,
            height:250,
            items:[
                
            ]
        });

        this.callParent(arguments);
    }
});