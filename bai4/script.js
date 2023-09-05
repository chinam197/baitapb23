Array.prototype.filter2 = function(callback){
    var output = [];
    for(let index in this){
        if(this.hasOwnProperty(index)){
           var result = callback(this[index],index,this);
           if(result){
            output.push(this[index]);
           }
        }
    }
    return output;
}

var arr = [1,2,3,4,5,'haha'];
var newArr = arr.filter2(function(course,index,arr){
return course > 3;
});
console.log(newArr);