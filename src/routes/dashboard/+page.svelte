
<script lang="ts">
    import {authClient} from "$lib/auth-client.ts";

    const session = authClient.useSession();
</script>

<p>This page is protected!</p>
<p>Session: {JSON.stringify($session.data?.user)}</p>