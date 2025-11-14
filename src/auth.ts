import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";
import {db} from "$lib/server/db";
import {genericOAuth} from "better-auth/plugins";
import { AUTHENTIK_CLIENT_ID, AUTHENTIK_CLIENT_SECRET, AUTHENTIK_DISCOVERY_URL, BETTER_AUTH_SECRET, BETTER_AUTH_URL } from "$env/static/private";
import {sveltekitCookies} from "better-auth/svelte-kit";
import {getRequestEvent} from "$app/server";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg"
    }),
    plugins: [
        genericOAuth({
            config: [
                {
                    providerId: "authentik",
                    clientId: AUTHENTIK_CLIENT_ID,
                    clientSecret: AUTHENTIK_CLIENT_SECRET,
                    discoveryUrl: AUTHENTIK_DISCOVERY_URL,
                    scopes: ["openid", "profile", "email"],
                }
            ]
        }),
        sveltekitCookies(getRequestEvent)
    ]
});