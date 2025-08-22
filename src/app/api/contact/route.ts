import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Зчитуємо дані з запиту
    const body = await req.json();
    const { name, email, phone, service, message, date } = body;

    // 2. Перевіряємо, чи всі обов’язкові поля заповнені
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Заповніть усі обов’язкові поля." },
        { status: 400 }
      );
    }

    // 3. Зчитуємо токен і chat_id з .env.local
    const token = process.env.TELEGRAM_BOT_TOKEN!;
    const chatId = process.env.TELEGRAM_CHAT_ID!;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Не налаштовані змінні оточення." },
        { status: 500 }
      );
    }

    // 4. Формуємо повідомлення для Telegram
    const text =
      `Нове замовлення:\n` +
      `Ім'я: ${name}\n` +
      `Email: ${email}\n` +
      `Телефон: ${phone}\n` +
      `Послуга: ${service}\n` +
      (date ? `Дата: ${new Date(date).toLocaleDateString("uk-UA")}\n` : "") +
      (message ? `Повідомлення: ${message}\n` : "");

    // 5. Відправляємо POST-запит до Telegram API
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramRes.ok) {
      const errorText = await telegramRes.text();
      throw new Error(`Telegram API error: ${errorText}`);
    }

    // 6. Повертаємо відповідь успіху
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Помилка при обробці форми:", err);
    return NextResponse.json(
      { error: "Не вдалося надіслати повідомлення." },
      { status: 500 }
    );
  }
}
