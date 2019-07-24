<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-search ref="searchBox" @query="onQueryChange"></v-search>
    </div>
  </div>
</template>

<script>
import search from '@/components/search';

export default {
  components: {
    'v-search': search,
  },
};
</script>

<style>

</style>
