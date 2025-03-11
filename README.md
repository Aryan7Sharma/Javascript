### **10 Real-World Callback Examples (From Easy to Hard)**  
Callbacks are functions passed as arguments to other functions, allowing asynchronous or event-driven programming. Let's go from **basic to advanced**, with real-world, industry-relevant examples.  

---

## **1️⃣ Basic Callback – Order Confirmation (E-commerce Example)**  
Imagine you're ordering something from Amazon. The system **confirms your order first** before sending a thank-you message.  

```js
function confirmOrder(orderId, callback) {
    console.log(`Order #${orderId} is confirmed.`);
    callback();
}

function thankYouMessage() {
    console.log("Thank you for your purchase!");
}

// Calling function with callback
confirmOrder(12345, thankYouMessage);
```
✅ **Output:**  
```
Order #12345 is confirmed.
Thank you for your purchase!
```
**📝 Why use a callback?**  
To **execute "Thank You" only after** the order confirmation, ensuring correct sequence.

---

## **2️⃣ File Download Simulation (Asynchronous Callbacks in Web Development)**  
Web browsers download files asynchronously. Here, a function **downloads a file first**, then notifies the user.

```js
function downloadFile(filename, callback) {
    console.log(`Downloading ${filename}...`);
    setTimeout(() => {
        console.log(`${filename} downloaded successfully.`);
        callback();
    }, 2000);
}

function notifyUser() {
    console.log("Your file is ready to use!");
}

downloadFile("report.pdf", notifyUser);
```
✅ **Output (After 2 sec):**  
```
Downloading report.pdf...
report.pdf downloaded successfully.
Your file is ready to use!
```
**📝 Why use a callback?**  
To **ensure the user is notified only after the download completes**.

---

## **3️⃣ User Authentication (Web Login System)**
When a user logs in, the system first **verifies credentials**, then allows access.

```js
function authenticateUser(username, password, callback) {
    console.log(`Authenticating ${username}...`);
    setTimeout(() => {
        if (password === "secure123") {
            console.log("Authentication successful!");
            callback();
        } else {
            console.log("Authentication failed!");
        }
    }, 2000);
}

function grantAccess() {
    console.log("Access granted! Redirecting to dashboard...");
}

// Calling function
authenticateUser("john_doe", "secure123", grantAccess);
```
✅ **Output (After 2 sec):**  
```
Authenticating john_doe...
Authentication successful!
Access granted! Redirecting to dashboard...
```
**📝 Why use a callback?**  
To execute **grantAccess() only when authentication is successful**.

---

## **4️⃣ Fetching API Data (Industry: Web Development)**
Fetching data from a remote API (like fetching weather details).

```js
function fetchWeather(city, callback) {
    console.log(`Fetching weather data for ${city}...`);
    setTimeout(() => {
        const data = { city, temperature: "30°C" }; // Mock API data
        callback(data);
    }, 2000);
}

function displayWeather(weatherData) {
    console.log(`Weather in ${weatherData.city}: ${weatherData.temperature}`);
}

// Call function with callback
fetchWeather("New York", displayWeather);
```
✅ **Output (After 2 sec):**  
```
Fetching weather data for New York...
Weather in New York: 30°C
```
**📝 Why use a callback?**  
To ensure **weather is displayed only after fetching data**.

---

## **5️⃣ Payment Processing System (E-commerce Industry)**
A real-world e-commerce payment system where a **payment is processed before showing success message**.

```js
function processPayment(amount, callback) {
    console.log(`Processing payment of $${amount}...`);
    setTimeout(() => {
        console.log("Payment successful!");
        callback();
    }, 3000);
}

function sendInvoice() {
    console.log("Invoice sent to your email.");
}

// Calling function
processPayment(100, sendInvoice);
```
✅ **Output (After 3 sec):**  
```
Processing payment of $100...
Payment successful!
Invoice sent to your email.
```
**📝 Why use a callback?**  
To **send the invoice only after payment is successful**.

---

## **6️⃣ Fetching Database Data (Industry: Backend Development)**
When a user logs in, we first **fetch their profile from the database**, then display it.

```js
function fetchUserProfile(userId, callback) {
    console.log(`Fetching profile for User ID: ${userId}...`);
    setTimeout(() => {
        const profile = { id: userId, name: "Alice", role: "Admin" };
        callback(profile);
    }, 2000);
}

function displayProfile(profile) {
    console.log(`User: ${profile.name}, Role: ${profile.role}`);
}

fetchUserProfile(101, displayProfile);
```
✅ **Output (After 2 sec):**  
```
Fetching profile for User ID: 101...
User: Alice, Role: Admin
```
**📝 Why use a callback?**  
To ensure **data is available before displaying the profile**.

---

## **7️⃣ Sending OTP for Authentication (Banking & Security Industry)**
When logging into a banking app, an **OTP (One-Time Password) is sent before authentication**.

```js
function sendOTP(phoneNumber, callback) {
    console.log(`Sending OTP to ${phoneNumber}...`);
    setTimeout(() => {
        const otp = Math.floor(1000 + Math.random() * 9000);
        console.log(`Your OTP is: ${otp}`);
        callback(otp);
    }, 2000);
}

function verifyOTP(enteredOTP, actualOTP) {
    if (enteredOTP === actualOTP) {
        console.log("OTP verified! Access granted.");
    } else {
        console.log("Invalid OTP. Try again.");
    }
}

sendOTP("+123456789", (otp) => verifyOTP(otp, otp)); // Simulated correct entry
```
✅ **Output (After 2 sec):**  
```
Sending OTP to +123456789...
Your OTP is: 4821
OTP verified! Access granted.
```
**📝 Why use a callback?**  
To **verify OTP only after it is sent**.

---

## **8️⃣ Video Processing (Industry: Video Streaming - YouTube, Netflix)**
Processing a video before publishing.

```js
function processVideo(videoFile, callback) {
    console.log(`Processing video: ${videoFile}...`);
    setTimeout(() => {
        console.log("Video processed successfully!");
        callback();
    }, 5000);
}

function publishVideo() {
    console.log("Video published on the platform!");
}

processVideo("tutorial.mp4", publishVideo);
```
✅ **Output (After 5 sec):**  
```
Processing video: tutorial.mp4...
Video processed successfully!
Video published on the platform!
```
**📝 Why use a callback?**  
To **publish the video only after processing is complete**.

---

## **9️⃣ Callback Hell (Pizza Delivery System - Industry: Food Delivery)**
Multiple callbacks create a **nested pyramid**, making code harder to read.

```js
function orderPizza(callback) {
    setTimeout(() => {
        console.log("Pizza ordered.");
        callback();
    }, 2000);
}

function preparePizza(callback) {
    setTimeout(() => {
        console.log("Pizza is being prepared.");
        callback();
    }, 3000);
}

function deliverPizza(callback) {
    setTimeout(() => {
        console.log("Pizza delivered!");
        callback();
    }, 2000);
}

// Callback hell - nesting too many callbacks
orderPizza(() => {
    preparePizza(() => {
        deliverPizza(() => {
            console.log("Enjoy your pizza!");
        });
    });
});
```
✅ **Output (After ~7 sec)**  
```
Pizza ordered.
Pizza is being prepared.
Pizza delivered!
Enjoy your pizza!
```
**📝 Why is this bad?**  
Deep nesting makes code hard to read. **Use Promises or Async/Await instead**.

---
