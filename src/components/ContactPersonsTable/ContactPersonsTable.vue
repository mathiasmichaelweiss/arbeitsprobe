<script>
    import ContactCardVue from '../ui/ContactCard.vue';
    import { 
        BIconListUl,
        BIconColumnsGap,
        BIconTelephoneFill,
        BIconEnvelopeFill
    } from 'bootstrap-icons-vue';

    export default ({
        props: ['company'],
        name: 'ContactPersonsTable',
        data() {
            return {
                columnFilter: true,
                listFilter: false,
                filteredList: [],
                searchRequest: '',
                searchParam: 'name'
            };
        },
        components: {
            ContactCardVue,
            BIconListUl,
            BIconColumnsGap,
            BIconTelephoneFill,
            BIconEnvelopeFill
        },
        watch: {
            company() {
                this.filteredList = [];
            }
        },
        methods: {
            handleSearch() {
                if (this.searchParam === 'name') {
                    let regExp = new RegExp(this.searchRequest.toLowerCase(), 'g')
                    this.filteredList = this.company.contact_person.filter(c => c.name.toLowerCase().match(regExp));
                }

                if (this.searchParam === 'position') {
                    let regExp = new RegExp(this.searchRequest.toLowerCase(), 'g')
                    this.filteredList = this.company.contact_person.filter(c => c.position.toLowerCase().match(regExp));
                }

                if (this.searchParam === 'country') {
                    let regExp = new RegExp(this.searchRequest.toLowerCase(), 'g')
                    this.filteredList = this.company.contact_person.filter(c => c.office.toLowerCase().match(regExp));
                }

                if (this.searchParam === 'department') {
                    let regExp = new RegExp(this.searchRequest.toLowerCase(), 'g')
                    this.filteredList = this.company.contact_person.filter(c => c.department.toLowerCase().match(regExp));
                }
            },
            setFilter() {
                this.listFilter = !this.listFilter;
            }
        }
    }) 
</script>

