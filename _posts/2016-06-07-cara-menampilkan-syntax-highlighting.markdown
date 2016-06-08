---
layout: post
title: "Cara Menampilkan Syntax Highlighting"
description: "Bagaimana cara kita menampilkan syntax highlighting pada halaman postingan blog github."
main-class: 'dev'
tags:
- js
- tutorial
- css
- blogging
twitter_text: "Cara Menampilkan Syntax Highlighting"
introduction: "Bagaimana cara kita menampilkan syntax highlighting pada halaman postingan blog github."
---

# Cara Menampilkan Syntax Highlighting

Cara Menampilkan Syntax <kbd>Highlighting</kbd> pada halaman postingan blog github, sebenar secara default setiap template jekyll sudah disediakan pada template tersebut hanya saja untuk menampilkannya di halaman postingan blog kita perlu mengaturnya sedikit.

Sebagai contoh pada template yang saya gunakan sekarang ini, saya hanya perlu menambahkan kode dibawah ini, untuk template milik anda silahkan di sesuaikan dengan yang sudah disediakan atau bawaan dari template tersebut. 

```javascript
{highlight html}
letakan kode yang akan di highligh disini...
{endhighlight}
```
Sehingga tampilannya akan menjadi seperti ini:

{% highlight html %}
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
{% endhighlight %}

Bagaimana mudah bukan, selamat mencoba.
