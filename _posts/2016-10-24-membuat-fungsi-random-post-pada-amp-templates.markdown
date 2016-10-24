---
published: true
layout: post
title: "Membuat Fungsi Random Post Pada AMP Templates"
image: 'https://2.bp.blogspot.com/-FLF_asT0aoU/V_9RhEQc0YI/AAAAAAAAIF0/qGP7NX44uSQRjuhkD7Hi1rO-jXuWbm3DQCLcB/s1600/Screenshot_2.jpg'
description: "Pada postingan saya kali ini akan membagikan sebuah trick cara memasang fungsi random post pada amp template blogger."
main-class: 'css'
tags:
- blogging
- tutorial
- Amp html
twitter_text: "Membuat Fungsi Random Post Pada AMP Templates"
introduction: "Pada postingan saya kali ini akan membagikan sebuah trick cara memasang fungsi random post pada amp template blogger."
---
Lama juga ga update artikel di blog ini, baiklah kali ini kita coba untuk membuat sebuah fungsi random post pada AMP Template, Random post pada Amp template hanya bisa kita pasang dengan menggunakan iframe, karena pada Amp template kita tidak boleh meletakan kode script external pada element html Amp templates.

Cara memasangn fungsi Random Post di blog Amp sangat simple, silakan anda salin kode dibawah ini dan letakan pada area postingan bagian paling bawah, biasanya diletakan setelah atau dibawah Tombol Sosial Share.

# Salin dan letakan kode dibawah ini pada area yang anda inginkan atau setelah amp-social-share

{% highlight html linenos%}
<amp-iframe expr:src='&quot;https://cdn.rawgit.com/amp-style/file/master/amp-rampost2.html?url=&quot; + data:blog.homepageUrl' frameborder='0' height='320' layout='responsive' resizable='resizable' sandbox='allow-scripts allow-same-origin allow-modals allow-popups' width='600'>
<div aria-label='Related Posts' overflow='' role='button' tabindex='0'>Related Posts</div>
</amp-iframe>
{% endhighlight %}

