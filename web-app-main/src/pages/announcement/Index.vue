<template>
    <v-row class="pa-5">
      <v-col cols="12" class="pa-4">
        <v-row justify="space-between">
          <v-col cols="8">
            <div class="text-h6 font-weight-bold">Announcements</div>
            <div class="text-body-1">View, create, or edit announcements for all employees of your company.</div>
          </v-col>
          <v-col cols="4" align="end">
            <v-btn
              color="green">
              <v-icon>mdi-plus</v-icon>
              Post an Announcement
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col cols="8">
                <v-btn
                  variant="tonal"
                  color="green"
                  rounded="xl"
                  class="red text-green-darken-3 font-weight-bold">
                  <v-chip size="x-small" class="mr-1">
                    10
                  </v-chip>
                  All
                </v-btn>
                
                <v-btn
                  variant="text"
                  color="orange"
                  rounded="xl"
                  class="text-green-darken-3 font-weight-bold">
                  <v-chip size="x-small" class="mr-1">
                    10
                  </v-chip>
                  <span class="text-black">Drafts</span>
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-select
                  label="Filter by"
                  :items="[]"
                  density="compact"
                  hide-details
                  variant="outlined"
                ></v-select>
              </v-col>
              <v-col cols="2">
                <v-text-field
                    label="Search..."
                    density="compact"
                    hide-details
                    variant="outlined"
                    append-inner-icon="mdi-magnify"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text>
            <v-divider></v-divider>
            <v-data-table
              :page="currentPage"
              :headers="headers"
              :items="store.announcementItems"
              :items-per-page="itemsPerPageData">
  
              <template v-slot:item="{ item }">
                <tr>
                  <td>
                    {{ item.title }}
                  </td>
                  <td>
                    {{ item.message }}
                  </td>
                  <td>
                    {{ item.sentBy }}
                  </td>
                  <td>
                    <v-icon class="mr-2">mdi-facebook</v-icon>
                    <v-icon class="mr-2">mdi-twitter</v-icon>
                    <v-icon class="mr-2">mdi-linkedin</v-icon>
                    <v-icon>mdi-google</v-icon>
                  </td>
                  <td>
                    {{ item.dateCreated}}
                  </td>
                  <td>
                    <div>{{ item.startDate }}</div>
                    <div class="text-grey text-caption">{{ item.startTime }}</div>
                  </td>
                  <td>
                    <div>{{ item.endDate }}</div>
                    <div class="text-grey text-caption">{{ item.endTime }}</div>
                  </td>
                </tr>
              </template>
  
              <template v-slot:bottom="{ page, itemsPerPage, pageCount }">
                <v-row>
                  <v-col cols="12">
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="4">
                    <span style="position: relative; top: 6px;">Items per page</span>
                    <v-select
                      v-model="itemsPerPageData"
                      :items="[5,10,20,50,100]"
                      density="compact"
                      hide-details
                      class="overrideItemPerPage"
                      variant="outlined"
                    ></v-select>
                  </v-col>
  
                  <v-col cols="4">
                    <v-btn
                      density="compact"
                      variant="text"
                      icon
                      style="position: relative; top: 4px;"
                      :disabled="page == 1"
                      @click="currentPage = 1">
                        <v-icon size="small" color="success">mdi-rewind</v-icon>
                    </v-btn>
                    
                    <v-btn
                      density="compact"
                      variant="text"
                      icon
                      style="rotate: 180deg; position: relative; top: 4px;"
                      :disabled="page == 1"
                      @click="currentPage--">
                        <v-icon size="small" color="success">mdi-play</v-icon>
                    </v-btn>
                    
                    <span style="position: relative; top: 5px;">Page</span>
                    
                    <v-text-field
                      v-model="currentPage"
                      density="compact"
                      hide-details
                      class="overrideCurrentPage"
                      variant="outlined"
                      :disabled="pageCount == 1"
                    ></v-text-field>
  
                    <span style="position: relative; left: 70px; top: 5px;">of {{ pageCount }}</span>
  
                    <v-btn
                      density="compact"
                      variant="text"
                      icon
                      class="ml-2"
                      style="position: relative; left: 70px; top: 4px;"
                      :disabled="page >= pageCount"
                      @click="currentPage++">
                        <v-icon size="small" color="success">mdi-play</v-icon>
                    </v-btn>
                    
                    <v-btn
                      density="compact"
                      variant="text"
                      icon
                      style="position: relative; left: 70px; top: 4px;"
                      :disabled="page >= pageCount"
                      @click="currentPage = pageCount">
                        <v-icon size="small" color="success">mdi-fast-forward</v-icon>
                    </v-btn>
                  </v-col>
                  
                  <v-col cols="4" align="end">
                    Showing {{ page }} - {{ itemsPerPage }} of {{ store.attendanceItems.length }}
                  </v-col>
                </v-row>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
import { store } from '../../store'
  
  const currentPage = ref(1)
  const itemsPerPageData = ref(10)
  const headers = [
    { title: 'TITILE', align: 'start', sortable: false },
    { title: 'MESSAGE', align: 'start', sortable: false },
    { title: 'SENT BY', align: 'start', sortable: false },
    { title: 'SENT THROUGH', align: 'start', sortable: false },
    { title: 'DATE CREATED', align: 'start', sortable: false },
    { title: 'START DATE', align: 'start', sortable: false },
    { title: 'END DATE', align: 'start', sortable: false },
  ]
  
  
  </script>
  
  <style scoped>
  .overrideItemPerPage {
    position: absolute;
    width: auto !important;
    bottom: 6px;
    left: 125px;
  }
  
  .overrideCurrentPage {
    position: absolute;
    width: 45px !important;
    bottom: 6px;
    margin-left: 100px;
  }
  </style>