    import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";

    import { getAuth } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "SUA_API_KEY_REAL",
        authDomain: "SEU_AUTH_DOMAIN",
        projectId: "SEU_PROJECT_ID",
        storageBucket: "SEU_STORAGE_BUCKET",
        messagingSenderId: "SEU_MESSAGING_SENDER_ID",
        appId: "SEU_APP_ID"
    };

    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);

    // Inicializar autenticação
    export const auth = getAuth(app);

    export default app;