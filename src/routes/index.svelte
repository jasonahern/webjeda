<script context="module" lang="ts">

    export const load = ({session}) => {
        return {
            props: {
                session,
            }
        }
    }

</script>

<script lang="ts">
    export let session: string;
</script>

{JSON.stringify(session)}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
