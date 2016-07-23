---
layout: post
title: "Cara Custom Domain Di Github Page"
description: "Seiring dengan mulai ramainya blogger yang menggunakan blog pada situs github.com yang menyediakan sub domian."
image: "/assets/img/tutorial/anton-custom-domain-github.jpg"
main-class: 'misc'
tags:
- tutorial
- domain
- blogging
twitter_text: "Cara Custom Domain Di Github Page"
introduction: "Seiring dengan mulai ramainya blogger yang menggunakan blog pada situs github.com yang menyediakan sub domian."
---
Seiring dengan mulai ramainya blogger yang menggunakan blog pada situs github.com yang menyediakan sub domian USERNAME.GITHUB.IO kepada para penggunanya secara gratis, tidak hanya sampai disitu kita juga bahkan bisa mengganti nama USERNAME.GITHUB.IO tersebut dengan domain milik kita sendiri seperti namaanda.com dsb.

![Cara Custom Domain Di Github Page](/assets/img/tutorial/anton-custom-domain-github.jpg)

Merubah nama domian menjadi nama domain kita sendiri bisa menjadi daya tarik sendiri bahkan dapat menunjukan ke-profesional-an seseorang dalam mengelola suatu blog, atau juga hanya merupakan blog pribadi yang namanya gampang diingat, itu semua tergantung dari apa yang menjadi tujuan utama kita dalam membuat sebuah blog atau situs web.

Untuk dapat mengganti atau mengkostum nama domain tersebut ada beberapa langkah atau prosedur yang wajid anda ikuti, berikut ini sedikit penjelasan dari saya mengenai langkah-langkah custom domain di github page.

# Pertama

1.  Pada laman Github, bukalah halaman repository yang akan dikustom domainnya
2. Setelah anda berada di laman repository tersebut, Klik menu Setting
![Langkah Pertama](/assets/img/tutorial/1.jpg)
3. Pada Custom Domain silahkan isi dengan nama domain anda dan klik Save
![Langkah Kedua](/assets/img/tutorial/2.jpg)
4. Sampai disini kita belum selesai! lanjut ke tahap kedua

NB: atau anda bisa melakukannya dengan cukup menambahkan file CNAME pada repository yang akan dikostum nama domainnya, isikan dengan nama domain anda sendiri.

# Kedua
1.  Masuk ke dasboard atau cpanel domain milik anda
2. Silahkan anda edit DNS nya dan biasanya terdapat menu Advanced DNS Zone Editor
3. Lalu Kemudian tambahkan record baru pada kolom yang disediakan
4. add record CNAME

**Contoh:**

**Name** adalah nama domain miik anda

**TTL** isi dengan 14400 (standart)

Type pilih **CNAME**

**CNAME** isi dengan domain github page milik anda, misalnya antoncabon.github.io

Selesai dan tunggu beberapa saat sampai domain anda berfungsi dengan sempurna :)

Selamat mencoba, semoga berhasil.

