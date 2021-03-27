document.getElementById('log_out').style.display = "none";

function check(data){
    return typeof data == "string" ? true : false;
}

function validate(data, error, msg){
    if( data == "" || data == " "){
        return document.getElementById(error).innerHTML = msg;
    }else{
        if(check(data) == true){
            return data
        }
    }
}
function check_user(){

}
function submit(){

    users = Array(
        ['wisdom', 'password'],
        ['precious', 'ogar'],
        ['admin', 'admin']
    )

    var firstname = document.getElementById('firstname').value;
    var password = document.getElementById('password').value;

    var new_firstname = validate(firstname, 'firstname_error', 'Enter firstname please');
    var new_password = validate(password, 'password_error', 'Enter password please');

    array_length = users.length;
    init = 0;
    while(init <= array_length-1 ){
        
        var inner_array = users[init];

            if( inner_array[0] == new_firstname && inner_array[1] == new_password){
                document.getElementById('firstname').style.display = 'none';
                document.getElementById('password').style.display = 'none';
                document.getElementById('submit').style.display = 'none';
                document.getElementById('log_out').style.display = "block";
                document.getElementById('logged_in').innerHTML = "Welcome back " + new_firstname;
                break;
            }else{
                document.getElementById('logged_in').innerHTML = " back " + new_firstname;
                init++;

            }
            
        
        
    }
    

    

}