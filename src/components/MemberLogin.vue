<template>
    <!-- 여기에 HTML 템플릿(화면에 보이는 부분)을 작성합니다 -->
    로그인 화면입니다..
    <v-container>
        <v-row justify="center">
            <v-col md="4">
                <v-card>
                    <v-card-title class="text-h5 text-center"> 로그인 </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="email" v-model="email"> </v-text-field>
                            <v-text-field label="password" v-model="password" type="password"> </v-text-field>
                            <v-btn type="button" color="primary" block @click="memberLogin()">로그인</v-btn>
                        </v-form>
                        <br />
                        <v-row>
                            <v-col cols="6" class="d-flex justify-center">
                                <img src="@/assets/Google_Login.png" style="max-height: 40px; width: auto" @click="googleLogin()" />
                            </v-col>
                            <v-col cols="6" class="d-flex justify-center">
                                <img src="@/assets/Kakao_Login.png" style="max-height: 40px; width: auto" @click="kakaoLogin()" />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";

// export default는 이 컴포넌트를 다른 곳에서 import해서 사용할 수 있게 해줍니다.
export default {
    // 컴포넌트의 옵션(data, methods, props 등)이 들어갑니다.
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async memberLogin() {
            const loginData = {
                email: this.email,
                password: this.password,
            };

            const response = await axios.post("http://localhost:8080/member/doLogin", loginData);
            // response는 내부에 data가 있는데 거기에서 내용들을 확인한다.
            const token = response.data.token;
            localStorage.setItem("token", token);
            window.location.href = "/";
        },

        googleLogin() {},
        kakaoLogin() {},
    },
};
</script>
