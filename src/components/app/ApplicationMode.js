export const MONITOR = {
    name: 'app.monitor',
    title: 'Watch'
};

export const TOP_POLLUTANTS = {
    name: 'app.topPollutants',
    title: 'Top 7'
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

    static isMonitor(applicationMode) {
        return JSON.stringify(MONITOR) === JSON.stringify(applicationMode);
    }

    static isTopPollutants(applicationMode) {
        return JSON.stringify(TOP_POLLUTANTS) === JSON.stringify(applicationMode);
    }
}

export default ApplicationMode;