/**
 * X (Twitter) 投稿用の共通ヘルパー。
 * 環境変数 X_CONSUMER_KEY / X_CONSUMER_SECRET / X_ACCESS_TOKEN / X_ACCESS_TOKEN_SECRET
 * から OAuth 1.0a 認証で書き込む。
 *
 * 無料枠の上限を踏まえ、呼び出し側で投稿頻度を制御すること
 * (Free tier: 1500 posts/月, 50/日)。
 */
import { TwitterApi } from "twitter-api-v2";

export type XCredentials = {
  consumerKey: string;
  consumerSecret: string;
  accessToken: string;
  accessTokenSecret: string;
};

export function readCredentialsFromEnv(): XCredentials | null {
  const consumerKey = process.env.X_CONSUMER_KEY;
  const consumerSecret = process.env.X_CONSUMER_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessTokenSecret = process.env.X_ACCESS_TOKEN_SECRET;
  if (!consumerKey || !consumerSecret || !accessToken || !accessTokenSecret) {
    return null;
  }
  return { consumerKey, consumerSecret, accessToken, accessTokenSecret };
}

export function createClient(creds: XCredentials): TwitterApi {
  return new TwitterApi({
    appKey: creds.consumerKey,
    appSecret: creds.consumerSecret,
    accessToken: creds.accessToken,
    accessSecret: creds.accessTokenSecret,
  });
}

/**
 * X に 1 件投稿する。280 文字制限は呼び出し側で確認すること。
 * 連投時は最低 1 秒のインターバルを呼び出し側で設けること
 * (rate limit 防止)。
 */
export async function postTweet(
  client: TwitterApi,
  text: string,
): Promise<{ id: string; text: string }> {
  if (text.length > 280) {
    throw new Error(`Tweet too long: ${text.length} > 280 chars`);
  }
  const result = await client.v2.tweet(text);
  return { id: result.data.id, text: result.data.text };
}

/** スレッド投稿。最初の Tweet を投稿し、以降を返信として連結。 */
export async function postThread(
  client: TwitterApi,
  texts: string[],
): Promise<{ ids: string[] }> {
  if (texts.length === 0) return { ids: [] };
  const ids: string[] = [];
  let lastId: string | undefined;
  for (const text of texts) {
    if (text.length > 280) {
      throw new Error(`Tweet in thread too long: ${text.length} > 280 chars`);
    }
    const result = lastId
      ? await client.v2.reply(text, lastId)
      : await client.v2.tweet(text);
    ids.push(result.data.id);
    lastId = result.data.id;
    // X API は連投で 429 を返しやすいので念のため 1.5 秒スリープ
    await new Promise((r) => setTimeout(r, 1500));
  }
  return { ids };
}
