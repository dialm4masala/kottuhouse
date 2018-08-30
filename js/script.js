/* javascript animation thumbs up

input box for review, like a blog */

/*function if its empty write an error message, else alert thank you subscribed*/
/*string check, variable*/

$(".btn").click(function(){
    
    
    if (document.getElementById('exampleInputEmail1').value == '') {
  alert('Please enter your email');
  return false;  // stop submission until textbox is not ''
  }
    else{
        alert("Thank you! You are subscribed");
    }
  
});

/*function check(){
    var x =
    document.getelementbyid("emadd").value;
    if (x = str.includes("@")){
        
    }
    else{
        
    }
}*/
