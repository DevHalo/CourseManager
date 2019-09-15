import Store from 'electron-store';

// The default schema if there is no userdata
const schema = {
    resX: {
        type: 'integer',
        default: 1366,
    },
    resY: {
        type: 'integer',
        default: 768,
    },
    firstStart: {
        type: 'boolean',
        default: true,
    },
    university: {
        type: 'string',
        default: 'York University',
    },
    startMaximized: {
        type: 'boolean',
        default: true,
    },
};

let store;

const IO = {
    LoadUserData() {
        console.log('Loading User Settings...');
        try {
            store = new Store({ schema });
        } catch (e) {
            console.log(`ERROR: ${e}`);
        }
        console.log('Done.');
        return store;
    },

    SaveUserData() {


    },
};

export default IO;
