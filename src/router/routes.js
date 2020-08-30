const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/scan', component: () => import('pages/Scan.vue') }
    ]
  }
]

export default routes
