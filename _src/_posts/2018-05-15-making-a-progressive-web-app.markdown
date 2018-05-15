---
layout: post
title: "Practical Guide to Progressive Web Apps."
date: 2018-05-15
categories:
  - Web-Design
description: Practical Guide to Progressive Web Apps.
image: https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/03/1490120495Progressive_Web_App_C-01.png
image-sm: https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/03/1490120495Progressive_Web_App_C-01.png
---

A new way to deliver amazing user experiences on the web.

That's what Google calls Progressive Web Apps, but **what are they really**?

## Practical Guide to Progressive Web Apps.

Well, it's fairly simple, Progressive Web Apps, or PWA, are typical web application (HTML, CSS, JS) that meet a number of requirements set by the web browser developers (Google, Mozilla, Apple, etc).

By meeting these requirements, when a user enters the web through their browser, they will be prompted to add the app to their homescreen. If they accept, a new app will _install_ in their menu. This app is opened in fullscreen just like any other _native_ app.

#### What PWA are not:

* PWA are **not** *native* applications. 
* PWA **don't** *install* like native applications.
* PWA run in the browser **environment** just like any other web app.

#### What PWA are:

* PWA can be used even when the device is **not connected** to the Internet.
* PWA are **fast**.
* PWA provide a better **user experience**.

I won't go into details defining PWA, Google has already done it better than anyone else could! [Check it out!](https://developers.google.com/web/progressive-web-apps/).

### Let's go directly to the practical guide:

Okay, first off, you need a typical web app to turn into a PWA. Anything will work really. But if you don't have some old proyect laying around, you can use one of mine's.

[SPA-OMDB](https://github.com/ArturoRodriguezRomero/Responsive-Single-Page-Application-OMDB) is a simple single page application made with vanilla JS, HTML and CSS. Download or fork it.

#### 1- Perform an Audit.

Audits check that your website meets some requirements. I'm using Chrome's built in Lighthouse audit system.

* Press `F12`.
* Go to Audits.
<figure>
  <img src="{{site.baseurl}}/assets/images/audit-1.PNG" alt="audit-1"/>
</figure>

* Hit `Perform an audit`. You only need to check the PWA option.

<figure>
  <img src="{{site.baseurl}}/assets/images/audit-3.PNG" alt="audit-3"/>
</figure>

Well, this is a bit embarrasing. But don't worry! We will get there, we just need to meet all the [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) requirements. 

Most of them are pretty self explanatory, here we go.

#### 2- Adding a Service Worker.

A service worker is a **client-side proxy**. Think of it like a little program that runs underneath the web application and can send or receive data.

This worker sits in a JavaScript file in your website (usually in the root folder and named sw.js).

This is the simplest possible service worker you can have:

````js
/*
Copyright 2016 Google Inc. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [];

// The install handler takes care of precaching the resources we always need.
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        );
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener("fetch", event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
````

Add this block of `<script>` right under your `<body>` tag:

````html
<script>
    if('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('/sw.js')
               .then(function() { console.log("Service Worker Registered"); });
    }
</script>

````

#### 3- Adding a Manifest.

The manifest is a file that tells the browser some information it needs to properly display the web.

The simplest way to make a manifest is with [Firebase's App Manifest Generator](https://app-manifest.firebaseapp.com/).

Fill the form with your app's information (including the logo!), download it and simply add the manifest to the `<head>` block with:
```html
<link rel="manifest" href="manifest.json">
````

If you perform a new audit, you will see that a few more requirements have been met!

#### 4- Adding a Theme Color.

Simply add this to the `<head>` block:

```html
<meta name="theme-color" content="#db5945">
```

Easily enough.

#### 5- Serving over HTTPS.

When loading external files, either JavaScript libraries or images, you must make sure all of these are served over a HTTPS connection. This can be hard if your app uses a lot of pictures, but it's the price we must do it for *progress*.

This also applies to yourself! **The browser won't prompt the user to install your app if it's not served over HTTPS.**

**You may discard this requirement when using localhost.**

If you've met all the requirement your next audit should look something like this!

<figure>
  <img src="{{site.baseurl}}/assets/images/audit-4.PNG" alt="audit-4"/>
</figure>

How progressive is that.