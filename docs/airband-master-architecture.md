# AIRBAND MASTER ARCHITECTURE DOCUMENT  
_Author: Cursor AI via ChatGPT_  
_This is the canonical reference for the AirBand project._

---

## 1. OVERVIEW  
AirBand is a cross-platform (iOS, Android, Web) gesture-based
music-performance app. Users play air instruments using realtime
hand tracking powered by MediaPipe/TensorFlow.js, combined with neon
visuals, animated HUDs, and rhythmic gameplay similar to Guitar Hero.

Core pillars:
- High-energy neon UI
- Hand-tracking gameplay
- Cross-platform compatibility
- Rhythm engine + scoring
- Future multiplayer + store ecosystem

---

## 2. COMPLETE PAGE + FEATURE MAP

### 2.1 Onboarding Flow
- **/onboarding/welcome**
- **/onboarding/camera-permissions**
- **/onboarding/lighting-check**
- **/onboarding/gesture-calibration**

### 2.2 Dashboard System
- **/dashboard/home**
- **/dashboard/store**
- **/dashboard/profile**
- **/dashboard/settings**

### 2.3 Instrument Selection
- **/instruments/index**
- **/instruments/guitar**
- **/instruments/drums**
- **/instruments/piano**
- **/instruments/dj**

### 2.4 Gameplay Loop
- **/game/ready-check**
- **/game/live** (core gameplay)
- **/game/pause**
- **/game/results**

### 2.5 Developer Debug Tools
- **/dev/debug-tracking**
- **/dev/debug-audio**
- **/dev/debug-performance**

---

## 3. GAMEPLAY REQUIREMENTS

### 3.1 Hand Tracking Engine
- MediaPipe Hands OR Pose (preferred: MediaPipe Hands)
- TensorFlow.js runtime
- Smoothing filters
- Gesture detection
- Beat timing alignment

### 3.2 Gameplay HUD Components
- Note lanes / pads
- Combo counter
- Accuracy indicators
- Streak animations
- Score popups
- Song progress bar
- Countdown overlays
- Welcome animations

### 3.3 Player Calibration
- Open hand → fist → point gesture recording
- Lighting requirements
- Distance estimation

---

## 4. VISUAL + UI SYSTEM

### 4.1 Global Theme Requirements
- Neon blue / neon pink energy theme
- Premium gold accents
- Shared spacing/font/gradient tokens
- Animated backgrounds:
  - DS3: AnimatedStageBackground foundation
  - DS4: Global integration

### 4.2 Required UI Components
- ABButton  
- ABText  
- ABCard  
- ABScreen  
- NeonBorder  
- StageBackground / AnimatedStageBackground  

---

## 5. DEPENDENCY + TECHNOLOGY AUDIT

### 5.1 Core Frameworks
- Expo SDK 54
- React Native (via Expo)
- Expo Router

### 5.2 Animation + UI Engine
- react-native-reanimated
- react-native-gesture-handler
- react-native-svg

### 5.3 Camera + Tracking System
- expo-camera (native only)
- TensorFlow.js
- MediaPipe Hands runtime
- Platform guards for Web fallbacks

### 5.4 Audio Engine
- expo-av
- Latency correction utilities

### 5.5 Backend (Phase 2)
Options:
- Firebase OR Supabase

Used for:
- Authentication
- Player stats
- Leaderboards
- Cloud sync

### 5.6 Payments (Phase 2)
- Stripe React Native SDK

### 5.7 Dev Tooling
- TypeScript
- ESLint + Prettier
- Jest
- Sentry (production crash reports)

---

## 6. ARCHITECTURE ROADMAP

### Phase 0.RE — Stability & Environment Verification
- Fix bundler configs  
- Fix expo config syntax  
- Validate Babel setup  
- Ensure reanimated loads properly  
- Confirm camera fallbacks  

### Phase DS1–DS4 — Design System Completion  
- DS1: Tokens  
- DS2: UI components  
- DS3: Animated background foundation  
- DS4: Replace all static backgrounds with animated version  

### Phase H1 — Hand Tracking Integration  
- Model loading  
- Landmark smoothing  
- Gesture recognition  
- Calibration workflow  

### Phase G1 — Gameplay Engine  
- Note spawning  
- Timing windows  
- Scoring  
- Combo system  
- HUD interactions  

### Phase UX1 — Final UI polish  
- Transitions  
- Neon pulses  
- Animated interactions  

---

## 7. PLATFORM REQUIREMENTS

### 7.1 Native (iOS/Android)
Camera enabled  
GPU-accelerated TensorFlow backend  
Full animations  

### 7.2 Web
Camera fallback  
Tracking requires WASM  
Performance mode toggles  
Simplified HUD if needed  

---

## 8. FUTURE EXPANSIONS
- Multiplayer "Battle Mode"
- Social feed for shared scores
- Marketplace cosmetic updates
- Song packs and premium content

---

## 9. MAINTENANCE NOTES
- This document evolves over time  
- All new features must be added here  
- This serves as AirBand's blueprint from now on  

