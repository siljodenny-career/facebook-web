'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8c1fc8daccc5033537e4c88cdb9fc5fa",
"assets/AssetManifest.bin.json": "4bc74cd5b98b3757f841994ebf26d9ef",
"assets/AssetManifest.json": "78fe8d9b979c527dcae16394175131e6",
"assets/assets/avatars/dulquar.jpg": "dfc95617ab3d5c721dae3a8599ede64a",
"assets/assets/avatars/fahad.jpg": "72220797960b75b6af28892c9ab0150f",
"assets/assets/avatars/mamooty.jpg": "8f69768a773c4fe906f3394b2e6d54cf",
"assets/assets/avatars/mohanlal.jpg": "e068a11648dd92c4210ddb0f0394cd8a",
"assets/assets/avatars/prithviraj.jpg": "cf109d07b8ceddef1ed1c06d7c2511b2",
"assets/assets/avatars/thamanna.jpg": "6331b96672912e931f1483c03ffd5774",
"assets/assets/avatars/tovino.jpg": "1ec30b923ba3a0759c9686407b8e5406",
"assets/assets/posts/dulquerpost.jpg": "e8be46d580696504b27ecf912ba97c4d",
"assets/assets/posts/fahadpost.jpg": "659f5b824b391ebc9c36146494091711",
"assets/assets/posts/mamootypost.jpg": "bdb3dd605acdfe2f23c54e35e878d920",
"assets/assets/posts/mohanlalpost.jpg": "e7a397051ac86bb5f4238734c80e9805",
"assets/assets/posts/tamannapost.jpg": "99f557cc6519d03ef47d4b9aec2a17e4",
"assets/assets/posts/tovinopost.jpg": "ca1dfdab4d876fe3e372e4b321c9e392",
"assets/assets/story/dulquer.jpg": "8a8eddcda2f359255572db24ee468f47",
"assets/assets/story/fahad.jpg": "3dfa87ba3456c14798cdf99d09faf07e",
"assets/assets/story/mamooty.jpg": "33d7518bd6223a4675190e6a18ff7bca",
"assets/assets/story/mohanlal.jpg": "7de60edf643f7087f1b57db13abcca4f",
"assets/assets/story/tamanna.jpg": "2d850071fb8ac33bb9c832905f3e6486",
"assets/assets/story/tovino.jpg": "8fdc84821e54dd4f2c44a1a53297db8f",
"assets/assets/suggestions/asifAli.jpg": "21698156cd13558ec6c4e8be350849df",
"assets/assets/suggestions/deepikaPadukone.jpg": "0501a8573af67fdea032e2a8b0b06e73",
"assets/assets/suggestions/mukeshAmbani.jpg": "a797950b0ad6e446771de973c4e5ff4d",
"assets/assets/suggestions/nayantara.jpg": "21b41a9383728e209753c39eee5864cf",
"assets/assets/suggestions/nazriya.jpg": "a2aeef8be40584d548300db6aa86ccda",
"assets/assets/suggestions/nivinPauly.jpg": "4608ab7b3345f8a8d22694f05f8a2d7b",
"assets/assets/suggestions/poornima.jpg": "5471c5e24a009f25e3e091a339c25fa5",
"assets/assets/suggestions/ranbirKapoor.jpg": "b316d03755c6134c91656da0c8b2ffd9",
"assets/assets/suggestions/royalDrive.jpg": "197603bbfbf674ec5ac16048833fafa5",
"assets/assets/suggestions/strell.jpg": "933252822dbffb3ef48f2469d41012bd",
"assets/assets/suggestions/sujithBakthan.jpg": "c8300120318193a3101775c142f9246d",
"assets/assets/suggestions/vidyasagar.jpg": "09edec6f60664fbb3ed5f3d1815c9401",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "46c191da723b83758bae9a553969d655",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ff6da4ce8e8508d4c0a8040a5a4a3188",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8117cb049133df44dd8f838f74697140",
"/": "8117cb049133df44dd8f838f74697140",
"main.dart.js": "64fd8870cff06ce1f13854673639998b",
"manifest.json": "a120b5cc8e6b97e7d0ce361669196a2e",
"version.json": "386c283938adfd7c5ab6f79282e651f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
