import { blModel } from "@blaxel/langgraph";
import { HumanMessage } from "@langchain/core/messages";

import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { LangchainToolbox } from "@onegrep/sdk";

interface Stream {
  write: (data: string) => void;
  end: () => void;
}

export default async function agent(
  toolbox: LangchainToolbox,
  input: string,
  stream: Stream
): Promise<void> {
  const llm = await blModel("sandbox-openai");
  const searchResults = await toolbox.search(input)

  // Extract the tools from the search results
  const tools = searchResults.map((result) => result.result)
  const streamResponse = await createReactAgent({
    llm,
    prompt: "If the user ask for the weather, use the weather tool.",
    tools: tools as any,
  }).stream({
    messages: [new HumanMessage(input)],
  });

  for await (const chunk of streamResponse) {
    if (chunk.agent)
      for (const message of chunk.agent.messages) {
        stream.write(message.content);
      }
  }
  stream.end();
}
