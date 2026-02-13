# StormWatch 3D - Volumetric Tornado Tracker

**StormWatch 3D** is a real-time and historical tornado visualization tool that leverages **Three.js** and **React** to render tornadoes in a browser-based 3D environment. It features volumetric shaders for realistic storm visualization, interactive map navigation, and integration with live weather data.

🔗 **Live Demo:** [https://Shahnab.github.io/demoStormWatch](https://Shahnab.github.io/demoStormWatch)

---

## 🚀 Key Features

*   **🌍 Interactive 3D Map:** seamless navigation with zoom, pan, and tilt controls powered by Three.js and ArcGIS World Imagery tiles.
*   **🌪️ Volumetric Rendering:** Custom GLSL shaders render tornadoes with realistic lighting, density, and animation (not just simple models).
*   **📡 Live Tracking Mode:** Fetches active Tornado Warnings directly from **NOAA / NWS API** to show real-world threats in real-time.
*   **📜 Historical Archive:** Visualize famous historical events like the **2013 Moore, OK** and **2011 Joplin, MO** tornadoes with simulated paths and debris fields.
*   **🎮 Playback Controls:** Time-based simulation to watch the storm path evolution with play, pause, and scrub capabilities.
*   **🔍 Global Search:** Built-in geocoding to instantly jump to any location on Earth.

## 🛠️ Tech Stack

*   **Frontend:** React 19, TypeScript
*   **3D Graphics:** Three.js, GLSL (Custom Shaders)
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Data Sources:**
    *   NOAA/NWS API (Live Weather Alerts)
    *   ArcGIS World Imagery (Satellite Map Tiles)
    *   OpenStreetMap/Nominatim (Geocoding)

## 📦 Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shahnab/demoStormWatch.git
    cd stormwatch-3d
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:3000` (or the next available port).

## 🚢 Deployment

This project is configured for deployment via **GitHub Pages**.

To deploy a new version:
```bash
npm run deploy
```
This command builds the project and pushes the `dist` folder to the `gh-pages` branch.

## 🎮 Controls

*   **Left Click + Drag:** Rotate Camera
*   **Right Click + Drag:** Pan Map
*   **Scroll:** Zoom In/Out
*   **Bottom Controls:** Toggle Play/Pause, Replay, and adjust simulation speed.
*   **Top Left Panel:** Search for cities and switch between Live/Archive modes.

---

**Developed by Shahnab** | SkyWeave Engine v2.0
