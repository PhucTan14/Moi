//sile hinh chay
var arr_hinh=[
    "../PICTURE/1.jpg",
    "../PICTURE/2.jpg",
    "../PICTURE/3.jpg",
    "../PICTURE/4.jpg",
    "../PICTURE/5.jpg",
]
var index = 1;
function next(){
    index++;
    if(index >= arr_hinh.length) index=1;
    var hinh=document.getElementById("hinh");
    hinh.src = arr_hinh[index];
}

function prev(){
    index--;
    if(index < 0) index = arr_hinh.length - 1;
    var hinh = document.getElementById("hinh");
    hinh.src = arr_hinh[index];
}
setInterval("next()",3000);

//sile hinh thu vien anh
var arr_chuyenanh=[
    "../PICTURE/NoiDung26.jpg",
    "../PICTURE/NoiDung25.jpg",
    "../PICTURE/NoiDung22.jpg",
]
var dem = 0;
function chuyenanh(){
    dem++;
    if(dem >= arr_chuyenanh.length) dem = 0;
    var picture = document.getElementById("picture");
    picture.src = arr_chuyenanh[dem];
}
setInterval("chuyenanh()", 4800);

var arr_chuyenanh2=[
    "../PICTURE/NoiDung15.jpg",
    "../PICTURE/NoiDung23.jpg",
    "../PICTURE/NoiDung24.jpg",
]
var cnt = 0;
function chuyenanh2(){
    cnt++;
    if(cnt >= arr_chuyenanh2.length) cnt = 0;
    var img2 = document.getElementById("img2");
    img2.src = arr_chuyenanh2[cnt];
}
setInterval("chuyenanh2()", 5900);

window.onscroll = function () {
    console.info(document.documentElement.scrollTop);
    var gototop = document.getElementById("gototop");
    if(document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        gototop.style.display = "block";
    } else {
        gototop.style.display = "none";

    }
}

function goToTop() {
    var timer = setInterval(function() {
        document.documentElement.scrollTop-=15;

        if(document.documentElement.scrollTop <= 0) {
            clearInterval(timer);
        }
    }, 1);
}



/*Doc json */
function LoadCates(){
    fetch("../JSON/NoiDung2.json").then(res => res.json()).then(data => {
        let h ="";
        for(let p of data)
        h += `
    <div class="b1">
        <div class="overlay">
            <a href="${p.link}" id="${p.id}">
                <img src="${p.image}" >
                <div class="text">${p.name}</div>
                <div class="text-hover"> ${p.text}</div>
            </a>
        </div>
    </div>
        `;
        let d = document.getElementById("noidung");
        d.innerHTML = h;
    })
}
function LoadCates0(){
    fetch("../JSON/NoiDung0.json").then(res => res.json()).then(data => {
        let h0 ="";
        for(let p0 of data)
        h0 += `
        <div class="a2">
            <img src="${p0.image1}" alt="ND1">
        </div>
        <div class="a3">
            <img src="${p0.image2}" alt="ND2">
        </div>
        <div class="a1 a78">
            <h2>${p0.name}</h2>
            <p>${p0.text}</p>
            <div class="ChiTiet">
                <a href="${p0.link}">${p0.text1}</a>
            </div>                
        </div>
        `;
        let c = document.getElementById("noidung0");
        c.innerHTML = h0;
    })
}

function LoadCates1(){
    fetch("../JSON/NoiDung1.json").then(res => res.json()).then(data => {
        let h1 ="";
        for(let p1 of data)
        h1 += `
        <div class="a1">
          <h2>${p1.name}</h2>
          <p>${p1.text}</p>
          <div class="ChiTiet">
             <a href="${p1.link}">${p1.text1}</a>
          </div>                
        </div>
        <div class="a2">
            <img src="${p1.image1}" alt="ND1">
        </div>
        <div class="a3">
            <img src="${p1.image2}" alt="ND2">
        </div>
        `;
        let c = document.getElementById("noidung1");
        c.innerHTML = h1;
    })
}

function LoadCates2(){
    fetch("../JSON/NoiDung3.json").then(res => res.json()).then(data => {
        let h3 ="";
        for(let p3 of data)
        h3 += `
    <div class="c1">
        <img src="${p3.image}" alt="">
        <h4>${p3.name}</h4>
        <p>${p3.text}</p>
    </div>
        `;
        let d = document.getElementById("noidung3");
        d.innerHTML = h3;
    })
}

function LoadCates3(){
    fetch("../JSON/NoiDung4.json").then(res => res.json()).then(data => {
        let h4 ="";
        for(let p4 of data)
        h4 += `
    <div class="d1">
        <img id="${p4.id3}" src="${p4.image1}" alt="" class="${p4.id1}">
        <img id="${p4.id4}" src="${p4.image2}" alt="" class="${p4.id2}">
    </div>
        `;
        let d = document.getElementById("noidung4");
        d.innerHTML = h4;
    })
}




window.onload = function(){
    LoadCates();
    LoadCates0();
    LoadCates1();
    LoadCates2();
    LoadCates3();
    let m= document.getElementById("main");
    let d = document.querySelector(".show-nav");
    d.addEventListener("click",function(){
        m.style.right = "50%";
        m.style.left = 0;
    });

    let c = document.querySelector(".close");
    c.addEventListener("click",function(){
        m.style.right = "unset";
        m.style.left = "-100%";
    });
}


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i =0; i< reveals.length;i++)
    {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top; //thông tin kích thước 1 phần tử
        var revealpoint = 120;

        if(revealtop < windowheight - revealpoint) { //vị trí của phần tử so với viewport nhỏ hơn 120 thì thêm class active
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}




