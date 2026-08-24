const BASE_URL = process.env.EXPO_PUBLIC_BITEY_API_URL ?? 'https://bitefixes-backend.onrender.com';

export type BiteyChatResponse = {
  success?: boolean;
  response?: string;
  intent?: string | null;
  ticket_id?: number | null;
  conversation_id?: string | null;
  language?: string | null;
};

export async function biteyChat(
  message: string,
  conversationId?: string,
): Promise<BiteyChatResponse> {
  const response = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      message,
      company_id: 1,
      channel: 'bitey-ia-app',
      customer_name: 'Usuario',
      language_preference: 'auto',
      conversation_id: conversationId ?? undefined,
    }),
  });

  if (!response.ok) {
    throw new Error(`Bitey Backend HTTP ${response.status}`);
  }

  return response.json() as Promise<BiteyChatResponse>;
}

export async function biteyHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${BASE_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
}
