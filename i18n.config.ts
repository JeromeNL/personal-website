export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            hello: 'Hello!',
            iam: 'I am Joram Kwetters',
            role: 'Student Informatics (Software Engineering)',
            email: 'Send an E-mail'
        },
        de: {
            welcome: 'Wilkommen',
            hello: 'Grüezi!',
            iam: 'Ich bin Joram Kwetters',
            role: 'Student Informatik (Software Entwicklung)',
            email: 'Schicke eine E-Mail'
        },
        nl: {
            welcome: 'Welkom',
            hello: 'Hallo!',
            iam: 'Ik ben Joram Kwetters',
            role: 'Student Informatica (Software Ontwikkeling)',
            email: 'Stuur een E-mail'
        }
    }
}))