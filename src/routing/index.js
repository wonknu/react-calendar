import { Calendar, Events } from '../pages/index';

const routes = [
  {
    component: Events,
    path: "/events/:date",
    key: 'events'
  },
  {
    component: Calendar,
    path: "/",
    key: 'calendar'
  }
];

export default routes;
