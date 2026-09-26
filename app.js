const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 4,
    zoomSnap: 0.25
});

const bounds = [
    [0, 0],
    [1000, 1000]
];

L.imageOverlay(
    "maps/surface.webp",
    bounds
).addTo(map);

map.setView([500, 500], 0.75);

L.marker([500, 500])
    .addTo(map)
    .bindPopup("第一個測試地點");

window.addEventListener("resize", () => {
    map.invalidateSize();
});
