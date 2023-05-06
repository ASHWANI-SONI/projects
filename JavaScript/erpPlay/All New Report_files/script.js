function getMyLoader(my_var)
{ 
  if(my_var==1) { $('#div_Loader').css("display", "block"); } else { $('#div_Loader').css("display", "none"); }
    
}

function getXMLHTTP() {
    var xmlhttp = false;
    try {
        xmlhttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e1) {
                xmlhttp = false;
            }
        }
    }
    return xmlhttp;
}

