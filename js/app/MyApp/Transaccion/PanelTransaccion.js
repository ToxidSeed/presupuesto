Ext.define('MyApp.Transaccion.PanelTransaccion',{
    extend:'Ext.panel.Panel',  
    title:'Registro de Ingresos / Gastos',
    initComponent:function(){

        var main = this;

        main.tbar = Ext.create('Ext.toolbar.Toolbar',{
            items:[
                {
                    text:'Guardar',
                    iconCls:'icon-disk'
                }
            ]
        });

        main.txtIdTransaccion = Ext.create('Ext.form.field.Text',{
            fieldLabel:'ID',
            value:'##',
            readOnly:true
        });

        main.dtFechaTransaccion = Ext.create('Ext.form.field.Date',{
            fieldLabel:'Fecha Transaccion',
            format:globalConfigApp.formatDate,
            value:new Date()
        });

        main.cmbTipoTransaccion = Ext.create('Ext.form.field.ComboBox',{
            fieldLabel:'Transaccion',
            value:'Gasto',
            displayField:'TipoTransaccionId',
            valueField:'TipoTransaccionDesc',
            url:'http://localhost/hola'
        });

        main.txtCuenta = Ext.create('Ext.form.field.ComboBox',{
            fieldLabel:'Cuenta/TC',
            value:'Sencillo',
            displayField:'Nombre Cuenta',
            valueField:'CuentaId',
            url:'http://localhost/cuenta',
            width:300
        });

        main.cmbCategoria = Ext.create('Ext.form.field.ComboBox',{
            fieldLabel:'Categoria',
            value:'Almuerzo',
            width:300,
            url:'http://localhost/categoria',
            displayField:'NombreCategoria',
            valueField:'CategoriaId'
        });

        main.txtMonedaCuenta = Ext.create('Ext.form.field.Text',{
            //fieldLabel:'Moneda Cuenta',
            value:'S/.',
            width:50
        });

        main.txtTipoCambio = Ext.create('Ext.form.field.Text',{
            //fieldLabel:'Tipo de Cambio'
            width:80
        });

        main.txtMonedaTransaccion = Ext.create('Ext.form.field.ComboBox',{
            //fieldLabel:'Moneda Transaccion'
            displayField:'SimboloMoneda',
            valueField:'MonedaId',
            url:'http://localhost/hola',
            value:'S/.',
            width:50
        });

        main.txtImporteTransaccion = Ext.create('Ext.form.field.Text',{
            fieldLabel:'Importe',
            width:300
        });        

        Ext.apply(this,{     
            //title:'hola',
            width:450,
            height:250,   
            border:false,      
            //floating:true,            
            //maximized:true,    
            //region:'west',                        
            bodyPadding:'5 5 5 5',
            items:[
                main.txtIdTransaccion,
                main.dtFechaTransaccion,
                main.cmbTipoTransaccion,
                {
                    layout:'column',
                     frame:false,
                     border:false,
                     bodyStyle:{
                         background:'transparent',
                         padding:'0px 0px 5px 0px'
                    },
                    items:[
                            main.txtCuenta,
                            main.txtMonedaCuenta
                    ]
                },   
                main.cmbCategoria,                            
                {
                    layout:'column',
                    frame:false,
                    border:false,
                    bodyStyle:{
                        background:'transparent',
                        padding:'0px 0px 5px 0px'
                    },
                    items:[
                        main.txtImporteTransaccion,
                        main.txtMonedaTransaccion,
                        main.txtTipoCambio                       
                    ]
                }                
            ]
        });


        this.callParent(arguments);
    }
});