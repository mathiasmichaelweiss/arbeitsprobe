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
        }
    }) 
</script>

<template>
    <div id="ScoreCardsView" class="mb-5" v-if="company">
        <div class="container">
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
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        justify-content: center;
        row-gap: 20px;
        column-gap: 20px;
    }
</style>