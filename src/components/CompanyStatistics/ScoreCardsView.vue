<script>
    import ScoreCard from './ScoreCard.vue';

    export default ({
        props: ['company'],
        name: 'ScoreCardsView',
        data() {
            return {
                card: {
                    backgroundColor: '#2A8CCD',
                    color: '#ffffff',
                    border: 'none',
                }
            };
        },
        components: {
            ScoreCard
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    }) 
</script>

<template>
    <div id="ScoreCardsView" class="mb-5" v-if="company">
        <div class="container d-flex justify-content-between">
            <ScoreCard 
                v-for="(item, index) of company.scorecards"
                :key="index"
                v-bind:card="item"
                v-bind:persons="company.contact_person"
            />
        </div>
    </div>
</template>

<style scoped>
</style>