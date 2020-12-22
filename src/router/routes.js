
const routes = [
    {
        path: '/',
        component: () => import('layouts/MyLayout.vue'),
        children: [
            { path: '', component: () => import('pages/Index.vue') },
            { path: 'Index', component: () => import('pages/Index.vue') },
            { path: 'Serial', component: () => import('pages/Serial.vue') }
        ]
    }
]

// Always leave this as last one
routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
})

export default routes
