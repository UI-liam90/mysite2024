"use client";
import React, { useState, useRef } from "react";
import { InView } from "react-intersection-observer";
import { WpImage } from "~helpers/WpImage";
import { v4 } from "uuid";
import SocialMenu from "~components/SocialMenu";
import { HTMLRender } from "~helpers/htmlRender";

const TeamMemberBlock = ({ teamMember, popUps }) => {
    const [modalStatus, setModalStatus] = useState("closed");
    const modalRef = useRef(null);

    const toggleModal = () => {
        let currentModalStatus = modalStatus;
        let modal = modalRef.current;
        if (currentModalStatus === "closed") {
            setModalStatus("open");
            modal.showModal();
        } else {
            setModalStatus("closed");
            modal.close();
        }
    };
    return (
        <>
            <InView threshold="0.25" triggerOnce="true">
                {({ inView, ref }) => (
                    <div className={`team-member-block-container toZoomIn ${inView ? "zoomIn" : ""}`}>
                        {popUps === "yes" ? (
                            <div
                                role="button"
                                tabIndex={0}
                                className={`team-member-block team-member-block--popups`}
                                aria-label={`Read More About ${teamMember.name}`}
                                ref={ref}
                                style={{ backgroundColor: teamMember.backgroundColour }}
                                onClick={() => toggleModal()}
                                onKeyDown={() => toggleModal()}
                            >
                                <WpImage file={teamMember.image} />
                            </div>
                        ) : (
                            <div className={`team-member-block`} ref={ref} style={{ backgroundColor: teamMember.backgroundColour }}>
                                <WpImage file={teamMember.image} />
                            </div>
                        )}
                    </div>
                )}
            </InView>
            {popUps === "yes" && (
                <dialog ref={modalRef} className={`modal modal--text-${teamMember.textColour}`}>
                    <div className="modal-wrapper">
                        <button className="modal-close" onClick={() => toggleModal()}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                            </svg>
                        </button>
                        <div className="modal-wrapper__image">
                            <WpImage file={teamMember.image} />
                            <h4>{teamMember.name}</h4>
                            {teamMember.socialMedia && <SocialMenu socialData={teamMember.socialMedia} className="social-media-menu__team" />}
                            {teamMember.superPowers && (
                                <ul className="super-skills">
                                    {teamMember.superPowers.map((superPower) => {
                                        return (
                                            <li key={v4()}>
                                                {superPower.title} - {superPower.text}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                        <div className="modal-wrapper__content">
                            <div className="bio">
                                <HTMLRender data={teamMember.bio} />
                            </div>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
};

export default TeamMemberBlock;
