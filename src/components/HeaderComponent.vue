<template>
    <!-- 여기에 HTML 템플릿(화면에 보이는 부분)을 작성합니다 -->
    헤더 화면 입니다..
    <v-app-bar app dark>
        <v-container>
            <v-row align="center">
                <v-col class="d-flex justify-end">
                    <v-btn v-if="!isLogin" :to="{ path: '/member/create' }">회원가입</v-btn>
                    <v-btn v-if="!isLogin" :to="{ path: '/member/login' }">로그인</v-btn>
                    <v-btn v-if="isLogin" @click="doLogout()">로그아웃</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
// export default는 이 컴포넌트를 다른 곳에서 import해서 사용할 수 있게 해줍니다.
export default {
    // 컴포넌트의 옵션(data, methods, props 등)이 들어갑니다.
    data() {
        return {
            isLogin: false,
        };
    },
    // created() 함수는 화면이 열리자마자 실행되는 함수이다. -> 이런걸 훅 함수라고 한다.
    created() {
        if (localStorage.getItem("token")) {
            this.isLogin = true;
        }
    },
    // methods 안에서는 우리가 직접 사용할 함수들을 정의한다.
    methods: {
        doLogout() {
            localStorage.clear();
            window.location.reload();
        },
    },
};
</script>
