import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  if (!appUrl) {
    return Response.json({ error: 'NEXT_PUBLIC_URL not configured' }, { status: 500 });
  }

  const accountAssociation = {
    header: 'eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ',
    payload: 'eyJkb21haW4iOiJuaWN3bi1iZXJsaW5pbmJsYWNrdGVzdGFwcC52ZXJjZWwuYXBwIn0',
    signature: 'MHgxNWE2OGM2ZWJiNzAwMDc0YWIxOTI2YmQ0Mzk0OWE2MjI3MTg4NTVmMmM3NTI4NjkxMGZjZGFjZTg5YTg5ZmJjNTZjY2E5ZWMwZGZkYjBlNmU1ZGNmNGU3YzNmNzFkZWRkMzJkNDExYjRjMzZlMDk4MWZhNTMwNTVhMDdkYjhhNTFj'
  };

  const frame = {
    version: "1",
    name: PROJECT_TITLE,
    iconUrl: `${appUrl}/icon.png`,
    homeUrl: appUrl,
    imageUrl: `${appUrl}/og.png`,
    buttonTitle: "Open",
    webhookUrl: `${appUrl}/api/webhook`,
    splashImageUrl: `${appUrl}/splash.png`,
    splashBackgroundColor: "#555555",
    primaryCategory: "social",
    tags: ["community", "resources", "berlin", "support", "help"]
  };

  return Response.json({
    accountAssociation,
    frame
  });
}
