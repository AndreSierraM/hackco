import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, workEmail, problemDescription } = body;

    // Minimum validation
    if (!name || !company || !workEmail || !problemDescription) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios para evaluar el reto." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "El correo electrónico no tiene un formato válido." },
        { status: 400 }
      );
    }

    // In production, dispatch to webhook / CRM / Slack if configured in env
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } catch {
        // Failed webhook dispatch, non-blocking
      }
    }

    return NextResponse.json({
      success: true,
      message: "Reto recibido correctamente para evaluación técnica.",
      leadId: body.id || `lead_${Date.now()}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    );
  }
}
