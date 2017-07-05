import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import './Video.css';

class VideoView extends Component {
    render() {
        return (
            <div>
                <Tabs className="videoTabs">
                    <p>{this.props.video.hltv}</p>
                    <div className="tabLinks">
                        {(() => {
                            return (
                                this.props.video.vods.games.map((vod, index) => {
                                    return (
                                        <TabLink to={vod.game} key={index}>Game Number {vod.game}</TabLink>
                                    );
                                })
                            );
                        })()}
                    </div>

                    {(() => {
                        return (
                            this.props.video.vods.urls.map((vod, index) => {
                                return (
                                    <TabContent for={vod.game} key={index} className="tabContent">
                                        <iframe title={vod.url} src={'https://www.youtube.com/embed/' + vod.url + '?rel=0&amp;showinfo=0'} frameBorder="0" allowFullScreen></iframe>
                                    </TabContent>
                                );
                            })
                        );
                    })()}
                </Tabs>
            </div>
        );
    }
}

export default VideoView;