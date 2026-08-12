# [mattdangelo.co](https://mattdangelo.co)

A personal portfolio website with a terminal-like interface. Built with Next.js, React, and Tailwind CSS.

## Features

- 🖥️ **Terminal-style interface** - Interactive command-line experience in your browser
- 🌗 **Dark/Light mode** - Automatic theme switching based on system preferences
- ⚡ **Fast & optimized** - Built with Next.js for optimal performance
- 📱 **Responsive design** - Works seamlessly on desktop and mobile devices
- 🎨 **Customizable** - Easy configuration via `config.json`

## Available Commands

The site includes the following terminal commands:

- `help` - Display all available commands
- `about` - Information about Matt D'Angelo
- `sumfetch` - ASCII art summary with contact info and resume
- `readme` - Display GitHub README
- `quote` - Random quote from an API
- `ls` - List directories
- `cd` - Navigate (joke command)
- `date` - Display current date/time
- `whoami` - Display current user
- `email` - Open email client
- `github` - Open GitHub profile
- `linkedin` - Open LinkedIn profile
- `donate` - Display donation options
- `sudo` - Humorous permission denied message
- `echo` - Echo text back to user
- `clear` - Clear terminal history (keyboard shortcut: `Ctrl+L`)

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.2.9
- **UI Library**: [React](https://react.dev/) 19.2.7
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.3.1
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client**: [Axios](https://axios-http.com/) 1.12.0
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Pre-commit hooks**: [Husky](https://typicode.github.io/husky/)

## Getting Started

### Prerequisites

- Node.js 24.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mattdangelo/mattdangelo.co
cd mattdangelo.co
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

All customizable content is stored in `config.json`. Modify the following to personalize the site:

- `name` - Your full name
- `title` - Browser tab title
- `email` - Contact email
- `social` - GitHub and LinkedIn usernames
- `ps1_username` - Terminal prompt username
- `ps1_hostname` - Terminal prompt hostname
- `readmeUrl` - URL to your GitHub README
- `resume_url` - URL to your resume PDF
- `repo` - Link to your main GitHub profile
- `donate_urls` - Links for donations (PayPal, Bitcoin)
- `colors` - Customize light and dark theme colors

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### File Structure

```
src/
├── components/
│   ├── history/        # Terminal history management
│   ├── input.tsx       # Command input component
│   └── Ps1.tsx         # Terminal prompt component
├── pages/
│   ├── index.tsx       # Main page
│   ├── _app.tsx        # App wrapper
│   ├── 404.tsx         # 404 page
│   └── api/
│       └── quote.ts    # Quote API endpoint
├── utils/
│   ├── api.ts          # API utilities
│   ├── shell.ts        # Shell parsing utilities
│   ├── commandExists.ts # Command validation
│   ├── tabCompletion.ts # Tab completion logic
│   └── bin/
│       ├── index.ts    # Command exports
│       └── commands.ts # Command implementations
└── styles/
    └── global.css      # Global styles
```
