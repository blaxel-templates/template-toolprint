import { env } from "@blaxel/core";
import '@blaxel/langgraph';
import '@blaxel/telemetry';
import { createLangchainToolbox, getToolbox } from '@onegrep/sdk';
import Fastify from "fastify";
import agent from "./agent.js";

interface RequestBody {
  inputs: string;
}

async function main() {
  console.info("Booting up...");
  const app = Fastify();

  const toolbox = await createLangchainToolbox(await getToolbox())

  app.addHook("onResponse", async (request, reply) => {
    console.info(`${request.method} ${request.url} ${reply.statusCode} ${Math.round(reply.elapsedTime)}ms`);
  });

  app.addHook("onError", async (request, reply, error) => {
    console.error(error);
  });

  app.post<{ Body: RequestBody }>("/", async (request, reply) => {
    try {
      await agent(toolbox, request.body.inputs, reply.raw);
    } catch (error: any) {
      console.error(error);
      return reply.status(500).send(error.stack);
    }
  });
  const port = parseInt(env.PORT || "80");
  const host = env.HOST || "0.0.0.0";
  try {
    await app.listen({ port, host });
    console.info(`Server is running on port ${host}:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main().catch(console.error);
