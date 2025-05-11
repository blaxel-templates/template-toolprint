<p align="center">
  <img style="border-radius:10px" src=".github/assets/cover.png" alt="Blaxel"/>
</p>

# Semantic Tool Search - OneGrep
A template implementation of a conversational agent using [OneGrep](https://www.onegrep.dev/) and GPT-4. This agent is powered by OneGrep for semantic tool search and tool selection, enabling effective autonomous actions even at a high number of tools.

## Features

- Interactive conversational interface
- Semantic search on tools powered by OneGrep
- Streaming responses for real-time interaction
- Serverless agent deployment as an endpoint on Blaxel

## Prerequisites

- **Node.js:** v18 or later.
- **OneGrep**: Install OneGrep CLI and login to your account
  ```bash
  npx -y @onegrep/cli account
  ```
- **[Blaxel CLI](https://docs.blaxel.ai/Get-started):** Ensure you have Blaxel CLI installed. If not, install it globally:
  ```bash
  curl -fsSL \
  https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh \
  | BINDIR=/usr/local/bin sudo -E sh
  ```
- **Blaxel login:** Login to Blaxel platform
  ```bash
  bl login YOUR-WORKSPACE
  ```

## Installation

- **Clone the repository and install dependencies:**

  ```bash
  git clone https://github.com/blaxel-ai/template-onegrep.git
  cd template-onegrep
  pnpm i
  ```

- **Environment Variables:** Create a `.env` file with your configuration. You can begin by copying the sample file:

  ```bash
  cp .env-sample .env
  ```

  Then, update the following values with your own credentials:

  - [OneGrep API key](https://onegrep.dev): `ONEGREP_API_KEY`
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