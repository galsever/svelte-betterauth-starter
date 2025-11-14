<script lang="ts">

import {authClient} from "$lib/auth-client.ts";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={async () => {
    const { data, error } = await authClient.signIn.oauth2({
    providerId: "authentik", // required
    callbackURL: "/dashboard",
    disableRedirect: false,
    requestSignUp: false,
});
}}>Sign In</button>