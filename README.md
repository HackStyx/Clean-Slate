

# 🌟 CleanSlate - A Minimalist Homepage Extension for a Fresh Start

[![Build Status](https://img.shields.io/github/actions/workflow/status/HackStyx/clean-slate/build.yml?branch=main&label=build&logo=github)](https://github.com/HackStyx/clean-slate/actions) 
![Vercel Deploy](https://deploy-badge.vercel.app/vercel/clean-slate-homepage?logo=Deployment+Status&name=Deployment+Status)
[![Version](https://img.shields.io/github/package-json/v/HackStyx/clean-slate?label=version)](https://github.com/HackStyx/clean-slate/releases)
[![License: MIT](https://img.shields.io/github/license/HackStyx/clean-slate?logo=github)](LICENSE.md)
[![Contributors](https://img.shields.io/github/contributors/HackStyx/clean-slate?color=blue)](https://github.com/HackStyx/clean-slate/graphs/contributors)


Transform your browser's new tab into a personalized, motivational dashboard with **CleanSlate**, a sleek and minimalist React-based Chrome extension!

Test It Out : [CleanState](https://clean-slate-homepage.vercel.app/)
---

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

## 🚀 Deployment

### 🚧 Workflow Status

[![CI/CD](https://github.com/HackStyx/clean-slate/actions/workflows/main.yml/badge.svg)](https://github.com/HackStyx/clean-slate/actions)

**Automatic deployments** are triggered by GitHub Actions upon every push to the main branch.

---

## 🤝 Contributing

We welcome contributions! Please follow the steps outlined in our [Contributing Guide](CONTRIBUTING.md) to get started. Feel free to open issues, submit pull requests, or offer feedback.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## 📬 Contact

Made with ❤️ and ☕ by [HackStyx](https://github.com/HackStyx). If you have any questions or ideas, feel free to reach out!

---
