<script>
    import VueApexCharts from 'vue3-apexcharts'
    import currencyFilter from '@/services/currencyFilter';

    export default ({
        props: ['barChart'],
        name: 'BarChart',
        data() {
            return {
                options: {
                    chart: {
                        type: 'bar',
                        id: 'vuechart-example',
                        selection: {
                            enabled: false
                        },
                        zoom: {
                            enabled: true,
                        },
                        toolbar: {
                            show: true,
                            offsetX: 0,
                            offsetY: 0,
                            tools: {
                                download: true,
                                selection: false,
                                zoom: true,
                                zoomin: true,
                                zoomout: true,
                                pan: true,
                                reset: true,
                                customIcons: []
                            }
                        },
                        autoSelected: 'zoom' 
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: this.barChart.sales_yearly.map(item => item.year),
                        axisTicks: {
                            show: false,
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },  
                    colors: ['#1452A0'],
                },
                series: [{
                    name: 'sales in €',
                    data: this.barChart.sales_yearly.map(item => item.sales)
                }]
            }
        },
        components: {
            VueApexCharts
        },
        created() {
        },
        mounted() {
        },
        methods: {
            currencyFilter,
        },
        beforeUpdate() {
            this.series = [{name: 'sales in €', data: this.barChart.sales_yearly.map(item => item.sales)}];
        },
    }) 
</script>

<template>
    <div id="bar-chart">
        <h2 class="title mb-4">Auftragseingang / Umsatz</h2>
        <span class="small small-title">Gesamt</span>
        <h2>{{currencyFilter(barChart.sales)}}</h2>
        <VueApexCharts ref="chart" heigth="200" width="300" type="bar" :options="options" :series="series"/>
    </div>
</template>

<style scoped>

</style>