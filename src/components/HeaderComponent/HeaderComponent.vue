<script>
    import { BIconHouse, BIconBriefcase } from 'bootstrap-icons-vue';

    export default ({
        props: ['user', 'companies'],
        name: 'HeaderComponent',
        data() {
            return {
                searchRequest: ''
            }
        },
        components: {
            BIconHouse,
            BIconBriefcase,
        },
        mounted() {
        },
        methods: {
            setCompany() {
                this.$emit('setCompany', this.searchRequest)
            },
        },
    }) 

</script>

<template>
    <div id="HeaderComponent">
        <div class="container">
            <header>
                <div v-if="user" class="header-inner">
                    <div class="logo-menu justify-content-between">
                        <div class="logo d-flex justify-content-between">
                            <img src="@/assets/logo.svg" alt="">
                            <h2 class="green bold ml-3 mb-0 d-flex align-items-center">sales</h2>
                        </div>
                        <div class="menu d-flex align-items-center">
                            <a href="#" class="mr-4"><BIconHouse/></a>
                            <a href="#"><BIconBriefcase/></a>
                        </div>
                    </div>
                    <div class="search-user d-flex flex-wrap">
                        <div class="search">
                            <select ref="select" name="searchParam" id="searchParam" v-model="searchRequest" v-on:change="setCompany">
                                <option v-for="(item, index) in companies" :key="index" :value="item.client_id">{{ item.name }}</option>
                            </select>
                        </div>
                        <div class="name-avatar d-flex">
                            <div class="text-content d-flex">
                                <p class="bold mb-0">{{ user.name }}</p>
                                <p class="status mb-0">{{ user.status }}</p>
                            </div>
                            <img :src="`${user.avatar}`" alt="" class="ml-2 avatar">
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<style scoped>
    #HeaderComponent {
        width: 100%;
        height: 60px;
        background-color: #ffffff;
        margin-bottom: 15px;
    }
    header {
        width: 100%;
        height: 100%;
    }
    header .header-inner {
        width: 100%;
        height: 100%;
        display: flex;    
        justify-content: space-between;
        align-items: center;
    }
    .logo-menu , .search-user {
        display: flex;
        width: 20%;
        display: flex;
    }
    .logo-menu {
        min-width: 180px;
    }
    .search-user {
        min-width: 200px;
        justify-content: space-between;
        width: 35%;
    }
    .menu {
        font-size: 20px;
        width: 50%;
    }
    .avatar {
        border-radius: 50%;
    }
    .status {
        text-align: end;
    }
    .text-content {
        flex-direction: column;
    }
    .search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        color: #C8C5C5;
        position: relative;
        width: 62%;
    }
    .search svg {
        position: absolute;
        z-index: 100;
        right: 0;
        cursor: pointer;
    }
    .search select {
        appearance: none;
        background: url('../../assets/icons/search.svg') no-repeat right;
        width: fit-content;
        padding: 0.3rem;
        padding-right: 1.5rem;
        color: #C4C4C4;
    }
</style>

