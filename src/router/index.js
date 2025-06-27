// index.js에서는 /memberCreate로 url이 들어오면 어떤 화면으로 라우팅하고
// 또 /memberLogin url이 들어오면 어떤 화면으로 라우팅하는 url 패턴에 따라서 화면을 라우팅 해주는 코드를 여기다가 만들거다.

import GoogleRedirect from "@/components/GoogleRedirect.vue";
import MemberCreate from "@/components/MemberCreate.vue";
import MemberLogin from "@/components/MemberLogin.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/member/create",
        component: MemberCreate,
    },

    {
        path: "/member/login",
        component: MemberLogin,
    },

    {
        path: "/oauth/google/redirect",
        component: GoogleRedirect,
    },
];

// createRouter라는 건 위에서 정의한 route를 router로 사용하겠다. 이 프로젝트 전체에 url 패턴으로 등록하겠다 라고 보면 된다.
// history는 url 패턴들이 있음. #을 붙인다거나 #을 안 붙인다거나 이런 url 패턴들이 있는데 아주 기본적인 url 형식이라고 지정해주는 거임.
// WebHistory는 localhost:3000/member/create 이런식으로 아주 기본적인 웹 url 형식인데, 다른 history를 사용한다고 하면
// localhost:3000/#/member/create 이렇게 독특한 패턴으로 진행됨.
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 다른곳에서 사용이 가능하도록 export default 설정
export default router;
