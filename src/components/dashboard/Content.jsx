import { Route, Routes } from 'react-router-dom';
import { Channels } from '../channels/Channel';

export const Content = ({ channels, getChannels }) => {
    return (
        <div className='content-container'>
            <Routes>
                <Route path='channels' element={<Channels channels={channels}/>}/>
            </Routes>
        </div>
    )
}