<script lang="ts">
  import { onMount } from "svelte";
  import { api } from "../api/api";

  let message: string;

  export const getMessage = async () => {
    try {
      const response = await api.get("/");

      message = response.data.message;
    } catch (e) {
      throw e;
    }
  };

  onMount(async () => {
    getMessage();
  });
</script>

<main>
  <h1>Dá uma sugada aqui ó</h1>
  {#if message !== ""}
    {message}
  {/if}
</main>
