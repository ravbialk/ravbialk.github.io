window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
ajax("GET","https://jsonplaceholder.typicode.com/users", wrzucDaneDoHtml) 
}
};
    function wrzucDaneDoHtml(dane){
    for(var i=0; i<dane.length; i ++){
    var pUserId = document.createElement('p');
    var pUserName = document.createElement('p');
    var pUserUrl = document.createElement('p');
    
    var pUserIdContent = document.createTextNode("userId:"+dane[i].id);
    var pUserNameContent = document.createTextNode("userName:"+dane[i].name);
    var pUserUrlContent = document.createTextNode("userUrl:"+dane[i].website);

    pUserId.appendChild(pUserIdContent);
    pUserName.appendChild(pUserNameContent);
    pUserUrl.appendChild(pUserUrlContent);
    
    document.body.appendChild(pUserId);
    document.body.appendChild(pUserName);
    document.body.appendChild(pUserUrl);

}
    }
    
    
    function ajax (method, url, callback){
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open(method, url);
    
var button = document.getElementById('button');



httpRequest.onreadystatechange = function (){
        if(httpRequest.readyState == 4){
            if(httpRequest.status == 200){
                var returnData = httpRequest.responseText;
                returnData.userId
                var jsonObj = JSON.parse(returnData);
                jsonObj.userId
                callback(jsonObj);
                
                
                httpReqest = null; 
            }
            
            }
        }        
    
  
    httpRequest.send();
}