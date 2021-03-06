import { initNativeApi, handleSyncApis, transformMeta, modifyAsyncResult, request } from './apis';
export { initNativeApi, handleSyncApis, transformMeta, modifyAsyncResult, request };
export * from './components';
export * from './apis-list';
export declare const hostConfig: {
    initNativeApi: typeof initNativeApi;
    getEventCenter(Events: any): any;
    modifyTaroEvent(event: any, node: any): void;
    isBubbleEvents(eventName: any): boolean;
};
