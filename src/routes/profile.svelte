
<script context="module">
    import { session } from "$app/stores";
    export async function load({session}){
        return {
            props: {
                user: session.user
            },
        }
    }
</script>
<script>
    export let user;
</script>

{#if user}
<h1>Welcome {user}</h1>
<a href="/logout">
    <button>Logout</button>
</a>
{:else}
<h1>Please login first.</h1>
{/if}