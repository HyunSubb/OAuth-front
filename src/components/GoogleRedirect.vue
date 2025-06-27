<template>
    <div>구글 로그인 진행중...</div>
</template>

<script>
import axios from "axios";

export default {
    created() {
        // 인가 코드를 꺼내면 이제 서버쪽으로 넘겨줘야 한다.
        const code = new URL(window.location.href).searchParams.get("code");
        console.log(code);
        this.sendCodeToServer(code);
    },
    methods: {
        async sendCodeToServer(code) {
            // 서버로 인가 코드를 넘겨줄 건데 응답으로 받는 것은 JWT를 받는다.
            const response = await axios.post("http://localhost:8080/member/google/doLogin", { code });
            const token = response.data.token;
            localStorage.setItem("token", token);
            window.location.href = "/";
        },
    },
};
</script>
