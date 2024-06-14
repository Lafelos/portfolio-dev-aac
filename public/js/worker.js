import { MLCEngineWorkerHandler, MLCEngine } from "@mlc-ai/web-llm";

const engine = new MLCEngine();
const handler = new MLCEngineWorkerHandler(engine);

onmessage = msg => {
    handler.onmessage(msg);
}
