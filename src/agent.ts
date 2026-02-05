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
  const searchResults = await toolbox.search(input);
  // Extract the tools from the search results
  const tools = searchResults.map((result) => result.result);
  const graph = createReactAgent({
    llm,
    prompt: "If the user ask for the weather, use the weather tool.",
    tools: tools as any,
  });

  const streamResponse = graph.streamEvents(
    {
      messages: [new HumanMessage(input)],
    },
    {
      version: "v2",
    }
  );

  for await (const event of streamResponse) {
    if (event.event === "on_chat_model_stream") {
      const chunk = event.data.chunk;
      if (chunk && chunk.content) {
        const content = typeof chunk.content === "string" ? chunk.content : String(chunk.content);
        if (content && (!chunk.tool_call_chunks || chunk.tool_call_chunks.length === 0)) {
          stream.write(content);
        }
      }
    }
  }

  stream.end();
}
