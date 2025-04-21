import { useChannelSettings } from '../../shared/hooks/useChannelSettings';
import { ChannelSettings } from '../channels/ChannelSettings';
import { LoadingSpinner } from '../LoadingSpinner';
import { StreamKey } from './StreamKeys';
import { PasswordSettings } from './PasswordSettings';

export const Settings = () => {

    const { channelSettings, isFetching, saveSettings } = useChannelSettings()

    if (isFetching) {
        return <LoadingSpinner/>
    }

    return (
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={ channelSettings } saveSettings={ saveSettings }/>
            <PasswordSettings/>
            <StreamKey streamKey={channelSettings.streamKey}/>
        </div>
    )

}