import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./e2e',timeout:90000,use:{baseURL:process.env.TEST_URL??'http://localhost:3000',viewport:{width:1440,height:1000},launchOptions:{args:['--enable-unsafe-swiftshader']}},workers:1,reporter:'list'});
