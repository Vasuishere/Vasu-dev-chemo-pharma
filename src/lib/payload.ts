import config from "@/payload.config";
import { getPayload as getPayloadInstance, type Payload } from "payload";

const PAYLOAD_PROMISE_KEY = "__vasudev_payload_promise__";

type GlobalWithPayloadPromise = typeof globalThis & {
  [PAYLOAD_PROMISE_KEY]?: Promise<Payload>;
};

export const getPayload = () => {
  const globalScope = globalThis as GlobalWithPayloadPromise;

  if (!globalScope[PAYLOAD_PROMISE_KEY]) {
    globalScope[PAYLOAD_PROMISE_KEY] = getPayloadInstance({ config }).catch((error) => {
      delete globalScope[PAYLOAD_PROMISE_KEY];
      throw error;
    });
  }

  return globalScope[PAYLOAD_PROMISE_KEY];
};
