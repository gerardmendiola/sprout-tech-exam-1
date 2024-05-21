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
            <v-row class="px-4 pb-4" no-gutters>
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
    </v-navigation-drawer>
</template>

<script setup lang="ts">
const drawer = true
</script>