<template>
    <div id="ContactPersonsTable" class="">
        <div class="container" v-if="company">
            <div class="table">
                <div class="title-filter d-flex w-100 justify-content-between">
                    <h2>Ansprechpartner</h2>
                    <div class="filter d-flex">
                        <div class="filterButton mr-1" v-bind:class="{active: listFilter}" v-on:click="setFilter()">
                            <BIconListUl />
                        </div>
                        <div class="filterButton mr-1" v-bind:class="{active: !listFilter}" v-on:click="setFilter()">
                            <BIconColumnsGap />
                        </div>
                        <input type="text" class="table-search mr-1" v-model="searchRequest" v-on:input="handleSearch">
                        <select name="searchParam" id="searchParam" v-model="searchParam" v-on:change="setSearchParam">
                            <option value="name">Name</option>
                            <option value="position">Position</option>
                            <option value="country">Land</option>
                            <option value="department">Abteilung</option>
                        </select>
                    </div>
                </div>
                <hr v-if="!listFilter"/>
                <table v-if="!listFilter">
                    <tr class="tr-header">
                        <th>
                            <p>Vorstand</p>
                        </th>
                        <th>
                            <p>Mitarbeiter</p>
                        </th>
                        <th>
                            <p>Leiter Einkauf</p>
                        </th>
                    </tr> 
                    <tr v-if="!listFilter">
                        <td>
                            <ContactCardVue 
                                v-for="
                                    (item, index) in filteredList.length <= 0 ? company.contact_person.filter(item => item.department === 'management') : filteredList.filter(item => item.department === 'management')
                                " 
                                :key="index" 
                                v-bind:color="'#386CAE'"
                                v-bind:name="item.name"
                                v-bind:departament="'Vorstand'"
                                v-bind:position="item.position"
                                v-bind:country="item.office"
                                v-bind:phone="item.phone"
                                v-bind:email="item.email"
                                v-bind:listFilter="listFilter"
                                v-bind:companyName="company.name"
                            />
                        </td>
                        <td>
                            <ContactCardVue 
                                    v-for="
                                        (item, index) in filteredList.length <= 0 ? company.contact_person.filter(item => item.department === 'employees') : filteredList.filter(item => item.department === 'employees')
                                    " 
                                    :key="index" 
                                    v-bind:color="'#386CAE'"
                                    v-bind:name="item.name"
                                    v-bind:departament="'Mitarbeiter'"
                                    v-bind:position="item.position"
                                    v-bind:country="item.office"
                                    v-bind:phone="item.phone"
                                    v-bind:email="item.email"
                                    v-bind:listFilter="listFilter"
                                    v-bind:companyName="company.name"
                            />
                        </td>
                        <td>
                            <ContactCardVue 
                                v-for="
                                    (item, index) in filteredList.length <= 0 ? company.contact_person.filter(item => item.department === 'Head of Purchasing') : filteredList.filter(item => item.department === 'Head of Purchasing')
                                " 
                                :key="index" 
                                v-bind:color="'#386CAE'"
                                v-bind:name="item.name"
                                v-bind:departament="'Leiter Einkauf'"
                                v-bind:position="item.position"
                                v-bind:country="item.office"
                                v-bind:phone="item.phone"
                                v-bind:email="item.email"
                                v-bind:listFilter="listFilter"
                                v-bind:companyName="company.name"
                            />
                            
                        </td>
                    </tr> 
                </table>

                <table v-if="listFilter" class="listFilter mt-3">
                    <tr class="tr-header">
                        <th>
                            <p class="mb-0">Name</p>
                        </th>
                        <th>
                            <p class="mb-0">Position</p>
                        </th>
                        <th>
                            <p class="mb-0">Land</p>
                        </th>
                        <th>
                            <p class="mb-0">Abteilung</p>
                        </th>
                        <th>
                            <p class="mb-0">Kontakte</p>
                        </th>
                    </tr> 
                    <tr v-for="
                        (item, index) of filteredList.length <= 0 ? company.contact_person : filteredList" 
                        :key="index"
                    >
                        <td class="d-flex align-items-center">
                            <img :src="item.avatar" alt="" class="mr-2 avatar"> {{item.name}}
                        </td>
                        <td>
                            {{item.position}}
                        </td>
                        <td class="d-flex justify-content-between">
                            {{item.office}} <img class="ml-2" :src=" item.office === 'Niederlande' ? 'https://worldofthetravel.ru/pictures/flagi-stran-mira-22px/Netherlands.png' : 'https://worldofthetravel.ru/pictures/flagi-stran-mira-22px/Germany.png'" alt="">
                        </td>
                        <td>
                            {{item.department === "management" ? "Vorstand" : item.department === "employees" ? "Mitarbeiter" : "Leiter Einkauf"
                            }}
                        </td>
                        <td class="d-flex justify-content-center">
                            <a :href="'tel:'+ item.phone">
                                <BIconTelephoneFill class="mr-4"/>
                            </a>
                            <a :href="'mailto:' + item.email">
                                <BIconEnvelopeFill />
                            </a>
                        </td>
                    </tr> 
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .listFilter tr {
        border-bottom: 1px solid rgba(0,0,0,.1);
        display: flex;
        align-items: center;
        color: #797979;
    }
    .listFilter td {
        min-width: 120px;;
    }
    .listFilter th {
        border: 1px solid rgba(0,0,0,.1);
    }
    .listFilter td a {
        color: #386CAE;
        font-size: 16px;
    }
    .table {
        padding: 15px;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        min-height: 250px;
    }
    table {
        position: relative;
        border: none;
        width: 100%;
    }
    th {
        border: none;
        width: 33%;
    }
    th p {
        font-weight: 400;
    }
    td {
        border: none;
        width: 33%;
        height: 100%;
    }
    .filterButton {
        font-size: 17px;
        color: #C4C4C4;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #C4C4C4;
        border-radius: 3px;
        cursor: pointer;
        transition: color 0.3s, background-color 0.3s;
    }
    .filterButton.active {
        color: #ffffff;
        border: 1px solid #386CAE;
        background-color: #386CAE;
    }
    .filterButton:hover {
        color: #ffffff;
        border: 1px solid #386CAE;
        background-color: #386CAE;
    }
    input.table-search, select {
        padding: 0.3rem;
        border: 1px solid #C4C4C4;
        border-radius: 3px;
    }
    .avatar {
        border-radius: 100%;
    }
</style>