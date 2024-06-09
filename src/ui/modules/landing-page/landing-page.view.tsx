import { CallToActionView } from "@/ui/design-system/call-to-action.view/call-to-action.view";
import { CurrentCourseView } from "./component/current-course/current-course.view";
import { FeaturedView } from "./component/featured/featured.view";
import { HeroTopView } from "./component/hero-top/hero-top.view";
import { HighlightListView } from "./component/highlight-list/highlight-list.view";
import { SlackView } from "./component/slack/slack.view";

export const LandingPageView = () =>{
    return <>
        <HeroTopView/>
        <FeaturedView/>
        <SlackView/>
        <CurrentCourseView/>
        <HighlightListView/>
        <CallToActionView/>
    </>;
}