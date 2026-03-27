exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const body = JSON.parse(event.body);

  // Estrai system prompt e messaggio utente dal formato Anthropic
  const systemPrompt = body.system || '';
  const userMessage = body.messages?.[0]?.content || '';

  const geminiBody = {
    system_instruction: { parts: [{ text: systemPrompt }] },
    contents: [{ role: 'user', parts: [{ text: userMessage }] }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1500,
    },
    tools: [{ google_search: {} }]
  };

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody)
    }
  );

  const data = await response.json();

  // Estrai il testo dalla risposta Gemini
  let text = '';
  try {
    text = data.candidates?.[0]?.content?.parts
      ?.filter(p => p.text)
      ?.map(p => p.text)
      ?.join('') || '';
  } catch (e) {
    text = '';
  }

  // Restituisci nel formato che si aspetta index.html
  const anthropicStyleResponse = {
    content: [{ type: 'text', text }]
  };

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(anthropicStyleResponse)
  };
};
