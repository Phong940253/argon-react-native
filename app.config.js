import "dotenv/config";

export default {
    expo: {
        name: "Argon FREE React Native",
        slug: "argon-free-react-native",
        privacy: "public",
        platforms: ["ios", "android"],
        version: "1.7.1",
        orientation: "portrait",
        icon: "./assets/icon.png",
        splash: {
            image: "./assets/splash.png",
            resizeMode: "cover",
            backgroundColor: "#ffffff",
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ["**/*"],
        ios: {
            supportsTablet: true,
        },
        extra: {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID,

            androidGoogleKey: process.env.CLIENT_ANDROID_ID,
            iosGoogleKey: process.env.CLIENT_IOS_ID,
        },
    },
};
