document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("places-map");
  if (!mapEl || !window.L) {
    return;
  }

  let places = [];
  try {
    places = JSON.parse(mapEl.dataset.places || "[]");
  } catch (err) {
    // Silently ignore malformed data to avoid breaking the page.
    return;
  }

  if (!Array.isArray(places) || places.length === 0) {
    return;
  }

  const map = L.map("places-map", {
    scrollWheelZoom: false,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const bounds = [];
  places.forEach((place) => {
    if (
      typeof place.lat !== "number" ||
      typeof place.lng !== "number" ||
      Number.isNaN(place.lat) ||
      Number.isNaN(place.lng)
    ) {
      return;
    }
    const marker = L.marker([place.lat, place.lng]).addTo(map);
    if (place.name) {
      marker.bindPopup(place.name);
    }
    bounds.push([place.lat, place.lng]);
  });

  if (bounds.length === 1) {
    map.setView(bounds[0], 6);
  } else if (bounds.length > 1) {
    map.fitBounds(bounds, { padding: [30, 30] });
  }
});
