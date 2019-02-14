function validation()
{
  var user=document.getElementById('user').value
  var pass=document.getElementById('Password').value
  var conpass=document.getElementById('conpass').value
  var mob=document.getElementById('mobile').value
  var mail=document.getElementById('email').value
  if(user==""){
     document.getElementById('username').innerHTML=" **Please fill the username field";
     return false;
  }
  if(user.length<2||user.length>20)
  {
    document.getElementById('username').innerHTML=" **username must be between 2 and 20";
    return  false;
  }
  if(pass==""){
     document.getElementById('password').innerHTML=" **Please fill the Password field";
     return false;
  }
  if(conpass==""){
     document.getElementById('confpas').innerHTML=" **Please fill the confirm password field";
     return false;
  }
  if(pass!=conpass)
  {
    document.getElementById('confpas').innerHTML=" **Password are not matching"
    return false;
  }
  if(mob==""){
     document.getElementById('mobiles').innerHTML=" **Please fill the Mobile no. field";
     return false;
  }
  if(isNaN(mob))
  {
    document.getElementById('mobiles').innerHTML=" **user must write digit only";
  }
  if(mob.length!=10)
  {
    document.getElementById('mobiles').innerHTML=" **mobile number must be 10 digit only";
    return false;
  }
  if(mail==""){
     document.getElementById('emails').innerHTML=" **Please fill the email field";
     return false;
  }
  if(mail.indexOf('@')<=0)
  {

       document.getElementById('emails').innerHTML=" **Invalid email";
       return false;
  }
  if(mail.charAt(mail.length-4)!='.'&& mail.charAt(mail.length-3)!='.')
  {

       document.getElementById('emails').innerHTML=" **Invalid email";
       return false;
  }

}
