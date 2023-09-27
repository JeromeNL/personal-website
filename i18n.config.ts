export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            hello: 'Hello! I am Joram Kwetters',
        },
        de: {
            welcome: 'Wilkommen',
            hello: 'Grüezi! Ich bin Joram Kwetters'
        },
        nl: {
            welcome: 'Welkom',
            hello: 'Hallo! Ik ben Joram Kwetters'
        }
    }
}))