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
            title: "HV Producciones",
            meta: [
                {
                    name: "description",
                    content: "Henderson Vergara, fotógrafo profesional en Santa Marta, Colombia, especializado en bodas en la playa. Capturamos momentos memorables con servicios de fotografía y video de alta calidad. Documentamos cada detalle de tus eventos especiales, creando recuerdos eternos. Contacta a Henderson Vergara Producciones para un servicio personalizado y profesional que superará tus expectativas."
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