import FeatureSection from "../../components/featureSection"
import {data} from "./featureDevData"
import { featureData } from "./featureDevData"

const FeatureDev = () =>{
    return(
        <FeatureSection
        featureHeading={data.featureHeading}
        featureDescription={data.featureDescription}
        featureText={data.featureText}
        featureData={featureData}
        />
    )
}

export default FeatureDev