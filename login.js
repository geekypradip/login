function check ()
{
var a=document.getElementById("name"). value;
var check=document.getElementById("check"). checked;
var num=document.getElementById("number"). value;
var email=document.getElementById("email"). value;
//var num_check=num.length;
var n=(num.toString(). length)
var num_check=parseInt(n);
if ((a==="")||(num==="")||(email===""))
{
alert("all field are required!")
   
}
else if(isNaN(a) && (check==true))
var store=a;
else if(!isNaN(a))
{
alert("name should be a char")
}
/*else if((num_check!=10)&&(check==true))
{
alert("please enter a valid mobile number")
}*/
else if(check==false)
{
alert ("please check in the remember me")
}
/*else if(num_check!=10)
{
alert("please enter a valid mobile number")
}*/
 if (a=="")
    {
    document.getElementById("name").focus();
     
    // else if(num=="")
   //  {
     //document.getElementById("number").focus():
   //  }
    // else if(email=="")
    // {
    // document.getElementById("email").focus();
     }
if((num_check!=10)&&(check==true)&&(a!="")&&(email!=""))
{
alert("please enter a valid mobile number")
}
}