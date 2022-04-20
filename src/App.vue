<script>
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';
  import CompanyInfo from '@/components/CompanyInfo/CompanyInfo.vue';
  import CompanyReference from '@/components/CompanyReference/CompanyReference.vue'
  import * as data from "@/assets/data.json"
  import ScoreCardsView from './components/CompanyStatistics/ScoreCardsView.vue';
  import ContactPersonsTable from './components/ContactPersonsTable/ContactPersonsTable.vue';

  export default {
    name: 'App',
    data() {
      return {
        user: false,
        companies: false,
        company: false,
      }
    },
    components: {
    HeaderComponent,
    CompanyInfo,
    CompanyReference,
    ScoreCardsView,
    ContactPersonsTable
},  
    methods: {
      setCompany(newData) {
        this.company = data.default.companies.filter(c => c.client_id == newData)[0];
      }
    },
    mounted() {
        this.user = data.default.user;
        this.company = data.default.companies[0];
        this.companies = data.default.companies;
    },
  }
</script>

<template>
  <div id="app">
    <HeaderComponent v-bind:user="user" v-bind:companies="companies" v-on:setCompany="setCompany"/>
    <CompanyInfo v-bind:company="company"/>
    <CompanyReference v-bind:company="company"/>
    <ScoreCardsView v-bind:company="company"/>
    <ContactPersonsTable v-bind:company="company"/>
  </div>
</template>

<style>
  @import "./assets/base.css";    
</style>
