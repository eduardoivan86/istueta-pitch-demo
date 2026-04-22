import { NextRequest, NextResponse } from "next/server";

const VALID_SERVICES = [
  "Installation",
  "Repair",
  "Maintenance",
  "New Construction",
  "Emergency Service",
  "Inspection",
  "Other",
];

interface LeadData {
  name: string;
  email: string;
  phone: string;
  zip: string;
  service: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.zip || !body.service) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate service selection
    if (!VALID_SERVICES.includes(body.service)) {
      return NextResponse.json(
        { ok: false, error: "Invalid service selection" },
        { status: 400 }
      );
    }

    // Forward to webhook if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...body,
            timestamp: new Date().toISOString(),
            source: "istueta-pitch-demo",
          }),
        });

        if (!response.ok) {
          console.error("Webhook failed:", response.statusText);
        }
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
      }
    } else {
      console.log("Lead received (no webhook configured):", body);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
