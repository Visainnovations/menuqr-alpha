# 📱 MenuQR - Digital Restaurant Menu (Alpha)
#### Visainnovations - Visagan S

![Status](https://img.shields.io/badge/status-alpha-orange)

A modern, fast, and framework-free digital QR menu system designed for restaurants. This project provides a pixel-perfect, interactive menu experience for customers directly in their mobile browser, with no app installation required.

This alpha release is a fully functional front-end demonstration using mock data for "Hotel Srinivas" in Madurai.

## ✨ Features

* **Bilingual Support:** Instantly switch between English (EN) and Tamil (த) for all menu items, categories, and UI text.
* **Dynamic Time Slots:** The menu automatically defaults to the "Morning" or "Evening" menu based on the current time and displays a clear "Open" or "Closed" status.
* **Live Filtering & Search:**
    * Filter the entire menu by **Veg**, **Non-Veg**, or **All**.
    * Instantly search for dishes by name or description.
* **Light & Dark Mode:** A sleek theme toggle for comfortable viewing in any lighting condition. 
* **Interactive Modals:** Click any menu item to open a detailed view with:
    * Larger image and special badges (Chef's Special, Today's Special).
    * Full description, ingredients, and allergy warnings.
    * Visual spice level indicator.
    * Detailed nutrition facts (Calories, Protein, Carbs, Fat).
* **Ad Carousel:** A rotating banner for showcasing restaurant specials or advertisements.
* **Mobile-First Design:** Fully responsive and optimized for a seamless experience on mobile devices.
* **Zero Dependencies:** Built with vanilla HTML, CSS, and JavaScript. No frameworks, no libraries, no build steps required.

## 🛠️ Tech Stack

* **HTML5:** For the core structure and content.
* **CSS3:** For all styling, layouts (Flexbox/Grid), and dark mode theming.
* **Vanilla JavaScript (ES6+):** For all interactivity, state management, filtering, and dynamic HTML rendering.

## 📁 File Structure

To run this project, your files must be organized in the following structure:

```

.
├── index.html         \# The main HTML file
├── style.css          \# All styles
├── script.js          \# All application logic and data
└── images/            \# Folder for all image assets
├── ads/
└── food/

````

## 🚀 How to Run Locally

Since browsers have security restrictions on opening local files, you need a simple local server to view the project.

1.  **Navigate to the Project Folder:** Open your terminal or command prompt and use the `cd` command to go into your project directory.
    ```bash
    cd path/to/your-project-folder
    ```
2.  **Start a Server (Python required):** Run the following command. Most systems have Python pre-installed.
    ```bash
    python -m http.server
    ```
3.  **View in Browser:** Open your web browser and go to `http://localhost:8000`.

## 🚧 Alpha Status: Known Issues & Future Plans

This is an early alpha release. The core functionality is in place, but there is much more to come.

**Future Plans:**
* [ ] **Backend Integration:** Connect the menu to a real database and a CMS for easy updates by restaurant staff.
* [ ] **Ordering System:** Add a cart and "place order" functionality.
* [ ] **Admin Panel:** A dashboard for restaurant owners to edit menu items, prices, and images.
* [ ] **QR Code Generation:** An in-app tool to generate the QR code for the menu.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
_Created with ❤️ for a modern dining experience._