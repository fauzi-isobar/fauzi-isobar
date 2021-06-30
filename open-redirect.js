var features = "status=no, toolbar=no, menubar=no, location=no, top=20, left=175, height=500, width=750";

var baseURL = "https://www.abcd.com.sg";

var strURL = baseURL + "?machineName=" + strMachine + "&template=snoop" +"&context=DEBUG&date=" + strDate.replace(regExp, "");

var validateStrURL =  new RegExp("/^[.\\p{Alnum}\\p{Space}]{0,1024}+/", "g");
if(validateStrURL.test(strURL))
{
  if((strURL != null)&&(strURL.length !=0)&&(strURL.length <= 200) )
  {
    window.open(strURL,"_blank",features);
  }
}
