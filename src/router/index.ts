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
            title: "Henderson Vergara Fotógrafo de bodas en Santa Marta Colombia",
            meta: [
                {
                    name: "description",
                    content: "Henderson Vergara, fotógrafo en Santa Marta, Colombia, especializado en bodas en la playa. Servicios de fotografía y video profesional. Contacta hoy."
                }
            ],
            link: [
                {
                    rel: "canonical",
                    href: "https://hendersonvergara.com/"
                }
            ]
        }
    }
]