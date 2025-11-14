import { auth } from "./auth.ts"; // path to your auth file
import { svelteKitHandler } from "better-auth/svelte-kit";
import { building } from '$app/environment'
export async function handle({ event, resolve }) {

    const session = await auth.api.getSession({
        headers: event.request.headers,
    });


    console.log(session);
    if (session) {
        // @ts-ignore
        event.locals.session = session.session;
        // @ts-ignore
        event.locals.user = session.user;
    }

    return svelteKitHandler({ event, resolve, auth, building });
}