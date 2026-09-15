<div align="center">

  <!-- Main Animated Banner / Title in Grey Theme -->
  <h1 align="center">
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&pause=1000&color=555555&center=true&vCenter=true&width=500&lines=Welcome+to+HealthMate;Your+Personal+Health+Companion;Simple.+Accessible.+Smart." alt="Typing SVG" />
  </h1>

  <p align="center">
    An intuitive, user-friendly healthcare management web application designed to streamline personal wellness tracking, empower informed decision-making through symptom checks, and connect users directly with healthcare resources.
  </p>

  <!-- Badges in Neutral/Grey Styles -->
  <p align="center">
    <img src="https://img.shields.io/github/stars/rajishac67-ctrl/Healthmate?style=for-the-badge&color=707070" alt="Stars">
    <img src="https://img.shields.io/github/forks/rajishac67-ctrl/Healthmate?style=for-the-badge&color=888888" alt="Forks">
    <img src="https://img.shields.io/github/license/rajishac67-ctrl/Healthmate?style=for-the-badge&color=555555" alt="License">
  </p>

</div>

---

## 🌟 Comprehensive Features

<div align="center">

| Feature | Detailed Description |
| :--- | :--- |
| **🏠 Home Dashboard** | Gain an immediate, clear overview of your current health metrics, upcoming appointments, and daily wellness activity logs. |
| **🔍 Symptom Scan** | Utilize a fast and convenient self-assessment tool to analyze potential symptoms and receive relevant healthcare guidance. |
| **🧠 Mental Health Tools** | Access dedicated wellness resources, mindfulness practices, and guidance designed to support psychological well-being. |
| **👨‍⚕️ Doctor Consultations** | Effortlessly schedule, manage, and track virtual or in-person medical appointments with certified professionals. |
| **💡 Personalized Health Tips** | Receive continuous, actionable advice and health insights tailored to keep you informed on your wellness journey. |
| **🏆 Rewards & Milestones** | Stay motivated by earning badges and tracking personal achievements as you maintain consistency with your health goals. |
| **🔎 Instant Search** | Quickly locate specific health advice, symptoms, and medical information using an integrated, responsive search system. |

</div>

---

## 🛠️ Tech Stack & Development Tools

<div align="center">

| Component | Technology / Badge |
| :--- | :--- |
| **Markup** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) |
| **Scripting** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **IDE** | ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white) |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) |

</div>

---

## 🎨 Interactive CSS Animations

Enhance your web interface with these smooth keyframe animations in your `style.css` file:

### 1. Grey Glow & Pulse Animation
```css
@keyframes greyPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(100, 100, 100, 0.4);
  }
  70% {
    transform: scale(1.02);
    box-shadow: 0 0 0 10px rgba(100, 100, 100, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(100, 100, 100, 0);
  }
}

.action-btn {
  animation: greyPulse 2s infinite ease-in-out;
}
