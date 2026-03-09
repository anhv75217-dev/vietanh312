<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Viet Anh</title>

<style>

body{
margin:0;
padding:0;
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
}

.container{
width:90%;
max-width:420px;
margin:auto;
text-align:center;
}

.avatar{
display:block;
margin:auto;
}

.link{
display:block;
width:100%;
max-width:300px;
margin:12px auto;
}

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:monospace;
}

body{
background:black;
color:#00ff9f;
text-align:center;
overflow:hidden;
}

canvas{
position:fixed;
top:0;
left:0;
z-index:-1;
}

.container{
margin-top:80px;
padding:20px;
}

.avatar{
width:120px;
height:120px;
border-radius:50%;
border:2px solid #00ff9f;
box-shadow:0 0 25px #00ff9f;
}

h1{
margin-top:15px;
font-size:28px;
text-shadow:0 0 10px #00ff9f;
}

.bio{
opacity:0.8;
margin:10px 0 25px;
}

.link{
display:block;
width:260px;
margin:12px auto;
padding:14px;
text-decoration:none;
color:#00ff9f;
border:1px solid #00ff9f;
border-radius:10px;
transition:0.3s;
}

.link:hover{
background:#00ff9f;
color:black;
box-shadow:0 0 20px #00ff9f;
transform:scale(1.08);
}

.footer{
margin-top:30px;
font-size:12px;
opacity:0.6;
}

</style>
</head>

<body>

<canvas id="matrix"></canvas>

<div class="container">

<img class="avatar" src="https://i.postimg.cc/yxdM1DVK/4634092F-A263-4E0B-BEFB-EEAED2571632.png">

<h1>Viet Anh</h1>
<p class="bio">UY TÍN LÀM NÊN THƯƠNG HIỆU</p>

<a class="link" href="https://www.tiktok.com/@vietanh.loveyou?_r=1&_t=ZS-94WFoDQrElY">TikTok</a>
<a class="link" href="https://www.facebook.com/share/1CUuP3Dw4s/?mibextid=wwXIfr">Facebook</a>
<a class="link" href="https://zalo.me/84933121845">Zalo</a>
<a class="link" href="https://t.me/vuadpi">TeLe</a>
<div class="footer">
</div>

</div>

<script>

var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var letters = "01";
letters = letters.split("");

var fontSize = 14;
var columns = canvas.width/fontSize;

var drops = [];
for(var x = 0; x < columns; x++)
drops[x] = 1;

function draw(){

ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#0f0";
ctx.font = fontSize + "px monospace";

for(var i = 0; i < drops.length; i++){

var text = letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text, i*fontSize, drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
drops[i] = 0;

drops[i]++;

}

}

setInterval(draw,33);

</script>

</body>
</html>
