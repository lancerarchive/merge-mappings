# 🧊 GeyserMerger
### Advanced Custom Model Data Synthesis for GeyserMC

**GeyserMerger** is a high-performance web utility designed to solve the headache of merging multiple GeyserMC model mapping files. It ensures your `custom_model_data` remains unique, sorted, and conflict-free with a modern, glassmorphic interface.

---

## 🌐 Live Access
**Try the tool here:** [https://lancerarchive.github.io/merge-mappings](https://lancerarchive.github.io/merge-mappings)

---

## ✨ Key Features
* **Intelligent Merging:** Automatically combines two `.json` mapping files.
* **Conflict Prevention:** Detects existing `custom_model_data` IDs in your primary file and skips duplicates from the secondary file to prevent Bedrock-side crashes.
* **Frost-Glass UI:** A clean, light-blue aesthetic with interactive animations and a custom trailing cursor.
* **Instant Analysis:** View real-time statistics on item counts and mapping groups before you download.
* **Privacy First:** All processing happens locally in your browser. Your mapping data is never uploaded to a server.

---

## 🚀 How It Works
1. **Select Source Alpha:** Upload your main mapping file (the one you want to keep as the priority).
2. **Select Source Beta:** Upload the second mapping file containing the new items you wish to add.
3. **Synthesize:** Click the **Merge Mappings** button. The logic engine will compare IDs and append only the unique entries.
4. **Export:** Preview the result in the built-in terminal and click **Download Result** to get your new `mappings.json`.

---

## 🛠️ Technical Stack
* **Frontend:** HTML5, CSS3 (Glassmorphism & Keyframe Animations)
* **Logic:** Vanilla JavaScript (ES6+)
* **APIs:** File Reader API, Blob API, Web Animations API (WAAPI)

---

## 👤 Creator: lancerarchive
Feel free to reach out for support or suggestions!

* **GitHub:** [@lancerarchive](https://github.com/lancerarchive)
* **Discord:** [Join Community](https://discord.gg/cb8xAh3Cns)
* **Email:** [lancerarchive@gmail.com](mailto:lancerarchive@gmail.com)

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/lancerarchive/merge-mappings/blob/main/LICENSE) file for details.
