<script>
    import { 
        BIconTelephoneFill,
        BIconEnvelopeFill
    } from 'bootstrap-icons-vue';

    export default ({
        props: [
                'title', 
                'name', 
                'color', 
                'departament', 
                'position', 
                'country', 
                'phone', 
                'email', 
                'listFilter', 
                'companyName'
        ],
        name: 'ContactCard',
        components: {
            BIconTelephoneFill,
            BIconEnvelopeFill
        },
    }) 
</script>

<template>
    <div class="card-item">
        <p class="card-item-title" v-if="title">
            {{ title }}
        </p>
        <div :class="color ? 'card blueCard' : 'card'">
            <p class="name">{{ name }}</p>
            <hr class="mb-1"/>
            <div class="icon w-100 d-flex">
                <div v-if="departament || position || country" class="info">
                    <p :title="departament" class="text-left m-1">{{ departament }}</p>
                    <p :title="position" class="text-left m-1">{{ position }}</p>
                    <p :title="companyName + ' ' + country" class="text-left m-1">{{ companyName }} {{ (companyName + country).length >= 34 ? country.slice(0, 5) + '...' : country }}</p>
                </div>
                <img v-if="!color" src="../../assets/icons/person-fill.svg" alt="">
                <img v-else src="../../assets/icons/person-fill-blue.svg" alt="">
            </div>
            <hr class="mt-1"/>
            <div class="contacts d-flex">
                <a :href="'tel:'+ phone">
                    <BIconTelephoneFill class="mr-4"/>
                </a>
                <a :href="'mailto:' + email">
                    <BIconEnvelopeFill />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card-item-title {
        margin-bottom: 30px;
    }
    .card-item-title:nth-child(1) {
        margin-top: 1rem;
    }
    .card, .blueCard {
        filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.07));
        border: none;
        padding: 10px 14px;
        position: relative;
        overflow: hidden;
        border-radius: 5px;
    }
    .card {
        width: 240px;
        min-height: 140px;
    }
    .blueCard {
        width: 95%;
        margin-bottom: 2rem;
    }
    .contacts svg {
        font-size: 16px;
        color: #EEEEEE;
        cursor: pointer;
        transition: color 0.5s;
    }
    .card .contacts svg:hover {
        color: #4EAD2E;
    }
    .blueCard .contacts svg:hover {
        color: #2d5589;
    }
    .blueCard .contacts svg {
        color: #386CAE;
    }
    .card::before, .blueCard::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 7px;
        height: 100%;
    }
    .card::before {
        background-color: #4EAD2E;
    }
    .blueCard::before {
        background-color: #386CAE;
    }
    .card img, .blueCard img {
        width: 45px;
    }
    .name {
        font-size: 16px;
        margin-bottom: 7px;
    }
    .icon {
        justify-content: end;
        color: #C4C4C4;
    }
    .info, .info p {
        width: 100%;
    }
    hr {
        width: 85%;
    }
</style>