
<p align="center">
  <img style="border-radius:10px" src=".github/assets/cover.png" alt="Blaxel"/>
</p>

# Blaxel & OneGrep
A template implementation of a conversational agent using onegrep and GPT-4. This agent demonstrates the power of OneGrep for building interactive AI agents and give then superpowers with better tools.

## Features

- Interactive conversational interface
- Semantic search on tools deployed on OneGrep feat Blaxel
- Streaming responses for real-time interaction
- Easy deployment and integration with Blaxel platform

## Prerequisites

- **Node.js:** v18 or later.
- **[Blaxel CLI](https://docs.blaxel.ai/Get-started):** Ensure you have the Blaxel CLI installed. If not, install it globally:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/beamlit/toolkit/main/install.sh | BINDIR=$HOME/.local/bin sh
  ```
- **Blaxel login:** Login to Blaxel platform
  ```bash
  bl login YOUR-WORKSPACE
  ```

## Installation

**Clone the repository and install dependencies:**

```bash
git clone https://github.com/beamlit/template-onegrep.git
cd template-onegrep
uv sync
```

- **Environment Variables:** Create a `.env` file with your configuration. You can begin by copying the sample file:

  ```bash
  cp .env-sample .env
  ```

  Then, update the following values with your own credentials:

  - [OneGrep API Key](https://onegrep.dev): `ONEGREP_API_KEY`
  - [OneGrep URL](https://onegrep.dev): `ONEGREP_URL`

## Running the Server Locally

Start the development server with hot reloading:

```bash
bl serve --hotreload
```

_Note:_ This command starts the server and enables hot reload so that changes to the source code are automatically reflected.

## Testing your agent

You can test your agent using the chat interface:

```bash
bl chat --local blaxel-agent
```

Or run it directly with specific input:

```bash
bl run agent blaxel-agent --local --data '{"input": "What is the weather in Paris?"}'
```

## Deploying to Blaxel

When you are ready to deploy your application:

```bash
bl deploy
```

This command uses your code and the configuration files under the `.blaxel` directory to deploy your application.

## Project Structure

- **src/index.ts** - Application entry point
- **src/agent.ts** - Core agent implementation with onegrep integration
- **blaxel.toml** - Blaxel deployment configuration

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
