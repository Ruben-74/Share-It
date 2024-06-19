import { CallToActionView } from "@/ui/design-system/call-to-action.view/call-to-action.view";
import { CurrentCourseView } from "./current-course/current-course.view";
import { FeaturedView } from "./featured/featured.view";
import { HeroTopView } from "./hero-top/hero-top.view";
import { HighlightListView } from "./highlight-list/highlight-list.view";
import { SlackView } from "./slack/slack.view";

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