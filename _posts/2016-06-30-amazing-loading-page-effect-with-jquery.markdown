---
published: true
title: Amazing Loading Page Effect with JQuery
layout: post
---
Pada postingan saya kali ini akan membagikan sebuah trick cara memasang animasi loading page pada halaman blog anda dalam halnya faltform blogger.
Untuk memasang animasi loading page ini tidaklah terlau sulit hanya saja diperlukan ketelitian dalam meletakan kode-kode yang akan saya bagikan dibawah ini lengkap dengan langkah-langkahnya, baiklah kita mulai saja proses langkah-langkahnya.

# Pertama 

Masuk ke dasboard blogger anda kemudian letakan kode css berikut diatas kode <kbd></head></kbd>


{% highlight css linenos%}
<style>
#cabon-loading {
position: fixed;
z-index: 50;
top: 0; 
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,.5)url(https://4.bp.blogspot.com/-M-krgaJA2G8/VgbHFN2ny1I/AAAAAAAAAIw/SkGB32BRU3g/s1600/loading5.gif)no-repeat center center;
line-height: 350px;
text-align: center;
font-size: 36px;
color: #fff;
text-indent: -9999px;
}
.CABON #cabon-loading { display: none; } 
@media only screen and (device-width: 768px) { 
#loading { position:absolute; width:1040px; min-height:768px; }
}
#cabon-progress-bar {
position: absolute;
top: 0;
left: 0;
background: #de1301;
opacity: 0.8;
width: 0;
height: 5px;
}
#cabon-loader { height: 100%; display: none; }
</style>
{% endhighlight %}

# Kedua

Letakan kode HTMl dan JQuery berikut tepat diatas kode <kbd></body></kbd>

{% highlight css linenos%}
<div id='cabon-loading'><div id='cabon-progress-bar'></div><div id='cabon-loader'></div></div> 
<script type='text/javascript'>
(function($){ $("html").removeClass("CABON"); $("#header").ready(function(){ $("#cabon-progress-bar").stop().animate({ width: "25%" },1500) }); $("#footer").ready(function(){ $("#cabon-progress-bar").stop().animate({ width: "75%" },1500) }); $(window).load(function(){ $("#cabon-progress-bar").stop().animate({ width: "100%" },600,function(){ $("#cabon-loading").fadeOut("fast",function(){ $(this).remove(); }); }); }); })(jQuery); 
</script>
{% endhighlight %}

Simpan Template anda dan lihat hasilnya, selamat mencoba.