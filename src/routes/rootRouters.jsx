import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

import MainLayout from "../reusable/Layout";
import Home from "../pages/Home";
import Games from "../pages/Games";
import HowItWorks from "../pages/HowItWorks";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import PersonalInformation from "../pages/PersonalInformation";
import MyData from "../pages/MyData";
import EnterKey from "../pages/EnterKey";
import Support from "../pages/Support";
import Statistics from "../pages/Statistics";
import WriteTestimonials from "../pages/WriteTestimonials";
import RewardProgram from "../pages/RewardProgram";
import ShareLink from "../pages/ShareLink";
import Reccurence from "../pages/Reccurence";
import Affiliate from "../pages/Affiliate";
import Exit from "../pages/Exit";

const arrPathsAndComponents = [
    {
        path: `/`,
        element: <Home />,
    },
    {
        path: `/games`,
        element: <Games />,
    },
    {
        path: `/how_it_works`,
        element: <HowItWorks />,
    },
    {
        path: `/pricing`,
        element: <Pricing />,
    },
    {
        path: `/faq`,
        element: <FAQ />,
    },
    { path: `/error`, element: <ErrorPage /> },
    { path: `/myData`, element: <MyData /> },
    { path: `/enterKey`, element: <EnterKey /> },
    { path: `/personalInformation`, element: <PersonalInformation /> },
    { path: `/rewardProgram`, element: <RewardProgram /> },
    { path: `/writeTestimonials`, element: <WriteTestimonials /> },
    { path: `/affiliate`, element: <Affiliate /> },
    { path: `/statistics`, element: <Statistics /> },
    { path: `/support`, element: <Support /> },
    { path: `/reccurence`, element: <Reccurence /> },
    { path: `/shareLink`, element: <ShareLink /> },
    { path: `/exit`, element: <Exit /> },
];

export const routers = createBrowserRouter(
    arrPathsAndComponents.map((el) => ({
        path: el.path,
        element: <MainLayout>{el.element}</MainLayout>,
        errorElement: <ErrorPage />,
    }))
);
