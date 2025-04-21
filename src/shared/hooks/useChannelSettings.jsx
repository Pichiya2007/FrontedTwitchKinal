import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getChannelsSettings, updateChannelSettings } from '../../services';

export const useChannelSettings = () => {

    const [channelSettings, setChannelSettings] = useState();

    const fetchChannelSettings = async () => {

        const response = await getChannelsSettings();

        if (response.error) {
            return toast.error (
                response.e?.response?.data || 'Error getting channel information'
            )
        }
        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            streamKey: response.data.streamKey
        })

    }

    const saveSettings = async (data) => {
        
        const response = await updateChannelSettings(data)

        if (response.error) {
            return toast.error (
                response.e?.response?.data || 'Error updating channel information'
            )
        }
        toast.success('Correctly updated information')

    }

    useEffect(() => {
        fetchChannelSettings()
    }, [])

    return {
        isFetching: !channelSettings,
        channelSettings,
        saveSettings
    }

}