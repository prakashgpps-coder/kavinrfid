# RFID Attendance (Vercel Version)

This is a converted version of your original PHP project to work on **Vercel** using **Node.js serverless functions**.

## 🔧 How to Use

### 1. Upload to GitHub
Push this folder to a GitHub repository.

### 2. Deploy on Vercel
- Go to https://vercel.com
- Import the repository
- Vercel will detect the API functions in `/api`
- The endpoint will look like:

```
https://your-app.vercel.app/rfidattendance/getdata?card_uid=B37A512D&device_token=bf0bc0ed017874e9
```

### 3. ESP8266 Update
In your Arduino code, replace the old PHP URL with the new Vercel endpoint.

Enjoy!