export const MONITOR = {
    name: 'app.monitor',
    title: 'Monitor'
};

export const TOP_POLLUTANTS = {
    name: 'app.topPollutants',
    title: 'Top pollutants'
};

class ApplicationMode {
    static dispatch(applicationMode) {
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