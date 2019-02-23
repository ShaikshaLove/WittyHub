angular.module("VideoModule").service("VideoServices",function($http){
              
	    this.getVideos=function (){
	    	console.log("fetching videos")
                    return $http.get("http://localhost:8085/api/videos");
               }
});
               
             /*  this.saveProduct=function(product,file){
            	   var fd=new FormData();
            	   fd.append("image",file);
            	   for(key in product){
            		   fd.append(key,product[key]);
            	   }
            	  return $http.post("http://sa-product-ser-sandbox.mymicroapps.net/api/products",fd,{
                       transformRequest: angular.identity,
                       headers: {'Content-Type': undefined}
                   });
               }
               */
            
