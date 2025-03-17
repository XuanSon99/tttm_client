<template>
    <v-app>
        <Header></Header>
        <slot />
        <Footer></Footer>
    </v-app>
</template>

<script>
import Header from './header'
import Footer from './footer'
export default {
    components: { Header, Footer }
}
</script>

<style>
.v-application {
    font-family: Inter, sans-serif;
    font-weight: 400;
    color: #fff;
    /* background: url("/img/background.svg") center top;
    background-size: cover; */
    background-image: linear-gradient(to right, #03204c33, #03204c33), url('/img/background.svg');
    background-size: cover;
    background-position: center, top;
    background-repeat: no-repeat, no-repeat;
}

.text-primary {
    color: #37ffac !important;
}

.theme--dark.v-tabs>.v-tabs-bar,
.theme--dark.v-tabs-items,
.v-table {
    background: none !important;
}

.v-data-table .v-table__wrapper>table>thead>tr>td,
.v-data-table .v-table__wrapper>table>thead>tr th,
.v-data-table .v-table__wrapper>table tbody>tr>td,
.v-data-table .v-table__wrapper>table tbody>tr th {
    background: none !important;
    font-size: 14px;
    height: 48px;
}

.item .v-btn--icon.v-btn--density-default {
    height: 38px;
    width: 38px;
}

.v-data-table__th--sortable {
    display: none;
}

.v-data-table td {
    color: #fff;
}
</style>