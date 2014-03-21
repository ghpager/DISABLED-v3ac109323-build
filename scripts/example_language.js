

var language = getQueryVariable('language');

if (language == "de") {
	document.write ('<a href="javascript:ChangeUrl(\'de\');"><img src="../images/german.png" id="deutsch" width="30" height="21" alt="GLAGG Universalhalterung:Deutsch" title="GLAGG Universalhalterung:Deutsch" id="GLAGG Universalhalterung:Deutsch" style="padding-left:722px;padding-top:10px;"/></a>');
}
else {
	document.write ('<a href="javascript:ChangeUrl(\'de\');"><img onmouseover="xchange(\'deutsch\',\'../images/german.png\');"  onmouseout="xchange(\'deutsch\',\'../images/german_bw.png\');" src="../images/german_bw.png" id="deutsch" width="30" height="21" alt="GLAGG Universalhalterung:Deutsch" title="GLAGG Universalhalterung:Deutsch" id="GLAGG Universalhalterung:Deutsch" style="padding-left:722px;padding-top:10px;"/></a>');	
}

if (language == "en") {
	document.write ('<a href="javascript:ChangeUrl(\'en\');"><img src="../images/english.png" id="english" width="30" height="21" alt="GLAGG Universalhalterung:English" title="GLAGG Universalhalterung:English" id="GLAGG Universalhalterung:English" style="padding-left:8px;padding-top:10px;"/></a>');	
}
else {
	document.write ('<a href="javascript:ChangeUrl(\'en\');"><img onmouseover="xchange(\'english\',\'../images/english.png\');"  onmouseout="xchange(\'english\',\'../images/english_bw.png\');" src="../images/english_bw.png" id="english" width="30" height="21" alt="GLAGG Universalhalterung:English" title="GLAGG Universalhalterung:English" id="GLAGG Universalhalterung:English" style="padding-left:8px;padding-top:10px;"/></a>');	
}

if (language == "ro") {
	document.write ('<a href="javascript:ChangeUrl(\'ro\');"><img src="../images/romanian.png" id="romanian" width="30" height="21" alt="GLAGG Universalhalterung:Romanian" title="GLAGG Universalhalterung:Romanian" id="GLAGG Universalhalterung:Romanian" style="padding-left:8px;padding-top:10px;"/></a>');	
}
else {
	document.write ('<a href="javascript:ChangeUrl(\'ro\');"><img onmouseover="xchange(\'romanian\',\'../images/romanian.png\');"  onmouseout="xchange(\'romanian\',\'../images/romanian_bw.png\');" src="../images/romanian_bw.png" id="romanian" width="30" height="21" alt="GLAGG Universalhalterung:Romanian" title="GLAGG Universalhalterung:Romanian" id="GLAGG Universalhalterung:Romanian" style="padding-left:8px;padding-top:10px;"/></a>');	
}	
	

