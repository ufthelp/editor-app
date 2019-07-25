import React, {memo} from 'react';
import Tabs from '../Tabs';
import  './RightPanel.scss';


const RightPanel = () => (
    <div className="rightPanelCta">
        <div className="tab">
            <Tabs>
                <div header="Index.jsx">
                    You are on Index.jsx file
                </div>
                <div header="Panel.jsx">
                    You are on Panel.jsx file
                </div>
            </Tabs>
        </div>
    </div>
);

export default memo(RightPanel);
