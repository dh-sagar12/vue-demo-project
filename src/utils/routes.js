import { createRouter, createWebHashHistory } from 'vue-router'
import PageViewer from '../pages/PageViewer.vue'
import PageForm from '../pages/PageForm.vue'
import Page from '../pages/Page.vue'
import ShowPages from '../pages/ShowPages.vue'
import EditPage from '../pages/EditPage.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:index?',
            component: PageViewer,
            props: true
        },
        {
            path: '/pages',
            component: Page,
            children: [
                {
                    path: 'create',
                    component: PageForm
                },
                {
                    path: '',
                    component: ShowPages
                },
                {
                    path: ':index/edit',
                    component: EditPage,
                    props: true
                }
            ]
        }

    ]
})

export default router