
workbox.routing.registerRoute(
  '/api/phones',
  workbox.strategies.networkFirst(),
);

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'css-cache',
    plugins: [
      new workbox.broadcastUpdate.Plugin('css-cache')
    ],
  })
);

const updatesChannel = new BroadcastChannel('css-cache');
updatesChannel.addEventListener('message', async (event) => {
  const {cacheName, updatedUrl} = event.data.payload;

  // Do something with cacheName and updatedUrl.
  // For example, get the cached content and update
  // the content on the page.
  const cache = await caches.open(cacheName);
  const updatedResponse = await cache.match(updatedUrl);
  const updatedText = await updatedResponse.text();
});

workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 20,
        // Cache for a maximum of a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  /https:\/\/cdn.jsdelivr.net\/npm\/semantic-ui@2.3.1\/dist\/(.*)/,
  workbox.strategies.networkFirst(),
);

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
