
function isPalindrome(){
    let inputEle = document.getElementById("inputID").value;
    let outputEle = document.getElementById("answer-text");
    outputEle.textContent = "";
    for(i = 0; i < inputEle.length; i++){
        if (inputEle[i] !== inputEle[inputEle.length - i - 1]){
            outputEle.textContent = "Not a Palindrome";
            return;
        }
    }
    outputEle.textContent = "is a Palindrome";
    return;
}