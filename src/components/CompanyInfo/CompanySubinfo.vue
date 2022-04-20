 <script>
    export default ({
        props: ['subinfo'],
        name: 'CompanySubinfo',
    }) 
</script>

<template>
    <div v-if="subinfo" class="info d-flex flex-column justify-content-between">
        <div class="field">
            <span class="small medium-gray small-title">
                Branche
            </span>
            <p class="p-0">{{ subinfo.field }}</p>
        </div>
        <div class="field">
            <span class="small medium-gray small-title">
                Suchbegriff
            </span>
            <p class="p-0">{{ subinfo.search_term }}</p>
        </div>
        <div class="field">
            <span class="small medium-gray small-title">
                Sprache
            </span>
            <p class="p-0">{{ subinfo.language }}</p>
        </div>
    </div>
</template>

<style scoped>
    .info {
        padding-top: 42.59px;
        max-height: 250px;
    }
</style>

