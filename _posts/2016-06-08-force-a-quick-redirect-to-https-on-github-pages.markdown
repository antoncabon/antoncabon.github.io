---
published: false
title: Force a quick redirect to HTTPS on Github Pages
layout: post
---
![Force https](/assets/img/tutorial/force-https.jpg)
Ketika anda mengakses blog atau situs yang di hosting pada github, maka tidak akan secara otomatis akan di redirect ke https walaupun github sendiri sudah men support secara penuh untuk https, maka dari itu agar blog kita dapat langsung redirect ke https anda hatur mengikut langkah-langkah yang akan saya tuliskan dibawah ini, caranya sangat sederhana bagi anda yang sudah memiliki blog di github cukup dengan mengikuti langkah berikut:

## Pertama

- Masuk ke direktori  <kbd>_includes</kbd>
- Buka dan edit halaman  <kbd>head.html</kbd>
- Masukan kode berikut 

{% highlight html %}
<link rel="canonical" href="{{ site.url }}{{ page.url }}" />
<script>
var host = "YOURDOMAIN.github.io"
if (window.location.host == host && window.location.protocol != "https:") {
  window.location.protocol = "https:"
}
</script>
{% endhighlight %}

- ganti YOURDOMAIN dengan nama domain anda sendiri
- kemudian klik Commit changes
- Selesai dan lihat hasilnya





