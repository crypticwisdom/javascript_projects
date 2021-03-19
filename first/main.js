// var  t1 = new Date();

// function init(vl){
//     var t2 = new Date();
//     var t = t2.getSeconds() - t1.getSeconds();
//     if( Math.sign(t) == -1){
//         t = 60 + t;
//     }
//     alert("Took "+t+" seconds");
// return document.getElementById(vl).style.display ="None";
    
// }

var init = new Date();

// generate random color

function obj_color(){
    return document.getElementById('show').style.backgroundColor = "#" + Math.floor(Math.random(011) * 5555);
}

//generate random position

function obj_position(){
    var ars = Array(Math.floor(Math.random(0) * 100)+ "px", Math.floor(Math.random(0) * 600)+ "px", Math.floor(Math.random(0) *300)+ "px", Math.floor(Math.random(0) * 50)+ "px", Math.floor(Math.random(0) * 100)+ "px");
    document.getElementById('show').style.marginRight = ars[0] ;
    document.getElementById('show').style.marginTop = ars[1] ;
    document.getElementById('show').style.marginLeft = ars[2] ;
    document.getElementById('show').style.marginBottom = ars[3] ;
    document.getElementById('show').style.borderRadius =ars[4];
    
}

var time1 = new Date();
function app_and_disapp(){
    
    document.getElementById('show').style.display = "None";
    var time2 = new Date();
    var main_secs = time2.getSeconds() - time1.getSeconds();
    document.getElementById('time').innerHTML = main_secs == 1 ? 'Object was clicked ' + main_secs+"."+time1.getMilliseconds() + " sec." : 'Object was clicked ' + main_secs+"."+time1.getMilliseconds() + ' secs.';

    //reload new object
    
    obj_color();
    obj_position();
    document.getElementById('show').style.display = "block";
    return window.setInterval(object_display, 0102);

    


}



