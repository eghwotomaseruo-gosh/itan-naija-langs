// Lingua Naija Service Worker for offline support and local 24-hour reminders

const CACHE_NAME = "lingua-naija-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn("Pre-caching assets skipped during dev:", err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Handle notification click: Open or focus Lingua Naija app window
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || "/";

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) {
          if (client.url.includes(self.location.origin)) {
            client.postMessage({ type: "NOTIFICATION_CLICKED", data: event.notification.data });
            return client.focus();
          }
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(urlToOpen);
      }
    })
  );
});

// Listen for messages from frontend to show local notifications
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SCHEDULE_OR_SHOW_NOTIFICATION") {
    const { title, options } = event.data;
    self.registration.showNotification(title || "Lingua Naija Reminder", {
      body: options?.body || "Time for your daily language lesson! Don't let your streak slip away.",
      icon: options?.icon || "/favicon.ico",
      badge: options?.badge || "/favicon.ico",
      tag: options?.tag || "lingua-24h-reminder",
      renotify: true,
      data: options?.data || { url: "/" },
      vibrate: [200, 100, 200]
    });
  }
});
