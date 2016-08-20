var disqus_shortname="antoncabon";
var disqus_url = disqus_blogger_current_url;
var disqus_loaded = false;
    function load_disqus() {
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_item.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_index.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
    disqus_loaded = true;
    };
    window.onscroll = function(e) {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1200)) {
            //hit bottom of page
            if (disqus_loaded==false)
                load_disqus()
        }
    };

var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){
function makemeSticky(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky("HTML1");
};

!function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");

    var divs = ["disqus-box", "blogger-box", "facebook-box"];
    var visibleDivId = null;
    function toggleVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }


var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){
var pres=document.querySelectorAll("blockquote,pre,ul.emoji-list li span,.comment_body p i[rel=pre]");for(var i=0;i<pres.length;i++){pres[i].addEventListener("dblclick",function(){var e=getSelection();var t=document.createRange();t.selectNodeContents(this);e.removeAllRanges();e.addRange(t)},false)};
function convert(){var ele1 = document.getElementById("somewhere");var replaced;replaced = ele1.value;replaced = replaced.replace(/&/ig, "&amp;");replaced = replaced.replace(/</ig, "&lt;");replaced = replaced.replace(/>/ig, "&gt;");replaced = replaced.replace(/"/ig, "&quot;");replaced = replaced.replace(/&#177;/ig, "&plusmn;");replaced = replaced.replace(/&#169;/ig, "&copy;");replaced = replaced.replace(/&#174;/ig, "&reg;");replaced = replaced.replace(/ya'll/ig, "ya'll");ele1.value = replaced;};
function showhide(){var e=document.getElementById("share-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};
function toggleNavPanel(e){var n=document.getElementById(e),l=document.getElementById("tombol-pesan"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="<i class='fa fa-plus-square-o'></i>"):(n.style.display="block",l.innerHTML="<i class='fa fa-minus-square-o'></i>")};
function toggleNavPanel2(e){var n=document.getElementById(e),l=document.getElementById("parser-button"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="Show Parser Box"):(n.style.display="block",l.innerHTML="Hide Parse Box")};
function makemeSticky3(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking3",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky3";window.addEventListener("scroll",t,!1)}makemeSticky3("pesan-komentar");
};

$(".commentbtn").click(function (e) {
$(this).addClass("btncurrent").siblings().removeClass("btncurrent");
});

$('i[rel="pre"]').replaceWith(function() { return $('<pre><code>' + $(this).html() + '</code></pre>'); });

function cdClear() {
  var wtarea = document.getElementById('codes');
  wtarea.value = '';
  wtarea.focus();
  document.getElementById('cvrt').disabled = false;
}

function cdConvert() {
  var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3'),
    opt4 = document.getElementById('opt4'),
    opt5 = document.getElementById('opt5');
  cv = cv.replace(/\t/g, "    ");
  if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt4.checked) cv = cv.replace(/</g, "&lt;");
  if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
  if (cv.lastIndexOf('\n') != -1 || cv.length > 40) {
    cv = cv.replace(/^/, "<i rel=\"pre\">");
  } else {
    cv = cv.replace(/^/, "<i rel=\"code\">");
  }
  cv = cv.replace(/$/, "</i>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();
};

function toggleNavPanel5(e) {
  var n = document.getElementById(e),
    l = document.getElementById("tombol-open"),
    t = "block";
  n.style.display == t ? (n.style.display = "none", l.innerHTML = "<i class='fa fa-plus-square-o'></i>") : (n.style.display = "block", l.innerHTML = "<i class='fa fa-minus-square-o'></i>")
};

    function loadscript(filename) {
      var scr=document.createElement('script');
      scr.setAttribute("type","text/javascript");
      scr.setAttribute("src",filename);
      document.getElementsByTagName("head")[0].appendChild(scr);
    }
    var waitElm=null;
    function urltinyfyprompt_callback(response) {
      if(waitElm) waitElm.style.display="none";
      var txt="Short URL";
      if(response.title && response.title!="") txt+=' for "'+response.title+'"';
      else if(response.longurl && response.longurl!="") txt+=" for "+response.longurl;
      if(response.tinyurl && response.tinyurl!="")
        prompt(txt+":", response.tinyurl);
      else
        alert("Could not get short URL, try again later." + ((response.error && response.error != "") ? ("nError: " + response.error) : ""));
    }
    function shortenUrl(elm, long_url, service) {
      waitElm=elm.parentNode.nextSibling;
      if(waitElm) waitElm.style.display="inline";
      loadscript("http://urltinyfy.appspot.com/"+service+"?unify=1&url="+encodeURIComponent(long_url) + "&callback=urltinyfyprompt_callback");
    }

(function($){    
    var newerLink = $('a.blog-pager-newer-link'); 
    var olderLink = $('a.blog-pager-older-link'); 
    $.get(newerLink.attr('href'), function (data) { 
     newerLink.html($(data).find('.post h1.post-title').text());    
    },"html"); 
    $.get(olderLink.attr('href'), function (data2) { 
     olderLink.html($(data2).find('.post h1.post-title').text());    
    },"html"); 
})(jQuery);

function popup(o){var t=650,n=400,e=(screen.width-t)/2,i=(screen.height-n)/2,s="width="+t+", height="+n;return s+=", top="+i+", left="+e,s+=", directories=no",s+=", location=no",s+=", menubar=no",s+=", resizable=no",s+=", scrollbars=no",s+=", status=no",s+=", toolbar=no",newwin=window.open(o,"windowname5",s),window.focus&&newwin.focus(),!1};
function showShoutmix(){document.getElementById("chat_box2").style.display="block";document.getElementById("authorbox").style.display="none"};function hideShoutmix(){document.getElementById("chat_box2").style.display="none";document.getElementById("authorbox").style.display="block"}
