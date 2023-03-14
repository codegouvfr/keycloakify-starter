import {ComponentMeta} from '@storybook/react';
import KcApp from '../KcApp';
import {template} from '../../../.storybook/util'

export default {
    kind: 'Page',
    title: 'Theme/Pages/Login/Configure TOTP',
    component: KcApp,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof KcApp>;

const bind = template('login-config-totp.ftl');

export const Default = bind({})

export const WithManualSetUp = bind({mode: 'manual'})
export const WithError = bind({
    messagesPerField: {
        get: (fieldName: string) => fieldName === 'totp' ? 'Invalid TOTP' : undefined,
        exists: (fieldName: string) => fieldName === 'totp',
        existsError: (fieldName: string) => fieldName === 'totp',
        printIfExists: <T, >(fieldName: string, x: T) => fieldName === 'totp' ? x : undefined
    }
})
