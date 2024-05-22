<template>
    <v-app-bar density="comfortable" elevation="0" height="76" color="#333333">
        <template #prepend>
            <v-img src="/logo.png" height="38" width="auto"></v-img>
        </template>
        
        <template #default>
            <v-btn v-for="(item, key) in menus" :key="key"
                class="text-capitalize font-weight-light">
                {{ item }}
                <v-icon class="ml-1">mdi-menu-down</v-icon>
            </v-btn>
        </template>

        <template #append>
            <v-row style="width: 400px;">
                <v-col cols="7">
                    <v-text-field
                        placeholder="Search Employee..."
                        density="compact"
                        hide-details
                        variant="outlined"
                        theme="dark"
                        append-inner-icon="mdi-magnify"
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-btn variant="text"
                        color="light-blue-lighten-1"
                        class="text-capitalize font-weight-light">
                        <template #prepend>
                            <v-avatar
                                rounded="5"
                                size="35"
                                class="mr-2">
                                <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
                            </v-avatar>
                        </template>
                        Admin
                        <v-icon>mdi-menu-down</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
const menus = ['My Requests', 'My Team', 'Company', 'Administration Tools', 'Maintenance']
</script>