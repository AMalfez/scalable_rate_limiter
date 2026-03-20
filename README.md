# 🚀 Scalable API Gateway with Rate Limiting & Queue System

A backend system designed to handle high-concurrency traffic using **Redis-based rate limiting** and **asynchronous job processing with BullMQ**.

---

## 🧠 Architecture
<img width="1332" height="319" alt="rate_limiter_archi" src="https://github.com/user-attachments/assets/c29db3a8-59e8-4201-aa46-039b03c3bf3f" />


---

## ⚡ Features

- 🔒 **Rate Limiting (Redis)**
  - Limits requests per user (100 req/min)
  - Prevents abuse and protects system under load

- ⚙️ **Asynchronous Job Processing**
  - Uses BullMQ with Redis
  - Offloads heavy tasks to background workers

- 🚀 **High Concurrency Handling**
  - Handles large traffic spikes efficiently
  - Non-blocking request-response cycle

- 📊 **Load Tested**
  - Validated performance using Artillery

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Redis (ioredis)
- BullMQ
- Artillery (load testing)

---

## 📊 Load Testing Results
<img width="656" height="718" alt="image" src="https://github.com/user-attachments/assets/c02a2ad2-5e4b-4ab5-bb9f-9989d6fd5701" />


### 🔹 Test 1: Moderate Load

- **600 requests @ ~18 req/sec**
- ✅ ~100 requests processed
- ❌ ~500 requests rate-limited (429)
- ⏱️ p95 latency: **< 120ms**
- ❌ Failures: **0**

---

### 🔹 Test 2: High Load

- **1000 requests @ ~100 req/sec**
- ✅ ~100 requests processed
- ❌ ~900 requests rate-limited (429)
- ⏱️ p95 latency: **< 150ms**
- ❌ Failures: **0**

---

## 🧪 Key Observations

- System remains stable under high load
- Rate limiter effectively controls traffic
- API responds quickly even during heavy traffic
- Background workers process jobs asynchronously without blocking requests

---

## 📸 Screenshots

- Worker logs
  
  <img width="443" height="157" alt="image" src="https://github.com/user-attachments/assets/c2092df8-33e8-468c-9c68-0cf15383203c" />

  ---

- API responses (200 & 429)
  
  <img width="321" height="194" alt="success_img" src="https://github.com/user-attachments/assets/1574d7e5-6586-4a82-9bd8-cd0f7c944f82" />
  <img width="308" height="199" alt="success_img_1" src="https://github.com/user-attachments/assets/80ae5bd2-3c01-418d-93c0-a833402fa9db" />

---

## ▶️ How to Run

### 1. Install dependencies: `npm install`
### 2. Start server: `npm run dev`
### 3. Start worker: `node ./path_to_worker_file`

---

## 🧪 Run Load Test
`artillery run load-test.yml`

---

## 💡 What I Learned

- Designing scalable backend systems
- Implementing Redis-based rate limiting using INCR + EXPIRE
- Building queue-based architectures for async processing
- Testing system performance under real-world load

---

## 👨‍💻 Author

**Alfez Mansuri**







