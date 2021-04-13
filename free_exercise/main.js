var array_of_year = [1990, 1999, 1998, 1970, 2010, 1290, 2000, 2022]

var ages = []

var date = new Date();

function store_year(array1, empty_array){
    
    //get present year
    var present_year = date.getFullYear();

    // alert(present_year);
    var len_of_array1 = array1.length - 1;
    // alert(len_of_array1)
    var num = 0;

    while ( num <= len_of_array1) {

        //calculate present age
        var age_of_person = present_year - array1[num];
        
        //check if user is 18 or not
        age_of_person >= 18 ?ages.push('true') : ages.push('false');
       
        // continue looping until len_of_array1
        num += 1;

    }
    console.log(array1);
    console.log(ages); 
    
}
store_year(array_of_year, ages);