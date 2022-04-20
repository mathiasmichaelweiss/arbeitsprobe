<script>
    import BarChart from './BarChart.vue';
    import ContactsInfo from './ContactsInfo.vue'
    import CompanySubinfo from './CompanySubinfo.vue';
    import { objectFilter } from '@/services/ObjectFilter.js'

    export default ({
        props: ['company'],
        name: 'CompanyInfo',
        data() {
            return {
                contactsFilter: [
                    'address',
                    'contacts',  
                    'client_id'
                ],
                subinfoFilter: [
                    'field', 
                    'search_term', 
                    'language',
                ],
                barChartFilter: [
                    'sales',
                    'sales_yearly'
                ]
            }
        },
        components: {
            BarChart,
            ContactsInfo,
            CompanySubinfo,
        },
        methods: {
            objectFilter
        },
    }) 

</script>

<template>
    <div id="company-info" class="mb-5">
        <div v-if="company" class="container">
            <h1>{{ company.name }}</h1>
            <div class="company-info-inner">
                <ContactsInfo v-bind:contacts="objectFilter(company, contactsFilter)"/>
                <CompanySubinfo v-bind:subinfo="objectFilter(company, subinfoFilter)"/>
                <BarChart v-bind:barChart="objectFilter(company, barChartFilter)"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        margin-bottom: 15px;
    }
    .company-info-inner {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
        background-color: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    }
</style>

