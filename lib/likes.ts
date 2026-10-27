import { promises as fs } from "fs";
import path from "path";

// Shared like counter. Uses Upstash Redis (REST) when configured, otherwise a
// local JSON file, which is fine for development but not for serverless hosting.
const KEY = "portfolio:likes";
const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
const file = path.join(process.cwd(), ".data", "likes.json");

async function redis(command: string): Promise<number> {
  const res = await fetch(`${url}/${command}/${KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("likes store unavailable");
  const { result } = (await res.json()) as { result: number | string | null };
  return Number(result ?? 0);
}

async function readFile(): Promise<number> {
  try {
    return Number(JSON.parse(await fs.readFile(file, "utf8")).count) || 0;
  } catch {
    return 0;
  }
}

export async function getLikes(): Promise<number> {
  return url && token ? redis("get") : readFile();
}

export async function addLike(): Promise<number> {
  if (url && token) return redis("incr");
  const count = (await readFile()) + 1;
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify({ count }));
  return count;
}
