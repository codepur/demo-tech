import dynamic from "next/dynamic";
import Layout from "../components/common/mainHeaderFooterLayout";
const Started = dynamic(
    () => import("../components/Started"),
);

export default function GetStarted() {
    return (
        <>
        <Layout/>
        <Started/>
        </>
    );
}
