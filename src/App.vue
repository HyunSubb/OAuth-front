<template>
    <!-- APP.vue는 시작점이 되는 화면이다. -->
    <v-app>
        <!-- 헤더 컴포넌트가 무조건 상단에 위치하도록 -->
        <HeaderComponent />
        <v-main>
            <!-- 메인에는 라우팅 되는 화면을 놔두도록 설정 -->
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
    components: {
        HeaderComponent,
    },
};
</script>
