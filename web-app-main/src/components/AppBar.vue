<template>
    <v-app-bar density="comfortable" elevation="0">
        <template #prepend>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <span class="font-weight-bold">this</span>
        </template>

        <!-- <template #append>
            <v-btn
                icon
                class="mx-1"
                density="comfortable"
                @click="theme = theme === 'light' ? 'dark' : 'light'"
            >
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
            
            <v-menu
                v-model="menu_notification"
                :close-on-content-click="false"
                location="bottom"
            >
                <template #activator="{ props }">
                    <v-btn
                        v-bind="props"
                        icon
                        class="mx-1"
                        density="comfortable">
                        <v-badge v-if="countNotification"
                            color="error"
                            :content="countNotification">
                            <v-icon>mdi-bell-outline</v-icon>
                        </v-badge>
                        <v-icon v-else>mdi-bell-outline</v-icon>
                    </v-btn>
                </template>

                <v-card width="350">
                    <v-list density="compact" class="pa-0">
                        <v-list-subheader v-if="notificationList.length"
                            class="text-body-2 font-weight-bold my-2"
                            :color="theme == 'dark' ? 'white' : 'black'">
                            Notifications
                        </v-list-subheader>
                        <v-divider v-if="notificationList.length"></v-divider>

                        <template v-for="(item, key) in notificationList" :key="key">
                            <v-list-item class="text-caption text-grey">
                                <template v-slot:prepend>
                                    <v-avatar
                                        size="x-small"
                                        :color="materialColors[key]">
                                        {{ getInitial(item?.name) }}
                                    </v-avatar>
                                </template>
                                {{ item?.name }} haven't return the pass keys of {{ item?.passKeyNumber }}
                            </v-list-item>
                            <v-divider v-if="key < (notificationList.length-1)"></v-divider>
                        </template>
                        <v-list-item v-if="!notificationList.length"
                            class="text-subtitle-2 my-1 text-center"
                            subtitle="No notification">
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>


            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                location="bottom"
            >
                <template #activator="{ props }">
                    <v-btn variant="text" v-bind="props">
                        <template #append>
                            <v-icon>{{
                                props["aria-expanded"] === "false"
                                    ? "mdi-chevron-down"
                                    : "mdi-chevron-up"
                            }}</v-icon>
                        </template>
                        {{ currentUser.givenName }}
                    </v-btn>
                </template>

                <v-card width="350">
                    <v-list density="compact" class="pa-0">
                        <v-list-item class="mt-2" :subtitle="currentUser.email">
                            <template #title>
                                <span class="font-weight-bold">
                                    {{ currentUser.givenName }}
                                    {{ currentUser.surname }}
                                </span>
                            </template>
                        </v-list-item>

                        <v-divider class="mt-4"></v-divider>
                    </v-list>
                    <v-card-text>
                        <span
                            class="font-weight-bold text-primary pointer-cursor nuxt-link"
                            @click="
                                useRouter().push({
                                    name: 'logout',
                                })
                            "
                        >
                            Sign Out
                        </span>
                    </v-card-text>
                </v-card>
            </v-menu>
        </template> -->
    </v-app-bar>
</template>

<script setup lang="ts">
const drawer = true
</script>