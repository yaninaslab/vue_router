<template>
    <div>
        <page-header></page-header>
<h1>Breweries</h1>
<section class="breweries">
 <article v-for="brewery in breweries" :key="brewery.id">
        <h4>{{ brewery.brewery_type }}</h4>
        <h4>{{ brewery.name }}</h4>
        <h6>{{ brewery.state }}</h6>
</article></section>
    </div>
</template>

<script>
import axios from 'axios';
import PageHeader from '@/components/PageHeader.vue'
    export default {
        name: "brewery-page",
        components: {
            PageHeader,
        },
        mounted () {
            this.get_info();
        },
        methods: {
            get_info() {
      axios.request({
    
          url: "https://api.openbrewerydb.org/breweries"

      }).then((response) => {
          this.breweries = response.data;
      }).catch((error) => {
          error;

      });
  }
        },
        data() {
            return {
                breweries: []
            }
        },
    }
</script>

<style scoped>
.breweries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
}
article {
    border: solid;
}
</style>