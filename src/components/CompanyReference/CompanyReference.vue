<script>
    import ContactCardVue from '../ui/ContactCard.vue';

    export default ({
        props: ['company'],
        name: 'CompanyReference',
        data() {
            return {
                responsibility: []
            };
        },
        components: {
            ContactCardVue
        }
    }) 
</script>

<template>
    <div id="CompanyReference" class="mb-5">
        <div class="container d-flex flex-wrap justify-content-between" v-if="company">
            <div class="crefItem d-flex flex-wrap justify-content-between" v-if="company.responsibility">
                <h2 class="w-100">Zuständligkeit</h2>
                <hr class="w-100"/>
                <ContactCardVue 
                    v-for="(item, index) in company.responsibility" 
                    :key="index" 
                    v-bind:title="item.title" 
                    v-bind:name="item.name"
                    v-bind:phone="item.phone"
                    v-bind:email="item.email"
                />
            </div>
            <div class="crefItem" v-if="company.remark">
                <h2 class="mb-3">Bemerkung</h2>
                <p>Portfolio des Kunden:</p>
                <ul class="mb-3">
                    <li v-for="(item, index) in company.remark.portfolio" :key="index" class="ml-4 mb-1">{{ item }}</li>
                </ul>
                <p class="mb-3">
                    Anzahl MA: {{ company.remark.MA }} mit einem Umsatz von {{ company.remark.turnover }} Mrd EUR
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .crefItem {
        width: 48%;
        padding: 15px;
        background-color: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        min-height: 250px;
    }
    .card-item-title {
        margin-bottom: 30px;
    }
    .card {
        width: 240px;
        height: 140px;
        filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.07));
        border: none;
        padding: 10px 14px;
        position: relative;
        overflow: hidden;
    }
    .contacts svg {
        font-size: 16px;
        color: #EEEEEE;
        cursor: pointer;
        transition: color 0.5s;
    }
    .contacts svg:hover {
        color: #4EAD2E;
    }
    .card::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 7px;
        height: 100%;
        background-color: #4EAD2E;
    }
    .card img {
        width: 45px;
    }
    .name {
        font-size: 16px;
        margin-bottom: 7px;
    }
    @media (max-width: 991px) {
        .crefItem {
            width: 100%;
        }
        .crefItem:first-child {
            margin-bottom: 3rem;
        }
    }
</style>