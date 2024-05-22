// store.js
import { reactive } from 'vue'

export const store = reactive({
  attendanceItems: [
    {
      name: 'Aguas, Ivy',
      number: 1234,
      date: '03/16/2022',
      time: '01:34 PM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Mondragon, Sya',
      number: 5678,
      date: '03/16/2022',
      time: '03:48 AM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Penduko, Pedro',
      number: 9012,
      date: '03/16/2022',
      time: '04:02 AM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Powers, Amor',
      number: 7890,
      date: '03/16/2022',
      time: '12:01 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Bartolome, Kuma',
      number: 3456,
      date: '03/16/2022',
      time: '08:20 PM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Davis, Mara',
      number: 1230,
      date: '03/16/2022',
      time: '01:55 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Buenavista, Makati',
      number: 4567,
      date: '03/16/2022',
      time: '05:51 AM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Santos, Ninyo',
      number: 8901,
      date: '03/16/2022',
      time: '06:41 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Dimaguiba, Cardo',
      number: 2345,
      date: '03/16/2022',
      time: '12:23 AM',
      action: 'IN',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Del Valle, Clara',
      number: 4201,
      date: '03/16/2022',
      time: '10:41 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
    {
      name: 'Maginoo, Ako',
      number: 8901,
      date: '03/16/2022',
      time: '06:41 PM',
      action: 'OUT',
      logDetail: 'APP',
      location: '-',
      projectName: 'Notification...'
    },
  ],
  filter: {
    from: "",
    to: "",
    company: "Mcdollibee",
    department: "",
    location: "",
    employee: ""
  },

  
  announcementItems: [
    {
      title: '[FOR YOUR ACTION]',
      message: 'In line with the inc...',
      sentBy: 'Roe, Ken',
      sentThrough: '',
      dateCreated: '02/17/2022',
      startDate: '02/18/2022',
      startTime: '9:30 AM',
      endDate: '02/22/2022',
      endTime: '7:30 PM'
    },
    {
      title: 'Annual Physical E...',
      message: 'In compliance with...',
      sentBy: 'Roe, Ken',
      sentThrough: '',
      dateCreated: '02/17/2022',
      startDate: '02/18/2022',
      startTime: '9:30 AM',
      endDate: '02/22/2022',
      endTime: '7:30 PM'
    },
    {
      title: 'Mid-Autumn Festi...',
      message: 'We wish everyone a...',
      sentBy: 'Doe, Jane',
      sentThrough: '',
      dateCreated: '02/17/2022',
      startDate: '02/18/2022',
      startTime: '9:30 AM',
      endDate: '02/22/2022',
      endTime: '7:30 PM'
    },
    {
      title: '50th General Assembly',
      message: 'Expelliarmus! Chec...',
      sentBy: 'Doe, Jane',
      sentThrough: '',
      dateCreated: '02/17/2022',
      startDate: '02/18/2022',
      startTime: '9:30 AM',
      endDate: '02/22/2022',
      endTime: '7:30 PM'
    }
  ],
})