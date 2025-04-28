# FamousDeck

> **Build Your Legendary Deck!**
> Build your own card games featuring the world\'s most famous people, places, and legends – then share and play them with anyone, anytime.

---

## 🎯 Project Background

Modern gaming is often split between complex, time-consuming experiences and ultra-light casual games that offer little creativity.

**EpicShuffle** was born from the idea of combining the **fun of quick casual play** with the **power of creativity and customization**.

We envisioned a platform where **players become the creators**: building unique card decks with **famous real-world characters, landmarks, or even fictional legends**, defining their **own play rules**, and instantly jumping into short, exciting games – solo, with friends, or with the world.

**Key Inspirations:**
- Traditional card battle games (Top Trumps, Pokemon TCG)
- AI-enhanced creativity tools
- Quick casual mobile gaming (fragment-time entertainment)
- User-generated content (Minecraft, Roblox, etc.)

---

## ✨ Project Goals

EpicShuffle aims to be:

- **🎴 A fully customizable card game engine**
- **⚡ Quick-play focused:** designed for games you can start and finish in a few minutes
- **🛠️ Creative:** empower users to invent cards and invent rules
- **🌍 Community-driven:** players can share, discover, and remix each other\'s games
- **📱 Mobile-friendly:** fully responsive web application
- **🤖 AI-powered:** use APIs and AI to generate cards\' descriptions, stats, and even suggestions for new rules

Ultimately, **EpicShuffle** is about bringing **fast creativity** into the hands of everyday players, across the globe.

---

## 🏗️ System Architecture

- **Frontend:** Angular 17 (TypeScript, RxJS)
- **Backend:** NestJS (Node.js, TypeScript)
- **Communication:** REST API + WebSocket (real-time multiplayer)
- **Database:** Lightweight storage (SQLite / MongoDB initially)
- **External Services:**
  - Wikipedia API (entity info)
  - OpenAI API (card descriptions / ideas)
  - Image APIs (optional, for card illustrations)
- **Hosting:** Open for self-hosting or future cloud hosting (AWS / Vercel / Render)

---

## 🎮 Core Features

- **Card Creator:**
  - Create cards from famous people, places, or fictional characters
  - Auto-generate descriptions, stats, and images via AI and APIs

- **Game Rule Builder:**
  - Define custom rulesets (simple or complex)
  - Predefined templates for easy starting points

- **Real-Time Gameplay:**
  - Turn-based multiplayer games with quick setup
  - WebSocket-based real-time updates

- **Game Sharing Platform:**
  - Share your games with friends or the public
  - Browse, discover, and join games created by others

- **Mobile-first Design:**
  - Responsive layout for phones, tablets, desktops

---

## 🧩 How It Works (Basic Flow)

1. **Create a Game:**
    - Name your game, choose a theme
    - Add cards manually or auto-generate them
    - Define rules (or use defaults)
    - Save and publish

2. **Play a Game:**
    - Browse existing games or invite friends
    - Join a game session
    - Play in fast-paced, turn-based matches

3. **Share & Remix:**
    - Share your games with a link
    - Remix others\' games by copying and editing

---

## 🚀 Getting Started (Dev Setup)

1. **Clone the Repo**
```bash
git clone https://github.com/your-org/epicshuffle.git
cd epicshuffle
```

2. **Install Dependencies**
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. **Run Development Servers**
```bash
# Frontend (Angular)
cd frontend
npm start

# Backend (NestJS)
cd ../backend
npm run start:dev
```

4. **Environment Variables**
- Create `.env` files in both frontend and backend directories.
- (e.g., API keys for Wikipedia / OpenAI)

---

## 🤝 Contributing

We love contributions! 🎉

Ways to help:
- Bug fixes, feature development
- Improving UI/UX
- Enhancing AI integrations
- Creating card templates or rule templates

> **See [CONTRIBUTING.md](CONTRIBUTING.md) for details.**

---

## 📚 Documentation

- [Game Engine Specification](docs/game-engine.md)
- [Card and Rule Schema](docs/card-rule-schema.md)
- [API Documentation](docs/api.md)
- [Content Generation Flow](docs/content-generation.md)

(Coming soon!)

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 💬 Stay Connected

- GitHub Discussions (coming soon)
- Twitter / X: [@EpicShuffleGame](https://twitter.com/EpicShuffleGame)
- Discord: (planned)

---

## 🙌 Special Thanks

This project was inspired by the joy of quick, creative play — and powered by the incredible possibilities of open-source, AI, and community-driven creation.

Let\'s make card gaming **faster**, **smarter**, and **more epic** — together.

> **EpicShuffle — Create. Shuffle. Play.**

### AI Build Jam Hackathon

Event: https://lu.ma/e/evt-zAGIImpXc1VXgki
Address: Mission Dolores Manor - Tech Founders' Coliving, 822 S Van Ness Ave, San Francisco, CA 94110, USA
Date: April 27th, 2025

![Michael & Huan](./michael-huan.webp)

- Michael <https://github.com/RefiOrDie>
- Huan <https://github.com/huan>

### Presentation

<https://www.canva.com/design/DAGl4XK3LH8/dN0YPxsph0y8I_aTMyr44Q/view?utm_content=DAGl4XK3LH8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbbc2ceabba>

---

![EpicShuffle Banner](assets/epicshuffle-banner.png)

---

### (c) 2025 EpicShuffle Contributors
