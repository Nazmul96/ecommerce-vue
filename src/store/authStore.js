import { ref, reactive } from 'vue'
import router from '../router/index'

const authStore = reactive({
    authenticate(username, password) {
        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: username, password:password })
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.error == 0) {
                    console.log(res);
                    authStore.isAuthenticated = true
                    authStore.user = res
                    localStorage.setItem('auth', 1)
                    localStorage.setItem('user', JSON.stringify(res))
                    router.push('/')
                    console.log('33');
                }
        })
    }
});

export { authStore }