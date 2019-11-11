window.addEventListener('DOMContentLoaded', (event) => {
    seeAlert() 
    //what()
});

const seeAlert= ()=>{
    var superdiv = document.createElement("div");
    document.body.appendChild(superdiv);
    let btn = document.querySelector("button");

    
    const huh = () =>{
        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2018-lab6/superheroes.php";
        httpRequest.onreadystatechange = getAlert;
        httpRequest.open('GET', url);
        httpRequest.send();
        function getAlert() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
             var response = httpRequest.responseText;
             superdiv.innerHTML = response;
             } else {
             alert('There was a problem with the request.');
             }
            }
            }
      }
    huh()//adds superhero list to div
    
    //btn.addEventListener("click",()=>  )
    }
    

      
