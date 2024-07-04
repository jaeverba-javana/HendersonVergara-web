import type {RouteRecordRaw} from "vue-router";

export const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomeLayout',
        component: () => import('@/Layouts/GeneralLayout.vue'),
    //     beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    //         if (isAuth) next() else next('/other/route')
    //     }
        meta: {
            title: "Home",
            meta: [
                {
                    name: "description",
                    content: "esta es mi breve description"
                }
            ]
        }
    }
]