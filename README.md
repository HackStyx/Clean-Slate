

# 🌟 CleanSlate - A Minimalist Homepage Extension for a Fresh Start

[![Build Status](https://img.shields.io/github/actions/workflow/status/HackStyx/clean-slate/codeql.yml?branch=main&label=build&logo=github)](https://github.com/HackStyx/clean-slate/actions) 
![Vercel Deploy](https://deploy-badge.vercel.app/vercel/clean-slate-homepage?logo=Deployment+Status&name=Deployment+Status)
[![CodeQL](https://github.com/HackStyx/clean-slate/actions/workflows/codeql.yml/badge.svg)](https://github.com/HackStyx/clean-slate/actions)
[![Version](https://img.shields.io/github/package-json/v/HackStyx/clean-slate?label=version)](https://github.com/HackStyx/clean-slate/releases)
[![License: MPL-2.0](https://img.shields.io/github/license/HackStyx/clean-slate?logo=github)](LICENSE.md)
[![Contributors](https://img.shields.io/github/contributors/HackStyx/clean-slate?color=blue)](https://github.com/HackStyx/clean-slate/graphs/contributors)
![Platform Support](https://img.shields.io/badge/platform-Chrome%20%7C%20Edge-blue)



Transform your browser's new tab into a personalized, motivational dashboard with **CleanSlate**, a sleek and minimalist React-based Chrome extension!

Test It Out : [CleanState](https://clean-slate-homepage.vercel.app/)
---
![image](https://github.com/user-attachments/assets/e2662acc-0382-4188-b347-915dba014484)

## 🚀 Features

- 🕰️ **Real-time clock** with dynamic greetings based on time of day
- 🎨 **Randomly generated gradients** for beautiful backgrounds every time
- 💡 **Daily motivational quotes** to inspire you
- 📝 **Built-in notepad** for capturing quick thoughts
- ✅ **Simple todo list** to keep you organized and productive
- 🔍 **Quick Google search** for instant browsing
- 🖥️ **Fullscreen toggle** for distraction-free focus mode

---

## 📦 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/HackStyx/clean-slate.git
   ```
2. Navigate to the project directory:
   ```bash
   cd clean-slate
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the extension:
   ```bash
   npm run build
   ```
5. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode**
   - Click **Load unpacked** and select the `build` folder from this project

---

## 💻 Development

For development mode:

1. Run the app locally:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🧪 Testing

Run the test suite with:
   ```bash
   npm test
   ```

---

## 🏗️ Built With

- **[React](https://reactjs.org/)** - UI Library
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling framework
- **[Lucide React](https://lucide.dev/)** - Icon library

---

## 📚 Code Overview

- `App.js`: Main component (lines 1-178)
- `Notes.js`: Notepad functionality (lines 1-115)
- `TodoList.js`: Todo list component (lines 1-105)
- `FullscreenToggle.js`: Fullscreen mode toggle (lines 1-23)


---

## 🤝 Contributing

We welcome contributions! Please follow the steps outlined in our [Contributing Guide](CONTRIBUTING.md) to get started. Feel free to open issues, submit pull requests, or offer feedback.

---

## 📜 License

This project is licensed under the MPL-2.0 License. See the [LICENSE.md](LICENSE.md) file for details.

---

## 📬 Contact

Made with ❤️ and ☕ by [HackStyx](https://github.com/HackStyx). If you have any questions or ideas, feel free to reach out!

---
