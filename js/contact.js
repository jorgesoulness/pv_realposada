jQuery(document).ready(function(){
    $('#timeRes').dateRangePicker({
        autoClose: false,
        format: 'YYYY-MM-DD',
        separator: ' a ',
        language: 'auto',
        startOfWeek: 'monday',// or monday
        getValue: function()
        {
            return $(this).val();
        },
        setValue: function(s)
        {
            if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
            {
                $(this).val(s);
            }
        },
    });
    
    $('#reservaForm').validate({
        
    });
    
   $('#formContact').validate({
        submitHandler: function (form){	
            $.ajax({						
                url: '/contactscript.php',
                type: 'POST',
                data: $('#formContact').serialize(),
                //dataType: 'json',									
                success:function(data){		

                    if(data=='ok'){

                    $("#resMsg").html('<h1>Mensaje enviado exitosamente</h1>').fadeOut(4000);									
                    $("#formContact").each (function(){
                        this.reset();
                    });
                    }else{

                    $("#resMsg").html(data);
                        }	
                }
            })	
        }
    }); 
});