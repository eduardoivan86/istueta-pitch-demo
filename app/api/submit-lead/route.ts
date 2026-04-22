import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    const { name, email, phone, zip, service } = body;
    
    if (!name || !email || !phone || !zip || !service) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Forward to webhook if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            zip,
            service,
            timestamp: new Date().toISOString(),
            source: "istueta-pitch-demo",
          }),
        });
      } catch (webhookError) {
        // Log error but don't fail the request (demo reliability)
        console.error("Webhook forwarding failed:", webhookError);
      }
    }

    // Always return success for demo reliability
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
