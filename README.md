# Notes Manager App

A simple and elegant web application for managing text notes built with Node.js, Express, and EJS templating engine.

## 📝 Features

- **Create Notes**: Add new notes with titles and detailed content
- **View Notes**: Browse all created notes on the homepage
- **Read Details**: Click on any note to view its full content
- **Edit Titles**: Rename existing notes easily
- **Clean UI**: Modern dark-themed interface using Tailwind CSS
- **File-based Storage**: Notes are stored as `.txt` files in the `files/` directory

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd Lecture5
```

2. Install dependencies:
```bash
npm install
```

3. Create the files directory (if it doesn't exist):
```bash
mkdir files
```

4. Start the server:
```bash
node script.js
```

5. Open your browser and navigate to:
```
http://localhost:5000
```

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Tailwind CSS (CDN)
- **File System**: Built-in Node.js `fs` module

## 📁 Project Structure

```
Lecture5/
├── files/              # Directory for storing note files (.txt)
├── views/              # EJS template files
│   ├── index.ejs       # Main page showing all notes
│   ├── details.ejs     # Note detail view
│   └── edit.ejs        # Edit note title form
├── script.js           # Main application file
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## 🔧 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Display all notes |
| POST | `/create` | Create a new note |
| GET | `/files/:filename` | View note details |
| GET | `/edit/:filename` | Show edit form |
| POST | `/edit` | Update note title |

## 🎨 UI Components

### Homepage (`/`)
- Form to create new notes
- Grid display of existing notes
- Links to view details and edit each note

### Note Details (`/files/:filename`)
- Shows the complete content of a note
- Clean presentation with back navigation

### Edit Page (`/edit/:filename`)
- Form to rename existing notes
- Pre-filled with current filename

## 💾 Data Storage

Notes are stored as plain text files in the `files/` directory:
- Filenames are created by removing spaces from the title
- File extension is `.txt`
- Content is stored as plain text

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Express.js framework
- Styled with Tailwind CSS
- Templated with EJS
- Inspired by simple note-taking applications

## 🐛 Issues

If you encounter any problems or have suggestions, please open an issue on GitHub.
