function check_info() {
    var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
	
	if (name == "") {
        alert('Proszę uzupełnij pole Imię');
        return false;
	}
	
	if (email == "") {
        alert('Proszę uzupełnij pole Email');
        return false;
    }
    
	if (subject == "") {
        alert('Proszę uzupełnij pole Temat');
        return false;
    }
    
	if (message == "") {
        alert('Proszę uzupełnij pole Treść wiadomości');
        return false;
    }
    else {
        return true;
    }
}

/*
function maxSizeSubject() {
	var max=60
	 
if ( subjesct.value.length > max )  
{  

}  
  
	
}
*/
