export const MONITOR = {
    name: 'app.monitor',
    title: 'monitor'
};

export const TOP_POLLUTANTS = {
    name: 'app.topPollutants',
    title: 'top pollutants'
};

class ApplicationMode {
    static dispatch(applicationMode) {
        console.log(applicationMode)
        switch (applicationMode) {
            case MONITOR:
                return TOP_POLLUTANTS;
            case TOP_POLLUTANTS:
                return MONITOR;
            default:
                return MONITOR;
        }
    }
}

export default ApplicationMode;