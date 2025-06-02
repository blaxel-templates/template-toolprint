# Blaxel OneGrep Semantic Tool Search Agent

<p align="center">
  <img style="border-radius:10px" src=".github/assets/cover.png" alt="Blaxel" width="90%"/>
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 18+](https://img.shields.io/badge/node-18+-green.svg)](https://nodejs.org/en/download)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![LangGraph](https://img.shields.io/badge/LangGraph-powered-brightgreen.svg)](https://github.com/langchain-ai/langgraph)
[![OneGrep](https://img.shields.io/badge/OneGrep-semantic_search-purple.svg)](https://www.onegrep.dev/)

</div>

An intelligent conversational agent that leverages OneGrep's semantic tool search capabilities to dynamically discover and execute tools based on user queries. This template demonstrates advanced tool selection and autonomous action execution, even with large tool sets. Built with LangGraph and TypeScript for robust performance and seamless integration with the Blaxel platform.

## 📑 Table of Contents

- [✨ Features](#features)
- [🚀 Quick Start](#quick-start)
- [📋 Prerequisites](#prerequisites)
- [💻 Installation](#installation)
- [🔧 Usage](#usage)
  - [Running Locally](#running-locally)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [📁 Project Structure](#project-structure)
- [❓ Troubleshooting](#troubleshooting)
- [👥 Contributing](#contributing)
- [🆘 Support](#support)
- [📄 License](#license)

## ✨ Features

- Semantic tool search and selection powered by OneGrep
- Dynamic tool discovery for autonomous action execution
- Interactive conversational interface with intelligent tool routing
- ReAct agent pattern with LangGraph integration
- Streaming responses for real-time interaction
- Scalable tool management for large tool sets
- TypeScript implementation with robust type safety
- Serverless agent deployment as an endpoint
- Easy deployment and integration with Blaxel platform

## 🚀 Quick Start

For those who want to get up and running quickly:

```bash
# Clone the repository
git clone https://github.com/blaxel-ai/template-onegrep.git

# Navigate to the project directory
cd template-onegrep

# Install dependencies
pnpm install

# Set up OneGrep account
npx -y @onegrep/cli account

# Set up environment variables
cp .env-sample .env
# Edit .env with your OneGrep credentials

# Start the development server
bl serve --hotreload

# In another terminal, test the agent
bl chat --local blaxel-agent
```

## 📋 Prerequisites

- **Node.js:** 18.0 or later
- **[PNPM](https://pnpm.io/):** Fast, disk space efficient package manager
- **OneGrep Account:** Active OneGrep account with API access
- **OneGrep CLI:** Install and configure OneGrep CLI:
  ```bash
  npx -y @onegrep/cli account
  ```
- **Blaxel Platform Setup:** Complete Blaxel setup by following the [quickstart guide](https://docs.blaxel.ai/Get-started#quickstart)
  - **[Blaxel CLI](https://docs.blaxel.ai/Get-started):** Ensure you have the Blaxel CLI installed. If not, install it globally:
    ```bash
    curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=/usr/local/bin sudo -E sh
    ```
  - **Blaxel login:** Login to Blaxel platform
    ```bash
    bl login YOUR-WORKSPACE
    ```

## 💻 Installation

**Clone the repository and install dependencies:**

```bash
git clone https://github.com/blaxel-ai/template-onegrep.git
cd template-onegrep
pnpm install
```

**Set up OneGrep account and CLI:**

```bash
npx -y @onegrep/cli account
```

Follow the prompts to authenticate with your OneGrep account.

**Set up environment variables:**

```bash
cp .env-sample .env
```

Edit the `.env` file with your OneGrep credentials:

```env
ONEGREP_API_KEY=<your-onegrep-api-key>
ONEGREP_API_URL=<your-onegrep-api-url>
```

**Verify installation:**

```bash
pnpm run build
```

This command should complete without errors, confirming that TypeScript compilation and all dependencies are properly configured.

## 🔧 Usage

### Running Locally

Start the development server with hot reloading:

```bash
bl serve --hotreload
```

For production build and run:

```bash
bl serve
```

_Note:_ The development server automatically restarts when you make changes to the source code and runs on the configured port.

### Testing

You can test your OneGrep semantic tool search agent locally:

```bash
# Using the Blaxel CLI chat interface
bl chat --local blaxel-agent
```

Example queries you can test:

```
What is the weather in Paris?
```

```
Find me some tools for data analysis
```

```
I need to process a CSV file
```

```
Help me with email automation
```

You can also run it directly with specific input:

```bash
bl run agent blaxel-agent --local --data '{"input": "What is the weather in Paris?"}'
```

**Expected Behavior:**
- The agent uses OneGrep to semantically search for relevant tools
- Automatically selects and executes the most appropriate tool
- Provides streaming responses with tool execution results
- Handles multiple tool interactions intelligently

### Deployment

When you are ready to deploy your agent:

```bash
bl deploy
```

This command uses your code and the configuration files under the `.blaxel` directory to deploy your OneGrep semantic tool search agent on the Blaxel platform.

## 📁 Project Structure

- **src/index.ts** - Main application entry point and Fastify server setup
- **src/agent.ts** - Core agent implementation with OneGrep and LangGraph integration
- **blaxel.toml** - Blaxel deployment configuration with OneGrep environment variables
- **package.json** - PNPM package configuration with scripts and dependencies
- **tsconfig.json** - TypeScript compiler configuration with ES modules
- **.env-sample** - Template for required OneGrep environment variables
- **.blaxel/** - Blaxel configuration files for functions and models
- **LICENSE** - MIT license file

## ❓ Troubleshooting

### Common Issues

1. **Blaxel Platform Issues**:
   - Ensure you're logged in to your workspace: `bl login MY-WORKSPACE`
   - Verify models are available: `bl get models`
   - Check that functions exist: `bl get functions`

2. **OneGrep API Connection Issues**:
   - Verify your OneGrep API key is valid and properly configured
   - Check that your OneGrep API URL is correct and accessible
   - Ensure your OneGrep account has proper permissions for tool access
   - Verify network connectivity to OneGrep servers
   - Test OneGrep CLI authentication: `npx -y @onegrep/cli account`

3. **Tool Search and Execution Issues**:
   - Verify OneGrep toolbox initialization is successful
   - Check tool search results are being returned properly
   - Ensure tools are being converted to LangChain format correctly
   - Verify tool execution permissions and parameters

4. **LangGraph Integration Issues**:
   - Check that the ReAct agent is properly configured
   - Verify streaming responses are working correctly
   - Ensure message handling is functioning properly
   - Check for LangGraph version compatibility issues

5. **TypeScript and Build Issues**:
   - Make sure you have Node.js 18+
   - Try `pnpm install` to reinstall dependencies
   - Check for TypeScript compilation errors with `pnpm run build`
   - Verify ES modules configuration in package.json and tsconfig.json
   - Ensure all type definitions are properly installed

For more help, please [submit an issue](https://github.com/blaxel-templates/template-onegrep/issues) on GitHub.

## 👥 Contributing

Contributions are welcome! Here's how you can contribute:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Submit** a Pull Request

Please make sure to update tests as appropriate and follow the TypeScript code style of the project.

## 🆘 Support

If you need help with this template:

- [Submit an issue](https://github.com/blaxel-templates/template-onegrep/issues) for bug reports or feature requests
- Visit the [Blaxel Documentation](https://docs.blaxel.ai) for platform guidance
- Check the [OneGrep Documentation](https://www.onegrep.dev/docs) for semantic search integration
- Review the [LangGraph Documentation](https://langchain-ai.github.io/langgraph/) for framework-specific help
- Join our [Discord Community](https://discord.gg/G3NqzUPcHP) for real-time assistance

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.