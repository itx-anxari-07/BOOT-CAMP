// alert("hi world");
// // STRING,NUMBER,BOOLEAN
// a=prompt("enter your name");
// alert(a);
// document.write(a)
stdName = prompt("enter your name");
std_TotMarks = +prompt("enter your TmMarks");
std_obtMarks = +prompt("enter your obtMarks");
res = ((std_obtMarks / std_TotMarks) * 100)
document.write("dear" + stdName + "you have got" + res + "  %")