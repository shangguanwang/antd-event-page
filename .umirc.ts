import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Swoovy',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Events',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Settings',
      path: '/access',
      component: './Access',
    },
  ],
  npmClient: 'npm',
});

