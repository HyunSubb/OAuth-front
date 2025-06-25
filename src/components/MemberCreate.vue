<template>
    <!-- 여기에 HTML 템플릿(화면에 보이는 부분)을 작성합니다 -->
    회원가입 화면입니다..
    <v-container>
        <v-row justify="center">
            <v-col md="6">
                <v-card>
                    <v-card-title class="text-h5 text-center"> 회원가입 </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="email" v-model="email"> </v-text-field>
                            <v-text-field label="password" v-model="password" type="password"> </v-text-field>
                            <v-btn type="button" color="primary" block @click="memberCreate()">등록</v-btn>
                        </v-form>
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
        async memberCreate() {
            const registerData = {
                email: this.email,
                password: this.password,
            };

            await axios.post("http://localhost:8080/member/create", registerData);
            window.location.href = "/";
        },
    },
};
</script>
