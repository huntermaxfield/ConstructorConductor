//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here

String.prototype.rev = function() {
    var newStr = ''
    for (var i = this.length - 1; i >= 0; i--) {
        newStr += this[i];
    }
    console.log(newStr);
    return newStr;
}

var testStr = 'just like you can add';
testStr.rev();