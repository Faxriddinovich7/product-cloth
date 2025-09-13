import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '../pages/todoList.vue';
import Lock from '../pages/Lock.vue';
import AddNow from "../pages/addNow.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Lock,
    },
    {
        path: '/todo',
        name: 'Todo',
        component: TodoList,
    },
    {
        path: '/addNow',
        name: 'AddNow',
        component: AddNow,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});




export default router;
