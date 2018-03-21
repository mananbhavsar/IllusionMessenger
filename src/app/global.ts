export var Global = {
    APP_NAME: 'Illusion Messenger',
    album: 'Illusion Messenger',
    tutorial: false,
    color: {
        primary: 'D5232F',
        secondary: '32db64',
        danger: 'f53d3d',
        light: 'f4f4f4',
        dark: '222',
        dashboard: '4ECDC4',
        pickup: '2574A9',
        casestatus: '87D37C',
        communication: '00B16A',
        invoice: '673AB7',
        payments: '009688'
    },
    AppVersion: '0.3.0',
    support: {
        landline: '+91-22-61366301',
        pick_up: '+91-22-61366301',
        case_status: '+91-22-61366366',
        mobile: '+91-8879522544',
        email: 'labtech@illusiondentallab.com',
        address: '402, Akruti Arcade J. P. Road,Opp. A. H. Wadia School, Near Andheri Sport Complex, Andheri (W), Mumbai- 400053.',
    },
    OneSignal: {
        key: '88b19d42-ea0e-4fa7-b35a-cf754a5ce4aa',
        android: '4208850060',
    },
    Push: {
        FCM: false,
        OneSignal: true,
    },
    Translate: {
        key: 'AIzaSyD8Kth_6jW-ayGIN92VGGYR4KTW02hXX-s',
    },
    Rate: {
        show: false,
        ios: '',
        android: ''
    },
    APP_URL: {
        android: 'https://play.google.com/store/apps/details?id=com.illusionmessenger.app',
        ios: 'https://itunes.apple.com/us/app/illusion-messenger/id1347861725?ls=1&mt=8'
    },
    SERVER_URL: 'http://43.241.39.17/Labguru_Mobile_UAT/api/',
    // SERVER_URL: 'https://mobileapi.illusiondentallab.com/api/',
    CDN: 'https://d3nwpy9993ruf3.cloudfront.net/',

    getActiveComponentName(component) {
        if (component) {
            let tag: string = component.pageRef().nativeElement.tagName;
            return this.toCamelCase(tag.replace('PAGE-', '')) + 'Page';
        }
        return null;
    },

    toCamelCase(str) {
        // Lower cases the string
        return this.toUpperCaseFirst(str.toLowerCase()
            // Replaces any - or _ characters with a space 
            .replace(/[-_]+/g, ' ')
            // Removes any non alphanumeric characters 
            .replace(/[^\w\s]/g, '')
            // Uppercases the first character in each group immediately following a space 
            // (delimited by spaces) 
            .replace(/ (.)/g, function ($1) { return $1.toUpperCase(); })
            // Removes spaces 
            .replace(/ /g, ''));
    },

    toUpperCaseFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }
    // <meta-data android:name="com.onesignal.BadgeCount" android:value="DISABLE" />
}
