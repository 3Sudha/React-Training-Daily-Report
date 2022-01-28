document.getElementById("b1"),addEventListener("click", myfun);
function myfun()
{
    var a=document.getElementById("t1").value;
    var b=document.getElementById("t2").value;
    var c=parseInt(a);
    var d=parseInt(b);
    var e= c+d;

    document.getElementById("p1").innerHTML="The sum of a and b is:" +e;
}