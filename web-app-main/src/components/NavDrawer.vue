<template>
    <v-navigation-drawer
        v-model="drawer"
        width="300">
        <template #prepend>
            <v-row class="px-4 pt-4">
                <v-col cols="12">
                    <div class="text-h6 mb-3">Attendance Manager</div>
                    <div class="text-subtitle-2">Attendance Manager is where you can generate, add, edit, and export the logs of the employees.</div>
                </v-col>

                <v-col cols="12">
                    <v-list>
                        <v-list-item
                            link
                            class="text-subtitle-2 my-1"
                            style="background-color: #E6FFEE;">
                            <v-icon class="mr-2" color="success">mdi-calendar-clock-outline</v-icon>
                            Attendance Logs
                        </v-list-item>
                        <v-list-item
                            link
                            class="text-subtitle-2 my-1">
                            <v-icon class="mr-2" color="grey">mdi-layers-triple-outline</v-icon>
                            Batch Add
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
            <v-divider></v-divider>
        </template>
        
        <template #append>
            <v-divider></v-divider>
            <v-row class="pa-4" no-gutters>
                <v-btn
                    block
                    class="text-capitalize mb-4"
                    color="green-darken-2">
                    <v-icon class="mr-2">mdi-magnify</v-icon>
                    Search
                </v-btn>
                
                
                <v-btn
                    block
                    variant="outlined"
                    class="text-capitalize">
                    <v-icon class="mr-2">mdi-tray-arrow-down</v-icon>
                    Export
                </v-btn>
            </v-row>
        </template>

        <v-row class="pa-4">
            <v-col cols="12" class="grey-text text-subtitle-2 pb-1">
                DATE RANGE
            </v-col>
            <v-col cols="12">
                <v-text-field
                    v-model="store.filter.from"
                    label="Date From"
                    density="compact"
                    hide-details
                    type="date"
                    variant="outlined"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    v-model="store.filter.to"
                    label="Date To"
                    density="compact"
                    hide-details
                    type="date"
                    variant="outlined"
                ></v-text-field>
            </v-col>
            
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col cols="6" class="grey-text text-subtitle-2 pb-1">
                        FILTERS
                    </v-col>
                    <v-col cols="6" align="end">
                        <v-btn
                            size="small"
                            color="light-blue-darken-2"
                            variant="text"
                            class="text-capitalize font-weight-bold"
                            @click="showFilters = !showFilters">
                            {{
                                !showFilters ? 'Show All' : 'Hide All'
                            }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" v-if="showFilters">
                <v-row>
                    <v-col cols="12">
                        <v-select
                            v-model="store.filter.company"
                            :items="companyList"
                            label="Company"
                            placeholder="Select Company"
                            density="compact"
                            hide-details
                            variant="outlined"
                        ></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-select
                            v-model="store.filter.department"
                            :items="[]"
                            label="Department"
                            density="compact"
                            hide-details
                            variant="outlined"
                        ></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-select
                            v-model="store.filter.location"
                            :items="[]"
                            label="Location"
                            density="compact"
                            hide-details
                            variant="outlined"
                        ></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-select
                            v-model="store.filter.employee"
                            :items="[]"
                            label="Employee"
                            density="compact"
                            hide-details
                            variant="outlined"
                        ></v-select>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" v-else>
                <v-row no-gutters>
                    <v-col cols="12" class="pb-1">
                        <v-icon class="mr-2" color="grey">mdi-domain</v-icon> <span class="text-uppercase text-body-2 text-grey-darken-4"> {{ store.filter.company ? store.filter.company : 'All' }} </span>
                    </v-col>
                    <v-col cols="12" class="pb-1">
                        <v-icon class="mr-2" color="grey">mdi-account-group-outline</v-icon> <span class="text-uppercase text-body-2 text-grey-darken-4"> {{ store.filter.department ? store.filter.department : 'All' }} </span>
                    </v-col>
                    <v-col cols="12" class="pb-1">
                        <v-icon class="mr-2" color="grey">mdi-map-marker-outline</v-icon> <span class="text-uppercase text-body-2 text-grey-darken-4"> {{ store.filter.location ? store.filter.location : 'All' }} </span>
                    </v-col>
                    <v-col cols="12">
                        <v-icon class="mr-2" color="grey">mdi-account-outline</v-icon> <span class="text-uppercase text-body-2 text-grey-darken-4"> {{ store.filter.employee ? store.filter.employee : 'All' }} </span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../store'

const drawer = true
const showFilters = ref(false)

const companyList = ['Mcdollibee', 'Mang Inasar', 'Chowqueen']
</script>