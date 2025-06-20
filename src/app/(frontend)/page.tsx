import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import config from "@/payload.config";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl p-8">
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
        <div className="flex gap-8">
          <a
            className="text-purple-500"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank">
            Go to admin panel
          </a>
          <a
            className="text-red-500"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank">
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
