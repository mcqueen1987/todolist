import TaskPage from "./page/TaskPage";
import DetailPage from "./page/DetailPage";

export default [
    {
        path: '/',
        name: 'home',
        component: TaskPage
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: DetailPage
    },
    {
        path: "*",
        redirect: "/"
    }
];
