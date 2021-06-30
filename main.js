function onSearchSiteMasthead(evt) {
  let input = document.querySelector('.input-search input');
  goSearch(input.value)
}

if((strDest.value != null)||(strDest.length!=0))
{
  if(strURLArray.indexOf(strDest) !== -1)
    window.location.replace(strDest + "/search?q="+strInput+"#results");
  else
    alert ("Unauthorised Usage");
}
