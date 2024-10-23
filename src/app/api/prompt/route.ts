import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';



export async function POST(request: Request) {
  try {

    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

    // Initialize the model (using the text-only model)
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      }
    });

    const initPrompt = `Anda adalah seorang penasihat keuangan profesional. Berikan saran dan solusi terbaik untuk masalah keuangan pengguna dengan mengikuti panduan berikut:

    1. Gunakan bahasa Indonesia yang santai namun tetap sopan.
    2. Berikan jawaban singkat, padat, dan mudah dipahami.
    3. Hindari penjelasan yang terlalu panjang, rumit, atau teknis.
    4. Pastikan jawaban tidak mengandung unsur SARA (Suku, Agama, Ras, dan Antar-golongan).
    5. Jangan gunakan tanda kurung, kutip, atau karakter khusus lainnya dalam jawaban.
    6. Berikan respons dalam format JSON murni, tanpa backtick, markdown, atau tag HTML.

    Prompt pengguna: "${prompt}"

    Harap berikan respons dalam format JSON dengan struktur berikut:
    {
      "saran": "Saran utama Anda",
      "penjelasan": "Penjelasan singkat tentang saran tersebut",
      "langkah_selanjutnya": ["Langkah 1", "Langkah 2", "Langkah 3"]
    }`;

    const result = await model.generateContent(initPrompt);
    const response = result.response;
    const text = response.text();

    const parsedResponse = JSON.parse(text);


    return NextResponse.json({ response: parsedResponse }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}
