export var Global = {
    APP_NAME: 'Illusion Dental',
    tutorial: true,
    color: { primary: 'D5232F' },
    AppVersion: '0.0.12',
    support: {
        landline: '+91-22-61366301',
        mobile: '+91-8879522544',
        email: 'labtech@illusiondentallab.com',
        address: '402, Akruti Arcade J. P. Road,Opp. A. H. Wadia School, Near Andheri Sport Complex, Andheri (W), Mumbai- 400053.',
    },
    OneSignal: {
        key: '4e6dcad0-792d-4897-b4cb-1a7a40540d14',
        android: '7402421237',
    },
    Push:{
        OneSignal: false,
        FCM: true,
    },
    Rate: {
        show: false,
        ios: '',
        android: ''
    },
    APP_URL: {
        android: 'https://play.google.com/store/apps/details?id=com.com.illusiondental.app',
        ios: 'https://itunes.apple.com/us/app/illusion-dental/id1307823684?mt=8'
    },
    SERVER_URL: 'https://mobileapi.illusiondentallab.com/api/',
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
