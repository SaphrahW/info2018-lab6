window.addEventListener('DOMContentLoaded', (event) => {
    console.log("lol");
    seeAlert() 
});

const seeAlert= ()=>{
    let btn = document.querySelector("button");
    btn.addEventListener("click",()=>  {
        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2018-lab6/superheroes.php";
        httpRequest.onreadystatechange = getAlert;
        httpRequest.open('GET', url);
        httpRequest.send();
        
        function getAlert() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
             var response = httpRequest.responseText;
             alert(response);
             } else {
             alert('There was a problem with the request.');
             }
            }
            }
      })

}

