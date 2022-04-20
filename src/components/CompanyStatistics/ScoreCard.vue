<script>
    import { 
        BIconPersonFill,
        BIconClipboard2CheckFill,
        BIconCashCoin,
        BIconCoin
    } from 'bootstrap-icons-vue';

    export default ({
        props: ['card', 'persons'],
        name: 'ScoreCardsView',
        data() {
            return {
                cardStyle: {
                    backgroundColor: this.card.type === 'contactPerson' ? '#2A8CCD' : '#ffffff',
                    color: this.card.type === 'contactPerson' ? '#ffffff' : '#CB0D18',
                    border: this.card.type === 'contactPerson' ? 'none' : '1px solid #CB0D18',
                }
            };
        },
        components: {
            BIconPersonFill,
            BIconClipboard2CheckFill,
            BIconCashCoin,
            BIconCoin
        },
        created() {
            if (this.card.score > 0 && this.card.score <= 50 && this.card.type !== 'contactPerson') {
                this.cardStyle.color = '#FDB917';
                this.cardStyle.border = '1px solid #FDB917';
            } else if (this.card.score > 50 && this.card.type !== 'contactPerson') {
                this.cardStyle.color = '#EE7815';
                this.cardStyle.border = '1px solid #EE7815';
            }
        },
    }) 
</script>

<template>
    <div v-if="card" class="score-card d-flex flex-wrap align-items-between" v-bind:style="cardStyle">
        <BIconPersonFill class="person" v-if="card.type === 'contactPerson'"/>
        <BIconClipboard2CheckFill v-else-if="card.type === 'activities'"/>
        <BIconCoin v-else-if="card.type === 'opportunities'"/>
        <BIconCashCoin v-else/>
        <span class="biggest w-100 text-center">{{ card.type !== 'contactPerson' ? card.score : persons.length }}</span>
        <p class="w-100 text-center m-0">{{ card.text }}</p>
    </div>
</template>

<style scoped>
    .score-card {
        width: 48%;
        padding: 15px;
        height: 250px;
        border-radius: 5px;
        width: 100%;
        height: 115px;
    }
    svg {
        font-size: 16px;
    }
    .person {
        opacity: 0.5;
    }
</style>