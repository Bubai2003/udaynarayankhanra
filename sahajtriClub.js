var ppl=document.getElementById("loadingpage1");
ppl.style.display="none";


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function nmnm(){
    var xnt=document.getElementById("rangila");
    xnt.style.display="none";
}
function myFunction() {
  if (window.pageYOffset>= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function ffg1(){
    var x=document.getElementById("line1");
x.style.width="0px";
}
function ffg2(){
    var y=document.getElementById("line1");
y.style.width="80%";
}

function ffg3(){
    var z=document.getElementById("line2");
z.style.width="0px";
}
function ffg4(){
    var zz=document.getElementById("line2");
zz.style.width="80%";
}

function ffg5(){
    var a=document.getElementById("line3");
a.style.width="0px";
}
function ffg6(){
    var b=document.getElementById("line3");
b.style.width="80%";
}

function ffg7(){
    var c=document.getElementById("line4");
c.style.width="0px";
}
function ffg8(){
    var d=document.getElementById("line4");
d.style.width="80%";
}

function ffg9(){
    var e=document.getElementById("line5");
e.style.width="0px";
}
function ffg10(){
    var f=document.getElementById("line5");
f.style.width="80%";
}

function ffg11(){
    var g=document.getElementById("line6");
g.style.width="0px";
}
function ffg12(){
    var h=document.getElementById("line6");
h.style.width="80%";
}

function ffg13(){
    var i=document.getElementById("line7");
i.style.width="0px";
}
function ffg14(){
    var j=document.getElementById("line7");
j.style.width="80%";
}

function ffg15(){
    var k=document.getElementById("line8");
k.style.width="0px";
}
function ffg16(){
    var l=document.getElementById("line8");
l.style.width="80%";
}

function ffg17(){
    var m=document.getElementById("line9");
m.style.width="0px";
}
function ffg18(){
    var n=document.getElementById("line9");
n.style.width="80%";
}

function ffg19(){
    var o=document.getElementById("line10");
o.style.width="0px";
}
function ffg20(){
    var p=document.getElementById("line10");
q.style.width="80%";
}
function ffg21(){
    var o=document.getElementById("line10");
o.style.width="0px";
}
function ffg22(){
    var p=document.getElementById("line10");
q.style.width="80%";
}
function ffg23(){
    var o=document.getElementById("line10");
o.style.width="0px";
}
function ffg24(){
    var p=document.getElementById("line10");
q.style.width="80%";
}
function op(){
    var pp=document.getElementById("check_line");
    pp.style.display="none";
    // var pp1=document.getElementById("line_out");
    // pp1.style.display="block";
    document.querySelector("#line_out").style.display = "block";
}
function op1(){
    var pp=document.getElementById("check_line");
    pp.style.display="block";
    // var pp1=document.getElementById("line_out");
    // pp1.style.display="block";
    document.querySelector("#line_out").style.display = "none";
}

// document.addEventListener('click', function handleClickOutsideBox(event) {
//     const box = document.getElementById('line_out');
  
//     if (!box.contains(event.target)) {
//       box.style.display = 'none';
//     }
//   });



const previous = document.querySelector('.button_con');
const next = document.querySelector('.button_con1');
const images = document.querySelector('.ss_part1').children;
const totalImages = images.length;
let currentIndex = 0;


// Event Listeners to previous and next buttons
previous.addEventListener('click', () => {
  previousImage()
})

next.addEventListener('click', () => {
  nextImage();
})

// setInterval(()=>{
//     nextImage();
// },2000);

// Function to go to next Image
function nextImage(){

  images[currentIndex].classList.remove('main');
    if(currentIndex == totalImages-1){
        currentIndex = 1;
    }
    else{
        currentIndex++;
    }

  images[currentIndex].classList.add('main');

}

// Function to go to previous Image
function previousImage(){

  images[currentIndex].classList.remove('main');
    if(currentIndex == 1){
        currentIndex = totalImages-1;
    }
    else{
        currentIndex--;
    }

  images[currentIndex].classList.add('main');

}

function clicking(){

    var pp1=document.getElementById("howrah");
pp1.style.opacity="1";
pp1.style.left="8%";
}
function clicking1(){

    var pp1=document.getElementById("howrah");
pp1.style.opacity="0";
pp1.style.left="-10%";
}
function foci1(){
    let text="Full Name";
    var pp4=document.getElementById("b11");
    pp4.style.color="#0BF057";
    pp4.style.top="0vh";
    pp4.style.zIndex="1";
    pp4.style.padding="1%";
    pp4.style.borderRadius="12px";
    pp4.style.backgroundColor="black";
    document.getElementById("b11").innerHTML=text;
}

function foci2(){
    let text="Guardian Name";
    var pp5=document.getElementById("b12");
    pp5.style.color="#F00A68";
    pp5.style.top="0vh";
    pp5.style.zIndex="1";
    pp5.style.padding="0.4%";
    pp5.style.borderRadius="12px";
    pp5.style.backgroundColor="black";
    document.getElementById("b12").innerHTML=text;
}
function foci3(){
    let text="Address";
    var pp5=document.getElementById("b13");
    pp5.style.color="#F00A68";
    pp5.style.top="0vh";
    pp5.style.zIndex="1";
    pp5.style.padding="0.4%";
    pp5.style.borderRadius="12px";
    pp5.style.backgroundColor="black";
    document.getElementById("b13").innerHTML=text;
}
function foci4(){
    let text="Your Contact No";
    var pp5=document.getElementById("b14");
    pp5.style.color="#F00A68";
    pp5.style.top="0vh";
    pp5.style.zIndex="1";
    pp5.style.padding="0.4%";
    pp5.style.borderRadius="12px";
    pp5.style.backgroundColor="black";
    document.getElementById("b14").innerHTML=text;
}
function foci5(){
    let text="Guardian Contact";
    var pp5=document.getElementById("b15");
    pp5.style.color="#F00A68";
    pp5.style.top="0vh";
    pp5.style.zIndex="1";
    pp5.style.padding="0.4%";
    pp5.style.borderRadius="12px";
    pp5.style.backgroundColor="black";
    document.getElementById("b15").innerHTML=text;
}
function foci6(){
    let text="Email Address";
    var pp5=document.getElementById("b16");
    pp5.style.color="#F00A68";
    pp5.style.top="0vh";
    pp5.style.zIndex="1";
    pp5.style.padding="0.4%";
    pp5.style.borderRadius="12px";
    pp5.style.backgroundColor="black";
    document.getElementById("b16").innerHTML=text;
}
function foci7(){
    let text="About";
    var pp5=document.getElementById("b17");
    pp5.style.color="#F00A68";
    pp5.style.top="0vh";
    pp5.style.zIndex="1";
    pp5.style.padding="0.4%";
    pp5.style.borderRadius="12px";
    pp5.style.backgroundColor="black";
    document.getElementById("b17").innerHTML=text;
}
function foci8(){
    let text="Age";
    var pp5=document.getElementById("b18");
    pp5.style.color="#F00A68";
    pp5.style.top="0vh";
    pp5.style.zIndex="1";
    pp5.style.padding="0.4%";
    pp5.style.borderRadius="12px";
    pp5.style.backgroundColor="black";
    document.getElementById("b18").innerHTML=text;
}
function foci9(){
    let text="Gender";
    var pp5=document.getElementById("b19");
    pp5.style.color="#F00A68";
    pp5.style.top="0vh";
    pp5.style.zIndex="1";
    pp5.style.padding="0.4%";
    pp5.style.borderRadius="12px";
    pp5.style.backgroundColor="black";
    document.getElementById("b19").innerHTML=text;
}

  
