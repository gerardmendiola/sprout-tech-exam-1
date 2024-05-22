<template>
    <v-row class="pa-5">
      <v-col cols="12" class="pa-4">
        <v-icon class="mr-2" color="success">mdi-calendar-clock-outline</v-icon>
        <span class="text-body-1 font-weight-bold">Mar 01, 2022 - Mar 16, 2022</span>
        <!-- <span>{{ store.filter.from }} - {{ store.filter.to }}</span> -->
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-data-table
              :page="currentPage"
              :headers="headers"
              :items="store.attendanceItems"
              :items-per-page="itemsPerPageData">
  
              <template v-slot:item="{ item }">
                <tr>
                  <td>
                    <div>{{ item.name }}</div>
                    <div class="text-grey text-caption">{{ item.number }}</div>
                  </td>
                  <td>
                    {{ item.date }}
                  </td>
                  <td>
                    {{ item.time }}
                  </td>
                  <td :class="`font-weight-bold ${item.action == 'IN' ? 'text-blue' : 'text-orange'}`">
                    {{ item.action }}
                  </td>
                  <td>
                    <v-chip size="small">{{ item.logDetail }}</v-chip>
                  </td>
                  <td>
                    <div>{{ item.location }}</div>
                    <div class="text-grey text-caption font-italic">Notes</div>
                  </td>
                  <td>
                    <v-row no-gutters>
                      <v-col cols="10">
                        <div>{{ item.projectName }}</div>
                        <div class="text-grey text-caption">NS</div>
                      </v-col>
                      <v-col cols="2" align="end">
                        <v-icon color="success">mdi-square-edit-outline</v-icon>
                      </v-col>
                    </v-row>
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
    { title: 'NAME', align: 'start', sortable: false },
    { title: 'DATE', align: 'start', sortable: false },
    { title: 'TIME', align: 'start', sortable: false },
    { title: 'IN/OUT', align: 'start', sortable: false },
    { title: 'LOG DETAILS', align: 'start', sortable: false },
    { title: 'LOCATION', align: 'start', sortable: false },
    { title: 'PROJECT NAME', align: 'start', sortable: false },
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