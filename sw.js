/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-144x144.png",
    "revision": "1f851c3b114b0e87530280ef1675c9e8"
  },
  {
    "url": "app.js",
    "revision": "68c0e522d73fc95ce2f745b330ee14e5"
  },
  {
    "url": "app.min.js",
    "revision": "a65797caaa9e526c1c374ca1bf482090"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "4bcb756df4547885b9d7146699b6e5c2"
  },
  {
    "url": "browserconfig.xml",
    "revision": "a106096cf0a83b4ab3c30e48afdfba14"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d77f492a6a6b9b5f8aaf3f9689fafeb2"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "7ad356dbe1fddb957347aee8ea21af9a"
  },
  {
    "url": "favicon.ico",
    "revision": "937407cca281374fde3d60ffb4234384"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "b93c610e939a2e591e1d5ab136720a1c"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "1025a2ebba97c69614f914c82629b8e7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "db57c8c755f3502922041ccc2f4e5762"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "6417827852ee3073aca4c58c36a320f6"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "33c4fec170050d194ea45b5b3ff2df85"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "2bb0df0cd261359bdbaa2b8ab7ec743f"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "cf4d082b5e8c558317c8a29385fcc624"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "156a81c148e2275702773de49b44cb27"
  },
  {
    "url": "index.html",
    "revision": "e664db82c5788d02f6987f71013cd0be"
  },
  {
    "url": "manifest.json",
    "revision": "752ee0606729dfefa9f53edae354b11c"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "8b56e12fd9474819015f814bde2db970"
  },
  {
    "url": "package-lock.json",
    "revision": "7152bf1e1e2e55e15a3be1b4fe6a6413"
  },
  {
    "url": "package.json",
    "revision": "a05c4557f4eabb58abece8b4c991a6f2"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "5ad30cc8bf98858607985af417b0a882"
  },
  {
    "url": "workbox-config.js",
    "revision": "8cec134d60e5cfddb0377cc867b32136"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
