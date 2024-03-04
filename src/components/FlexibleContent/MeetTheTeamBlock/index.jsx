"use client";
import React from "react";
import { HTMLRender } from "@/components/helpers/htmlRender";
import { InView } from "react-intersection-observer";
import { v4 } from "uuid";
import TeamMemberBlock from "./TeamMemberBlock";
import HTag from "@/components/helpers/hTag";

import "./style.scss";

const MeetTheTeamBlock = ({ blockData }) => {
    return (
        <>
            <div className="meet-the-team-block">
                <div className="meet-the-team-block__container">
                    <div className="meet-the-team-block__team-grid">
                        <InView key={v4()} threshold="0.25" triggerOnce="true">
                            {({ inView, ref }) => (
                                <div className="meet-team-title" ref={ref}>
                                    <HTag type={blockData.titleType} className={`title-one toZoomIn ${inView ? "zoomIn" : ""}`}>
                                        <HTMLRender data={blockData.title} />
                                    </HTag>
                                </div>
                            )}
                        </InView>
                        {blockData.teamMembers.map((teamMember) => {
                            return (
                                <div className="team-item" key={v4()}>
                                    <TeamMemberBlock teamMember={teamMember} popUps={blockData.showPopups} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MeetTheTeamBlock;
