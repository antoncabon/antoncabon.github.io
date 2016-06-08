---
published: true
layout: post
title: "Bootstrap Modal Animation Effects"
description: "Bagaimana cara kita menampilkan Bootstrap Modal Animation Effects pada halaman postingan blog agar terlihat menarik."
image: "/assets/img/modal.jpeg"
main-class: 'js'
tags:
- js
- tutorial
- css
- blogging
twitter_text: "Cara Menampilkan Syntax Highlighting"
introduction: "Bagaimana cara kita menampilkan Bootstrap Modal Animation Effects pada halaman postingan blog."
---

## Bootstrap Modal Animation Effects

Menampilkan Bootstrap modal animation effects pada blog atau situs anda dapat dilakukan salah satunya adalah dengan menambahkan beberapa kode css serta js berikut html nya.

## langkah pertama 

### Dengan menambahkan kode css berikut ke dalam template anda

{% highlight sh %}
@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,900);
body {
  background-color: #E0E0E0;
  font-family: 'Roboto', sans-serif
}
a[data-toggle="modal"] {
  margin: 5px;
}
.title {
  color: #757575;
  font-weight: bold;
}
.modal {
  text-align: left;
}
.modal-content {
  border: none;
  border-radius: 2px;
      box-shadow: 0 16px 28px 0 rgba(0,0,0,0.22),0 25px 55px 0 rgba(0,0,0,0.21);
}
.modal-header{
  border-bottom: 0;
  padding-top: 15px;
  padding-right: 26px;
  padding-left: 26px;
  padding-bottom: 0px;
}
.modal-title {
  font-size: 34px;
}
.modal-body{
  border-bottom: 0;
  padding-top: 5px;
  padding-right: 26px;
  padding-left: 26px;
  padding-bottom: 10px;
  font-size: 15px;
}
.modal-footer {
  border-top:0;
  padding-top: 0px;
  padding-right:26px;
  padding-bottom:26px;
  padding-left:26px;
}
.btn-default,.btn-primary {
    border: none;
    border-radius: 2px;
    display: inline-block;
    color: #424242;
    background-color: #FFF;
    text-align: center;
    height: 36px;
    line-height: 36px;
    outline: 0;
    padding: 0 2rem; 
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    letter-spacing: .5px;
    transition: .2s ease-out;
}
.btn-default:hover{
  background-color: #FFF;
  box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);
}
.btn-primary {
  color: #FFF;
  background-color: #2980B9;
}
.btn-primary:hover{
  background-color: #2980B9;
  box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);
}
footer {
  text-align: center;
  margin: 15px;
}
footer h4{
  font-size: 2.92rem;
  font-weight:100;
    margin: 1.46rem 0 1.168rem; 
}

