<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";
</script>

<Router>
  <Route component={Home} />
  <Route path="/contact" component={About} />
  <Route path="/about" component={Contact} />
</Router>

<style>
</style>
