var root=document.getElementById('main');

var div1=document.createElement('div');
div1.classlist.add("sub")
root.appendChild(div1);

var image=document.createElementById('img');
image.src="download.png";
image.alt="profile";
image.classlist.add('img');
div1.appendChild(image);

var heading=document.createElement('h2');//creating the heading tag
 heading.textcontent="Kameswari";
div1.appendChild(heading);

var para=document.createElement('p');
para.textcontent="Student";
div1.classlist.add("p")
div1.appendChild(para)

var para1=document.createElement('p');
para1.textcontent="Adikavi Nannaya University";
div1.classlist.add("p")
div1.appendChild(para1)
	
var para2=document.createElement('p');
para2.textcontent="8142457408";
div1.classlist.add("sub")
div1.appendChild(para2)

var para3=document.createElement('p');
para3.textcontent="kameswaribevara7@gmail.com";
div1.classlist.add("p")
div1.appendChild(para3)

var anc = document.createElement('p');
anc.href = "resume.html"
anc.textcontent = "view profile"
div1.classlist.add("a")
div1.appendChild(a)
	