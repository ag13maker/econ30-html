// Inequality comparison chart (placeholder values)
const chartContext = document.getElementById("inequalityChart");
new Chart(chartContext, {
  type: "bar",
  data: {
    labels: ["Wages", "Housing", "Healthcare", "Mobility", "Bargaining Power"],
    datasets: [
      {
        label: "Colonial period",
        data: [2, 3, 2, 1, 1],
        backgroundColor: "rgba(90, 60, 35, 0.75)"
      },
      {
        label: "Present day",
        data: [4, 5, 4, 3, 3],
        backgroundColor: "rgba(47, 107, 63, 0.75)"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        title: { display: true, text: "Relative condition score (0-10)" }
      }
    }
  }
});

// Interactive map centered on Assam
const map = L.map("map").setView([26.2, 92.9], 7);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const teaJourneyPoints = [
  {
    coords: [26.75, 94.2],
    title: "Plantation Cluster (Upper Assam)",
    text: "Tea leaf plucking and plantation labor conditions begin here."
  },
  {
    coords: [26.18, 91.74],
    title: "Processing and Distribution Hub (Guwahati)",
    text: "Leaves are processed, graded, and moved into auction and trade channels."
  },
  {
    coords: [22.57, 88.36],
    title: "Auction and Export Link (Kolkata)",
    text: "Historical and modern trade networks connect Assam tea to global markets."
  },
  {
    coords: [51.51, -0.13],
    title: "Consumption Endpoint (London)",
    text: "Assam tea enters branded blends consumed worldwide, often detached from labor origins."
  }
];

teaJourneyPoints.forEach((point) => {
  L.marker(point.coords)
    .addTo(map)
    .bindPopup("<strong>" + point.title + "</strong><br>" + point.text);
});
