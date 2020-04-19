import {ReactLeafletSearch}  from "react-leaflet-search";
import {withLeaflet} from "react-leaflet";

class LeafletSearchHandler extends ReactLeafletSearch {

    latLngHandler(latLng, info, raw) {
        const caller = this.props.caller;
        super.latLngHandler(latLng, info, raw);
        caller.props.latLngHandler(latLng, info);
    }
}
export default withLeaflet(LeafletSearchHandler)