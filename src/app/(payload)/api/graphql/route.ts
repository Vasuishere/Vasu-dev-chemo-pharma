import config from "@payload-config";
import { GRAPHQL_PLAYGROUND_GET, GRAPHQL_POST } from "@payloadcms/next/routes";

export const preferredRegion = "bom1";

export const GET = GRAPHQL_PLAYGROUND_GET(config);
export const POST = GRAPHQL_POST(config);
