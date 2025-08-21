import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";

export async function POST(req: NextRequest) {
  const { messages, model = "llama3.1:8b" } = await req.json();

  const upstream = await fetch(`${OLLAMA_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages,            // [{ role: "user"|"assistant"|"system", content: string }]
      stream: true,        // Ollama streams NDJSON lines
      options: { temperature: 0.2, num_ctx: 4096 }
    }),
  });

  // Pass Ollama's stream straight through
  return new Response(upstream.body, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
      "Connection": "keep-alive",
    },
  });
}
