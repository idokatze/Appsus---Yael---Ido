# 📬 Gmail + 📝 Keep Clone (React One‑Page App)

A single‑page React application that combines two productivity tools into one interface:

- **Gmail‑like app**: a simple email client simulation with inbox, sent items, and message details.  
- **Google Keep‑like app**: a note‑taking tool with support for text notes, images, and todo lists.

---

## 🚀 Features

### Gmail‑like App
- Inbox and Sent views  
- Compose new emails  
- Mark emails as read/unread  
- Delete emails  
- Simple filtering/search  

### Keep‑like App
- Create notes of different types:
  - Text notes
  - Image notes
  - Todo lists
- Pin/unpin notes  
- Change background colors  
- Delete notes  
- Filter notes by type, text, or pinned status  

---

## 🛠️ Tech Stack
- **React** (functional components + hooks)  
- **React Router** for navigation between Gmail and Keep  
- **LocalStorage** for persistence  
- **Custom services** for CRUD operations (`storageService`, `noteService`, `mailService`)  
- **Event bus** for global success/error messages  

---