/*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}template,[hidden]{display:none}a{background-color:transparent}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:bold}button,input,select{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{cursor:pointer}[disabled]{cursor:default}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}button:-moz-focusring,input:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type="checkbox"],[type="radio"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}
{% endhighlight %}

### Berikutnya 

#### Tambahkan kode jquery berikut ini

{% highlight sh %}
$(".modal").each(function(l){$(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");"shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)})});
{% endhighlight %}

#### Gunakan kode html berikut ini untuk memanggilnya

> **Note:** pilih salah satu saja

{% highlight sh %}
<a href="#costumModal30" role="button" class="btn btn-default" data-toggle="modal">
            bounce
        </a>
        <div id="costumModal30" class="modal" data-easein="bounce"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            War is an ugly thing
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal10" role="button" class="btn btn-default" data-toggle="modal">
            bounceIn
        </a>
        <div id="costumModal10" class="modal" data-easein="bounceIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            War is an ugly thing
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save World
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal11" role="button" class="btn btn-default" data-toggle="modal">
            bounceUpIn
        </a>
        <div id="costumModal11" class="modal" data-easein="bounceUpIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save our Soul
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal12" role="button" class="btn btn-default" data-toggle="modal">
            bounceDownIn
        </a>
        <div id="costumModal12" class="modal" data-easein="bounceDownIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            War is an ugly thing
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal13" role="button" class="btn btn-default" data-toggle="modal">
            bounceLeftIn
        </a>
        <div id="costumModal13" class="modal" data-easein="bounceLeftIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal15" role="button" class="btn btn-default" data-toggle="modal">
            bounceRightIn
        </a>
        <div id="costumModal15" class="modal" data-easein="bounceRightIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal31" role="button" class="btn btn-default" data-toggle="modal">
            flash
        </a>
        <div id="costumModal31" class="modal" data-easein="flash"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal1" role="button" data-target="#costumModal1" class="btn btn-default" data-toggle="modal">
            fadeIn
        </a>
        <div id="costumModal1" class="modal" data-easein="fadeIn" tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title" id="costumModalLabel">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal2" role="button" class="btn btn-default" data-toggle="modal">
            flipXIn
        </a>
        <div id="costumModal2" class="modal" data-easein="flipXIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal3" role="button" class="btn btn-default" data-toggle="modal">
            flipYIn
        </a>
        <div id="costumModal3" class="modal" data-easein="flipYIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                           “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal4" role="button" class="btn btn-default" data-toggle="modal">
            flipBounceXIn
        </a>
        <div id="costumModal4" class="modal" data-easein="flipBounceXIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal5" role="button" class="btn btn-default" data-toggle="modal">
            flipBounceYIn
        </a>
        <div id="costumModal5" class="modal" data-easein="flipBounceYIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal6" role="button" class="btn btn-default" data-toggle="modal">
            swoopIn
        </a>
        <div id="costumModal6" class="modal" data-easein="swoopIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal7" role="button" class="btn btn-default" data-toggle="modal">
            whirlIn
        </a>
        <div id="costumModal7" class="modal" data-easein="whirlIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal8" role="button" class="btn btn-default" data-toggle="modal">
            shrinkIn
        </a>
        <div id="costumModal8" class="modal" data-easein="shrinkIn" tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal9" role="button" class="btn btn-default" data-toggle="modal">
            expandIn
        </a>
        <div id="costumModal9" class="modal" data-easein="expandIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal16" role="button" class="btn btn-default" data-toggle="modal">
            slideUpIn
        </a>
        <div id="costumModal16" class="modal" data-easein="slideUpIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                           “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal17" role="button" class="btn btn-default" data-toggle="modal">
            slideDownIn
        </a>
        <div id="costumModal17" class="modal" data-easein="slideDownIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal18" role="button" class="btn btn-default" data-toggle="modal">
            slideLeftIn
        </a>
        <div id="costumModal18" class="modal" data-easein="slideLeftIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal14" role="button" class="btn btn-default" data-toggle="modal">
            slideRightIn
        </a>
        <div id="costumModal14" class="modal" data-easein="slideRightIn" tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal19" role="button" class="btn btn-default" data-toggle="modal">
            slideUpBigIn
        </a>
        <div id="costumModal19" class="modal" data-easein="slideUpBigIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal20" role="button" class="btn btn-default" data-toggle="modal">
            slideDownBigIn
        </a>
        <div id="costumModal20" class="modal" data-easein="slideDownBigIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                           “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal21" role="button" class="btn btn-default" data-toggle="modal">
            slideLeftBigIn
        </a>
        <div id="costumModal21" class="modal" data-easein="slideLeftBigIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal22" role="button" class="btn btn-default" data-toggle="modal">
            slideRightBigIn
        </a>
        <div id="costumModal22" class="modal" data-easein="slideRightBigIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal23" role="button" class="btn btn-default" data-toggle="modal">
            perspectiveUpIn
        </a>
        <div id="costumModal23" class="modal" data-easein="perspectiveUpIn" tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal24" role="button" class="btn btn-default" data-toggle="modal">
            perspectiveDownIn
        </a>
        <div id="costumModal24" class="modal" data-easein="perspectiveDownIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal25" role="button" class="btn btn-default" data-toggle="modal">
            perspectiveLeftIn
        </a>
        <div id="costumModal25" class="modal" data-easein="perspectiveLeftIn"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal26" role="button" class="btn btn-default" data-toggle="modal">
            perspectiveRightIn
        </a>
        <div id="costumModal26" class="modal" data-easein="perspectiveRightIn" tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal27" role="button" class="btn btn-default" data-toggle="modal">
            shake
        </a>
        <div id="costumModal27" class="modal" data-easein="shake"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal28" role="button" class="btn btn-default" data-toggle="modal">
            tada
        </a>
        <div id="costumModal28" class="modal" data-easein="tada"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                           “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal29" role="button" class="btn btn-default" data-toggle="modal">
            swing
        </a>
        <div id="costumModal29" class="modal" data-easein="swing" tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--****************-->
        <!--    C O P Y     -->
        <!--****************-->
        <a href="#costumModal32" role="button" class="btn btn-default" data-toggle="modal">
            pulse
        </a>
        <div id="costumModal32" class="modal" data-easein="pulse"  tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            ×
                        </button>
                        <h4 class="modal-title">
                            Modal Header
                        </h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            “ War is an ugly thing, but not the ugliest of things. The decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth war is much worse. The person who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself. ” — John Stuart Mill
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                            Close
                        </button>
                        <button class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> 
{% endhighlight %}

Anda bisa mendownload dan melihat demo filenya dengan lengkap disini:

[DOWNLOAD](https://codepen.io/antoncabon/full/WxQLbM/)  [DEMO](https://codepen.io/antoncabon/full/WxQLbM/)

