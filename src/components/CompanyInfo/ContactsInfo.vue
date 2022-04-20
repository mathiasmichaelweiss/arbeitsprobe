 <script>
    import { 
        BIconTelephoneFill, 
        BIconPhone,
        BIconEnvelopeFill,
        BIconGlobe,
    } from 'bootstrap-icons-vue';

    export default ({
        props: ['contacts'],
        name: 'ContactsInfo',
        components: {
            BIconTelephoneFill,
            BIconPhone,
            BIconEnvelopeFill,
            BIconGlobe,
        }
    }) 
</script>

<template>
    <div v-if="contacts" class="contancts">
        <h2 class="title mb-4">Auftraggeber / {{contacts.client_id}}</h2>
        <div class="address mb-4">
            <p class="street mb-2">{{ contacts.address.street }}</p>
            <p class="zip-city mb-2">{{ contacts.address.zip_code }} {{ contacts.address.city }}</p>
            <p class="country mb-2">{{ contacts.address.country }}</p>
        </div>
        <div class="contacts-items">
            <a href="#" class="mobile contacts-item mb-2">
                <BIconPhone/><p class="mb-0 ml-2">{{ contacts.contacts.mobile }}</p>
            </a>
            <a href="#" class="landline contacts-item mb-2">
                <BIconTelephoneFill/><p class="mb-0 ml-2">{{ contacts.contacts.landline }}</p>
            </a>
            <a :href="`mailto:${contacts.contacts.email}`" class="email contacts-item mb-2">
                <BIconEnvelopeFill/><p class="mb-0 ml-2">{{ contacts.contacts.email }}</p>
            </a>
            <a :href="`${contacts.contacts.website}`" target="_blank" class="landline contacts-item">
                <BIconGlobe/><p class="mb-0 ml-2">{{ contacts.contacts.website }}</p>
            </a>
        </div>
    </div>
</template>

<style scoped>
    .contacts-items {
        align-self: flex-end;
    }
    .contacts-item {
        display: flex;
        align-items: center;
        color: #1452A0;
    }
    .contacts-item svg {
        width: 18px;
        height: 18px;
    }
</style>

